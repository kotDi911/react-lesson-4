import React from "react";

export const Contact = (props) => {
    return (
        <div key={props.id} className='card'>
            <img src={props.thumbnail}/>
            <div>
                <b>Name:</b> {props.name} <br/> <b>ID:</b> {props.id}
            </div>
        </div>
    )
};