import React from "react";
import './styles.css'

export function CardItem({ card, onCardClick }): React.JSX.Element {
    return (
        <div className="card-item" onClick={() => onCardClick(card)}>
            <div className="question-text">{card.points}</div>
            {card.urlImage && <img src={card.urlImage} alt="card-image" />}
        </div>
    );
}
