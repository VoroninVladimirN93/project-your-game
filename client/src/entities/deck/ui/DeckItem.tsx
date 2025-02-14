import { CardItem } from "@/entities/card/ui/CardItem"
import React from "react"

export function DeckItem({ deck }): React.JSX.Element {
    console.log(deck)

    return (
        <>
            <div>
                <h2>{deck.title}</h2>
                {deck.Cards.map((card)=><CardItem card={card}/>)}
            </div>
        </>
    )
}
