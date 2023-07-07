import React from "react";

export default function Authenticated({ children }) {
    return (
        <div className="min-h-screen bg-gray-800">
            <main>{children}</main>
        </div>
    );
}
