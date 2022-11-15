import React, {useEffect, useState} from "react";

export const UsersContext = React.createContext();

export const UsersProvider = (props) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(result => setUsers(result));
    }, []);

    return (
        <UsersContext.Provider value={{users}}>
            {props.children}
        </UsersContext.Provider>
    )
};