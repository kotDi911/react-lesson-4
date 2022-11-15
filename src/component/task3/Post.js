import React from "react";

export const Post = ({post}) => {
    const {title, completed} = post;
    return(
        <li className="li">
            <span className="text">
                {`Title: ${title} - completed: ${completed}`}
            </span>
        </li>
    )
};