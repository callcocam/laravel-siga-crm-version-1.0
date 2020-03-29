<?php
/**
 * Created by Claudio Campos.
 * User: callcocam@gmail.com
 * https://www.sigasmart.com.br
 */
namespace App;


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
use App\Suports\Table\Columns\Facades\ID;
use App\Suports\Table\Columns\Facades\TEXT;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{

    use  TraitModel, TraitTable, TraitForm, TraitShow;

    public $incrementing = false;

    protected $keyType = "string";

    protected $fillable = [
        'company_id', 'user_id','name', 'slug', 'description','updated_at',
    ];

    protected $casts = [
        'created_at'=>'date:d/m/Y',
        'updated_at'=>'date:d/m/Y',
    ];

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        $this->setEndpoint();
        $this->defaultOptions['title'] = "Empresas";
        $this->headers = [
            ID::make('id')->hiddenList()->hiddenShow()->render(),
            TEXT::make('company_id')->hiddenList()->hiddenShow()->render(),
            TEXT::make('name')->filter()->render(),
        ];
    }

    public function init()
    {
        // TODO: Implement init() method.
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

        $this->add(FID::make('id'));

        $this->add(FID::make('slug'));

        $this->add(FTEXT::make('name'));

        $this->add(FTQUILEDTOR::make('description')->coll(1));

        $this->add(FSTATUS::make('status')->coll(3));

        $this->add(FTEXT::make('created_at')->coll(3)->attribute('readonly',true));

        $this->add(FTEXT::make('updated_at')->coll(3)->attribute('readonly',true));

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
