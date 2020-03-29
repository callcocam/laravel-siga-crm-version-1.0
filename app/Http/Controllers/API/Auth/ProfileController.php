<?php
/**
 * Created by Claudio Campos.
 * User: callcocam@gmail.com
 * https://www.sigasmart.com.br
 */

namespace App\Http\Controllers\API\Auth;

use App\Http\Requests\ProfileRequest;
use App\User;
use Illuminate\Http\Request;

class ProfileController extends AbstractController
{

    protected $model = User::class;
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api');
    }


    public function save(ProfileRequest $request)
    {

        $data = $request->all();
        /**
         * @var $user User
         */
        $user = $this->getModel()->findById($data['id']);

        $user->saveBy($data);

        $user = $this->getModel()->findById($data['id']);

        if(!$user)
            return response()->json([], 500 );


        $user->append('file');

        $address  = $user->address()->first(['slug','zip','city','state','country','street','district','number','complement']);


        if($address)
            return response()->json($user->initForm(array_merge($user->toArray(), $address->toArray())));

        return response()->json($user->initForm($user->toArray()));
    }
}
