import React from "react"

interface ButtonProps {
    children?: React.ReactNode,
    rule: "adding" | "save" | "send" | "link" | "menu",
    type?: "button" | "submit" | "reset",
    disabled?: boolean,
    onClick?: () => void,
    className?: string
}

export default function Button({ children, rule, type = "button", disabled, onClick, className }: ButtonProps) {

    return (
        <button type={type} className={`button ${rule}-button ${className}`} disabled={disabled} onClick={onClick}>
            {children}
        </button>
    )
}
