import { useRef } from "react";

export default function useDialog() {
    const modal = useRef(null);
    return [
        (open = () => modal.current.classList.add("modal-open")),
        (close = () => modal.current.classList.remove("modal-open")),
        modal,
    ];
}
