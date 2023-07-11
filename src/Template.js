import React from "react"

const MadlibFunc = ({noun , noun2 , adjective , color}) => {
    const template = `the ${noun} ${noun2} ${adjective} ${color}`
    return (
        <div>
            <p>template</p>
        </div>
    )
}

export default MadlibFunc;
