import '../../styles/Task1.css';
import React, {Component} from "react";
import {withUsers} from "../../HOC/withUsers";
import {Card} from "./Card";

class Task1 extends Component {
    render() {
        const {users} = this.props;
        return (
            <div className="app1">
                {users.map((user) => <Card key={user.id} user={user}/>)}
            </div>
        );
    }
}

export default withUsers(Task1);
