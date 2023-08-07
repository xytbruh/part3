<?php

namespace App\Http\Controllers;

use App\Models\Wallet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class WalletController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $wallet = Wallet::orderBy('created_at', 'DESC')->get();
        return Inertia::render('pageAdmin/menuUtils/Dompet', ['wallet' => $wallet]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'bank' => 'required',
            'norek' => 'required',
        ]);

        Wallet::create([
            'name' => $request->name,
            'bank' => $request->bank,
            'norek' => $request->norek,
        ]);
        return redirect()->back()->with('message', 'Dompet berhasil dibuat');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Wallet  $wallet
     * @return \Illuminate\Http\Response
     */
    public function show(Wallet $wallet)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Wallet  $wallet
     * @return \Illuminate\Http\Response
     */
    public function edit(Wallet $wallet)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Wallet  $wallet
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        DB::table('wallets')
            ->where('id', $request->id)
            ->update([
                'name' => $request->name,
                'bank' => $request->bank,
                'norek' => $request->norek,
            ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Wallet  $wallet
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $banner = Wallet::find($request->id);
        $banner->delete();
        return redirect()->back()->with('message', 'Dompet berhasil dihapus');
    }
}
