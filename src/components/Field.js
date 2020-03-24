import React, { Component } from 'react';
import Deck from "./Deck";
import Card from "./Card";

class Field extends Component {
    constructor(props) {
        super(props);
        this.state = {card: null};

        // This binding is necessary to make `this` work in the callback
        this.handleDraw = this.handleDraw.bind(this);
    }

    handleDraw(card) {
        console.log('The link was clicked.');
        this.setState(state => ({
            card: card
        }));
    }

    render() {
        const currentCard = this.state.card;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Deck onDraw={this.handleDraw}/>
                    </div>
                    <div className="col-4"></div>
                    <div className="col-4">
                        <Card card={currentCard}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Field;