import React from "react";
import './Nav.css';


class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Navigation',
            subtitle: 'Main menu',
            show:'Show'
        }
    }

    showMenu = () => {
        this.setState({show: 'hide'});
    }

    render() {
        const nav = this.props.nav;
        return (
            <nav>
                <button onClick={this.showMenu} type="button">Show menu</button>
                <h2>{this.state.subtitle}</h2>
                <p>{this.state.show}</p>
                <ul>
                    {Object.keys(nav).map(elem => {
                        return <li><a href={nav[elem]}>{elem}</a></li>
                    })}
                </ul>
            </nav>
        )
    }
}

export default Nav;