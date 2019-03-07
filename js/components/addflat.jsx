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
        dict: [],
        person: {
            name: "",
            surename: "",
            pesel: "",
            id: "",
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
        estimate: {
            rent: "",
            price: "",
            utilities: "",
            internet: "",
            tv: "",
            cableTv: "",
            rentPrice: "00,00",
        },
        text: "",
        isLoaded: false,
    }

    handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        this.setState({
            value: e.target.value,
        });
    }
    handleEstimateInput = (e) => {

        console.log(e.target.name)
    }

    handleCheckboxBalcony = (e) => {
        console.log(e.target.value);
    }

    handleCheckboxGarage = () => {
        this.setState({
            propertyDescription: {
                "isGarage": !this.state.propertyDescription.isGarage,
            }
        })
    }


    handleEstimateBtn = (e) => {
        e.preventDefault();
        console.log("test");

    }

    btnSubmit = (e) => {
        e.preventDefault();
        const dict = [...this.state.dict];

        this.setState({
            person: {
                "name": e.target.name.value,
                "surename": e.target.surname.value,
                "pesel": e.target.pesel.value,
                "id": e.target.id.value,
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
            estimate: {
                "rent": e.target.rent.value,
                "price": e.target.price.value,
                "utilities": e.target.utilities.value,
                "internet": e.target.internet.value,
                "tv": e.target.tv.value,
                "cableTv": e.target.cableTv.value,
                "isBalcony": "",
                "isGarage:": "",
            },
            text: e.target.text.value,
            info: [],
            dict,
        });
        //--------------------
        const post = {
            number: "1236",
            property: "test",
            payment: "1200",
            rent: "5"
        }
        fetch("http://localhost:3000/posts", {
            method: 'POST',
            headers: new Headers(),
            body: JSON.stringify(post),

        })
            .then(resp => resp.json())
            .then(data => console.log(data))
            .catch((err) => console.log(err))
    };

    componentDidMount() {
        console.log("komponent zamontowany");
        this.setState({
            isLoaded: true,
        })
    }

    render() {
        const form = <form onSubmit={this.btnSubmit}>
            <h2>Umowa numer: {this.state.number}/2019</h2>
            <div id="select" className="custom-select">
                <label>Typ
                        <select name="type" onChange={this.handleChange}>
                        {objects.map((item, i) =>
                            <option key={i} value={i}>{item}</option>
                        )}
                    </select>
                </label>
                <label>Status nieruchomości
                        <select name="status" onChange={this.handleChange}>
                        {status.map((item, i) =>
                            <option key={i} value={i}>{item}</option>
                        )}
                    </select>
                </label>
                <label>Przeznaczenie nieruchomości
                        <select name="destiny" onChange={this.handleChange}>
                        {destiny.map((item, i) =>
                            <option key={i} value={i}>{item}</option>
                        )}
                    </select>
                </label>
            </div>
            <Property />
            <Person />
            <section className="box">
                <label className="boxTitle">Wycena</label>
                <input type="text" name="rent" placeholder="Czynsz" />
                <input type="text" name="price" placeholder="Cena za m²" />
                <input type="text" name="utilities" placeholder="Media" />
                <input type="text" name="internet" placeholder="Internet" />
                <input type="text" name="tv" placeholder="Abonament radiowo-telewizyjny" />
                <input type="text" name="cableTv" placeholder="Telewizja kablowa" />
                <div>wycena czynszu: </div>
            </section>
            <section className="box">
                <label className="boxTitle">Czas obowiązywania umowy</label><br />
                <p>Data rozpoczęcia:</p><input type="date" placeholder="Początek umowy" />
                <p>Data zakończenia:</p><input type="date" placeholder="Koniec umowy" />
                <p>Dodatkowe informacje:</p >
                <textarea name="text" value={this.state.text} placeholder="Dodatkowe uwagi" rows="5" cols="25" />
            </section>
            <section className="submitBox">
                <button className="form" type='submit'>Dodaj nieruchomość</button>
            </section>
            <section className="submitBox">
                <button className="form" >Drukuj umowę</button>
            </section>
        </form>

        return (
            <div>
                {this.state.isLoaded ? form : "Wczytuję formularz..."}
            </div>
        );
    }
}
export default AddFlat;