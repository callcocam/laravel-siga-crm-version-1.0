<?php
/**
 * Created by Claudio Campos.
 * User: callcocam@gmail.com
 * https://www.sigasmart.com.br
 */
namespace App;


use App\Suports\Form\Field\Facades\FBLSTO;
use App\Suports\Form\Field\Facades\FCOVER;
use App\Suports\Form\Field\Facades\FID;
use App\Suports\Form\Field\Facades\FSTATUS;
use App\Suports\Form\Field\Facades\FTEXT;
use App\Suports\Form\Field\Facades\FTQUILEDTOR;
use App\Suports\Form\Field\Facades\ROW;
use App\Suports\Form\Field\Facades\SECTION;
use App\Suports\Form\Field\Facades\TABS;
use App\Suports\Form\TraitForm;
use App\Suports\Show\TraitShow;
use App\Suports\Table\Columns\Facades\COVER;
use App\Suports\Table\Columns\Facades\HTML;
use App\Suports\Table\Columns\Facades\ID;
use App\Suports\Table\Columns\Facades\TEXT;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{

    use  TraitModel, TraitTable, TraitForm, TraitShow;

    public $incrementing = false;

    protected $keyType = "string";

    protected $fillable = [
        'company_id', 'user_id', 'category_id', 'name', 'slug', 'description','updated_at',
    ];

    protected $casts = [
        'created_at'=>'date:d/m/Y',
        'updated_at'=>'date:d/m/Y',
    ];

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        $this->setEndpoint();
        $this->defaultOptions['title'] = "Post";
        $this->headers = [
            ID::make('id')->hiddenList()->hiddenShow()->render(),
            TEXT::make('company_id')->hiddenList()->hiddenShow()->render(),
            COVER::make('cover')->width('20')->render(),
            TEXT::make('name')->filter()->render(),
            HTML::make('category')->hiddenList()->icone('icon-list')->render(),
        ];


    }

    public function init()
    {

        $this->getHeader('category')->getCell()->addDecorator('callable', [
            'closure' => function ( $context, $record) {
                return $context->name;
            },
        ]);
    }

    public function saveBy($data)
    {
        if (!isset($data['category_id'])) {

            return $this->finalize($data);
        }

        if (!is_array($data['category_id'])) {

            return $this->finalize($data);
        }

        $category = $data['category_id'];

        if (!isset($category['value'])) {

            return $this->finalize($data);
        }

        $data['category_id'] = $category['value'];

        return $this->finalize($data);
    }

    public function initFilter($query)
    {
        // TODO: Implement initFilter() method.
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }

    public function tags()
    {
        return $this->morphToMany(Tag::class, 'taggable');
    }

    /**
     * @param TraitModel $model
     * @return mixed
     */
    public function initForm($model)
    {
        $this->openForm($model);

        $this->add(FCOVER::make('cover')->setSelected($model)->label('Cover'));
        $this->add(FID::make('id'));
        $this->add(FID::make('slug'));
        $this->add(FTEXT::make('name'));

        $this->add(FBLSTO::make('category_id')->fk($this->category())->coll(2));

        $this->add(FSTATUS::make('status')->coll(2));

        $this->add(FTQUILEDTOR::make('description')->coll(1));

        $this->add(FTEXT::make('created_at')->coll(2)->attribute('readonly',true));

        $this->add(FTEXT::make('updated_at')->coll(2)->attribute('readonly',true));

        $tabs[] = TABS::add(
            ROW::add(
                [
                    SECTION::add('SectionRenderFields',$this->getElements($model))
                ]
            )->actions($this->getTable())

        )->setLabel('Setting')->render();


        return [
            'rows'=> $tabs,
            'options'=>$this->defaultOptions
        ];
    }
}
