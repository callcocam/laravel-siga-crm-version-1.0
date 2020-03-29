<?php
/**
 * Created by Claudio Campos.
 * User: callcocam@gmail.com
 * https://www.sigasmart.com.br
 */
namespace App\Http\Controllers\API;

use App\Http\Controllers\Form\PostForm;
use App\Http\Requests\PostRequest;
use App\Post;

class PostController extends AbstractController
{

    protected $model = Post::class;

    public function store(PostRequest $request)
    {
        return parent::save($request); // TODO: Change the autogenerated stub
    }
}