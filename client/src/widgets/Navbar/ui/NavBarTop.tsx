import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks"
import { logoutThunk } from "@/entities/user/api/userThunkApi"
import { Nav, Navbar, Container, NavbarBrand } from "react-bootstrap"
import { CLIENT_ROUTES } from "@/shared/enums/clientRoutes"
import styles from "./NavBarTop.module.css"

export function NavBarTop(): React.JSX.Element {
    const dispatch = useAppDispatch()
    const user = useAppSelector((state) => state.user.user)

    const navigate = useNavigate()
  

    const signOutHandler = async (): Promise<void> => {
        try {
            dispatch(logoutThunk())
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message)
            } else {
                console.log("An unexpected error")
            }
        }
    }

    return (
        <Navbar bg="dark" data-bs-theme="dark" className="">
            <Container>
                <NavbarBrand
                    className={styles.customBrand}
                    onClick={() => navigate(CLIENT_ROUTES.HOME)}
                >
                    Своя игра
                </NavbarBrand>

                <Nav className="ms-auto">
                    {user && (
                        <Nav.Link
                            onClick={() => navigate(CLIENT_ROUTES.PROFILE)}
                            className={styles.customNavLink}
                        >
                            Личный кабинет
                        </Nav.Link>
                    )}
                    {user && (
                        <Nav.Link
                            onClick={() => navigate(CLIENT_ROUTES.GAME)}
                            className={styles.customNavLink}
                        >
                            Игра
                        </Nav.Link>
                    )}
                    {!user && (
                        <>
                            {/* <Nav.Link onClick={() => navigate(CLIENT_ROUTES.AUTHORIZATION)} className={styles.customNavLink}>Авторизация</Nav.Link>
                <Nav.Link onClick={() => navigate(CLIENT_ROUTES.REGISTRATION)} className={styles.customNavLink}>Регистрация</Nav.Link> */}
                        </>
                    )}
                    {user && (
                        <Nav.Link
                            onClick={signOutHandler}
                            className={styles.customNavLink}
                        >
                            Logout
                        </Nav.Link>
                    )}
                </Nav>
            </Container>
        </Navbar>
    )
}
