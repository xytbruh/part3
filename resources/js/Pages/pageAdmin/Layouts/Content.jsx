import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Content({ children }) {
    return (
        <Authenticated>
            <div className="drawer lg:drawer-open">
                <input
                    id="my-drawer-3"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col">
                    <Navbar />
                    <div className="p-6">{children}</div>
                </div>
                <Sidebar />
            </div>
        </Authenticated>
    );
}
