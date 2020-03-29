<?php
/**
 * Created by Claudio Campos.
 * User: callcocam@gmail.com
 * https://www.sigasmart.com.br
 */
namespace App;

use App\Notifications\MyResetPassword;
use App\Suports\Form\Field\Facades\FCOVER;
use App\Suports\Form\Field\Facades\FDATE;
use App\Suports\Form\Field\Facades\FHIDDEN;
use App\Suports\Form\Field\Facades\FID;
use App\Suports\Form\Field\Facades\FMULTICHECKBOX;
use App\Suports\Form\Field\Facades\FRADIO;
use App\Suports\Form\Field\Facades\FSTATUS;
use App\Suports\Form\Field\Facades\FTEXT;
use App\Suports\Form\Field\Facades\FTQUILEDTOR;
use App\Suports\Form\Field\Facades\ROW;
use App\Suports\Form\Field\Facades\SECTION;
use App\Suports\Form\Field\Facades\TABS;
use App\Suports\Form\TraitForm;
use App\Suports\Shinobi\Concerns\HasRolesAndPermissions;
use App\Suports\Shinobi\Models\Permission;
use App\Suports\Shinobi\Models\Role;
use App\Suports\Show\TraitShow;
use App\Suports\Table\Columns\Facades\COVER;
use App\Suports\Table\Columns\Facades\HTML;
use App\Suports\Table\Columns\Facades\ID;
use App\Suports\Table\Columns\Facades\TEXT;
use Illuminate\Database\Query\Builder;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Arr;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable, HasRolesAndPermissions, TraitModel, TraitTable, TraitForm, TraitShow;

    public $incrementing = false;

    protected $keyType = "string";

    protected $appends = ['link'];
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name','slug','fantasy', 'email','phone','document','description', 'gender','birthday', 'status', 'password', 'is_admin',
    ];

    protected $casts = [
        'created_at'=>'date:d/m/Y',
        'updated_at'=>'date:d/m/Y',
    ];
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token','email_verified_at'
    ];

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        $this->setEndpoint();
        $this->defaultOptions['title'] = "Usuários";
        $this->headers = [
            ID::make('id')->hiddenList()->hiddenShow()->render(),
            TEXT::make('company_id')->hiddenList()->hiddenShow()->render(),
            COVER::make('cover')->width('100')->hiddenShow()->render(),
            TEXT::make('name')->format('link')->width('458')->icone('icon-type')->sortable()->filter()->render(),
            TEXT::make('email')->icone('icon-mail')->sortable()->filter()->render(),
            HTML::make('address')->hiddenList()->cellRendererFramework('CellRenderAddress')->render(),
            HTML::make('social_links')->hiddenList()->hiddenDetail()->render(),
            HTML::make('company_name')->hiddenList()->render(),
            HTML::make('groups')->hiddenList()->render(),
            HTML::make('permissions')->hiddenList()->cellRendererFramework('CellRenderObject')->format('object')->render(),
            HTML::make('roles')->hiddenList()->icone('icon-unlock')->cellRendererFramework('CellRenderObject')->render(),
        ];
    }

    public function address(){

        return $this->morphOne(Addres::class, 'addresable');
    }
    public function social_links(){

        return $this->morphOne(SocialLink::class, 'social_linkable');
    }

    public function getAddressAttribute(){

        return $this->address()->first(['zip','city','state','country', 'street','district','number','complement']);
    }
    public function getSocialLinksAttribute(){

        return $this->social_links()->first(['twitter','facebook','instagram','github','linkedin','codepen', 'slack','youtub','google','website']);
    }

    public function init()
    {
        //->select(["id",app('db')->raw('CONCAT(status," - ", name) AS full_name')])
        $this->actions->setActionsOptions(Role::query()->get()->toArray(),'id','name')
            ->setActionsFilter(request()->get('role_id'))
            ->setCellRendererFramework("InputRendererSelect")
            ->setLabel("Papel")
            //->setClass('md:w-1/6 sm:w-1/2')
            ->setName('role_id')
            ->setActionsRender();

        $this->getHeader('cover')->getCell()->addDecorator('callable', [
            'closure' => function ($context, $record) {
                return url($context);
            },
        ]);

        $this->getHeader('groups')->getCell()->addDecorator('callable', [
            'closure' => function ($context, $record) {
                $permissions = $this->permisionsGroups($record);

                if(isset($permissions[0])){
                    $permissions = $permissions[0];
                }
               return $permissions;
            },
        ]);
    }

    /**
     * @param $query
     */
    public function initFilter( $query)
    {
        if(request()->has('role_id')){
            if(request()->get('role_id')){
                $query->whereIn('id',function($sub_query){
                    $sub_query->select('user_id')->from('role_user')->where('role_id',request()->get('role_id'));
                });
            }
        }
    }

    public function sendPasswordResetNotification($token)
    {
        $this->notify(new MyResetPassword($token));
    }

    // Rest omitted for brevity

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }


    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    public function tag()
    {
        return $this->belongsTo(Tag::class);
    }
    public function posts()
    {
        return $this->hasMany(Post::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }


    /**
     * @param TraitModel $model
     * @return mixed
     */
    public function initForm($model)
    {

        $model->append('social_links');

        $this->openForm($model);

        //###################### GENERAL #############################
        $this->add(FCOVER::make('cover')->setSelected($model)->label('Cover'));

        $this->add(FID::make('id'));

        $this->add(FID::make('slug'));

        $this->add(FTEXT::make('fantasy')->label('Username')->coll(2));

        $this->add(FSTATUS::make('status')->coll(2));

        $this->add(FTEXT::make('name')->coll(2));

        $this->add(FTEXT::make('email')->coll(2));

        $this->add(FTEXT::make('phone')->coll(2));

        $this->add(FTEXT::make('company_name')->coll(2)->attribute('readonly',true));

        $this->add(FTQUILEDTOR::make('description'));

        if($this->newRecord){
           if (\Auth::user()->hasRole('super-admin')){
               $this->add(FMULTICHECKBOX::make('roles')
                   ->setSelected($this->getItemCheckBox($this->roles()->get()))
                   ->value_options($this->getItemsCheckBox(Role::query()->get())));
           }
        }
        $tabs[] = TABS::add(
            ROW::add(
                [
                    SECTION::add('SectionRenderFields',$this->getElements($model))
                ]
            )->actions($this->getTable())

        )->setLabel('Setting')->render();
        //###################### FIN GENERAL #############################
        if($this->newRecord) {
            //###################### INFORMATION #############################
            $this->data['post_id'] = $this->data['id'];

            $this->add(FTEXT::make('document'));

            $this->add(FRADIO::make('gender')->value_options([
                'male'=>'Male',
                'female'=>'Male',
                'all'=>'Not Infomtion'
            ]));
            $this->add(FID::make('id'));

            $this->add(FID::make('slug'));
            $this->add(FHIDDEN::make('email'));
            $this->add(FHIDDEN::make('name'));
            $this->add(FHIDDEN::make('fantasy'));
            $this->add(FDATE::make('birthday'));

            $this->add(FTEXT::make('created_at')->attribute('readonly', true));

            $this->add(FTEXT::make('updated_at')->attribute('readonly', true));

            $tabs[] = TABS::add(
                ROW::add(
                    [
                        SECTION::add('SectionRenderFields', $this->getElements($model))
                    ]
                )->actions($this->getTable())
            )->setLabel('Inormation')->setIcon('icon-settings')->render();
            //###################### FIM INFORMATION #############################

            //###################### SOCIAL LINKS #############################

            $this->add(FID::make('post_id'));

            $this->add(FTEXT::make('twitter')->attribute('placeholder','Ex: callcocam')->icon("icon-twitter"),'social_links');

            $this->add(FTEXT::make('facebook')->attribute('placeholder','Ex: callcocam')->icon("icon-facebook"),'social_links');

            $this->add(FTEXT::make('instagram')->attribute('placeholder','Ex: callcocam')->icon("icon-instagram"),'social_links');

            $this->add(FTEXT::make('github')->attribute('placeholder','Ex: callcocam')->icon("icon-github"),'social_links');

            $this->add(FTEXT::make('youtube')->attribute('placeholder','Ex: callcocam')->icon("icon-youtube"),'social_links');

            $this->add(FTEXT::make('linkedin')->attribute('placeholder','Ex: callcocam')->icon("icon-linkedin"),'social_links');

            $this->add(FTEXT::make('codepen')->attribute('placeholder','Ex: callcocam')->icon("icon-twitter"),'social_links');

            $this->add(FTEXT::make('slack')->attribute('placeholder','Ex: callcocam')->icon("icon-slack"),'social_links');

            $tabs[] = TABS::add(
                ROW::add(
                    [
                        SECTION::add('SectionRenderFields', $this->getElements($model)),
                    ]
                )->actions("social-link")
            )->setLabel('Social Links')->setIcon('icon-share-2')->render();
            //###################### FIM SOCIAL LINKS #############################

            //###################### NOTIFICATIONS #############################
            $tabs[] = TABS::add(
                ROW::add(
                    [
                        SECTION::add('SectionRenderFields', $this->getElements($model))
                    ]
                )->actions($this->getTable())
            )->setLabel('Notifications')->setIcon('icon-lock')->render();


            $this->add(FTEXT::make('email'));
            $this->add(FTEXT::make('old_password')->attribute('readonly', false));
            $this->add(FTEXT::make('password'));
            $this->add(FTEXT::make('password_confirmation'));

            $tabs[] = TABS::add(
                ROW::add(
                    [
                        SECTION::add('SectionRenderFields', $this->getElements($model))
                    ]
                )->actions($this->getTable())
            )->setLabel('Change Password')->setIcon('icon-lock')->render();

            //###################### FIM NOTIFICATIONS #############################
        }
        return [
            'rows'=> $tabs,
            'options'=>$this->defaultOptions
        ];
    }


    public function openShow($id){

        $this->getSources()->where([
            'id' => $id
        ]);

        $this->setCellRenderer('ShowRenderUser');

        $this->data = $this->render();

        return $this->showRender();
    }

    private function permisionsGroups($model){

        $roles = [];
        $permissions = Permission::query()->get([
            'groups',
            'name'
        ]);
        foreach ($permissions as $permission){
            $groups[$permission['groups']] = $permission['groups'];
            $names[$permission['name']] = [
               'name' => $permission['name'],
                'groups' =>$permission['groups']
            ];
        }
       foreach ($model->roles as $role){

            if($groups){
                foreach ($groups as $key =>$group) {
                    $roles[$group][] = $role->permissions()->where('groups',$group)->get(['id','name','groups'])->toArray();
                }
            }

        };
        return [
            'group'=>$groups,
            'names'=>$names,
            'content'=>$roles,
        ];

    }
}
