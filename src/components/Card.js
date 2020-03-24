import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let cardImage;

        if (this.props.card){
            let url = "/resources/images/CTTH v4 Prod Cards layout final" + this.props.card + ".png";
            cardImage = <img src={url} alt="cardback-component" style={{ display: this.props.card ? 'block': 'none'}}/>;
        }

        return (
            <div className="Card card-display">
                {cardImage}
            </div>
        );
    }
}

export default Card;