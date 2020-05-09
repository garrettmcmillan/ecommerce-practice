import React from 'react'

export default function Title({name, title}) {
    return (
        <div className="row">
            <div className="col-10 mx-auto mt-2 mb-4 text-center text-title">
                <h2 className="text-capitalize text-green">
    {name} {title}
                </h2>
            </div>
        </div>
    )
}
