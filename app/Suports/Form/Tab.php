<?php


namespace App\Suports\Form;

use Illuminate\Support\Str;

class Tab
{

    protected $contents;
    protected $label;
    protected $icon = "icon-home";
    public function add($contents){
        $this->contents = $contents;

        return $this;
    }

    public function render(){

        return [
            'icon'=>$this->icon,
            'name'=>Str::slug($this->label,'_'),
            'label'=>$this->label,
            'contents'=>$this->contents
        ];

    }

    /**
     * @param mixed $label
     * @return Tab
     */
    public function setLabel($label)
    {
        $this->label = $label;
        return $this;
    }

    /**
     * @param string $icon
     * @return Tab
     */
    public function setIcon(string $icon): Tab
    {
        $this->icon = $icon;
        return $this;
    }
}
