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
        return Inertia::render('pageAdmin/MenuMarketPlace' ,[
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
        return Inertia::render('pageAdmin/MenuMarketPlace', [
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
    public function edit(Category $category)
    {
        return Inertia::render('pageAdmin/MenuMarketPlace/Edit', [
            'myCategory' => $category,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
        $request->validate([
            'title'   => 'required',
        ]);

        //update post
        $category->update([
            'title'     => $request->title,
        ]);
        return redirect()->back()->with('message', 'kategori berhasil dibuat');
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
