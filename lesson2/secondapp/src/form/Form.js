import React from "react";
import './Form.css';


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            age: 0
        }
    }

    showInputValue = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);
        this.setState({[event.target.name]: event.target.value});
    }

    submitForm = (event) => {
        event.preventDefault();
        console.log(this.state.text);
    }

    render() {
        let someText = '';
        if (this.state.text !== '') {
            someText = <p>Yout text: {this.state.text}</p>
        }
        return (   
            <form onSubmit={this.submitForm}>
                <input onChange={this.showInputValue} name="text"/>
                <input onChange={this.showInputValue} type="number" name="age" />
                <input type="submit" />
                {someText}
                <p>{this.state.age}</p>
            </form>
        )
    }
}

export default Form;