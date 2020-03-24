import React, { Component } from 'react';

class Deck extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    handleClick(e) {
        let index = this.getRandomInt(55) + 1;
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