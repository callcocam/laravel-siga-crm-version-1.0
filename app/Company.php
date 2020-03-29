<?php
/**
 * Created by Claudio Campos.
 * User: callcocam@gmail.com
 * https://www.sigasmart.com.br
 */
namespace App;

use App\Suports\Form\TraitForm;
use App\Suports\Shinobi\Models\Role;
use App\Suports\Show\TraitShow;
use App\Suports\Table\Columns\Facades\COVER;
use App\Suports\Table\Columns\Facades\ID;
use App\Suports\Table\Columns\Facades\TEXT;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
 use  TraitModel, TraitTable, TraitForm, TraitShow;

    public $incrementing = false;

    protected $keyType = "string";

    protected $fillable = [
        'company_id', 'user_id','name', 'email', 'phone', 'document','updated_at',
    ];


    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        $this->setEndpoint();

        $this->defaultOptions['title'] = "Empresas";
        $this->headers = [
            ID::make('id')->hiddenList()->hiddenShow()->render(),
            TEXT::make('company_id')->hiddenList()->hiddenShow()->render(),
            COVER::make('cover')->render(),
            TEXT::make('name')->filter()->render(),
        ];
    }
    public function roles(){

        return $this->hasMany(Role::class);
    }
    public function address(){

        return $this->morphOne(Addres::class, 'addresable');
    }

    public function init()
    {
        $this->getHeader('status')->getCell()->addDecorator('callable', [
            'closure' => function ($context, $record) {
                return $context;
            },
        ]);
    }

    public function initFilter($query)
    {
        // TODO: Implement initFilter() method.
    }

    /**
     * @param TraitModel $model
     * @return mixed
     */
    public function initForm($model)
    {
        $this->openForm($model);

        return [];
    }
}
