import React from "react";
import {DataMaker} from "./DataMaker";
import {Posts} from "./Posts";

export const Task3 = () => {
    const url = "https://jsonplaceholder.typicode.com/todos?_limit=10";

    return (
        <div>
            <DataMaker url={url} renderDataUrl={(data) => <Posts posts={data}/>}/>
        </div>
    )
};