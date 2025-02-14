import { getAllDecksThunk } from "@/entities/deck";
import { DeckItem } from "@/entities/deck/ui/DeckItem";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";

export function GameDesk(): React.JSX.Element {
    const [loading, setLoading] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const decks = useAppSelector((state) => state.deck.decks);
    const user = useAppSelector((state) => state.user.user);
    const [score, setScore] = useState(0);

    useEffect(() => {
        const fetchingTasks = async () => {
            if (user) {
                setLoading(true);
                try {
                    const resultAction = await dispatch(getAllDecksThunk());
                    unwrapResult(resultAction);
                } catch (error) {
                    console.error("Error fetching decks:", error);
                } finally {
                    setLoading(false);
                }
            }
        };
        fetchingTasks();
    }, [user, dispatch]);

    return (
        <div className="game-desk">
            {loading ? (
                <div>Загрузка...</div>
            ) : (
                <div>
                <Container>
                    <Row className="justify-content-center my-3">
                        <Col xs="auto">
                            <Alert variant="info" style={{ fontSize: '24px', fontWeight: 'bold' }}>
                                Очки: {score}
                            </Alert>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="decks-container">
                                {decks.map((deck) => (
                                    <DeckItem setScore={setScore} key={deck.id} deck={deck} />
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            )}
        </div>
    );
}

const GameDeskMemo = React.memo(GameDesk)
export default GameDeskMemo