<?php
/**
 * Created by Claudio Campos.
 * User: callcocam@gmail.com
 * https://www.sigasmart.com.br
 */
namespace App\Http\Controllers\Form;


use App\Suports\Form\AbstractForm;
use App\TraitModel;

class PostForm extends AbstractForm
{

    /**
     * @param TraitModel $model
     * @return mixed
     */
    public function init($model)
    {
        return $model;
    }
}
