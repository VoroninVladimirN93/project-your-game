import { getAllDecksThunk, getAllDeckThunk } from '@/entities/deck'
import { DeckItem } from '@/entities/deck/ui/DeckItem'
import { useAppDispatch, useAppSelector } from '@/shared/hooks/reduxHooks'
import { unwrapResult } from '@reduxjs/toolkit'
import React, { useEffect, useState } from 'react'

const mockup = []
export function GameDesk(): React.JSX.Element {
    // const[cards,setCards]=useState(mockup)

        
    // useEffect(()=>{
    //     const fetchingData = async() => {
    //         const {data} = await axiosInstance.get('/cards')
    //         console.log(data);
            
    //         setCards(data.data)
    //     }

    //     fetchingData()
    // },[])

    const [loading, setLoading] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const decks = useAppSelector((state) => state.deck.decks)
    const user = useAppSelector((state) => state.user.user)
console.log(decks);

    useEffect(() => {
        const fetchingTasks = async () => {
            if (user) {
                try {
                    const resultAction = await dispatch(getAllDecksThunk())
                    unwrapResult(resultAction)
                } catch (error) {
                    if (error instanceof Error) {
                        console.log(error.message)
                    } else {
                        console.log("An unexpected error")
                    }
                }
            }
        }
        fetchingTasks()
    }, [user, dispatch])

    return (
        <><h1>GamePage</h1>
        {decks.map((deck)=>{return <DeckItem key={deck.id} deck={deck}/>})}</>
    )
}