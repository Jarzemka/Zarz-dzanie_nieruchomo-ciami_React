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

const TestDrugi = props => {
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
                <Property />
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
    )
}