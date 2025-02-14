import React, { useState } from "react";
import './styles.css'
import { CardType } from "../model/types";


type Props ={
    card: CardType
    onCardClick: (card:CardType) => void
}
    
export function CardItem({ card, onCardClick }:Props): React.JSX.Element {
    const [isDisabled, setIsDisabled] = useState(false);
    return (
        <button disabled={isDisabled} className="card-item" onClick={() => { setIsDisabled(true); onCardClick(card)}}>
            <div className="question-text">{card.points}</div>
            {card.urlImage && <img src={card.urlImage} alt="card-image" />}
        </button>
    );
}
