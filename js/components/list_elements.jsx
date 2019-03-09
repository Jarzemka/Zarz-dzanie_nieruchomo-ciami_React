import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

class ElementList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: this.props.info,
            dict: this.props.dict,
            contentEdit: false,
        }
    }

    handleEditBtn(number) {
        console.log("edit");
        this.setState({
            contentEdit: !this.state.contentEdit,
        });
        // const info = [...this.props.info];
        // const index = info.findIndex(info => info.number === number);
        // console.log(index);
        // const options = {
        //     method: 'PUT',
        //     body: JSON.stringify({ index }),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // }

        // fetch('http://localhost:3000/info/' + index, options)
        //     .then(response => response.json())
        //     .then(json => console.log(json))
        //     .catch((err) => console.log(err))
    }

    handleDeleteBtn(number) {
        console.log("delete");
        // console.log(this)
        // const info = [...this.state.info];
        console.log(this.state.info)
        // const index = info.findIndex(info => info.number === number);
        const index = this.state.info.id;
        // console.log(index);
        // info.splice(index, 1);
        // this.setState({
        //     info
        // });
        // let id = this.state.info.number;

        const options = {
            method: 'DELETE',
            body: JSON.stringify({ index }),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch('http://localhost:3000/info/' + index, options)
            .then(response => response.json())
            .then(json => console.log(json))
            .catch((err) => console.log(err))
    }
    render() {
        return (
            <ul>
                <li className="listElemContainer">
                    <span className="listElem" contentEditable={this.state.contentEdit}>
                        {this.props.type}. {this.props.dict} {this.props.address} {this.props.city}
                    </span>
                    <button className="editBtn" onClick={this.handleEditBtn.bind(this)}>{this.state.contentEdit ? "Zapisz" : "Edytuj"}</button>
                    <button className="deleteBtn"
                        onClick={this.handleDeleteBtn.bind(this)}
                    // onClick={this.props.delete}
                    >Usuń</button>
                </li>
            </ul>
        )
    }
}



// const ElementList = (props) => {
//     return (
//         <li className="listElemContainer">
//             <span className="listElem" contentEditable={props.contentEdit}>
//                 {props.type}. {props.dict} {props.address} {props.city}
//             </span>
//             <button className="editBtn" onClick={props.edit}>{props.contentEdit ? "Zapisz" : "Edytuj"}</button>
//             <button className="deleteBtn" onClick={props.delete}>Usuń</button>
//         </li>
//     )
// }
export default ElementList;