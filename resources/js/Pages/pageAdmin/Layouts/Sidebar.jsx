import { Link } from "@inertiajs/react";
import React from "react";
import LogoPart from "@/img/LogoPartlivin.png";

export default function Sidebar() {
    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
            <div className="menu bg-base-300 w-80 h-full ">
                <div className="h-auto bg-base-300">
                    <div className="w-full mx-auto">
                        <img src={LogoPart} />
                    </div>
                    <div className="divider">Page</div>

                    <ul className="rounded-box ">
                        <li>
                            <Link href={route("dashboard")}>Dashboard</Link>
                        </li>
                        <li>
                            <details>
                                <summary>Menu Master</summary>
                                <ul>
                                    <li>
                                        <Link href={route("menu.user")}>
                                            Menu User
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={route("menu.penyedia")}>
                                            Menu Penyedia
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={route("menu.fitur")}>
                                            Fitur
                                        </Link>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Menu Profil</summary>
                                <ul>
                                    <li>
                                        <Link href={route("logo")}>Logo</Link>
                                    </li>
                                    <li>
                                        <Link href={route("alamat")}>
                                            Alamat
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={route("sosial.media")}>
                                            Sosial Media
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={route("banner.iklan")}>
                                            Banner Iklan
                                        </Link>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Menu Layanan</summary>
                                <ul>
                                    <li>
                                        <Link href={route("layanan.pro")}>
                                            Layanan Penyedia pro
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={route("layanan.medium")}>
                                            Layanan Penyedia Medium
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={route("layanan.free")}>
                                            Layanan Penyedia Free
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={route("layanan.tambah")}>
                                            Tambah+
                                        </Link>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Menu Market Place</summary>
                                <ul>
                                    <li>
                                        <Link href={route("produk")}>
                                            Produk
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={route("my.kategori")}>
                                            Kategori
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={route("transaksi")}>
                                            Transaksi
                                        </Link>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Menu Ijin</summary>
                                <ul>
                                    <li>
                                        <Link
                                            href={route(
                                                "pergantian.lokasi.penyedia"
                                            )}
                                        >
                                            Pergantian Lokasi Penyedia
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={route("verifikasi")}>
                                            Verifikasi
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={route(
                                                "pengaduan.untuk.penyedia"
                                            )}
                                        >
                                            Pengaduan Untuk Penyedia Layanan
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={route("ikut.iklan")}>
                                            Ikut Iklan
                                        </Link>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <Link href={route("pengaturan")}>Pengaturan</Link>
                        </li>
                        <li>
                            <Link href={route("laporan")}>Laporan</Link>
                        </li>
                        <li>
                            <Link href={route("integrasi")}>Integrasi</Link>
                        </li>
                        <li>
                            <Link href={route("dompet")}>Dompet</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
