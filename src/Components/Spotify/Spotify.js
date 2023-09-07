import React from 'react'
import "./Spotify.css";
import { Link } from 'react-router-dom';
const Spotify = () => {
  return (
    <>
    <div className='spotify_main_div'>
    <Link to="/successstories" className="link">
              {" "}
              Portfolio 
            </Link>
            <Link to="/spotifypage" className="Spotify_btn">
              {" "}
              /Spotify
            </Link>

            </div>
    </>
  )
}

export default Spotify