import React, { Component } from 'react';

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

        let index = this.getRandomInt(55) + 1;
        // let card = cards[index];

        this.props.onDraw(index);
    }

    render() {
        return (
            <div className="Deck card-display">
                <img src="/resources/images/cardback.png" alt="cardback-component" onClick={this.handleClick}/>
            </div>
        );
    }
}

export default Deck;