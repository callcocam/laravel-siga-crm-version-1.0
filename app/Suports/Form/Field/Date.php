<?php


namespace App\Suports\Form\Field;


class Date extends AbstractFields
{


    public function make($name, $options = [])
    {
       $this->element['type'] = 'InputRenderDate';
       return parent::make($name, $options);
    }
}
