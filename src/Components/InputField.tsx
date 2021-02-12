import React, { FC } from 'react'

interface InputFieldProps {
    placeholder: string
    autoFocus: boolean
    onChange: (newValue: string) => void
    value: string | number
    isPassword?: boolean
}

export const InputField:FC<InputFieldProps> = ({ placeholder, autoFocus, onChange, value, isPassword=false }) => {
    return (<input 
        className="rounded-edges" 
        type={isPassword ? "password" : "text"}
        placeholder={placeholder} 
        autoFocus={autoFocus}
        value={value}
        onChange={(e) => onChange(e.target.value)}
    />)
}