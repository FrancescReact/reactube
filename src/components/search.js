import React from 'react'
import '../styles.css'
function Search({ handleSetCerca }) {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleChange = (e) => {
        handleSetCerca(e.target.value);
    }
    return (
        <div className="search-form">
            <form onSubmit={handleSubmit} >
                <div className="form-controls">
                    <label></label>
                    <input
                        className="inputIntro"
                        type="text"
                        name="cerca"
                        onChange={handleChange}
                        placeholder="Introduce somme word to search videos"
                        size="150"
                    />
                </div>
            </form>
        </div>
    )
}
export default Search