import React from "react";

export const Card = ({user}) =>{
    return (<div key={user.id} className='text-area'>
        <b>ID:</b> {user.id} <br/> <b>Name:</b> {user.name}  <br/> <b>Email:</b> {user.email}
    </div>)
};
