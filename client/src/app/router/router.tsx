// import GamePageMemo from "@/pages/GamePage/ui/GamePage";
import { createBrowserRouter } from "react-router-dom"
import { CLIENT_ROUTES } from "@/shared/enums/clientRoutes"
import { SignUpPage, SignInPage, MainPage, ErrorPage, GamePage } from "@/pages"
import { Layout } from "../Layout/Layout"
import { PublicGuard } from "@/shared/hocs/PublicGuard"
import { AuthGuard } from "@/shared/hocs/AuthGuard"

export const router = createBrowserRouter([
    {
        path: CLIENT_ROUTES.HOME,
        element: <Layout />,
        children: [
            {
                path: CLIENT_ROUTES.HOME,
                element: <MainPage />,
            },
            {
                path: CLIENT_ROUTES.AUTHORIZATION,
                element: (
                    <PublicGuard>
                        <SignInPage />
                    </PublicGuard>
                ),
            },
            {
                path: CLIENT_ROUTES.REGISTRATION,
                element: (
                    <PublicGuard>
                        <SignUpPage />
                    </PublicGuard>
                ),
            },
            {
                path: CLIENT_ROUTES.NOTFOUND,
                element: <ErrorPage />,
            },
            {
                path: CLIENT_ROUTES.GAME,
                element: (
                    <AuthGuard>
                        <GamePage />
                    </AuthGuard>
                ),
            },
        ],
    },
])
