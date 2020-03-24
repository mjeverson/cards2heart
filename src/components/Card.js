import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const card = this.props.card;

        return (
            <div className="Card">
                {card}
            </div>
        );
    }
}

export default Card;