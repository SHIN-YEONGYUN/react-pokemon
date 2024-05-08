import { useEffect } from "react";

const onClickOutside = (ref, handler) => {
    useEffect(() => {
        const listner = (event) => {
            console.log(event.target)
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler()
        };
        document.addEventListener("mousedown", listner);
        return () => {
            document.addEventListener("mousedown", listner);
        }
    }, [ref, handler])
}

export default onClickOutside;