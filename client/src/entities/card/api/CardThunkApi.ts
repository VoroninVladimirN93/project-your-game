import { axiosInstance } from "@/shared/lib/axiosInstance"
import { ApiResponseSuccess, ApiResponseReject } from "@/shared/types/index"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { CardType, ArrayCardType } from "../model/types"
import { AxiosError } from "axios"

export const getAllCardsThunk = createAsyncThunk<
    ApiResponseSuccess<ArrayCardType>,
    void,
    { rejectValue: ApiResponseReject }
>("getAllCards", async (_, { rejectWithValue }) => {
    try {
        const { data } = await axiosInstance.get<
            ApiResponseSuccess<ArrayCardType>
        >("/cards")
        return data
    } catch (error) {
        const err = error as AxiosError<ApiResponseReject>
        return rejectWithValue(err.response!.data)
    }
})

export const getCardByIdThunk = createAsyncThunk<
    ApiResponseSuccess<CardType>,
    number,
    { rejectValue: ApiResponseReject }
>("getOneCardByID", async (id, { rejectWithValue }) => {
    try {
        const { data } = await axiosInstance.get<ApiResponseSuccess<CardType>>(
            `/cards/${id}`,
        )
        return data
    } catch (error) {
        const err = error as AxiosError<ApiResponseReject>
        return rejectWithValue(err.response!.data)
    }
})
