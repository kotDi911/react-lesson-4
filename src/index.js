import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/Task1.css';
import './styles/Task2.css';
import './styles/Task3.css';
import './styles/Task4.css';
import {UsersProvider} from "./context/UserContext";
import {BrowserRouter as Router} from "react-router-dom";
import RouterApp from "./component/Task4/RouterApp";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <UsersProvider>
                <RouterApp/>
            </UsersProvider>
        </Router>
    </React.StrictMode>
);