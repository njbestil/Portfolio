import PropTypes from "prop-types";
import { useState, useEffect } from "react"

export default function Badge({highlight, children}) {
    const [classValue, setClassValue] = useState();

    useEffect(()=>{
        var classVal = "text-xs rounded-md px-5 py-1 text-neutral-600";
        classVal += (highlight)? " shadow-inner" : " shadow-sm";

        setClassValue(classVal);
    },[highlight])

    return (
        <>
            <div className={classValue}>
                {children}
            </div>
        </>
    )
}

Badge.propTypes = {
    highlight: PropTypes.bool,
    children: PropTypes.node.isRequired,
};
