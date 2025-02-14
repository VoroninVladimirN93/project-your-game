import { getAllDecksThunk } from "@/entities/deck";
import { DeckItem } from "@/entities/deck/ui/DeckItem";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";

export function GameDesk(): React.JSX.Element {
    const [loading, setLoading] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const decks = useAppSelector((state) => state.deck.decks);
    const user = useAppSelector((state) => state.user.user);

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
                <div className="decks-container">
                    {decks.map((deck) => (
                        <DeckItem key={deck.id} deck={deck} />
                    ))}
                </div>
            )}
        </div>
    );
}
