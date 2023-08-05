<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class BannerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $banner = Banner::orderBy('created_at', 'desc')->get();
        return Inertia::render('pageAdmin/menuProfil/BannerIklan', ['banner' => $banner]);
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
    public function iklanAtas(Request $request)
    {
        $this->validate($request, [
            'image' => 'required',
        ]);
        $file = $request->file('image');
        $path = time() . '_' . $file->getClientOriginalExtension();

        Storage::disk('local')->put('public/' . $path, file_get_contents($file));
        Banner::create([
            'image' => $path,
            'kategori' => "iklan-atas",
        ]);
        return redirect()->back()->with('message', 'Iklan berhasil dibuat');
    }
    public function iklanTengah(Request $request)
    {
        $this->validate($request, [
            'image' => 'required',
        ]);
        $file = $request->file('image');
        $path = time() . '_'  . $file->getClientOriginalExtension();

        Storage::disk('local')->put('public/' . $path, file_get_contents($file));
        Banner::create([
            'image' => $path,
            'kategori' => "iklan-tengah",
        ]);
        return redirect()->back()->with('message', 'Iklan berhasil dibuat');
    }
    public function iklanBawah(Request $request)
    {
        $this->validate($request, [
            'image' => 'required',
        ]);
        $file = $request->file('image');
        $path = time() . '_'  . $file->getClientOriginalExtension();

        Storage::disk('local')->put('public/' . $path, file_get_contents($file));
        Banner::create([
            'image' => $path,
            'kategori' => "iklan-bawah",
        ]);
        return redirect()->back()->with('message', 'Iklan berhasil dibuat');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Banner  $banner
     * @return \Illuminate\Http\Response
     */
    public function show(Banner $banner)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Banner  $banner
     * @return \Illuminate\Http\Response
     */
    public function edit(Banner $banner)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Banner  $banner
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {

        //upload new image
        $image = $request->file('image');
        $filename = time() . '_' . $request->name . '.' . $image->getClientOriginalExtension();
        Storage::disk('local')->put('public/' . $filename, file_get_contents($image));

        // delete old image
        // Storage::delete('public/posts/' . $category->image);

        //update with new image
        DB::table('banners')
            ->where('id', $request->id)
            ->update([
                'image' => $filename,
            ]);



        return redirect()->back()->with('message', 'banner berhasil diupdate');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Banner  $banner
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $banner = Banner::find($request->id);
        $banner->delete();
        Storage::delete('public/' . $banner->image);
        return redirect()->back()->with('message', 'Banner berhasil dihapus');
    }
}
