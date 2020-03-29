<?php

/**
 * Created by Claudio Campos.
 * User: callcocam@gmail.com
 * https://www.sigasmart.com.br
 */
namespace App\Suports\Form;


class Rows
{
    protected $rows;
    protected $icon = null;
    public function add($row){
        $this->rows = [
            'name'=>'RowRenderDefault',
            'rows'=>$row
        ];
        return $this;
    }

    public function actions($section){
        $this->rows['route'] = [
            'path'=>route(sprintf('admin.%s.store', $section),
                request()->query()),
            'back'=>[
                'name'=>sprintf('admin.%s.index', $section),
                'query'=> request()->query()
            ]
        ];
        return $this->render();
    }

    public function render(){

        return $this->rows;

    }
}
