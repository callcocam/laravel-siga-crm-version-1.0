<?php
/**
 * Created by Claudio Campos.
 * User: callcocam@gmail.com
 * https://www.sigasmart.com.br
 */

namespace App;


use App\Suports\Table\Columns\Facades\COVER;
use App\Suports\Table\Columns\Facades\ID;
use App\Suports\Table\Columns\Facades\TEXT;
use Illuminate\Database\Eloquent\Model;

class SocialLink extends Model
{

    use TraitModel, TraitTable;

    public $incrementing = false;

    protected $keyType = "string";

    protected $table = "social_links";

    protected $fillable = [
        'user_id','twitter','facebook','instagram','github','linkedin','codepen', 'slack','youtub','google','website','created_at','updated_at'
    ];

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        $this->defaultOptions['title'] = "Lista de social links";
        $this->headers = [
            ID::make('id')->hiddenList()->hiddenShow()->render(),
            TEXT::make('twitter')->render()
        ];
    }
    public function social_linkable(){

        return $this->morphTo();
    }


    public function init()
    {
        // TODO: Implement init() method.
    }

    public function initFilter($query)
    {
        // TODO: Implement initFilter() method.
    }
}
