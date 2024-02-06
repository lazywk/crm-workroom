import React, { memo } from "react"

interface ButtonProps {
    children?: React.ReactNode,
    rule: "adding" | "save" | "send" | "link" | "menu",
    type?: "button" | "submit" | "reset",
    disabled?: boolean,
    onClick?: () => void
}

export default function Button({ children, rule, type = "button", disabled, onClick }: ButtonProps) {

    return (
        <button type={type} className={`button ${rule}-button`} disabled={disabled} onClick={onClick}>
            {children}
        </button>
    )
}
