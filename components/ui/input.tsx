import React from "react"

interface InputProps {
    type?: "text" | "email" | "password" | "number",
    disabled?: boolean,
    onChange?: ((value: any) => void) | undefined,
    className?: string,
    placeholder?: string,
    error?: boolean
}


interface LabelProps {
    className?: string,
    children: React.ReactNode,
    label: string,
    error?: boolean | string
}



export function Label({ className, children, label, error }: LabelProps) {

    return (
        <label className={`form-label ${className} label-error-${typeof error === "string" ? "true" : "false"}`}>
            <span>{label}</span>
            {children}
            <span className="label-error-text">{typeof error === "string" ? error : ""}</span>
        </label>
    )
}


export default function Input({ className, type, placeholder, onChange, error, disabled }: InputProps) {

    return (
        <input
            className={`default-input input-${type} ${className} input-error-${error || false}`}
            type={type}
            placeholder={placeholder}
            onChange={(e) => onChange && onChange(e.target.value)}
            disabled={disabled}
        />
    )
}


