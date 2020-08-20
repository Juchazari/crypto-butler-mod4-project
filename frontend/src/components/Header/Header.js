import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

    state = {
        dropdown: false,
        darkMode: true
    }

    displayDropdown = () => {
        this.setState({
            dropdown: !this.state.dropdown
        })
    }

    render() {
        return (
            <nav>
                <div className="dropdown">
                    <button onClick={this.displayDropdown} className="dropbtn">Menu</button>
                    {this.state.dropdown === false ?
                        null
                        :
                        <div id="dropdownMenu" className="dropdown-content">
                            <a href="/dashboard">Dashboard</a>
                            <br />
                            {/*<a onClick={this.props.lightDarkToggle}>Toggle Dark Mode</a>*/}
                        </div>
                    }
                </div>
            </nav>
        );
    }
}

export default Header;