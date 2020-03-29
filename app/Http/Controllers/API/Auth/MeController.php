<?php
/**
 * Created by Claudio Campos.
 * User: callcocam@gmail.com
 * https://www.sigasmart.com.br
 */

namespace App\Http\Controllers\API\Auth;

class MeController extends AbstractController
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function me()
    {

        $user = $this->guard()->user();

        if(!$user)
            return response()->json([], 500 );

      // $address  = $user->address()->first(['slug','zip','city','state','country','street','district','number','complement']);


        $user->append('cover');
        $user->append('address');



        return response()->json($user->toArray());
    }
}
