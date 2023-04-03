import { DetailedHTMLProps, InputHTMLAttributes } from "react"
import './TextInput.scss';

type Sizes = 'sm' | 'md' ;

export interface TextInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label?: string,
    helperText?: string,
    id: string,
    error?: string,
    fullWidth?: boolean,
    inputSize?: Sizes
}

const TextInput = ({ id="label", label = "Label", error, inputSize="md", fullWidth=true, helperText="Texto de ayuda", ...props}:TextInputProps) => {
    return (
        <div className={`text-input ${error? 'error' : ''} ${fullWidth? 'full-w' : ''}`}>
            <label htmlFor={id}>{label}</label>
            <input className={`${fullWidth ? 'full-w' : ''} ${inputSize}`} type="text" {...props} name={id} />
            <span>{error ? error : helperText}</span>
        </div>
    )
}

export default TextInput