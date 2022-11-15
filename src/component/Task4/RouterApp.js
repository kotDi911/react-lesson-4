import React, {Component} from "react";
import {Route, Routes} from "react-router";
import Task1 from "../task1/Task1";
import ContactsList from "../task2/ContactList";
import {Task3} from "../task3/Task3";
import {Navigation} from "./Navigation";
import {Main} from "./Main";

export default class RouterApp extends Component {
    render() {
        return (
            <nav>
                <Navigation/>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/task1" element={<Task1/>}/>
                    <Route path="/task2" element={<ContactsList/>}/>
                    <Route path="/task3" element={<Task3/>}/>
                </Routes>
            </nav>
        )
    }
}