<?php
/**
 * Created by Claudio Campos.
 * User: callcocam@gmail.com
 * https://www.sigasmart.com.br
 */

namespace App\Suports\Form\Field\Facades;


use Illuminate\Support\Facades\Facade;

class TABS extends Facade
{

    protected static function getFacadeAccessor()
    {
        return \App\Suports\Form\Tab::class;
    }

}
