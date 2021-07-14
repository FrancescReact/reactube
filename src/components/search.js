import React from 'react'
import '../styles.css'
function Search({ handleSetSearchValue }) {
    const handleChange = (e) => {
        handleSetSearchValue(e.target.value);
    }
    return (
        <div className="search-form">
            <form>
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