import { Button } from "../../components/button"
import { Header } from "../../components/header"
import {useNavigate} from "react-router-dom"

import Styles from "./login.module.scss"

export const Login = (): JSX.Element => {

    const navigate = useNavigate()

    function adminMode () {
        localStorage.setItem("authentication", "admin")
        navigate("/home")
    }
    
    function userMode () {
        localStorage.setItem("authentication", "user")
        navigate("/home")
    }

    return (
        <>
            <Header />
            <div className={Styles.container}>
                <h1>Como deseja entrar?</h1>
                <div className={Styles.buttonContainer}>
                    <Button onClick={adminMode}>Admin</Button>
                    <Button onClick={userMode}>Usuário</Button>
                </div>
            </div>
        </>
    )
}