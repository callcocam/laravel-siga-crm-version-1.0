<?php

namespace App\Http\Controllers;

class AbstractController extends Controller
{

    protected $template = "admin";
    protected $prefix = 'admin';

    public function index(){

       return view(sprintf("%s.index",  $this->template), $this->results);
    }

}
