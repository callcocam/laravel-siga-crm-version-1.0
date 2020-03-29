<?php

/**
 * Created by Claudio Campos.
 * User: callcocam@gmail.com
 * https://www.sigasmart.com.br
 */
namespace App\Suports\Form;


use Illuminate\Support\Str;

class Section
{

    protected $sections;
    protected $section;
    protected $name;
    protected $label;
    protected $icon = "icon-home";
    public function add($name,$section){
        $this->name = $name;
        $this->label = Str::title($name);
        $this->section = $section;
        $this->sections = [
            'icon'=>$this->icon,
            'name'=>$this->name,
            'label'=>$this->label,
            'sections'=>$this->section
        ];
        return $this->render();
    }
    public function actions($name,$section){
        $this->sections = [
            'name'=>$name,
            'route'=>[
                'path'=>[
                    'name'=>route(sprintf('admin.%s.store', $section),
                        request()->query())
                ]
            ]
        ];
        return $this->render();
    }
    public function render(){

        return $this->sections;

    }
}
