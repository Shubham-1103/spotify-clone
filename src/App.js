
import './App.css';
import Login from './Login';
import { useEffect } from 'react';
import { getTokenFormUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const [{user, token}, dispatch] = useDataLayerValue();
   // run code based on a given condition
   useEffect(()=>{
      const hash = getTokenFormUrl();
      window.location.hash = "";
      const _token = hash.access_token;
      if(_token){
        dispatch({
          type: 'SET_TOKEN',
          token: _token,
        })
        spotify.setAccessToken(_token);
        spotify.getMe().then(user=>{
          dispatch({
            type: 'SET_USER',
            user: user,
          })
        });
        spotify.getUserPlaylists().then(playlists=>{
          dispatch({
            type: 'SET_PLAYLIST',
            playlists: playlists,
          })
        });
        spotify.getPlaylist('******').then(response=>{
          dispatch({
            type: 'SET_DISCOVER_WEEKLY',
            discover_weekly: response
          })
        });
      }

  },[]);

  return (
    //BEM: BEM: stands for block element modified 
    <div className="app">
      {
        token ? <Player spotify = {spotify}/> : <Login/>
      }
    </div>
  );
}

export default App;
