import { CLIENT_ROUTES } from "../enums/clientRoutes"
import { useAppSelector } from "@/shared/hooks/reduxHooks"
import { Loader } from "@/shared/ui/Loader/Loader"
import { ReactNode } from "react"
import { Navigate, useLocation } from "react-router-dom"

export function PublicGuard({
    children,
}: {
    children: ReactNode
}): React.JSX.Element {
    const user = useAppSelector((state) => state.user.user)
    const isInitialized = useAppSelector((state) => state.user.isInitialized)
    const location = useLocation()

    if (!isInitialized) {
        return <Loader loading={true} />
    }

    if (user) {
        return (
            <Navigate
                to={CLIENT_ROUTES.HOME}
                state={{ from: location }}
                replace
            />
        )
    }

    return <>{children}</>
}
