<?php


namespace App\Suports\Form\Field;


class QuillEdtor extends AbstractFields
{

    public function make($name, $options = [])
    {
        $this->element['type']='InputRenderQuillEditor';
        return parent::make($name, $options);
    }
}
