<?php
/**
 * Created by Claudio Campos.
 * User: callcocam@gmail.com
 * https://www.sigasmart.com.br
 */

namespace App\Suports\Table\Columns\Facades;


use App\Suports\Table\Columns\HtmlField;
use Illuminate\Support\Facades\Facade;

class HTML extends Facade
{

    protected static function getFacadeAccessor()
    {
        return HtmlField::class;
    }

}
