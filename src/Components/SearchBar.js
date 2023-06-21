import React, { useState } from "react";
import axios from "axios";

const SearchBar = ({addImages}) => {
    let [searchItem, setSearchItem] = useState("");

    
    function handleChange(){
        axios.get("https://api.unsplash.com/search/photos", {
            params: {
                client_id: "QJqt1I6RHaxay-8zDJNFF_iDKOTNOTKlRgHZauEiDqY",
                query: searchItem

            }
        })
        .then(response => addImages(response.data.results))
        .catch(err => console.log(err))
    }




    return (
        <div className='searchBar'>
          <input type="text" placeholder="Enter search term" 
          onChange={(e) => setSearchItem(e.target.value)}    />&nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={handleChange}>Search</button>
        </div>
    )
};

export default SearchBar;