import { DetailedHTMLProps, InputHTMLAttributes } from "react"
import './TextInput.scss';

export interface TextInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label?: string,
    helperText?: string,
    id: string,
    error?: string,
    fullWidth?: boolean
}

const TextInput = ({ id="label", label = "Label", error, fullWidth=true, helperText="Texto de ayuda", placeholder="Placeholder", required, ...props}:TextInputProps) => {
    return (
        <div className={`text-input ${error? 'error' : ''} ${fullWidth? 'full-w' : ''}`}>
            <label htmlFor={id}>{label}</label>
            <input className={fullWidth ? 'full-w' : ''} type="text" {...props} name={id} disabled/>
            <span>{helperText}</span>
        </div>
    )
}

export default TextInput