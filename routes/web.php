<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/asdsad', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ],);
// });

Route::get('/', [CategoryController::class, 'show'] );
Route::get('/kategori/{id}', function() {
    return Inertia::render("Kategori");
})->name("kategori.detail");



Route::group(['prefix' => 'admin', 'middleware' => ['auth', 'verified']], function() {
    
    Route::get('/', function () {
        return Inertia::render('pageAdmin/Dashboard');
    })->name('dashboard');
    
    
    Route::get('produk', [ProductController::class, 'store' ]); 
    Route::get('produk', [ProductController::class, 'index' ])->name('produk'); 
    Route::get('produk/edit/{product}', [ProductController::class, 'edit' ])->name('edit.produk'); 
    Route::get('produk/update/{product}', [ProductController::class, 'update' ]); 
    Route::get('produk/delete', [ProductController::class, 'destroy' ])->name("delete.produk"); 
    // Route::get('/product/bulk', [ProductController::class, 'massUploadForm'])->name('product.bulk'); 
    // Route::post('/product/bulk', [ProductController::class, 'massUpload'])->name('product.saveBulk');


    Route::post('/kategori', [CategoryController::class, 'store'] );
    Route::get('/kategori', [CategoryController::class, 'index'] )->name('kategori');
    Route::get('/kategori/edit ', [CategoryController::class, 'edit'] )->name('edit.kategori');
    Route::post('/kategori/update', [CategoryController::class, 'update'] )->name("update.kategori");
    Route::post('/kategori/delete', [CategoryController::class, 'destroy'] )->name('delete.kategori');
});

// menu master


// menu market place


Route::middleware('verified')->group(function () {

});


// integrasi


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
