import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

const Test = () => {
    console.log("dziala")
}
const ElementList = (props) => {
    return (
        <li className="listElemContainer">
            <span className="listElem" contentEditable={props.contentEdit}>
                {props.type}. {props.dict} {props.address} {props.city}
            </span>
            <button className="editBtn" onClick={props.edit}>{props.contentEdit ? "Zapisz" : "Edytuj"}</button>
            <button className="deleteBtn" onClick={props.delete}>Usuń</button>
        </li>
    )
}
export default ElementList;