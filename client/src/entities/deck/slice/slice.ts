import { createSlice } from "@reduxjs/toolkit"
import type { DeckType, ArrayDeckType } from "../model/types"
import { getAllBooksThunk, getBookByIdThunk } from "../api/deckThunkApi"

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
            // getAllBooksThunk
            .addCase(getAllBooksThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(getAllBooksThunk.fulfilled, (state, action) => {
                state.decks = action.payload.data
                state.error = null
                state.loading = false
            })
            .addCase(getAllBooksThunk.rejected, (state, action) => {
                state.decks = []
                state.error = action.payload!.data
                state.loading = false
            })
            //getBookByIdThunk
            .addCase(getBookByIdThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(getBookByIdThunk.fulfilled, (state, action) => {
                state.oneDeck = action.payload.data
                state.error = null
                state.loading = false
            })
            .addCase(getBookByIdThunk.rejected, (state, action) => {
                state.oneDeck = null
                state.error = action.payload!.error
                state.loading = false
            })
    },
})

export const deckReducer = useSlice.reducer
