import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';


class AppHeader extends Component {
    render(){
        return(
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/shop">Dykkerudstyr</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Dykkerrejser</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Dykkerkurser</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default AppHeader 

