import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import NavBar from "./components/Nav";
import ArtistItem from "./components/ArtistItem"
import AlbumItem from "./components/AlbumItem"
import PlaylistItem from "./components/PlaylistItem";
import TrackItem from "./components/TrackItem";

function App() {
  const [formInput, updateFormInput] = useState({
    searchType: "artist",
    searchTerms: ""
  })

  const [searchType, updateSearchType] = useState();

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
      updateResults([...data]);
      updateSearchType(formInput.searchType);
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
          {searchType === "artist" ? <ArtistItem results={results}/> : ""}
          {searchType === "track" ? <TrackItem results={results}/> : ""}
          {searchType === "album" ? <AlbumItem results={results}/> : ""}
          {searchType === "playlist" ? <PlaylistItem results={results}/> : ""}
        </main>

    </div>
  );
}

export default App;
