import { useState } from "react";
import TextInput, { TextInputProps } from "../textInput/TextInput";
import "./SearchInput.scss";

type Sizes = 'sm' | 'md' ;

export interface SearchInputProps extends TextInputProps {
    options: string[]
}

const countries = [ 'Argentina', 'Brasil', 'Colombia', 'Peru' ]
const SearchInput= ({ id, options = countries, ...props}: SearchInputProps) => {
    const [ search, setSearch ] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }

    const showSuggestions = () => {
        if(options?.some(option => option.trim().includes(search))) {
            return (
                <div className="option-container">
                    <ul>
                        { options.filter(option => option.includes(search)).map(option => <li className="option-item">{option}</li>) }
                    </ul>
                </div>
            )
        } else {
            return;
        }
       
    }

    return (
        <>
            <TextInput id={id} onChange={(e) => handleChange(e)} {...props}/>
            { showSuggestions() }
        </>
    )
}

export default SearchInput;