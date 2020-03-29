<?php
/**
 * Created by Claudio Campos.
 * User: callcocam@gmail.com
 * https://www.sigasmart.com.br
 */

namespace App\Suports\Table\Columns\Facades;


use App\Suports\Table\Columns\DateField;
use Illuminate\Support\Facades\Facade;

class DATE extends Facade
{

    protected static function getFacadeAccessor()
    {
        return DateField::class;
    }

}
