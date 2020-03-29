<?php


namespace App\Suports\Form\Field;


class Text extends AbstractFields
{

    public function make($name, $options = [])
    {
        $this->element['type']='InputRenderText';
        return parent::make($name, $options);
    }
}
