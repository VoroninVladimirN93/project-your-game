export type RawCardType = {
    question: string
    points: number
    urlImage: string
}

export type CardType = {
    question: string
    answer: string
    deckId: number
    points: number
    urlImage: string
}

export type ArrayCardType = CardType[]
