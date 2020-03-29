<?php
/**
 * Created by Claudio Campos.
 * User: callcocam@gmail.com
 * https://www.sigasmart.com.br
 */

namespace App\Suports\Table\Columns\Facades;


use App\Suports\Table\Columns\StatusField;
use Illuminate\Support\Facades\Facade;

class STATUS extends Facade
{

    protected static function getFacadeAccessor()
    {
        return StatusField::class;
    }

}
