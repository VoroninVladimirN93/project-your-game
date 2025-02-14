export type RawCardType = {
    question: string
    points: number
    urlImage: string
}

export type CardType = {
    id: number | null | undefined
    question: string
    answer: string
    deckId: number
    points: number
    urlImage: string
}

export type ArrayCardType = CardType[]
