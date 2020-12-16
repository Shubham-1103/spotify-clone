
import './App.css';
import Login from './Login';
import { useEffect, useState } from 'react';
import { getTokenFormUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player';

const spotify = new SpotifyWebApi();

function App() {

  const [token,setToken] = useState(null);
   // run code based on a given condition
   useEffect(()=>{
      const hash = getTokenFormUrl();
      window.location.hash = "";
      const _token = hash.access_token;
      if(_token){
        setToken(_token);
        spotify.setAccessToken(_token);
        spotify.getMe().then(user=>{
          console.log('🧑‍🦰', user);
        })
      }

  },[]);
  return (
    //BEM: BEM: stands for block element modified 
    <div className="app">
      {
        token ? <Player/> : <Login/>
      }
    </div>
  );
}

export default App;
