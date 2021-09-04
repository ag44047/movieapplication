import React from 'react'
import "./featured.scss"
import moviee from '../../images/moviee.jpg';
import PlayArrow from '@material-ui/icons/PlayArrow';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
const Featured = ({type}) => {
    return (
        <div className="featured">
            {type && (<div className="category">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>

                </select>
            </div>)}
            <img width="100%" src={moviee} alt=""/>
            <div className="info">
                <span className="desc">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</span>
                <div className="buttons">
                    <button className="play"> <PlayArrow/> <span>Play</span></button>
                    <button className="more"> <InfoOutlinedIcon/>
                    <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured
