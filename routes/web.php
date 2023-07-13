<?php

use App\Http\Controllers\CategoryController;
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

Route::get('/', [CategoryController::class, 'index'] );
Route::get('/kategori/{id}', function() {
    return Inertia::render("Kategori");
})->name("kategori.detail");



Route::group(['prefix' => 'admin', 'middleware' => ['auth', 'verified']], function() {
    
    Route::get('/', function () {
        return Inertia::render('pageAdmin/Dashboard');
    })->name('dashboard');
    
    Route::get('menu-master', function () {
        return Inertia::render('pageAdmin/MenuMaster');
    })->name('menu.master');
    
    // menu profil
    Route::get('menu-profil', function () {
        return Inertia::render('pageAdmin/MenuProfil');
    })->name('menu.profil');
    
    
    //  menu layanan
    Route::get('menu-layanan', function () {
        return Inertia::render('pageAdmin/MenuLayanan');
    })->name('menu.layanan');
    
    Route::get('menu-ijin', function () {
        return Inertia::render('pageAdmin/MenuIjin');
    })->name('menu.ijin');
    
    // pengaturan
    Route::get('pengaturan', function () {
        return Inertia::render('pageAdmin/Pengaturan');
    })->name('pengaturan');
    Route::post('menu-marketplace', [CategoryController::class, 'store'] );
    Route::get('menu-marketplace', [CategoryController::class, 'show'] )->name('menu.marketplace');
    Route::get('menu-marketplace/edit ', [CategoryController::class, 'edit'] )->name('edit.kategori');
    Route::put('menu-marketplace/update', [CategoryController::class, 'update'] )->name('update.kategori');
    Route::post('menu-marketplace/delete', [CategoryController::class, 'destroy'] )->name('delete.kategori');
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
