<?php
/**
 * Created by Claudio Campos.
 * User: callcocam@gmail.com
 * https://www.sigasmart.com.br
 */

namespace App\Suports\Table\Facades;


use Illuminate\Support\Facades\Facade;

class Actions extends Facade
{

    protected static function getFacadeAccessor()
    {
        return \App\Suports\Table\Actions::class;
    }

}
