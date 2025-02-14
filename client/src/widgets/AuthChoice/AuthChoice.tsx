import React, { useState } from "react"
import { Button } from "antd"
import { AuthForm } from "@/features"
import styles from "./AuthChoice.module.css"

export function AuthChoice(): React.JSX.Element {
    const [authType, setAuthType] = useState<"signin" | "signup">("signin")

    return (
        <div className={styles.authPageContainer}>
            <div className={styles.authButtons}>
                <Button
                    type={authType === "signin" ? "primary" : "default"}
                    onClick={() => setAuthType("signin")}
                >
                    Авторизация
                </Button>
                <Button
                    type={authType === "signup" ? "primary" : "default"}
                    onClick={() => setAuthType("signup")}
                >
                    Регистрация
                </Button>
            </div>

            <AuthForm type={authType} />
        </div>
    )
}

export default AuthChoice
