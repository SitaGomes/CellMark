import { ReactChild } from "react";
import Styles from "./style.module.scss";

interface ButtonProps {
    regular?: boolean,
    children: ReactChild,
    
}

export const Button = ({children, regular}: ButtonProps): JSX.Element => {
    return (
        <button className={regular ? Styles.nocolor : Styles.color}>
            {children}
        </button>
    )
}