import React from "react";

export default function Dropdown({ icons, children }) {
    return (
        <>
            <div className="dropdown dropdown-bottom dropdown-end">
                <label tabIndex={0} className="btn m-1 btn-ghost">
                    {icons}
                </label>
                <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                    {children}
                </ul>
            </div>
        </>
    );
}
