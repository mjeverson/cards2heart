import React, { Component } from 'react';
import cardback from "../resources/cardback.png";
import cards from "../resources/cards";

class Deck extends Component {
    constructor(props) {
        super(props);
        // this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    handleClick(e) {
        console.log('The link was clicked, selecting a card.');
        // this.setState(state => ({
        //     isToggleOn: !state.isToggleOn
        // }));

        let index = this.getRandomInt(cards.length);
        let card = cards[index];

        this.props.onDraw(card);
    }

    render() {
        return (
            <div className="Deck">
                <img src={cardback} alt="cardback-component" onClick={this.handleClick}/>
            </div>
        );
    }
}

export default Deck;