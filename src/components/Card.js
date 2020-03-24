import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let card;
        let text;

        if (this.props.card){
            card = this.props.card.cardName;
            text = this.props.card.text;
        }

        return (
            <div className="Card">
                {card}<br/>
                {text}
            </div>
        );
    }
}

export default Card;