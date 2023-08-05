<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $category = Category::orderBy('created_at', 'desc')->get();
        return Inertia::render('pageAdmin/menuMarketPlace/Kategori', ['category' => $category]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('pageAdmin/menuMarketPlace/Kategori');
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
            'name' => 'required|string|max:50|unique:categories',
            'image' => 'required',
        ]);
        $file = $request->file('image');
        $path = time() . '_' . $request->name . '.' . $file->getClientOriginalExtension();

        Storage::disk('local')->put('public/' . $path, file_get_contents($file));
        Category::create([
            'name' => $request->name,
            'image' => $path,
            'slug' => Str::slug($request->name, '-'),
        ]);
        return redirect()->back()->with('message', 'kategori berhasil dibuat');
    }
   
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        $category = Category::get()->all();
        return Inertia::render("Welcome", ["category" => $category]);
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category, Request $request)
    {
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        // dd($request->hasFile('image'));
        // $file = $request->file('image');
        // $path = time() . '_' . $request->name . '.' . $file->getClientOriginalExtension();

        // Storage::disk('local')->put('public/' . $path, file_get_contents($file));
        // $category->update([
        //     'name' => $request->name,
        //     'image' => $path,
        //     'slug' => Str::slug($request->name, '-')
        // ]);

        // $this->validate($request, [
        //     'name'  => 'required|string|max:50|unique:categories',
        //     'image' => 'image|mimes:jpeg,png,jpg,gif,svg',
        // ]);

        //check if image is uploaded
        if ($request->hasFile('image')) {

            //upload new image
            $image = $request->file('image');
            $filename = time() . '_' . $request->name . '.' . $image->getClientOriginalExtension();
            Storage::disk('local')->put('public/' . $filename, file_get_contents($image));

            // delete old image
            // Storage::delete('public/posts/' . $category->image);

            //update with new image
            DB::table('categories')
                ->where('id', $request->id)
                ->update([
                    'name' => $request->name,
                    'image' => $filename,
                    'slug' => Str::slug($request->name, '-')
                ]);
        } else {

            //update without image
            DB::table('categories')
                ->where('id', $request->id)
                ->update([
                    'name' => $request->name,
                    'slug' => Str::slug($request->name, '-')
                ]);
        }

        return redirect()->back()->with('message', 'kategori berhasil diupdate');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $category = Category::find($request->id);
        $category->delete();
        Storage::delete('public/' . $category->image);
        return redirect()->back()->with('message', 'kategori berhasil dihapus');
    }
}
