<?php
/**
 * Created by Claudio Campos.
 * User: callcocam@gmail.com
 * https://www.sigasmart.com.br
 */
namespace App\Suports\Form;

use App\Suports\Form\Field\AbstractFields;
use App\Suports\Form\Field\BsTo;
use App\Suports\Form\Field\Cover;
use App\Suports\Form\Field\MultiCheckbox;
use App\Suports\Form\Field\Select;
use App\Suports\Form\Field\Status;
use App\Suports\Shinobi\Models\Role;
use App\TraitModel;
use App\User;

trait TraitForm
{

    protected $data = [];
    protected $elements = [];
    protected $newRecord = false;
    /**
     * @param TraitModel $model
     * @return mixed
     */
    abstract public function initForm($model);

    public function openForm($model){

        $this->newRecord = $model->id;

        $model->append('company_name');

        if($this->newRecord){
            $this->data = $model->toArray();
        }

      return $this->newRecord;
    }
    /**
     * @return array
     */
    public function getElements(): array
    {

        $elements = $this->elements;

        $this->elements = [];

        return $elements;
    }

    /**
     * @param AbstractFields $element
     * @param null $tabbable
     * @return $this
     */
    protected function add(AbstractFields $element, $tabbable=null){

        if($tabbable){
            $data = $this->data[$tabbable];
        }
        else{
            $data = $this->data;
        }
        if($element instanceof  BsTo){
            $this->elements[$element->name] = $element->value($element->getSelected())->getElement();
        }
        elseif ($element instanceof  Select){
            $this->elements[$element->name] = $element->value($element->setSelected($data)->getSelected())->getElement();
        }
        elseif ($element instanceof  Status){
            $this->elements[$element->name] = $element->value($element->setSelected($data)->getSelected())->getElement();
        }
        elseif ($element instanceof  MultiCheckbox){
            $this->elements[$element->name] = $element->value($element->getSelected())->getElement();
        }
        elseif ($element instanceof  Cover){
            $this->elements[$element->name] = $element->value($element->getSelected())->getElement();
        }
        else{
            $this->elements[$element->name] = $element->value($this->setValue($element->name,$data))->getElement();
        }


        return $this;
    }

    protected function setValue($name, $data){

        if($data){

            if(isset($data[$name])){

                return $data[$name];
            }
        }

        return '';
    }


    protected function getItemsCheckBox($data, $name="name", $id="id"){
        if(!$data)
            return [];

        return array_map(function ($item) use ($name,$id){
            return [
                'id'=>$item[$id],
                'name'=>$item[$name],
            ];
        }, $data->toArray());
    }

    protected function getItemCheckBox($data,$name="id"){
        if(!$data)
            return [];

        return array_map(function ($item) use ($name){
            return $item[$name];
        }, $data->toArray());
    }

    protected function getItemCheckBoxPermission($data,$name=null){
        if(!$data)
            return [];

        return $data->roles->map(function (Role $role) use ($name){
           if($name){
               if($role->permissions->count()){
                   return $role->permissions->map(function ($permission) use ($name){
                       return  $permission->{$name};
                   });
               }
           }
           return $role->permissions;
        });
    }
}
