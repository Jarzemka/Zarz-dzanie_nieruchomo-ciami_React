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

class NewFlat extends React.Component {
    render() {
        return (
            <div className="container">
                <NavLink to="/" className="backTo">Strona główna</NavLink>
                <h2>Nowa nieruchomość</h2>
                <AddFlat />
            </div>
        )
    }
}


class FlatsList extends React.Component {
    render() {
        return (
            <div className="container">
                <NavLink to="/" className="backTo">Strona główna</NavLink>
                <h2>Lista nieruchomości</h2>
                <FlatsListTable />
            </div>
        )
    }
}



class Monitoring extends React.Component {
    render() {
        return (
            <div className="container">
                <NavLink to="/" className="backTo">Strona główna</NavLink>
                <h2>Monitoruj zyski i koszty</h2>
            </div>
        )
    }
}

class Main extends React.Component {
    render() {
        return (
            <div id="navigation">
                <NavLink to="/newflat" className="nav">Dodaj nieruchomość</NavLink>
                <NavLink to="/flatslist" className="nav">Zobacz listę nieruchomości</NavLink>
                <NavLink to="/monitoring" className="nav">Monitoruj zyski i koszty</NavLink>
            </div>
        )
    }
}

class App extends React.Component {

    // fetchDiki = () => {
    //     const url = 'http://localhost:3000/dictionaries';
    //     fetch(url)
    //         .then(resp => resp.json())
    //         .then(resp => {
    //             this.setState({
    //                 dictionaries: resp[0],
    //             })
    //             console.log(resp);
    //             console.log(this.state);
    //         }).catch(err => {
    //             console.log(err);
    //         })
    // }

    // componentDidMount() {
    //     setTimeout(this.fetchDiki, 1)
    // }

    render() {
        return (
            <HashRouter>
                <div>
                    <h1 id="appName">Dev-App</h1>
                    <Switch>
                        <Route exact path='/' component={Main} />
                        <Route path='/newflat' component={NewFlat} />
                        <Route path='/flatslist' component={FlatsList} />
                        <Route path="/monitoring" component={Monitoring} />
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