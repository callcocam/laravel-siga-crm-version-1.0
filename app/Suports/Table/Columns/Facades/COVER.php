<?php
/**
 * Created by Claudio Campos.
 * User: callcocam@gmail.com
 * https://www.sigasmart.com.br
 */

namespace App\Suports\Table\Columns\Facades;


use App\Suports\Table\Columns\CoverField;
use Illuminate\Support\Facades\Facade;

class COVER extends Facade
{

    protected static function getFacadeAccessor()
    {
        return CoverField::class;
    }

}
