import React from 'react'

export function CardItem({card}): React.JSX.Element {
    return (
        <div>{card.question}</div>
    )
}