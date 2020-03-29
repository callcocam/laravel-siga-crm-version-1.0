<?php


namespace App\Suports\Form\Field;


class MultiCheckbox extends AbstractFields
{

    /**
     * @var array
     */
    protected $selected;

    public function make($name, $options = [])
    {

        $this->attribute('disabled',false);
        $this->element['type']='InputRenderMultiCheckbox';
        $this->element['value']= [];
        return parent::make($name, $options);
    }

    public function value_options($value_options){

        $this->option('value_options',$value_options);

        return $this;
    }

    /**
     * @param array $selected
     * @return BsTo
     */
    public function setSelected(array $selected): MultiCheckbox
    {
        $this->selected = $selected;

        return $this;
    }

    /**
     * @return array
     */
    public function getSelected(): array
    {
        return $this->selected;
    }
}
