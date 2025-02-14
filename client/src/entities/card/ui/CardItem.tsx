import React from "react";
import './styles.css'
import { CardType } from "../model/types";

type Props ={
    card: CardType
    onCardClick: (card:CardType) => void
}
export function CardItem({ card, onCardClick }:Props): React.JSX.Element {
    return (
        <div className="card-item" onClick={() => onCardClick(card)}>
            <div className="question-text">{card.points}</div>
            {card.urlImage && <img src={card.urlImage} alt="card-image" />}
        </div>
    );
}
