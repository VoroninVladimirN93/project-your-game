import { CardItem } from "@/entities/card/ui/CardItem";
import React, { useEffect, useState } from "react";
import { Modal } from "antd";

export function DeckItem({ deck }): React.JSX.Element {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentCard, setCurrentCard] = useState({});
    const [score, setScore] = useState(0);
    console.log(deck.Cards.length);
    const [card,setCard]=useState([])
    
useEffect(() => {
    if(deck.Cards.length > 0){const card = deck.Cards.toSorted((a,b)=> a.points - b.points)
        setCard(card);
    }
}, [deck]);



    const handleCardClick = (card) => {
        setCurrentCard(card);
        setIsModalVisible(true);
    };

    const handleAnswerSubmit = (userAnswer) => {
        if (userAnswer.toLowerCase() === currentCard.answer.toLowerCase()) {
            setScore((prevScore) => prevScore + currentCard.points);
        } else {
            setScore((prevScore) => prevScore - currentCard.points);
        }
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="deck-item">
            <h2>{deck.title}</h2>
            <div className="card-container">
                {card.map((card) => (
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
                <div>
                    <h3>{currentCard.question}</h3>
                    {currentCard.urlImage ? (
                        <img src={currentCard.urlImage} alt="question-image" />
                    ) : (
                        <p>Нет изображения</p>
                    )}
                    <input
                        type="text"
                        placeholder="Ваш ответ"
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleAnswerSubmit(e.target.value);
                            }
                        }}
                    />
                    <button
                        onClick={() =>
                            handleAnswerSubmit(document.querySelector("input").value)
                        }
                    >
                        Подтвердить
                    </button>
                </div>
            </Modal>
            <div>Очки: {score}</div>
        </div>
    );
}
