import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [formInput, updateFormInput] = useState({
    searchType: "",
    searchTerms: ""
  })

  const handleChange = event => {
    updateFormInput({...formInput, ...{[event.target.id]: event.target.value}})
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      const response = await axios.get('')
    }
  }

  return (
    <div className="App">
    <form onSubmit={handleSubmit}>
      <input
        type={'datalist'}
        value={formInput.searchType}
        id={"searchType"}
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
