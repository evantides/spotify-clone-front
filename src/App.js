import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import NavBar from "./components/Nav";

function App() {
  const [formInput, updateFormInput] = useState({
    searchType: "artist",
    searchTerms: ""
  })

  const [results, updateResults] = useState([])

  const handleChange = event => {
    updateFormInput({...formInput, ...{[event.target.id]: event.target.value}})
  }

  const handleLogOut = () => {
    try {
      setIsLoggedIn(false);
      localStorage.removeItem("loggedIn");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogIn = () => {
    try {
      localStorage.setItem("loggedIn", "true");
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    const terms = formInput.searchTerms.replace(' ', '%20')
    try {
      const response = await axios.get(`http://localhost:8888/search/${formInput.searchType}/${terms}`)
      const data = await response.data;
      updateResults([...results, ...data])
    } catch (err) {
      console.error(err)
    }
  }
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <NavBar handleLogIn={handleLogIn} handleLogOut={handleLogOut}/>
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
        <main>
          {console.log(results)}
        {results?.map(specific => {
          return (
              <div key={specific.uri}>
                <h1>Artist</h1>
                <div>{specific.artistName}</div>
              </div>
          )
        })}
        </main>

    </div>
  );
}

export default App;
