import { ReactChild } from "react";
import Styles from "./style.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    regular?: boolean,
    children: ReactChild, 
}

export const Button = ({children, regular, ...rest}: ButtonProps): JSX.Element => {
    
    return (
        <button {...rest}  className={regular ? Styles.nocolor : Styles.color}>
            {children}
        </button>
    )
}