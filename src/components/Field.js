import React, { Component } from 'react';
import Deck from "./Deck";
import Card from "./Card";

class Field extends Component {
    constructor(props) {
        super(props);
        this.state = {card: null};
        this.handleDraw = this.handleDraw.bind(this);
    }

    handleDraw(card) {
        console.log('The link was clicked.');
        this.setState(state => ({
            card: card
        }));
    }

    render() {
        const card = this.state.card;

        return (
            <div className="Field">
                <div className="container">
                    <div className="row">
                        <div className="col-2"/>
                        <div className="col-4">
                            <Deck onDraw={this.handleDraw}/>
                        </div>
                        <div className="col-4">
                            <Card card={card}/>
                        </div>
                        <div className="col-2"/>
                    </div>
                    <div className="row find-out">
                        <span>Find out more about Cards to the Heart, download your own copy, or help support this art project by buying your own printed deck at <a href="http://cardstotheheart.ca">cardstotheheart.ca</a></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Field;