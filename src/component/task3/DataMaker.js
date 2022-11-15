import React, {useEffect, useState} from "react";

export const DataMaker = ({url, renderDataUrl}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(result => setPosts(result));
    }, []);

    return(
        <>
            {renderDataUrl(posts)}
        </>
    )
};