import React, { useEffect } from "react";
import {
    ArrowRightOnRectangleIcon,
    UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Link, usePage } from "@inertiajs/inertia-react";
import { toast, Toaster } from "react-hot-toast";

export default function App({ children }) {
    const { auth, flash } = usePage().props;
    useEffect(() => {
        flash.message && toast.success(flash.message);
    }, [flash.message]);
    return (
        <>
            <Toaster position="top-right" />
            <div className="drawer drawer-mobile">
                <input
                    id="my-drawer-2"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content">
                    {/* Navbar */}
                    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-30 bg-opacity-90 backdrop-blur">
                        <div className="navbar-start">
                            <div>
                                <label
                                    className="btn btn-ghost lg:hidden"
                                    htmlFor="my-drawer-2"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h8m-8 6h16"
                                        />
                                    </svg>
                                </label>
                            </div>
                            <a className="btn btn-ghost normal-case text-xl">
                                Inertia-CRUD
                            </a>
                        </div>
                        <div className="navbar-end">
                            <h2>{auth.user.name}</h2>
                            <div className="dropdown dropdown-bottom dropdown-end">
                                <label
                                    tabIndex={0}
                                    className="btn m-1 btn-ghost"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="inline-block w-5 h-5 stroke-current"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                        ></path>
                                    </svg>
                                </label>
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                                >
                                    <li>
                                        <a className="inline-flex justify-between">
                                            Profile
                                            <UserCircleIcon className="h-5 w-5" />
                                        </a>
                                    </li>
                                    <li>
                                        <Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                            className="inline-flex justify-between"
                                        >
                                            Logout
                                            <ArrowRightOnRectangleIcon className="h-5 w-5" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* End Navbar */}
                    {/* Content */}
                    <div className="p-4">{children}</div>
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer-2"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 w-80 bg-base-200 text-base-content">
                        <h2 className="text-2xl text-center z-20 bg-base-200 bg-opacity-90 backdrop-blur sticky top-0 px-4 py-3 shadow-sm">
                            Dashboard
                        </h2>
                        <li>
                            <Link>
                                <UserCircleIcon className="h-5 w-5" />
                                Users
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
