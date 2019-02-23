import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';


const Input = props => {
    return (
        <input type={props.type} name={props.name} placeholder={props.placeholder} />
    )
}

export default Input;

