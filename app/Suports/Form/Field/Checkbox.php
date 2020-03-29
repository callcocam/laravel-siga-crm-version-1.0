<?php


namespace App\Suports\Form\Field;


class Checkbox extends AbstractFields
{

    public function make($name, $options = [])
    {
        $this->element['type']='InputRenderCheckbox';
        return parent::make($name, $options);
    }
}
