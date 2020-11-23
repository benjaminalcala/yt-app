import React, {useState} from 'react';



const SearchBar = ({onInputSubmit}) => {
    const [input, setInput] = useState('');

    const onFormSubmit = (event) => {
        event.preventDefault();
        onInputSubmit(input);
    }

    return(
        <div className="search-bar ui segment">
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input 
                        type="text" 
                        onChange={e=> setInput(e.target.value)} 
                        value={input}
                    /> 

                </div>
            </form>
        </div>
    );

}

export default SearchBar;