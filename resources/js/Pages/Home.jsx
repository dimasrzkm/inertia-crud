import React from "react";

export default function Home({ user }) {
    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <p>
                    Halo perkenalkan nama saya {user.name} dan username saya{" "}
                    {user.username}
                </p>
            </div>
        </>
    );
}
