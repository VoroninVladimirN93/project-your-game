import { CardItem } from "@/entities/card/ui/CardItem"
import React, { useEffect, useState } from "react"
import { Modal } from "antd"
import { DeckType } from "../model/types"
import { CardType } from "@/entities/card"
import { message as antMessage } from "antd"

type Props = {
    deck: DeckType
    setScore: React.Dispatch<React.SetStateAction<number>>
}

export function DeckItem({ deck, setScore }: Props): React.JSX.Element {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
    const [currentCard, setCurrentCard] = useState<CardType | null>(null)
    const [sortedCard, setSortedCard] = useState<Array<CardType>>([])
    const [userAnswer, setUserAnswer] = useState<string>("")

    useEffect(() => {
        if (deck.Cards.length > 0) {
            const card = deck.Cards.slice().sort(
                (a: CardType, b: CardType) => a.points - b.points,
            )
            setSortedCard(card)
        }
    }, [deck])

    const handleCardClick = (card: CardType) => {
        setCurrentCard(card)
        setIsModalVisible(true)
    }

    const handleAnswerSubmit = () => {
        console.log(userAnswer,'Ответ пользователя')

        if (currentCard) {
            console.log(currentCard.answer,'Верный ответ пользователя')
            const normalizedUserAnswer = userAnswer
                .replace(" ", "")
                .replace(/\s+/g, "")
                .replace(/ё/g, "е")
                .replace(/Ё/g, "е")
                .trim()
                .toLowerCase()

            const normalizedCorrectAnswer = currentCard.answer
                .replace(" ", "")
                .replace(/\s+/g, "")
                .replace(/ё/g, "е")
                .replace(/Ё/g, "е")
                .trim()
                .toLowerCase()

            if (normalizedUserAnswer === normalizedCorrectAnswer) {
                console.log(normalizedUserAnswer,'Нормализированный ответ пользователя')
                console.log(normalizedCorrectAnswer,'Нормализированный верный ответ')

                antMessage.success("На шаг ближе к вершине Эльбруса")
                setScore((prevScore) => prevScore + currentCard.points)
            } else {
                antMessage.error("Повезёт в другой раз")
                console.log(normalizedUserAnswer)
                console.log(normalizedCorrectAnswer)
                setScore((prevScore) => prevScore - currentCard.points)
            }
        }
        setIsModalVisible(false)
        setUserAnswer("")
    }

    const handleCancel = () => {
        setIsModalVisible(false)
        setUserAnswer("")
    }

    return (
        <>
            <div
                className="deck-item"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        padding: "10px 10px",
                        borderRadius: "8px",
                        fontWeight: "bold",
                        fontSize: "30px",
                        marginRight: "10px",
                        display: "flex",
                        alignItems: "center", // Центрируем текст по вертикали
                        justifyContent: "right",
                        flex: 0.8,
                    }}
                >
                    {deck.title}
                </div>
                <div
                    className="card-container"
                    style={{ display: "flex", justifyContent: "left", flex: 1 }}
                >
                    {sortedCard.map((card) => (
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
                {currentCard && (
                    <div>
                        <h3>{currentCard.question}</h3>
                        {currentCard.urlImage ? (
                            <img
                                src={currentCard.urlImage}
                                alt="question-image"
                            />
                        ) : (
                            <p>Нет изображения</p>
                        )}
                        <input
                            type="text"
                            placeholder="Ваш ответ"
                            value={userAnswer}
                            onChange={(event) =>
                                setUserAnswer(event.target.value)
                            }
                            onKeyDown={(event) => {
                                if (event.key === "Enter") {
                                    handleAnswerSubmit()
                                }
                            }}
                        />
                        <button onClick={handleAnswerSubmit}>
                            Подтвердить
                        </button>
                    </div>
                )}
            </Modal>
        </>
    )
}
