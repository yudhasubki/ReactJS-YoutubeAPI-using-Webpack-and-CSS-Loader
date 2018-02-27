import React, {Component} from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            term :''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        this.props.onSearchTerm(this.state.term);
        e.preventDefault();
    }

    render(){
        return(
            <div className="search-bar">
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="cari video..." className="search-input" type="text" onChange={event => this.setState({term:event.target.value})}/>
                    <input className="btn btn-danger" type="submit" value="Cari"/>
                </form>
            </div>
        );
    }
}

export default SearchBar;