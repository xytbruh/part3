import React from "react";

export default function Authenticated({ children }) {
    return (
        <div className="min-h-screen bg-base-100">
            <main>{children}</main>
        </div>
    );
}
