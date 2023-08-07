<?php

use App\Http\Controllers\BannerController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\WalletController;
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

Route::get('/', [CategoryController::class, 'show'])->name("home");
Route::get('/kategori/{id}', function () {
    return Inertia::render("Kategori");
});


Route::group(['prefix' => 'admin', 'middleware' => ['auth', 'verified']], function () {

    Route::get('/', function () {
        return Inertia::render('pageAdmin/Dashboard');
    })->name('dashboard');

    Route::get('user', [ProfileController::class, 'show'])->name('admin.user');
    Route::post('/user', [ProfileController::class, 'store']);
    Route::post('/user/delete', [ProfileController::class, 'delete'])->name('delete.user');


    // Route::get('produk', [ProductController::class, 'store' ]); 
    // Route::get('produk', [ProductController::class, 'index' ])->name('produk'); 
    // Route::get('produk/edit/{product}', [ProductController::class, 'edit' ])->name('edit.produk'); 
    // Route::get('produk/update/{product}', [ProductController::class, 'update' ]); 
    // Route::get('produk/delete', [ProductController::class, 'destroy' ])->name("delete.produk"); 
    // Route::get('/product/bulk', [ProductController::class, 'massUploadForm'])->name('product.bulk'); 
    // Route::post('/product/bulk', [ProductController::class, 'massUpload'])->name('product.saveBulk');
    Route::get('/banner-iklan', [BannerController::class, 'index'])->name('bannerIklan');
    Route::post('/banner/update', [BannerController::class, 'update'])->name("update.banner");

    Route::post('/banner-iklan/iklan-atas', [BannerController::class, 'iklanAtas']);
    Route::post('/banner-iklan/iklan-tengah', [BannerController::class, 'iklanTengah']);
    Route::post('/banner-iklan/iklan-bawah', [BannerController::class, 'iklanBawah']);
    Route::post('/banner-iklan/delete', [BannerController::class, 'destroy'])->name('delete.banner');


    Route::post('/produk', [ProductController::class, 'store']);
    Route::get('/produk', [ProductController::class, 'index'])->name('produk');
    Route::get('/produk/edit ', [ProductController::class, 'edit'])->name('edit.produk');
    Route::post('/produk/update', [ProductController::class, 'update'])->name("update.produk");
    Route::post('/produk/delete', [ProductController::class, 'destroy'])->name('delete.produk');



    Route::post('/kategori', [CategoryController::class, 'store']);
    Route::get('/kategori', [CategoryController::class, 'index'])->name('admin.kategori');
    Route::get('/kategori/edit ', [CategoryController::class, 'edit'])->name('edit.kategori');
    Route::post('/kategori/update', [CategoryController::class, 'update'])->name("update.kategori");
    Route::post('/kategori/delete', [CategoryController::class, 'destroy'])->name('delete.kategori');


    Route::get('/pengaturan', [SettingController::class, 'index'])->name('pengaturan');
    Route::post('/pengaturan/update', [SettingController::class, 'update']);

    Route::get('/dompet', [WalletController::class, 'index'])->name('dompet');
    Route::post('/dompet', [WalletController::class, 'store']);
    Route::post('/dompet/update', [WalletController::class, 'update']);
    Route::post('/dompet/delete', [WalletController::class, 'destroy'])->name('delete.dompet');
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

require __DIR__ . '/auth.php';
