import { createSlice } from "@reduxjs/toolkit"
import type { DeckType, ArrayDeckType } from "../model/types"
import { getAllDecksThunk, getDeckByIdThunk } from "../api/deckThunkApi"

type DeckStateType = {
    decks: ArrayDeckType | []
    oneDeck: DeckType | null
    error: string | null
    loading: boolean
}

const initialState: DeckStateType = {
    decks: [],
    oneDeck: null,
    error: null,
    loading: false,
}

const useSlice = createSlice({
    name: "deck",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // getAllDecksThunk
            .addCase(getAllDecksThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(getAllDecksThunk.fulfilled, (state, action) => {
                state.decks = action.payload.data
                state.error = null
                state.loading = false
            })
            .addCase(getAllDecksThunk.rejected, (state, action) => {
                state.decks = []
                state.error = action.payload!.data
                state.loading = false
            })
            //getDeckByIdThunk
            .addCase(getDeckByIdThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(getDeckByIdThunk.fulfilled, (state, action) => {
                state.oneDeck = action.payload.data
                state.error = null
                state.loading = false
            })
            .addCase(getDeckByIdThunk.rejected, (state, action) => {
                state.oneDeck = null
                state.error = action.payload!.error
                state.loading = false
            })
    },
})

export const deckReducer = useSlice.reducer
