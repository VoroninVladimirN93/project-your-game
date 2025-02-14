import { CardItem } from "@/entities/card/ui/CardItem";
import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { DeckType } from "../model/types";
import { CardType } from "@/entities/card";

type Props ={
    deck:DeckType
}

export function DeckItem({ deck }:Props
): React.JSX.Element {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [currentCard, setCurrentCard] = useState<CardType|null>(null);
    const [score, setScore] = useState<number>(0);
    const [sortedCard,setSortedCard]=useState<Array<CardType>>([])
    const [userAnswer, setUserAnswer] = useState<string>("")
    
useEffect(() => {
    if(deck.Cards.length > 0){const card = deck.Cards.slice().sort((a:CardType,b:CardType)=> a.points - b.points)
        setSortedCard(card);
    }
}, [deck]);



    const handleCardClick = (card:CardType) => {
        setCurrentCard(card);
        setIsModalVisible(true);
    };

    const handleAnswerSubmit = () => {
        if (currentCard && userAnswer.toLowerCase() === currentCard.answer.toLowerCase()) {
            setScore((prevScore) => prevScore + currentCard.points);
        } else if (currentCard) {
            setScore((prevScore) => prevScore - currentCard.points);
        }
        setIsModalVisible(false);
        setUserAnswer("");
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setUserAnswer("");
    };

    return (
        <div className="deck-item">
            <h2>{deck.title}</h2>
            <div className="card-container">
                {sortedCard.map((card) => (
                    <CardItem
                        key={card.id}
                        card={card}
                        onCardClick={handleCardClick}
                    />
                ))}
            </div>

            <Modal
                title="Ответ на вопрос"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}
            >
               {currentCard && ( <div>
                    <h3>{currentCard.question}</h3>
                    {currentCard.urlImage ? (
                        <img src={currentCard.urlImage} alt="question-image" />
                    ) : (
                        <p>Нет изображения</p>
                    )}
                    <input
                        type="text"
                        placeholder="Ваш ответ"
                        value={userAnswer}
                        onChange={(event) => setUserAnswer(event.target.value)}
                        onKeyDown={(event) => {
                            if (event.key === "Enter") {
                                handleAnswerSubmit();
                            }
                        }}
                    />
                    <button onClick={handleAnswerSubmit}>
                        Подтвердить
                    </button>
                </div>)}
            </Modal>
            <div>Очки: {score}</div>
        </div>
    );
}
