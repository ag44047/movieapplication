import "./addMovie.css";
import { useState } from "react";
import * as API from "../../api/movies/movie";

export default function AddMovie() {
  const [movie, setMovie] = useState({
    title: "",
    desc: "",
    img: "",
    imgSm: "",
    trailer: "",
    video: "",
    year: "",
    limit: 0,
    genre: "",
    isSeries: false,
    movielists: [],
  });

  //   const [img, setImg] = useState(null);
  //   const [imgTitle, setImgTitle] = useState(null);
  //   const [imgSm, setImgSm] = useState(null);
  //   const [trailer, setTrailer] = useState(null);
  //   const [video, setVideo] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    // const value = e.target.value;
    // setMovie({ ...movie, [e.target.name]: value });
    e.preventDefault();
    console.log("movie:  ", movie);
    const res = await API.addMovie(movie);
    // const data = await res.data;

    console.log(res);
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Movie!!!!!!</h1>
      <form className="addProductForm" onSubmit={handleSubmit}>
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="Img" name="img" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Title Image</label>
          <input
            type="file"
            id="ImgTitle"
            name="imgTitle"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Thumbnail Image</label>
          <input type="file" id="ImgSm" name="imgSm" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            type="text"
            placeholder="Rina Korca"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            type="text"
            placeholder=" Description"
            name="desc"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <input
            type="text"
            placeholder="Rina Korca"
            name="year"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input
            type="text"
            placeholder="Rina Korca"
            name="genre"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Duration</label>
          <input
            type="text"
            placeholder="Duration"
            name="Duration"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Limit</label>
          <input
            type="text"
            placeholder="Limit"
            name="Limit"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Is Series?</label>
          <select name="isSeries" id="IsSeries" onChange={handleChange}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Trailer</label>
          <input type="file" name="trailer" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Video</label>
          <input type="file" name="video" onChange={handleChange} />
        </div>
        <button className="addProductButton" type="submit">
          Create
        </button>
      </form>
    </div>
  );
}
