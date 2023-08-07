<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class SettingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $setting = Setting::orderBy('id', 'desc')->first();
        return Inertia::render('pageAdmin/menuUtils/Pengaturan', ['setting' => $setting]);
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

            'title' => 'required|string|max:50|unique:settings',
            'email' => 'required',
            'phone' => 'required',
            'keywords' => 'required',
            'description' => 'required',
            'logo' => 'required',
        ]);
        $file = $request->file('image');
        $path = time() . '_' . $request->name . '.' . $file->getClientOriginalExtension();

        Storage::disk('local')->put('public/' . $path, file_get_contents($file));
        Setting::create([
            'title' => $request->title,
            'email' => $request->email,
            'phone' => $request->phone,
            'keywords' => $request->keywords,
            'description' => $request->description,
            'logo' => $path,
        ]);
        return redirect()->back()->with('message', 'kategori berhasil dibuat');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Setting  $setting
     * @return \Illuminate\Http\Response
     */
    public function show(Setting $setting)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Setting  $setting
     * @return \Illuminate\Http\Response
     */
    public function edit(Setting $setting)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Setting  $setting
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        if ($request->hasFile('image')) {

            //upload new image
            $image = $request->file('image');
            $filename = time() . '_' . $request->name . '.' . $image->getClientOriginalExtension();
            Storage::disk('local')->put('public/' . $filename, file_get_contents($image));

            // delete old image
            // Storage::delete('public/posts/' . $category->image);

            //update with new image
            DB::table('settings')
                ->where('id', $request->id)
                ->update([
                    'title' => $request->title,
                    'email' => $request->email,
                    'phone' => $request->phone,
                    'keywords' => $request->keywords,
                    'description' => $request->description,
                    'logo' => $filename,
                ]);
        } else {

            //update without image
            DB::table('settings')
                ->where('id', $request->id)
                ->update([
                    'title' => $request->title,
                    'email' => $request->email,
                    'phone' => $request->phone,
                    'keywords' => $request->keywords,
                    'description' => $request->description,
                ]);
        }

        return redirect()->back()->with('message', 'kategori berhasil diupdate');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Setting  $setting
     * @return \Illuminate\Http\Response
     */
    public function destroy(Setting $setting)
    {
        //
    }
}
