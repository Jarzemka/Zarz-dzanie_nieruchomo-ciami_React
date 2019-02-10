import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';


class FlatsListTable extends React.Component {
    render() {
        return (
            <div>
                <section>
                    <h3>Lista wynajmowanych mieszkań:</h3>
                    <ul>
                        <li></li>
                    </ul>
                </section>
                <section>
                    <h3>Lista wynajmowanych domów:</h3>
                    <ul>
                        <li></li>
                    </ul>
                </section>

                <section>
                    <h3>Lista wynajmowanych pokoi:</h3>
                    <ul>
                        <li></li>
                    </ul>
                </section>

                <section>
                    <h3>Lista wynajmowanych apartamentów:</h3>
                    <ul>
                        <li></li>
                    </ul>
                </section>

                <section>
                    <h3>Lista wynajmowanych garaży:</h3>
                    <ul>
                        <li></li>
                    </ul>
                </section>

            </div>
        );
    }
}

export default FlatsListTable;