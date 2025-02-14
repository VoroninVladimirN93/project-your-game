import { CardItem } from "@/entities/card/ui/CardItem";
import React, { useEffect, useState } from "react";
import { Modal } from "antd";

export function DeckItem({ deck,setScore }): React.JSX.Element {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentCard, setCurrentCard] = useState({});
    
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

    return (<>
   <div className="deck-item" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div 
        style={{
            padding: '10px 10px',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontSize: '30px',
            marginRight: '10px',
            display: 'flex',
            alignItems: 'center',// Центрируем текст по вертикали
           justifyContent: 'right',
           flex: 0.8,
        }}
    > 
    


{deck.title}
    </div>
    <div className="card-container" style={{ display: 'flex', justifyContent: 'left' ,flex:1, }}>
        {card.map((card) => (
            <CardItem
                key={card.id}
                card={card}
                onCardClick={handleCardClick}
            />
        ))}
    </div>
  
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
          
        
        </>
    );
}
