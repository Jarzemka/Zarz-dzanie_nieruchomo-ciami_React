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
        <li >
            <span>{props.type}. {props.dict} {props.address} {props.city}</span>
            <button className="listBtn" onClick={handleEditBtn}>Edytuj</button><button className="listBtn" onClick={handleRmBtn}>Usuń</button>
        </li>
    )
}
export default ElementList;