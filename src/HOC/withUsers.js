import React, {Component} from "react";
import {UsersContext} from "../context/UserContext";

export const withUsers = (WrappedComponent) => {
    return class extends Component {
        render() {
            return (
                <UsersContext.Consumer>
                    {(value) => {
                        return <WrappedComponent {...value}/>  // {...this.state} {...this.props} ??
                    }}
                </UsersContext.Consumer>
            )
        }
    }
};