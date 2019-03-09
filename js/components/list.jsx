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
    ReactFragment,
} from 'react-router-dom';

class FlatsListTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: [],
            dict: this.props.dict,
            isLoaded: false,
        }
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

    componentDidMount() {
        setTimeout(this.fetchData, 500);
    }

    render() {
        console.log(this.state)
        const list = this.state.info.map(info => (
            <ElementList
                key={info.id}
                type={info.number}
                info={this.state.info[info.id]}
                dict={this.props.dict.prop[info.number]}
                address={info.property.address.street}
                city={info.property.address.city}
            // contentEdit={this.state.contentEdit}
            // delete={this.handleDeleteBtn.bind(this)}
            />
        ));
        return (
            <ul id="propertyList">
                {this.state.isLoaded ? list : "Wczytuję dane..."}
            </ul>
        );
    }
}

export default FlatsListTable;