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
        submitBtn: false,
        printBtn: true,
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
        const test = e.target.name.value;
        if (test === "") {
            console.log("ok");
            alert("UWAGA!!! Aby dodać nieruchomość uzupełnij formularz");
        } else {
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
                submitBtn: !this.state.submitBtn,
                printBtn: !this.state.printBtn,
            });
            //--------------------
            const data = {
                "number": this.state.number,
                "property": {
                    "type": 3,
                    "address": {
                        "street": e.target.address.value,
                        "city": e.target.city.value,
                        "geo": {
                            "lati": "",
                            "longi": ""
                        }
                    },
                    "values": {
                        "rooms": e.target.rooms.value,
                        "floor": e.target.floors.value,
                        "area": e.target.area.value,
                        "balcony": this.state.propertyDescription.isBalcony,
                        "garage": this.state.propertyDescription.isGarage
                    },
                    "insurance": {
                        "company": "",
                        "number": ""
                    },
                    "agreements": [
                        {
                            "id": 2,
                            "person": {
                                "name": "",
                                "surname": "",
                                "pesel": "",
                                "email": "",
                                "phone": ""
                            },
                            "begin": "",
                            "end": "",
                            "status": 2,
                            "created": ""
                        },
                        {
                            "id": 2,
                            "begin": "",
                            "end": "",
                            "status": 3,
                            "created": ""
                        }
                    ],
                    "text": "",
                    "description": "",
                    "pictures": [
                        {
                            "url": "",
                            "descr": "",
                            "created": ""
                        }
                    ]
                },
                "renovation": [
                    {
                        "id": "",
                        "data": "",
                        "costs": [
                            {
                                "id": "",
                                "cost": "",
                                "status": "",
                                "description": ""
                            }
                        ],
                        "status": ""
                    }
                ],
                "payment": [
                    {
                        "id": 1,
                        "value": "100",
                        "status": 2
                    }
                ],
                "rent": 5,
                "id": ""
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
                .then(json => {
                    console.log(json);
                    alert("Dodano nową nieruchomość!")
                }
                )
                .catch((err) => {
                    console.log(err);
                    alert("coś poszło nie tak...")
                }
                )
        }



    };

    handlePrintBtn = (e) => {
        e.preventDefault();
        console.log("print")
        alert("Umowa jest drukowana!")
    }


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
                <button className="form submit" type='submit' disabled={this.state.submitBtn}>Dodaj nieruchomość</button>
            </section>
            <section className="submitBox">
                <button className="form print" onClick={this.handlePrintBtn} disabled={this.state.printBtn} >Drukuj umowę</button>
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