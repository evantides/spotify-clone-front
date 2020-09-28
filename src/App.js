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

  // const handleSelect = event => {
  //   updateFormInput({...formInput, ...{[event.target.id]: }})
  // }

  const handleSubmit = async(event) => {
    event.preventDefault();
    const terms = formInput.searchTerms.replace(' ', '%20')
    try {
      const response = await axios.get(`http://localhost:8888/search/${formInput.searchType}/${terms}`)
      console.log(response)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="App">
    <form onSubmit={handleSubmit}>
      <input
        list={'searchType'}
        // onChange={handleChange}
        />
      <input
          type={'text'}
          value={formInput.searchTerms}
          id={"searchTerms"}
          onChange={handleChange}
      />
        <datalist id={'searchType'}>
          <option value={"Artist"}/>
          <option value={"Song Name"}/>
          <option value={"Album"}/>
          <option value={"Playlist"}/>
        </datalist>
      <input type={'submit'} value={"Search"}/>
    </form>
    </div>
  );
}

export default App;
