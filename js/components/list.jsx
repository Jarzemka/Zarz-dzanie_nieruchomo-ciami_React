import React from 'react';
import ReactDOM from 'react-dom';
import ElementList from './list_elements.jsx';
import ContentEditable from 'react-contenteditable';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

class FlatsListTable extends React.Component {
    state = {
        info: [],
        dictionaries: [],
        isLoaded: false,
        contentEditable: false,
    }

    fetchData = () => {
        const url = 'http://localhost:3000/info';
        fetch(url)
            .then(resp => resp.json())
            .then(resp => {
                this.setState({
                    info: resp,
                    isLoaded: true,
                })
            }).catch(err => {
                console.log(err)
            })
    }

    fetchDiki = () => {
        const url = 'http://localhost:3000/dictionaries';
        fetch(url)
            .then(resp => resp.json())
            .then(resp => {
                this.setState({
                    dictionaries: resp[0],
                });
                console.log(this.state)
            }).catch(err => {
                console.log(err);
            })
    }


    componentDidMount() {
        setTimeout(this.fetchData, 1000);
        setTimeout(this.fetchDiki, 1);
        console.log(this.state);
    }

    render() {
        let dic = this.state.dictionaries.prop;
        console.log(dic);
        const list = this.state.info.map(info => (
            <ElementList key={info.number} type={info.number} address={info.property.address.street} city={info.property.address.city} />
        ));
        const edBtn = <button contentEditable={this.state.contentEditable}>Edytuj</button>;
        const rmBtn = <button >Usuń</button>;
        return (
            <ul>
                {this.state.isLoaded ? list : "Wczytuję dane..."}
                {this.state.isLoaded ? edBtn : ""}
                {this.state.isLoaded ? rmBtn : ""}
            </ul>
        );
    }
}

export default FlatsListTable;