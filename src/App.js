import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify'
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  //variables use states
  const [token, setToken] = useState(null);
  const [{user}, dispatch] = useDataLayerValue();


  //Run code on given condition
  useEffect(() => {
    //code...
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.acces_token;
    
    
    if (_token){
      //store token
      setToken(_token)
      spotify.setAccessToken(_token);//giving accessToken to spotify api
      spotify.getMe().then(user =>{
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })
    }
  }, []);
  return (
    <div className="App">
      {
        token ?
        <Player />
        :
        <Login />
      }
    </div>
  );
}

export default App;
