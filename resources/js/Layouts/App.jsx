import React, { useEffect } from "react";
import {
    ArrowRightOnRectangleIcon,
    EllipsisHorizontalIcon,
    UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Link, usePage } from "@inertiajs/react";
import { toast, Toaster } from "react-hot-toast";
import Dropdown from "../Components/Dropdown";

export default function App({ children }) {
    const { auth, flash } = usePage().props;
    useEffect(() => {
        flash.message && toast.success(flash.message);
    }, [flash.message]);
    return (
        <>
            <Toaster position="bottom-right" />
            <div className="drawer drawer-mobile">
                <input
                    id="my-drawer-2"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content">
                    {/* Navbar */}
                    <div className="sticky top-0 z-30 shadow-sm navbar bg-base-100 bg-opacity-90 backdrop-blur">
                        <div className="navbar-start">
                            <div>
                                <label
                                    className="btn btn-ghost lg:hidden"
                                    htmlFor="my-drawer-2"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5"
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
                            <a className="text-xl normal-case btn btn-ghost">
                                Inertia-CRUD
                            </a>
                        </div>
                        <div className="navbar-end">
                            <Dropdown
                                icons={
                                    <EllipsisHorizontalIcon className="w-5 h-5" />
                                }
                            >
                                <li>
                                    <p className="inline-flex justify-between leading-tight">
                                        {auth.user.name}
                                    </p>
                                </li>
                                <li>
                                    <a className="inline-flex justify-between">
                                        Profile
                                        <UserCircleIcon className="w-5 h-5" />
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
                                        <ArrowRightOnRectangleIcon className="w-5 h-5" />
                                    </Link>
                                </li>
                            </Dropdown>
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
                    <ul className="p-4 menu w-80 bg-base-200 text-base-content">
                        <Link
                            as="button"
                            href={route("dashboard")}
                            className="sticky top-0 z-20 px-4 py-3 text-2xl text-center shadow-sm bg-base-200 bg-opacity-90 backdrop-blur"
                        >
                            Dashboard
                        </Link>
                        <li>
                            <Link href={route("users.index")}>
                                <UserCircleIcon className="w-5 h-5" />
                                Users
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
