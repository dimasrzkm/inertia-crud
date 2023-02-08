import "./bootstrap";
import "../css/app.css";

import React from "react";
import { render } from "react-dom";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

import { createInertiaApp } from "@inertiajs/react";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        return render(<App {...props} />, el);
    },
    progress: { color: "#4B5563", showSpinner: true },
});
