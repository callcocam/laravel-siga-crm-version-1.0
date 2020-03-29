<?php
/**
 * Created by Claudio Campos.
 * User: callcocam@gmail.com
 * https://www.sigasmart.com.br
 */
namespace App\Suports\Form;


use App\TraitModel;

abstract class AbstractForm
{

    protected $data = [];
    protected $elements = [];
    /**
     * @param TraitModel $model
     * @return mixed
     */
    abstract public function init($model);

    protected function add($name){

        $this->elements[$name] = [];
    }
}
