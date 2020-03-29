<?php
/**
 * Created by Claudio Campos.
 * User: callcocam@gmail.com
 * https://www.sigasmart.com.br
 */

namespace App\Suports\Table\Columns\Facades;


use App\Suports\Table\Columns\TextField;
use Illuminate\Support\Facades\Facade;

class TEXT extends Facade
{

    protected static function getFacadeAccessor()
    {
        return TextField::class;
    }

}
