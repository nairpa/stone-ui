import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import "./Button.scss";

type Variants = 'outline' | 'filled' | 'text';
type Sizes = 'sm' | 'md' | 'lg';
type Colors = 'default' | 'primary' | 'secondary' | 'danger' | 'success';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant?: Variants,
    disableShadow?: boolean,
    size?: Sizes,
    color?: Colors,
    label: string,
}

const Button = ({label = "Button", variant = 'filled', disableShadow = false, size = 'md', color='primary', ...props} : ButtonProps) => { 
    return (
        <button 
            className={`${variant} ${disableShadow ? '' : 'shadow'} ${size} ${color}`} 
            {...props}
        >  
            <span className="label">{ label }</span> 
        </button>
    )
}

export default Button