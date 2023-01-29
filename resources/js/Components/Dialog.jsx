import React, { forwardRef } from "react";

const Dialog = forwardRef(({ children }, ref) => {
    return (
        <div className="modal modal-bottom sm:modal-middle" ref={ref}>
            <div className="modal-box">{children}</div>
        </div>
    );
});

export default Dialog;
