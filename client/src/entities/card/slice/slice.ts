import { createSlice } from "@reduxjs/toolkit"
import type { CardType, ArrayCardType } from "../model/types"
import { getAllCardsThunk, getCardByIdThunk } from "../api/CardThunkApi"

type DeckStateType = {
    cards: ArrayCardType | []
    oneCard: CardType | null
    error: string | null
    loading: boolean
}

const initialState: DeckStateType = {
    cards: [],
    oneCard: null,
    error: null,
    loading: false,
}

const useSlice = createSlice({
    name: "deck",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // getAllCardsThunk
            .addCase(getAllCardsThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(getAllCardsThunk.fulfilled, (state, action) => {
                state.cards = action.payload.data
                state.error = null
                state.loading = false
            })
            .addCase(getAllCardsThunk.rejected, (state, action) => {
                state.cards = []
                state.error = action.payload!.data
                state.loading = false
            })
            //getCardByIdThunk
            .addCase(getCardByIdThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(getCardByIdThunk.fulfilled, (state, action) => {
                state.oneCard = action.payload.data
                state.error = null
                state.loading = false
            })
            .addCase(getCardByIdThunk.rejected, (state, action) => {
                state.oneCard = null
                state.error = action.payload!.error
                state.loading = false
            })
    },
})

export const cardReducer = useSlice.reducer
