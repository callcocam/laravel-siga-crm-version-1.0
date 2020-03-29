<?php
/**
 * Created by Claudio Campos.
 * User: callcocam@gmail.com
 * https://www.sigasmart.com.br
 */
namespace App;

use App\Suports\Table\Columns\Facades\ID;
use App\Suports\Table\Columns\Facades\TEXT;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{

    use  TraitModel, TraitTable;

    public $incrementing = false;

    protected $keyType = "string";

    protected $fillable = [
        'company_id', 'user_id','description','updated_at',
    ];


    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        $this->setEndpoint();
        $this->defaultOptions['title'] = "Comments";
        $this->headers = [
            ID::make('id')->hiddenList()->hiddenShow()->render(),
            TEXT::make('company_id')->hiddenList()->hiddenShow()->render(),
            TEXT::make('description')->filter()->render(),
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

    public function commentable()
    {
        return $this->morphTo();
    }

    public function user()
    {
        return $this->belongsTo(User::class); //user_id
    }
}
