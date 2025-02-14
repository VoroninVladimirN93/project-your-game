import { refreshTokensThunk } from "@/entities/user/api/userThunkApi"
import { useAppDispatch } from "@/shared/hooks/reduxHooks"
import { NavBarTop } from "@/widgets/Navbar"

import React, { useEffect } from "react"
import { Outlet } from "react-router-dom"

export function Layout(): React.JSX.Element {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(refreshTokensThunk())
    }, [dispatch])

    return (
        <>
            <NavBarTop/>

            <Outlet />

        </>
    )
}
