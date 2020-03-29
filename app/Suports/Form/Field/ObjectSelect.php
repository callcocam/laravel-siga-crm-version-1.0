<?php


namespace App\Suports\Form\Field;


use Illuminate\Database\Eloquent\Builder;

class ObjectSelect extends AbstractFields
{

    protected $colomns = ['id as value','name as label'];

    public function make($name, $options = [])
    {
        $this->element['type']='InputRenderObjectSelect';
        return parent::make($name, $options);
    }

    public function value_options(Builder $builder): AbstractFields
    {
        $value_options = $builder->get($this->colomns)->toArray();

        $this->option('value_options', $value_options);

        $this->option('label', 'label');

        return $this;
    }
}
