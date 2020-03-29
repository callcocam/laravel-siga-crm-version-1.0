<?php


namespace App\Suports\Show;


trait TraitShow
{

    public function openShow($id){

        $this->getSources()->where([
            'id' => $id
        ]);
        $this->data = $this->render();
        return $this->showRender();
    }


    protected function showRender($data=null){
        if(!$data){
                $data = $this->data;
        }

        return $data;
    }
}
