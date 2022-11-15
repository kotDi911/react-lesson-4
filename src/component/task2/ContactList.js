import React from "react";
import loaderHOC from "../../HOC/loaderHOC";
import {Contact} from "./Contact";

class ContactsList extends React.Component {
    render() {
        const {contacts} = this.props;
        return (
            <div className="app2">
                {contacts.map((contact) => <Contact key={contact.id} id={contact.id} thumbnail={contact.thumbnail} name={contact.name}/>)}
            </div>
        );
    }
}

export default loaderHOC(ContactsList)