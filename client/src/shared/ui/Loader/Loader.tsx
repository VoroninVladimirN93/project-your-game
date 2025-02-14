import React, { ReactNode } from "react"
import { Spinner } from "react-bootstrap"

type LoaderProps = {
    loading: boolean
    children?: ReactNode
}

export function Loader({ loading, children }: LoaderProps): React.JSX.Element {
    if (!loading) {
        return <>{children}</>
    }

    return (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    )
}
