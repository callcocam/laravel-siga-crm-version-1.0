<?php
/**
 * Created by Claudio Campos.
 * User: callcocam@gmail.com
 * https://www.sigasmart.com.br
 */

namespace App\Http\Controllers\API\Auth;

use Tymon\JWTAuth\Facades\JWTAuth;

class RefreshController extends AbstractController
{

    public function refresh()
    {
        return $this->respondWithToken(JWTAuth::parseToken()->refresh());
    }
}
