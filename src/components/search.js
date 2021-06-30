import React from 'react'
import '../styles.css'
import { useState } from 'react'

function Search(dada) {

    const [cerca, setCerca] = useState({
        dada: ''
    })

    const handleChange = (e) => {
        e.preventDefault();
        const busca=e.target.value
        setCerca({ dada: e.target.value });
        
    }
    console.log(cerca.dada);
        
    return (
        <div>
            <form >
                <div className="form-controls">
                    <label></label>
                    <input
                        type="text"
                        name="cerca"
                        onChange={handleChange}
                    />                
                </div>
            </form>
        </div>
    )
}

export default Search