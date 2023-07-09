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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});



Route::get('dashboard', function () {
    return Inertia::render('pageAdmin/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');
// menu master

Route::get('admin/menu-master', function () {
    return Inertia::render('pageAdmin/MenuMaster');
})->middleware(['verified'])->name('menu.master');
Route::get('admin/menu-user', function () {
    return Inertia::render('pageAdmin/menuMaster/User');
})->middleware(['verified'])->name('menu.user');
Route::get('admin/menu-penyedia', function () {
    return Inertia::render('pageAdmin/menuMaster/Penyedia');
})->middleware(['verified'])->name('menu.penyedia');
Route::get('admin/menu-fitur', function () {
    return Inertia::render('pageAdmin/menuMaster/Fitur');
})->middleware(['verified'])->name('menu.fitur');

// menu profil
Route::get('admin/menu-profil', function () {
    return Inertia::render('pageAdmin/MenuProfil');
})->middleware(['verified'])->name('menu.profil');
Route::get('admin/alamat', function () {
    return Inertia::render('pageAdmin/menuProfil/Alamat');
})->middleware(['verified'])->name('alamat');
Route::get('admin/banner-iklan', function () {
    return Inertia::render('pageAdmin/menuProfil/BannerIklan');
})->middleware(['verified'])->name('banner.iklan');
Route::get('admin/logo', function () {
    return Inertia::render('pageAdmin/menuProfil/Logo');
})->middleware(['verified'])->name('logo');
Route::get('admin/sosial-media', function () {
    return Inertia::render('pageAdmin/menuProfil/SosialMedia');
})->middleware(['verified'])->name('sosial.media');


//  menu layanan
Route::get('admin/menu-layanan', function () {
    return Inertia::render('pageAdmin/MenuLayanan');
})->middleware(['verified'])->name('menu.layanan');
Route::get('admin/layanan-free', function () {
    return Inertia::render('pageAdmin/menuLayanan/LayananFree');
})->middleware(['verified'])->name('layanan.free');
Route::get('admin/layanan-medium', function () {
    return Inertia::render('pageAdmin/menuLayanan/LayananMedium');
})->middleware(['verified'])->name('layanan.medium');
Route::get('admin/layanan-pro', function () {
    return Inertia::render('pageAdmin/menuLayanan/LayananPro');
})->middleware(['verified'])->name('layanan.pro');
Route::get('admin/layanan-tambah', function () {
    return Inertia::render('pageAdmin/menuLayanan/Tambah');
})->middleware(['verified'])->name('layanan.tambah');


// menu market place


Route::middleware('verified')->group(function () {
    Route::get('kategori', [CategoryController::class, 'index']);
    Route::post('admin/menu-marketplace', [CategoryController::class, 'store'] );
    Route::get('admin/menu-marketplace', [CategoryController::class, 'show'] )->name('menu.marketplace');
    Route::get('admin/menu-marketplace/edit', [CategoryController::class, 'edit'] )->name('edit.kategori');
    Route::put('admin/menu-marketplace/update', [CategoryController::class, 'update'] )->name('update.kategori');
    Route::post('admin/menu-marketplace/delete', [CategoryController::class, 'destroy'] )->name('delete.kategori');

});


Route::get('admin/produk', function () {
    return Inertia::render('pageAdmin/menuMarketPlace/Produk');
})->middleware(['verified'])->name('produk');
Route::get('admin/transaksi', function () {
    return Inertia::render('pageAdmin/menuMarketPlace/Transaksi');
})->middleware(['verified'])->name('transaksi');

// menu ijin
Route::get('admin/menu-ijin', function () {
    return Inertia::render('pageAdmin/MenuIjin');
})->middleware(['verified'])->name('menu.ijin');
Route::get('admin/pergantian-lokasi-penyedia', function () {
    return Inertia::render('pageAdmin/menuIjin/PergantianLokasiPenyedia');
})->middleware(['verified'])->name('pergantian.lokasi.penyedia');
Route::get('admin/pengaduan-untuk-penyedia', function () {
    return Inertia::render('pageAdmin/menuIjin/PengaduanUntukPenyediaLayanan');
})->middleware(['verified'])->name('pengaduan.untuk.penyedia');
Route::get('admin/ikut-iklan', function () {
    return Inertia::render('pageAdmin/menuIjin/IkutIklan');
})->middleware(['verified'])->name('ikut.iklan');
Route::get('admin/verifikasi', function () {
    return Inertia::render('pageAdmin/menuIjin/Verifikasi');
})->middleware(['verified'])->name('verifikasi');

// pengaturan
Route::get('admin/pengaturan', function () {
    return Inertia::render('pageAdmin/Pengaturan');
})->middleware(['verified'])->name('pengaturan');

// integrasi
Route::get('admin/integrasi', function () {
    return Inertia::render('pageAdmin/Integrasi');
})->middleware(['verified'])->name('integrasi');

// dompet
Route::get('admin/dompet', function () {
    return Inertia::render('pageAdmin/Dompet');
})->middleware(['verified'])->name('dompet');

// laporan
Route::get('admin/laporan', function () {
    return Inertia::render('pageAdmin/Laporan');
})->middleware(['verified'])->name('laporan');
Route::get('/contoh', function () {
    return Inertia::render('Contoh');
})->name('contoh');
Route::get('/contoh2', function () {
    return Inertia::render('Contoh2');
})->name('contoh2');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
