<?php


namespace App\Suports\Form\Field;


use App\Processors\AvatarProcessor;

class Cover extends AbstractFields
{

    protected $ignore = [
      '/storage/users/no_avatar-male.jpg',
      '/storage/users/no_avatar-female.jpg'
    ];
    /**
     * @var string|null
     */
    protected $selected;

    public function make($name, $options = [])
    {
        $this->element['type']='InputRenderCover';
        return parent::make($name, $options);
    }


    /**
     * @param array $selected
     * @return BsTo
     */
    public function setSelected($selected): Cover
    {
        $this->selected = AvatarProcessor::get($selected);
        if($selected){
            $rotas = [];
            if(\Gate::allows(sprintf("admin.%s.upload", $selected->getTable()))){
                $rotas['upload'] = route(sprintf("admin.%s.upload", $selected->getTable()));
            }
            if(\Gate::allows(sprintf("admin.%s.remove-file", $selected->getTable()))){
                if(!in_array($this->selected, config('image',[]))){
                    if($selected->file()->first()){
                        $rotas['remove'] = route(sprintf("admin.%s.remove-file", $selected->getTable()));
                    }
                }
            }
            return $this->route($rotas);
        }
        return $this;
    }

    /**
     * @return string
     */
    public function getSelected(): string
    {
        return $this->selected;
    }
}
