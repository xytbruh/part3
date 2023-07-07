import React from "react";
import Content from "./Layouts/Content";

export default function MenuIjin() {
    return <Content><div className="border-b border-b-gray-200">
    <ul className="-mb-px flex items-center gap-4 text-sm font-medium">
        <li className="flex-1">
            <a
                href="#"
                className="relative flex items-center justify-center gap-2 px-1 py-3 text-white after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:hover:bg-indigo-700 hover:text-indigo-700"
            >
                Pengaturan
            </a>
        </li>
        <li className="flex-1">
            <a
                href="#"
                className="flex items-center justify-center gap-2 px-1 py-3 text-white hover:text-indigo-700"
            >
                Laporan
            </a>
        </li>
        <li className="flex-1">
            <a
                href="#"
                className="flex items-center justify-center gap-2 px-1 py-3 text-white hover:text-indigo-700"
            >
                Integrasi
                <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-black">
                    {" "}
                    8{" "}
                </span>
            </a>
        </li>
        <li className="flex-1">
            <a
                href="#"
                className="flex items-center justify-center gap-2 px-1 py-3 text-white hover:text-indigo-700"
            >
                Dompet
            </a>
        </li>
       
    </ul>
</div></Content>;
}
