import { CardType } from "@/entities/card"

export type RawDeckType = {
    title: string
}

export type DeckType = {
    Cards: CardType[]
    id: number
    title: string
}

export type ArrayDeckType = DeckType[]
