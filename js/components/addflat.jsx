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
            idNum: "",
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
        },
        rent: {
            begin: "",
            end: "",
        },
        text: "",
        isLoaded: false,
    }

    handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        // this.setState({
        //     value: e.target.value,
        // });
    }

    handleCheckboxBalcony = (e) => {
        e.preventDefault();
        this.setState({
            propertyDescription: {
                "isBalcony": !this.state.isBalcony
            }
        })
    }

    handleCheckboxGarage = (e) => {
        e.preventDefault();
        this.setState({
            propertyDescription: {
                "isGarage": !this.state.isGarage
            }
        })
    }


    btnSubmit = (e) => {
        e.preventDefault();
        const dict = [...this.state.dict];

        this.setState({
            person: {
                "name": e.target.name.value,
                "surename": e.target.surname.value,
                "pesel": e.target.pesel.value,
                "idNum": e.target.idNum.value,
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
            },
            rent: {
                "begin": e.target.begin.value,
                "end": e.target.end.value,
            },
            text: e.target.text.value,
            info: [],
            dict,
        });
        //--------------------

        const data = {
            number: this.state.number,
            property: {
                "type": 1,
                "address": {
                    "street": this.state.propertyDescription.address,
                    "city": this.state.propertyDescription.city,
                    "geo": {
                        "lati": "",
                        "longi": "",
                    }
                },
                values: {
                    "rooms": this.state.propertyDescription.rooms,
                    "floor": this.state.propertyDescription.floors,
                    "area": this.state.propertyDescription.area,
                    "isBalcony": this.state.propertyDescription.isBalcony,
                    "isGarage": this.state.propertyDescription.isGarage,
                },
                insurance: {
                    "company": this.state.propertyDescription.agency,
                    "number": this.state.propertyDescription.insurance,
                }
            }
            //       "agreements": [
            //         {
            //           "id": 1,
            //           "person": {
            //             "name": this.state.person.name,
            //             "surname": this.state.person.surename,
            //             "pesel": this.state.person.pesel,
            //                  
            //             "email": this.state.person.email,
            //             "phone": this.state.person.phone,
            //           },
            //           "begin": "",
            //           "end": "",
            //           "status": 3,
            //           "created": ""
            //         },
            //         {
            //           "id": 2,
            //           "begin": "",
            //           "end": "",
            //           "status": 3,
            //           "created": ""
            //         }
            //       ],
            //       "text": "",
            //       "description": "",
            //       "pictures": [
            //         {
            //           "url": "",
            //           "descr": "",
            //           "created": ""
            //         }
            //       ]
            //     }

            // person: {
            //     "name": this.state.person.name,
            //     "surename": this.state.person.surename,
            //     "pesel": this.state.person.pesel,
            //     "idNum": this.state.person.idNum,
            //     "email": this.state.person.email,
            //     "phone": this.state.person.phone,
            // },
            // propertyDescription: {
            //     "address": this.state.propertyDescription.address,
            //     "city": this.state.propertyDescription.city,
            //     "rooms": this.state.propertyDescription.rooms,
            //     "area": this.state.propertyDescription.area,
            //     "floors": this.state.propertyDescription.floors,
            //     "insurance": this.state.propertyDescription.insurance,
            //     "agency": this.state.propertyDescription.agency,
            //     "isBalcony": this.state.propertyDescription.isBalcony,
            //     "isGarage": this.state.propertyDescription.isGarage,
            // },
            // estimate: {
            //     "rent": this.state.estimate.rent,
            //     "price": this.state.estimate.price,
            //     "utilities": this.state.estimate.utilities,
            //     "internet": this.state.estimate.internet,
            //     "tv": this.state.estimate.tv,
            //     "cableTv": this.state.estimate.cableTv,
            // },
            // rent: {
            //     "begin": this.state.rent.begin,
            //     "end": this.state.rent.end,
            // },
            // text: this.state.text,
        }

        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch('http://localhost:3000/info', options)
            .then(response => response.json())
            .then(json => console.log(json))
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
            <Property
                checkboxBalcony={this.handleCheckboxBalcony}
                checkboxGarage={this.handleCheckboxGarage} />
            <Person />
            <section className="box">
                <label className="boxTitle">Wycena</label>
                <input type="text" name="rent" placeholder="Czynsz" />
                <input type="text" name="price" placeholder="Cena za m²" />
                <input type="text" name="utilities" placeholder="Media" />
                <input type="text" name="internet" placeholder="Internet" />
                <input type="text" name="tv" placeholder="Abonament radiowo-telewizyjny" />
                <input type="text" name="cableTv" placeholder="Telewizja kablowa" />
            </section>
            <section className="box">
                <label className="boxTitle">Czas obowiązywania umowy</label><br />
                <p>Data rozpoczęcia:</p><input type="date" name="begin" placeholder="Początek umowy" />
                <p>Data zakończenia:</p><input type="date" name="end" placeholder="Koniec umowy" />
                <p>Dodatkowe informacje:</p >
                <textarea name="text" placeholder="Dodatkowe uwagi" rows="5" cols="25" />
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