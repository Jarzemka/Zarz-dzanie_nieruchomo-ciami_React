import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

const Options = props => {
    return (
        <div>TEST {props.dict}</div>
    )
}

export default Options;

{/* <select name="type" >
{props.dict.map((item, i) =>
    <option key={i} value={i}>{item}</option>
)}
</select> */}