import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

const Property = props => {
    return (
        <section className="box">
            <label>Dane dot. wynajmowanego obiektu</label>
            <input type="text" name="address" placeholder="Adres" onChange={props.onChange} />
            <input type="text" name="city" placeholder="Miasto" onChange={props.onChange} />
            <input type="number" name="rooms" placeholder="Ilość pokoi" onChange={props.onChange} />
            <input type="number" name="area" placeholder="Powierzchnia m²" onChange={props.onChange} />
            <input type="number" name="floors" placeholder="Ilość pięter" onChange={props.onChange} />
            <input type="text" name="insurance" placeholder="Numer ubezpieczenia" onChange={props.onChange} />
            <input type="text" name="agency" placeholder="Agencja ubezpieczeniowa" onChange={props.onChange} />
            <label>Balkon:</label>
            <input name="isBalcony" type="checkbox" />
            <label>Garaż:</label>
            <input name="isGarage" type="checkbox" />
        </section>
    )
}

export default Property;

// checked={this.state.object.isTaras}