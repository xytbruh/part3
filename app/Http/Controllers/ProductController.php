<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
        $product = Product::orderBy('created_at', 'desc')->get();
        return Inertia::render('pageAdmin/menuMarketPlace/Produk', ['product' => $product]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('pageAdmin/menuMarketPlace/Produk');
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
            'description' => 'required|string',
            'image' => 'required',
        ]);
        $file = $request->file('image');
        $path = time() . '_' . $request->name . '.' . $file->getClientOriginalExtension();

        Storage::disk('local')->put('public/' . $path, file_get_contents($file));
        Product::create([
            'name' => $request->name,
            'description' => $request->description,
            'image' => $path,
            'slug' => Str::slug($request->name, '-'),
        ]);
        return redirect()->back()->with('message', 'Produk berhasil dibuat');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
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
            DB::table('products')
                ->where('id', $request->id)
                ->update([
                    'name' => $request->name,
                    'description' => $request->description,
                    'image' => $filename,
                    'slug' => Str::slug($request->name, '-')
                ]);
        } else {

            //update without image
            DB::table('products')
                ->where('id', $request->id)
                ->update([
                    'name' => $request->name,
                    'description' => $request->description,
                    'slug' => Str::slug($request->name, '-')
                ]);
        }

        return redirect()->back()->with('message', 'produk berhasil diupdate');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $product = Product::find($request->id);
        $product->delete();
        Storage::delete('public/' . $product->image);
        return redirect()->back()->with('message', 'kategori berhasil dihapus');
    }
}
