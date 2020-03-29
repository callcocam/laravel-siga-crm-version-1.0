<?php
/**
 * Created by Claudio Campos.
 * User: callcocam@gmail.com
 * https://www.sigasmart.com.br
 */
namespace App\Suports\Table\Columns;

class StatusField extends AbstractFiled
{

    public function make($name, $opitions=null)
    {
        $this->render['name']=$name;
        $this->render['alias']=$name;
        $this->render['format']="text";
        $this->render['options']=[
            'deleted'=>"danger",
            'draft'=>"warning",
            'published'=>"success"
        ];
        return  parent::make($name,$opitions);
    }


}
