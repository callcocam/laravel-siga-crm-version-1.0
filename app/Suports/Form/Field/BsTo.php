<?php


namespace App\Suports\Form\Field;

class BsTo extends AbstractFields
{

    protected $selected = [];

    public function make($name, $options = [])
    {
        $this->element['type']='InputRenderObjectSelect';

        return parent::make($name, $options);
    }

    /**
     * @param $fk
     * @param array $columns
     * @return $this
     */
    public function fk($fk, $columns= ['id as value', 'name as label']){

        if($fk->count()){

            $this->setSelected($fk->first($columns)->toArray());
        }

        $value_options = $fk->getRelated()->select($columns)->get()->toArray();

        if($value_options){
            $this->option('value_options',$value_options);
        }

        return $this;
    }

    /**
     * @param array $selected
     * @return BsTo
     */
    public function setSelected(array $selected): BsTo
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
