import { useState } from "react";
import TextInput, { TextInputProps } from "../textInput/TextInput";
import "./SearchInput.scss";

type Sizes = 'sm' | 'md' ;

export interface SearchInputProps extends TextInputProps {
    options: string[],
    handleChange: (event: string) => void;
}

const countries = [ 'Argentina', 'Brasil', 'Colombia', 'Peru' ]
const SearchInput= ({ id, options = countries, handleChange, ...props}: SearchInputProps) => {
    const [ open, setOpen ] = useState(false);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(event.target.value);
        setOpen(true)
    }

    const onSelection = (event: React.BaseSyntheticEvent) => {
        handleChange(event.target.outerText);
        setOpen(false)
    }

    const showSuggestions = () => {
        if(open) {
            return (
                <div className="option-container">
                    <ul>
                        { options.map(option => <li className="option-item" onClick={(e) => onSelection(e)}>{option}</li>) }
                    </ul>
                </div>
            )
        } else {
            return;
        }
       
    }

    return (
        <>
            <TextInput id={id} onChange={(e) => onChange(e)} {...props}/>
            { showSuggestions() }
        </>
    )
}

export default SearchInput;