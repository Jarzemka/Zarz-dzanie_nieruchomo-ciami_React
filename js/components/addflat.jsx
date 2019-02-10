import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

const property = ["Mieszkanie", "Pokój", "Apartament", "Dom", "Szeregówka", "Garaż"];
const status = ["do wynajmu", "do remontu", "na sprzedaż", "planowany zakup"];
const destiny = ["mieszkalna", "użyteczność publiczna"]

class AddFlat extends React.Component {
    render() {
        return (
            <div>
                <p>Typ</p>
                <select name="rodzaj" >
                    {property.map((item, i) =>
                        <option key={i}>{item}</option>
                    )}
                </select>

                <p>Status nieruchomości</p>
                <select name="status">
                    {status.map((item, i) =>
                        <option key={i}>{item}</option>
                    )}
                </select>

                <p>Przeznaczenie nieruchomości</p>
                <select name="destiny">
                    {destiny.map((item, i) =>
                        <option key={i}>{item}</option>
                    )}
                </select>
                <form>
                    <section>
                        <p>Dane najemcy do umowy</p>
                        <input type="text" placeholder="Imię najemcy" />
                        <input type="text" placeholder="Nazwisko najemcy" />
                        <input type="text" placeholder="Adres" />
                        <input type="text" placeholder="Miasto" />
                        <input type="email" placeholder="Adres e-mail" />
                        <input type="text" placeholder="Telefon kontaktowy" />
                    </section>
                    <section>
                        <p>Dane dot. wynajmowanego obiektu</p>
                        <input type="text" placeholder="Powierzchnia m²" />
                        <input type="number" placeholder="Ilość pokoi" />
                        <input type="number" id="house" placeholder="Ilość pięter" />
                    </section>
                    <section>
                        <p>Ogródek:</p>
                        <input type="checkbox" value="TAK" />TAK
                    <input type="checkbox" value="NIE" />NIE
                    <p>Garaż:</p>
                        <input type="checkbox" value="TAK" />TAK
                    <input type="checkbox" value="NIE" />NIE
                    </section>
                    <section>
                        <p>Wycena</p>
                        <input type="text" placeholder="Cena za m²" />
                        <div>Tu mnoznik cena*powierzchnia</div>
                    </section>
                    <section>
                        Data rozpoczęcia: <input type="date" placeholder="Początek umowy" />
                        Data zakończenia: <input type="date" placeholder="Koniec umowy" />
                        Dodatkowe informacje: <textarea rows="5" cols="30" placeholder="Dodatkowe uwagi" />
                    </section>
                    <section>
                        <input type="button" value="Dodaj nieruchomość" />
                        <input type="button" value="Drukuj umowę" />
                    </section>
                </form>
            </div>
        );
    }
}

export default AddFlat;