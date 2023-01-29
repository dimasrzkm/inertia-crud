import React from "react";

export default function Card({ children }) {
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl mb-8">
                <div className="card-body">{children}</div>
            </div>
        </>
    );
}
