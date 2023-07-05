import { Link } from "@inertiajs/react";
import React from "react";

export default function Footer({ user }) {
    return (
        <footer className="w-full">
            <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-primary ">
                <div className="grid h-full max-w-lg grid-cols-4 mx-auto">
                    <button
                        type="button"
                        className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50  group"
                    >
                        <svg
                            className="w-6 h-6 mb-1 text-white  group-hover:text-blue-600 "
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                        </svg>
                        <span className="text-sm text-white  group-hover:text-blue-600 ">
                            Home
                        </span>
                    </button>
                    <Link
                        href={route("chat")}
                        className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group"
                    >
                        <svg
                            className="w-6 h-6 mb-1  text-white  group-hover:text-blue-600 "
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z" />
                        </svg>
                        <span className="text-sm text-white  group-hover:text-blue-600 ">
                            Chat
                        </span>
                    </Link>
                    <button
                        type="button"
                        className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group"
                    >
                        <svg
                            className="w-6 h-6 mb-1 text-white  group-hover:text-blue-600 "
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z" />
                        </svg>
                        <span className="text-sm text-white  group-hover:text-blue-600 ">
                            Category
                        </span>
                    </button>
                    <div
                        className="dropdown dropdown-top dropdown-end inline-flex flex-col items-center justify-center hover:bg-gray-50 group"
                        tabIndex="0"
                    >
                        <svg
                            className="w-6 h-6 mb-1 text-white  group-hover:text-blue-600 "
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path
                                clipRule="evenodd"
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                            ></path>
                        </svg>
                        <span className="text-sm text-white  group-hover:text-blue-600 ">
                            Profile
                        </span>
                        {!user ? (
                            <ul
                                tabIndex="0"
                                className="dropdown-content z-[1] menu  shadow bg-white text-black rounded-box w-52"
                            >
                                <li>
                                    <Link href={route("login")}>Login</Link>
                                </li>
                                <li>
                                    <Link href={route("register")}>
                                        Register
                                    </Link>
                                </li>
                            </ul>
                        ) : (
                            <ul
                                tabIndex="0"
                                className="dropdown-content z-[1] menu  shadow bg-white text-black rounded-box w-52"
                            >
                                <li>
                                    <Link href={route("dashboard")}>
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={route("logout")}
                                        as="button"
                                        method="post"
                                    >
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );
}
