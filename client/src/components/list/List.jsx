import axios from "axios";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useRef, useState, useEffect } from "react";
import ListItem from "../listItem/ListItem";
import "./list.scss";
import * as API from "../../api/movies/movie";
import { useLocation } from "react-router-dom";

export default function List(movies, type) {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const location = useLocation();
  // const [movies, setMovies] = useState([]);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  // const handleFetchData = async () => {
  //   const res = await API.getMovies();

  //   const data = await res.data;

  //   console.log("data  ", data);

  //   setMovies([...data]);
  // };

  // useEffect(() => {
  //   handleFetchData();
  // }, []);

  if (!movies) return <h6>No data</h6>;

  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          {movies?.movies
            .filter(
              (movie) =>
                movie.isSeries ===
                (location.pathname === "/series" ? true : false)
            )
            .map((movie, index) => {
              console.log(location.pathname);

              return (
                <ListItem
                  key={`${movie + "" + index}`}
                  index={index}
                  {...movie}
                />
              );
            })}
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}
