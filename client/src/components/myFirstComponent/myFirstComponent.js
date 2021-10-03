import React from "react"
import './myFirstComponent.css'

export const MyFirstComponent = (props) => {

    return(
        <>
        <h1 className="title">
            {props.name}
            {props.age}
            </h1>
        </>
    )
}