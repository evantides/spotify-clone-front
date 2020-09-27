import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [formInput, updateFormInput] = useState({
    searchType: "",
    searchTerms: ""
  })

  const handleChange = event => {
    updateFormInput({...formInput, ...{[event.target.id]: event.target.value}})
  }

  const handleSelect = event => {
    updateFormInput({...formInput, ...{[event.target.id]: event.target.value}})
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    const terms = formInput.searchTerms.replace(' ', '%20')
    try {
      const response = await axios.get(`http://localhost:8888/search/${formInput.searchType}/${terms}`)
      console.log(response.data)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="App">
    <form onSubmit={handleSubmit}>
      <input
          type={'text'}
          value={formInput.searchTerms}
          id={"searchTerms"}
          onChange={handleChange}
      />
        <select id={'searchType'} name={"Select A Search Type"} onChange={handleChange}>
          <option value={"artist"}>Artist</option>
          <option value={"track"}>Track</option>
          <option value={"album"}>Album</option>
          <option value={"playlist"}>Playlist</option>
        </select>
      <input type={'submit'} value={"Search"}/>
    </form>
    </div>
  );
}

export default App;
