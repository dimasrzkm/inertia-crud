import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function Pagination({ links }) {
    return (
        <div className="btn-group">
            {links.map((link, key) => (
                <Link
                    as="button"
                    className={`btn ${link.active && "btn-active"} ${
                        link.url === null && "btn-disabled"
                    }`}
                    key={key}
                    href={link.url}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                />
            ))}
        </div>
    );
}
