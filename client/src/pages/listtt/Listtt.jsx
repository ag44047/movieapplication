import "./listtt.css";
import { Link } from "react-router-dom";
import { Publish } from "@material-ui/icons";

export default function Listtt() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">List</h1>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
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
              <span className="productInfoKey">Type:</span>
              <span className="productInfoValue">movie</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>List Title</label>
            <input type="text" placeholder="List Title" />
            <label>Type</label>
            <input type="text" placeholder="List Type" />
            <label>Genre</label>
            <input type="text" placeholder="List Genre" />
          </div>
          <div className="productFormRight">

            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
