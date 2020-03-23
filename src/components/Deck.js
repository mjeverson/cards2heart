import React, { Component } from 'react';
import cardback from "../resources/cardback.png";

class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        console.log('The link was clicked.');
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <div>
                <img src={cardback} alt="cardback-component" onClick={this.handleClick}/>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </div>
        );
    }
}

export default Deck;