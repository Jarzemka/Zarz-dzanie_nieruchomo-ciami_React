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
    state = {
        info: [],
        dict: this.props.dict,
        isLoaded: false,
        contentEdit: false,
        editBtnText: "Edytuj"
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

    handleEditBtn(number) {
        console.log("edit");
        const info = [...this.state.info];
        const index = info.findIndex(info => info.number === number);
        console.log(index);
        this.setState({
            contentEdit: !this.state.contentEdit
        })
        // if (this.state.contentEdit == false) {
        //     this.setState({
        //         contentEdit: true,
        //         editBtnText: "Zapisz",
        //     })
        // } else {
        //     this.setState({
        //         contentEdit: false,
        //         editBtnText: "Edytuj",
        //     })
        // }
    }

    handleDeleteBtn(number) {
        console.log("delete");
        const info = [...this.state.info];
        const index = info.findIndex(info => info.number === number);
        console.log(index);
        info.splice(index, 1);
        this.setState({
            info
        })
    }

    componentDidMount() {
        setTimeout(this.fetchData, 1000);
    }

    render() {
        const list = this.state.info.map(info => (
            <ElementList
                key={info.number}
                type={info.number}
                dict={this.props.dict.prop[info.number]}
                address={info.property.address.street}
                city={info.property.address.city}
                btnText={this.state.editBtnText}
                contentEdit={this.state.contentEdit}
                edit={this.handleEditBtn.bind(this, info.number)}
                delete={this.handleDeleteBtn.bind(this, info.number)}
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