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
        isLoaded: false,
    }

    handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        this.setState({
            value: e.target.value,
        });
    }

    btnSubmit = (e) => {
        e.preventDefault();
        const dict = [this.state.dict]
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
            dict,
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
    Test = () => {
        console.log("test");
    }
    componentDidMount() {
        setTimeout(this.fetchSetData, 1);
    }

    render() {
        // console.log("addflat--?");
        // console.log(this.props.dict.prop)
        // let d = [this.props.dict.prop];
        // d.map((e, i) => {
        //     console.log(e, i)
        // })

        // this.props.dict.prop.map((item, i) => {
        //     console.log(i);
        // });
        return (
            <div>
                <form onSubmit={this.btnSubmit}>
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
                    <Property
                        onChange={this.Test}
                    />
                    <Person />

                    <section className="box">
                        <label className="boxTitle">Wycena</label>
                        <input type="text" placeholder="Czynsz" />
                        <input type="text" placeholder="Cena za m²" />
                        <input type="text" placeholder="Media" />
                        <input type="text" placeholder="Internet" />
                        <input type="text" placeholder="Abonament radiowo-telewizyjny" />
                        <input type="text" placeholder="Telewizja kablowa" />
                        <div>Tu mnoznik cena*powierzchnia</div>
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
            </div>
        );
    }
}
export default AddFlat;