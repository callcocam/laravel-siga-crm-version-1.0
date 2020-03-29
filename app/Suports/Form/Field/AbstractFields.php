<?php
/**
 * Created by Claudio Campos.
 * User: callcocam@gmail.com
 * https://www.sigasmart.com.br
 */
namespace App\Suports\Form\Field;


use Illuminate\Support\Str;

abstract class AbstractFields
{

    protected $format;

    protected $element = [
        'type' => 'InputRenderText',
        'route' => null,
        'name' => null,
        'value' => null,
        'label' => null,
        'icon' => null,
        'coll' => '1',
        'attributes' => [
            'class'=>'w-full mt-4',
            'readonly'=>false,
        ],
        'options' => []
    ];

     public function make($name, $options=[]){

         $this->element['name']= $name;
         $this->element['label']= Str::title($name);
         if($options){
             foreach($options as $name => $value){
                 $this->element[$name]  = $value;
             }
         }
         return $this;
     }

    /**
     * @param string $type
     * @return AbstractFields
     */
    public function format(string $type, $format): AbstractFields
    {

        $this->element['format'] = [
            'type'=>$type,
            'format'=>$format
        ];
        return $this;
    }

    /**
     * @param $value
     * @return AbstractFields
     */
    public function value($value): AbstractFields
    {
        $this->element['value'] = $value;

        return $this;
    }

    /**
     * @param $route
     * @return AbstractFields
     */
    public function route($route): AbstractFields
    {
        $this->element['route'] = $route;

        return $this;
    }

    /**
     * @param string $type
     * @return AbstractFields
     */
    public function type(string $type): AbstractFields
    {
        $this->element['type'] = $type;
        return $this;
    }

     /**
     * @param string $type
     * @return AbstractFields
     */
    public function coll(string $coll): AbstractFields
    {
        $this->element['coll'] = $coll;
        return $this;
    }

    /**
     * @param string $icon
     * @return AbstractFields
     */
    public function icon(string $icon): AbstractFields
    {
        $this->element['icon'] = $icon;
        return $this;
    }

    /**
     * @param string $name
     * @return AbstractFields
     */
    public function name(string $name): AbstractFields
    {
        $this->element['name'] = $name;
        return $this;
    }

    /**
     * @param string $label
     * @return AbstractFields
     */
    public function label(string $label): AbstractFields
    {
        $this->element['label'] = $label;
        return $this;
    }

    /**
     * @param string $key
     * @param $value
     * @return AbstractFields
     */
    public function attribute(string $key, $value): AbstractFields
    {
        if (!isset($this->element['attributes'])){

            $this->element['attributes'] = [];
        }
        $this->element['attributes'][$key] = $value;
        return $this;
    }

    /**
     * @param array $attributes
     * @return AbstractFields
     */
    public function attributes(array $attributes): AbstractFields
    {
        if (!isset($this->element['attributes'])){

            $this->element['attributes'] = [];
        }
        $this->element['attributes'] = array_merge($this->element['attributes'], $attributes);

        return $this;
    }

    /**
     * @param string $key
     * @param $value
     * @return AbstractFields
     */
    public function option(string $key, $value): AbstractFields
    {
        $this->element['options'][$key] = $value;
        return $this;
    }

    /**
     * @param array $options
     * @return AbstractFields
     */
    public function options(array $options): AbstractFields
    {
        if (!isset($this->element['options'])){

            $this->element['options'] = [];
        }
        $this->element['options'] = array_merge($this->element['options'], $options);

        return $this;
    }


    /**
     * @return array
     */
    public function getElement(): array
    {
        $elements = $this->element;
        $this->element = [
            'type' => 'InputRenderText',
            'name' => null,
            'value' => null,
            'label' => null,
            'icon' => null,
            'coll' => '1',
            'attributes' => [
                'class'=>'w-full mt-4',
                'readonly'=>false,
            ],
            'options' => []
        ];
        return $elements;
    }


    public function __get($name)
    {
        try{
            return $this->element[$name];
        }catch (\Exception $exception){
            throw new \Exception(sprintf('Please name %s invalid!!', $name));
        }
    }

}
