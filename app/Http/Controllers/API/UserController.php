<?php
/**
 * Created by Claudio Campos.
 * User: callcocam@gmail.com
 * https://www.sigasmart.com.br
 */
namespace App\Http\Controllers\API;


use App\Http\Requests\SocialLinkRequest;
use App\Http\Requests\UserRequest;
use App\Profile;
use App\SocialLink;
use App\User;
use Illuminate\Http\Request;

class UserController extends AbstractController
{

    protected $model = User::class;

    public function store(UserRequest $request)
    {
        return parent::save($request);
    }


    public function profile(Request $request){

        //$this->model = Profile::class;

        $user = $request->user();

        return parent::edit($user->id);
    }

    public function socialLink(SocialLinkRequest $request)
    {
        $model = $this->getModel()->findById($request->get('post_id'));

        $data = $request->all();

        unset($data['post_id']);

        $dataExist = $model->social_links();

        if ($dataExist->first()) :
            $current = $dataExist->first()->toArray();
            $dataExist->update(array_merge($current, $data));
        else :
            $dataExist->create($data);
        endif;

        $this->results = $data;

        return response()->json($this->getSaveResponse());
    }
}
