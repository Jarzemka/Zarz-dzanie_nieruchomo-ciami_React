import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

const handleEditBtn = () => {
    console.log("edytuj");
}

const handleRmBtn = () => {
    console.log("usun")

}

const ElementList = props => {
    return (
        <li >{props.type}. {props.address} {props.city}</li>
    )
}

export default ElementList;