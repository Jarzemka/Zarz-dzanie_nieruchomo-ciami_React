import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

const Person = props => {
    return (
        <section className="box">
            <label className="boxTitle">Dane najemcy do umowy</label>
            <input type="text" name='name' placeholder="Imię najemcy" />
            <input type="text" name='surname' placeholder="Nazwisko najemcy" />
            <input type="number" name='pesel' placeholder="PESEL" />
            <input type="number" name='pesel' placeholder="Seria i numer dowou osobistego" />
            <input type="email" name="email" placeholder="example@example.com" />
            <input type="text" name="phone" placeholder="Telefon kontaktowy" />
        </section>
    )
}
export default Person;



{/* <input type={props.type} title={props.dict} name={props.name} placeholder={props.placeholder} /> */ }
{/* <input type="text" name='name' placeholder="Imię najemcy" value={this.state.person.name} onChange={this.handleChange} />
        <input type="text" name='surname' placeholder="Nazwisko najemcy" value={this.state.person.surname} onChange={this.handleChange} />
        <input type="number" name='pesel' placeholder="PESEL" value={this.state.person.pesel} onChange={this.handleChange} />
        <input type="email" name="email" placeholder="example@example.com" value={this.state.person.email} onChange={this.handleChange} />
        <input type="text" name="phone" placeholder="Telefon kontaktowy" value={this.state.person.phone} onChange={this.handleChange} /> */}