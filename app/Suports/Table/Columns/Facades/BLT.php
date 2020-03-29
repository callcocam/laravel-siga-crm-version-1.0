<?php
/**
 * Created by Claudio Campos.
 * User: callcocam@gmail.com
 * https://www.sigasmart.com.br
 */

namespace App\Suports\Table\Columns\Facades;


use App\Suports\Table\Columns\TextField;
use Illuminate\Support\Facades\Facade;

class BLT extends Facade
{

    protected static function getFacadeAccessor()
    {
        return BltField::class;
    }

}
