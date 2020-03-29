<?php
/**
 * Created by Claudio Campos.
 * User: callcocam@gmail.com
 * https://www.sigasmart.com.br
 */

namespace App\Http\Controllers\API\Auth;

use App\Http\Requests\LoginRequest;

class LoginController extends AbstractController
{

    public function login(LoginRequest $request)
    {
        $credentials = $request->only('email', 'password');

        $authenticate = $this->guard()->attempt($credentials);
        if ($authenticate) {
            // Generate Token
            $token = \JWTAuth::fromUser($this->guard()->user());
            // Get expiration time
            $objectToken = \JWTAuth::setToken($token);

            $expiration = \JWTAuth::decode($objectToken->getToken())->get('exp');

            $user = $this->guard()->user();

            $user->append('cover');

            $user->append('address');

            return $this->respondWithToken($token,$user->toArray(), $expiration);
        }

        return response()->json([
            'error' => 'Unauthorized',
            'message' =>trans('auth.failed'),
            'errors'=>[
                'email'=>[trans('auth.failed')]
            ]], 500);
    }
}
