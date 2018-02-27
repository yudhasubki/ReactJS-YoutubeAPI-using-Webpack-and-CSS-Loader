import React, {Component} from 'react';

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
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Popular</a></li>
                    </ul>
                </div> 
            </div>
        );
    }

}

export default NavigationBar;