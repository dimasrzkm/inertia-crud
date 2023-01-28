<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    public function index()
    {
        return inertia('Auth/Login');
    }
    public function store(Request $request)
    {
        // dd($request->all());
        $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required']
        ]);
        if (Auth::attempt($request->only('email', 'password'), false)) {
            //regenerate session
            session()->regenerate();
            return redirect('dashboard')->with('message', 'You are Login');
        }
        throw ValidationException::withMessages([
            'email' => 'The credential not match in our records'
        ]);
    }
    public function logout()
    {
        Auth::logout();
        return redirect('login')->with('message', 'You are log out');
    }
}
