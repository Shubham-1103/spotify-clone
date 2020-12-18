import React from  'react';
import Body from './Body.js';
import "./Player.css";

import Sidebar from './Sidebar';
import Footer from './Footer';

function Player({spotify}){
    return(
        <div className = "player">
            <div className = "player__body">
                <Sidebar/>
                <Body spotify={spotify}/>
            </div>
            <Footer />
        </div>
    )
}

export default Player;