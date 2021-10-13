import "./movie.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Publish } from "@material-ui/icons";
import { useEditContext } from "../../lib/edit/EditContext";
import * as API from "../../api/movies/movie";
import { toast } from "react-toastify";

export default function Movie() {
  const { movie } = useEditContext();
  const [movieEdit, setMovieEdit] = useState({
    title: movie?.title,
    desc: movie?.desc,
    year: movie?.year,
    genre: movie?.genre,
    limit: movie?.limit,
    trailer: movie?.trailer,
    video: movie?.video,
  });

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await API.editMovie(movie.id, movieEdit);

      console.log("res from updating moveis", res);
      if (res.status === 200) {
        toast.success("Movie edited successfully.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.error(error.toString());
    }
  };

  console.log("mov", movie);
  if (!movie) return <h6>Loading...</h6>;
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Movie</h1>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg"
              alt=""
              className="productInfoImg"
            />
            <span className="productName">{movie.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">
                {movie.id.toString().substring(0, 5)}
              </span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Genre:</span>
              <span className="productInfoValue">{movie.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Year:</span>
              <span className="productInfoValue">{movie.year}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Limit:</span>
              <span className="productInfoValue">{movie.limit}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Movie Title</label>
            <input
              type="text"
              placeholder="Movie Title"
              value={movieEdit.title}
              onChange={(e) =>
                setMovieEdit({ ...movieEdit, title: e.target.value })
              }
            />
            <label>Year</label>
            <input
              type="text"
              placeholder="Movie Year"
              value={movieEdit.year}
              onChange={(e) =>
                setMovieEdit({ ...movieEdit, year: e.target.value })
              }
            />
            <label>Genre</label>
            <input
              type="text"
              placeholder="Movie Genre"
              value={movieEdit.genre}
              onChange={(e) =>
                setMovieEdit({ ...movieEdit, genre: e.target.value })
              }
            />
            <label>Limit </label>
            <input
              type="text"
              placeholder="Movie Limit"
              value={movieEdit.limit}
              onChange={(e) =>
                setMovieEdit({ ...movieEdit, limit: e.target.value })
              }
            />
            <label>Description </label>
            <input
              type="text"
              placeholder="Description"
              value={movieEdit.desc}
              onChange={(e) =>
                setMovieEdit({ ...movieEdit, desc: e.target.value })
              }
            />
            <label> Trailer</label>
            <input
              type="file"
              placeholder="Movie Trailer"
              // value={movieEdit.trailer}
              // onChange={(e) =>
              //   setMovieEdit({ ...movieEdit, trailer: e.target.value })
              // }
            />
            <label>Video</label>
            <input
              type="file"
              placeholder="Movie Video"
              // value={movieEdit.video}
              // onChange={(e) =>
              //   setMovieEdit({ ...movieEdit, video: e.target.value })
              // }
            />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg"
                alt=""
                className="productUploadImg"
              />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
