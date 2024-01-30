import React, { useState, useEffect } from "react"
export default function Bandge({highlight, children}) {
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