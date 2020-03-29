<?php


namespace App\Suports\Form\Field;


class Select extends AbstractFields
{

    /**
     * @var array
     */
    protected $selected = [];
    protected $value_options = [
        ['label' => 'All', 'value' => 'all'],
        ['label' => 'Ativo', 'value' => 'published'],
        ['label' => 'Inativo', 'value' => 'draft']
    ];

    public function make($name, $options = [])
    {
        $this->element['type']='InputRenderSelect';

        $this->option('value_options',$this->value_options);

        return parent::make($name, $options);
    }

    /**
     * @param array $selected
     * @return BsTo
     */
    public function setSelected(array $selected): Status
    {
        if(isset($selected[$this->element['name']])){

            foreach ($this->value_options as  $value_option){
                if($value_option['value'] == $selected[$this->element['name']])
                    $this->selected = $value_option;
            }

        }

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
