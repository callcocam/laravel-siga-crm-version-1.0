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

class File extends Model
{

    use TraitModel, TraitTable;

    public $incrementing = false;

    protected $keyType = "string";

    protected $fillable = [
        'company_id','user_id','name','description',
    ];

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        $this->defaultOptions['endpoint'] = "files";
        $this->headers = [
            ID::make('id')->hiddenList()->hiddenShow()->render(),
            TEXT::make('name')->filter()->render(),
        ];
    }
    public function fileable(){

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
