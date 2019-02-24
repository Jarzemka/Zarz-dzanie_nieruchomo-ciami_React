import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import Person from './addflat_person.jsx';
import Property from './addflat_property.jsx';
import Options from './addflat_options.jsx';

const objects = ["Mieszkanie", "Pokój", "Apartament", "Dom", "Szeregówka", "Garaż"];
const status = ["do wynajmu", "do remontu", "na sprzedaż", "planowany zakup"];
const destiny = ["mieszkalna", "użyteczność publiczna"];
const randomNumber = Math.floor(Math.random() * 500 + 1);

class AddFlat extends React.Component {
    state = {
        number: randomNumber,
        type: "Mieszkanie",
        status: "do wynajmu",
        destiny: "mieszkalna",
        dict: this.props.dict,
        person: {
            name: "",
            surename: "",
            pesel: "",
            email: "",
            phone: "",
        },
        propertyDescription: {
            address: "",
            city: "",
            rooms: "",
            area: "",
            floors: "",
            insurance: "",
            agency: "",
            isBalcony: false,
            isGarage: false,
        },
        text: "",
    }

    handleChange = (e) => {
        console.log(e.target.value)
    }
    btnSubmit = (e) => {
        e.preventDefault();
        this.setState({
            person: {
                "name": e.target.name.value,
                "surename": e.target.surname.value,
                "pesel": e.target.pesel.value,
                "email": e.target.email.value,
                "phone": e.target.phone.value,
            },
            propertyDescription: {
                "address": e.target.address.value,
                "city": e.target.city.value,
                "rooms": e.target.rooms.value,
                "area": e.target.area.value,
                "floors": e.target.floors.value,
                "insurance": e.target.insurance.value,
                "agency": e.target.agency.value,

            },
            text: e.target.text.value,
            info: [],
        });
    };

    fetchSetData = () => {
        const url = '';
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
        console.log("addflat--?");
        console.log(this.props.dict.prop)
        let d = this.props.dict.prop;
        d.map((e, i) => {

        })

        // this.props.dict.prop.map((item, i) => {
        //     console.log(i);
        // });
        return (
            <div>
                <form onSubmit={this.btnSubmit}>
                    <h2>Umowa numer: {this.state.number}/2019</h2>
                    <div id="select">
                        <label>Typ</label>
                        <select name="type" >
                            {objects.map((item, i) =>
                                <option key={i} value={i}>{item}</option>
                            )}
                        </select>

                        <label>Status nieruchomości</label>
                        <select name="status" value={this.state.status} onChange={this.handleChange}>
                            {status.map((item, i) =>
                                <option key={i} value={i}>{item}</option>
                            )}
                        </select>

                        <label>Przeznaczenie nieruchomości</label>
                        <select name="destiny" value={this.state.destiny} onChange={this.handleChange}>
                            {destiny.map((item, i) =>
                                <option key={i} value={i}>{item}</option>
                            )}
                        </select>
                    </div>
                    <Property />
                    <Person />


                    <section>
                        <label>Wycena</label>
                        <input type="text" placeholder="Czynsz" />
                        <input type="text" placeholder="Cena za m²" />
                        <div>Tu mnoznik cena*powierzchnia</div>
                    </section>

                    <section>
                        Data rozpoczęcia: <input type="date" placeholder="Początek umowy" />
                        Data zakończenia: <input type="date" placeholder="Koniec umowy" />
                        Dodatkowe informacje: <textarea name="text" value={this.state.text} placeholder="Dodatkowe uwagi" rows="5" cols="30" />
                    </section>

                    <section>
                        <button className="form" type='submit'>Dodaj nieruchomość</button>
                    </section>
                    <section>
                        <button className="form" >Drukuj umowę</button>
                    </section>
                </form>
            </div>
        );
    }
}
export default AddFlat;