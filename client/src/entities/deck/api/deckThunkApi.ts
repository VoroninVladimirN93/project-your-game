import { axiosInstance } from "@/shared/lib/axiosInstance"
import { ApiResponseSuccess, ApiResponseReject } from "@/shared/types/index"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { DeckType, ArrayDeckType } from "../model/types"
import { AxiosError } from "axios"

export const getAllDecksThunk = createAsyncThunk<
    ApiResponseSuccess<ArrayDeckType>,
    void,
    { rejectValue: ApiResponseReject }
>("getAllDeck", async (_, { rejectWithValue }) => {
    try {
        const { data } = await axiosInstance.get<
            ApiResponseSuccess<ArrayDeckType>
        >("/decks")
        return data
    } catch (error) {
        const err = error as AxiosError<ApiResponseReject>
        return rejectWithValue(err.response!.data)
    }
})

export const getDeckByIdThunk = createAsyncThunk<
    ApiResponseSuccess<DeckType>,
    number,
    { rejectValue: ApiResponseReject }
>("getOneDeckByID", async (id, { rejectWithValue }) => {
    try {
        const { data } = await axiosInstance.get<ApiResponseSuccess<DeckType>>(
            `/decks/${id}`,
        )
        return data
    } catch (error) {
        const err = error as AxiosError<ApiResponseReject>
        return rejectWithValue(err.response!.data)
    }
})
