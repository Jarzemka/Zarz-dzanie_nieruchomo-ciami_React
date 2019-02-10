import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import AddFlat from './components/addflat.jsx';
import FlatsListTable from './components/list.jsx'


class FlatsList extends React.Component {
    render() {
        return (
            <div>
                <NavLink to="/">Strona główna</NavLink>
                <h2>Lista nieruchomości</h2>
                <FlatsListTable />
            </div>
        )
    }
}

class NewFlat extends React.Component {
    render() {
        return (
            <div>
                <NavLink to="/">Strona główna</NavLink>
                <h2>Nowa nieruchomość</h2>
                <AddFlat />
            </div>
        )
    }
}


class Main extends React.Component {
    render() {
        return (
            <div>
                <NavLink to="/newflat">Dodaj nieruchomość</NavLink>
                <NavLink to="/flatslist">Zobacz listę nieruchomości</NavLink>
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Zarządzaj nieruchomościami</h1>
                    <Switch>
                        <Route exact path='/' component={Main} />
                        <Route path='/newflat' component={NewFlat} />
                        <Route path='/flatslist' component={FlatsList} />
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}


document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});