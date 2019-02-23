import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import { METHODS } from 'http';
import Input from './addflat_elem.jsx';

const property = ["Mieszkanie", "Pokój", "Apartament", "Dom", "Szeregówka", "Garaż"];
const status = ["do wynajmu", "do remontu", "na sprzedaż", "planowany zakup"];
const destiny = ["mieszkalna", "użyteczność publiczna"]
const randomNumber = Math.floor(Math.random() * 500 + 1);

class AddFlat extends React.Component {
    state = {
        number: randomNumber,
        type: "Mieszkanie",
        status: "do wynajmu",
        destiny: "mieszkalna",
        person: {
            name: "",
            surname: "",
            pesel: "",
            email: "",
            phone: "",
        },
        property: {
            balcon: "",
            text: "",
            isTaras: false,
            isGarage: false,
        },
    }

    handleChange = (e) => {
        if (e.target.type === 'checkbox') {
            console.log('check');
            this.setState({
                [e.target.name]: e.target.checked,
            });
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }

    btnSubmit = () => {
        console.log('submit');
    };

    fetchSetData = () => {
        console.log("klik");
        const url = 'db.json';
        fetch(url)
            .then(resp => resp.json())
            .then(resp => {
                console.log(resp);
                this.setState({
                    info: '',
                });
                console.log(this.state);
            }).catch(err => {
                console.log(err);
            });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.btnSubmit}>
                    <h2>Umowa numer: {this.state.number}</h2>
                    <label>Typ</label>
                    <select name="type" value={this.state.type} onChange={this.handleChange}>
                        {property.map((item, i) =>
                            <option key={i}>{item}</option>
                        )}
                    </select>

                    <label>Status nieruchomości</label>
                    <select name="status" value={this.state.status} onChange={this.handleChange}>
                        {status.map((item, i) =>
                            <option key={i}>{item}</option>
                        )}
                    </select>

                    <label>Przeznaczenie nieruchomości</label>
                    <select name="destiny" value={this.state.destiny} onChange={this.handleChange}>
                        {destiny.map((item, i) =>
                            <option key={i}>{item}</option>
                        )}
                    </select>
                    <section className="box">
                        <label>Dane dot. wynajmowanego obiektu</label>
                        <input type="text" placeholder="Adres" />
                        <input type="text" placeholder="Miasto" />
                        <input type="number" placeholder="Ilość pokoi" />
                        <input type="number" placeholder="Powierzchnia m²" />
                        <input type="number" id="house" placeholder="Ilość pięter" />
                        <input type="text" placeholder="Numer ubezpieczenia" />
                        <input type="text" placeholder="Agencja ubezpieczeniowa" />
                        <label>Balkon:</label>
                        <input name="isTaras" type="checkbox" checked={this.state.property.isTaras} onChange={this.handleChange} />
                        <label>Garaż:</label>
                        <input name="isGarage" type="checkbox" checked={this.state.property.isGarage} onChange={this.handleChange} />
                    </section>
                    <section>
                        <label>Dane najemcy do umowy</label>
                        <input type="text" name='name' placeholder="Imię najemcy" value={this.state.person.name} onChange={this.handleChange} />
                        <input type="text" name='surname' placeholder="Nazwisko najemcy" value={this.state.person.surname} onChange={this.handleChange} />
                        <input type="number" name='pesel' placeholder="PESEL" value={this.state.person.pesel} onChange={this.handleChange} />
                        <input type="email" name="email" placeholder="example@example.com" value={this.state.person.email} onChange={this.handleChange} />
                        <input type="text" name="phone" placeholder="Telefon kontaktowy" value={this.state.person.phone} onChange={this.handleChange} />
                    </section>
                    <section>
                        <label>Wycena</label>
                        <input type="text" placeholder="Czynsz" />
                        <input type="text" placeholder="Cena za m²" />
                        <div>Tu mnoznik cena*powierzchnia</div>
                    </section>

                    <section>
                        Data rozpoczęcia: <input type="date" placeholder="Początek umowy" />
                        Data zakończenia: <input type="date" placeholder="Koniec umowy" />
                        Dodatkowe informacje: <textarea name="text" value={this.state.property.text} onChange={this.handleChange} placeholder="Dodatkowe uwagi" rows="5" cols="30" />
                    </section>

                    <section>
                        <button type='submit' >Dodaj nieruchomość</button>

                    </section>
                </form>
                <button >Drukuj umowę</button>
            </div>
        );
    }
}

export default AddFlat;