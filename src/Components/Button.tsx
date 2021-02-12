import React, { FC } from 'react'
interface IButtonProps {
    title: string
    label: string
    onClick: () => void
    extraClassName?: string
}
export const Button:FC<IButtonProps> = ({title, extraClassName="", label, onClick}) => <div onClick={onClick} title={title} className={`btn spaced-btn pad-10 ${extraClassName}`.trim()}>{label}</div>