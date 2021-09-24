import "./movie.css";
import { Link } from "react-router-dom";
import { Publish } from "@material-ui/icons";

export default function Movie() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Movie</h1>
                <Link to="/newproduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">

                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg" alt="" className="productInfoImg" />
                        <span className="productName">The Matrix</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Genre:</span>
                            <span className="productInfoValue">Comedy</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Year:</span>
                            <span className="productInfoValue">1999</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Limit:</span>
                            <span className="productInfoValue">+16</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Movie Title</label>
                        <input type="text" placeholder="Movie Title" />
                        <label>Year</label>
                        <input type="text" placeholder="Movie Year" />
                        <label>Genre</label>
                        <input type="text" placeholder="Movie Genre" />
                        <label>Limit </label>
                        <input type="text" placeholder="Movie Limit" />
                        <label> Trailer</label>
                        <input type="file" placeholder="Movie Trailer" />
                        <label>Video</label>
                        <input type="file" placeholder="Movie Video" />
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg" alt="" className="productUploadImg" />
                            <label for="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div >
    );
}