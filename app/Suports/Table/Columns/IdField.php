<?php

/**
 * Created by Claudio Campos.
 * User: callcocam@gmail.com
 * https://www.sigasmart.com.br
 */

namespace App\Suports\Table\Columns;

class IdField extends AbstractFiled
{

    public function make($name, $opitions=null)
    {

        $this->render['name'] = $name;
        $this->render['alias'] = $name;
        $this->render['format'] = "id";
        $this->headerCheckboxSelectionFilteredOnly();
        $this->headerCheckboxSelection();
        $this->checkboxSelection();
        $this->hiddenDetail();
        $this->hiddenList();
        $this->hiddenShow();

        return  parent::make($name, $opitions);
    }
}
