<?php
/**
 * Created by Claudio Campos.
 * User: callcocam@gmail.com
 * https://www.sigasmart.com.br
 */

namespace App\Http\Controllers\API\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use App\User;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{

    public function register(RegisterRequest $request)
    {
        $result = User::create([
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'password' => Hash::make($request->get('password')),
        ]);

        if($result)
            return response()->json($result);

        return response()->json(['error' => 'Unauthorized'], 401);
    }
}
