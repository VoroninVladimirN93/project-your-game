import { useAppSelector } from "@/shared/hooks/reduxHooks"

export function ProfilePage(): React.JSX.Element {
    const { user } = useAppSelector((state) => state.user)
    
    return <>{user?.username}</>
}
