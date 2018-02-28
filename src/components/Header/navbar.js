import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class NavigationBar extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="navbar">
                <div className="navbar-brand">
                    <h2><span>Yudha</span>Tube</h2>
                </div>
                <div className="navbar-item">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/popular">Popular</Link></li>
                    </ul>
                </div> 
            </div>
        );
    }

}

export default NavigationBar;