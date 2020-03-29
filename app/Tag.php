<?php
/**
 * Created by Claudio Campos.
 * User: callcocam@gmail.com
 * https://www.sigasmart.com.br
 */
namespace App;


use App\Suports\Form\TraitForm;
use App\Suports\Table\Columns\Facades\ID;
use App\Suports\Table\Columns\Facades\TEXT;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{

    use  TraitModel, TraitTable, TraitForm;

    public $incrementing = false;

    protected $keyType = "string";

    protected $fillable = [
        'company_id', 'user_id','name','updated_at',
    ];


    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        $this->defaultOptions['endpoint'] = "companys";
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

    public function posts()
    {
        return $this->morphedByMany(Post::class, 'taggable');
    }

    public function videos()
    {
        return $this->morphedByMany(Video::class, 'taggable');
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
