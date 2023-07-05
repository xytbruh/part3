import { Link } from "@inertiajs/react";
import React from "react";

export default function BreadCrumbs({ title }) {
    return (
        <div className="text-sm breadcrumbs">
            <ul>
                <li>
                    <Link href={route('dashboard')}>Dashboard</Link>
                </li>

                <li>{title}</li>
            </ul>
        </div>
    );
}
