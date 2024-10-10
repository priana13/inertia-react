<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::paginate(5);

        return inertia('User/User' , compact('users'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('User/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required', 
            'email' => 'required', 
            'password' => 'required', 
        ]);

       $user = new User();
       $user->name = $request->nama;
       $user->email = $request->email;
       $user->password = Hash::make( $request->password );
       $user->save();

        return redirect('/users');

    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {

       return inertia('User/Show' , compact('user'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
       $user->delete();

       return redirect('/users')->with('message' , $user->name .  ' Berhasil Dihapus');
    }
}
