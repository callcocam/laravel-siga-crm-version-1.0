<?php


namespace App\Suports\Form\Field;


class Hidden extends AbstractFields
{


    public function make($name, $options = [])
    {
       $this->element['type'] = 'InputRenderHidden';
       return parent::make($name, $options);
    }
}
