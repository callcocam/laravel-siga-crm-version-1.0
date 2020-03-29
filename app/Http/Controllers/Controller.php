<?php

namespace App\Http\Controllers;

use App\Suports\Form\TraitForm;
use App\TraitModel;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected $results = [];
    protected $model;
    /**
     * @var TraitForm $form
     */
    protected $form;

    /**
     * @return TraitModel
     */
    public function getModel()
    {

        if(is_string($this->model)){

            $this->model = app($this->model);
        }
        return $this->model;
    }

    /**
     * @return TraitModel
     */
    public function getForm( $model)
    {
        return $model->initForm($model);
    }

    /**
     * @return TraitModel
     */
    public function getShow( $model)
    {
        return $model->initShow($model);
    }

}
