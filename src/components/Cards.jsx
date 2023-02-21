import React from 'react'

export default function Cards(props) {
    return (
        <div className="shadow-xl md:h-[500px] hover:scale-105 duration-500">
            {props.data}
        </div>
    )
}
