<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryCollection;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $category = new CategoryCollection(Category::orderByDesc('id')->paginate(8));
        return Inertia::render('Kategori' ,[
            'title' => 'Kategori',
            'category' => $category,
        ]);
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
        $category = new Category();
        $category->title = $request->title;
        $category->image = $request->image;
        $category->author = auth()->user()->email;
        $category->status = $request->status;
        $category->save();
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
        $myCategory = $category::all();
        return Inertia::render('pageAdmin/menuMarketPlace/Kategori', [
            'title' => 'Kategori',
            'myCategory' => $myCategory,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category, Request $request)
    {
        return Inertia::render('pageAdmin/menuMarketPlace/Kategori', [
            'myCategory' => $category->find($request->id)
        ]);
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
        Category::where('id', $request->id)->update([
            'title' => $request->title,
            'image' => $request->image,
            'status' => $request->status,
        ]);
        return to_route('admin/kategori')->with('message', 'update kategori berhasil');
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
        return redirect()->back()->with('message','kategori berhasil dihapus');
    }
}
