import React, { useState } from "react";
import "./listtt.css";
import { Link } from "react-router-dom";
import { Publish } from "@material-ui/icons";
import { useEditContext } from "../../lib/edit/EditContext";
import * as API from "../../api/list/list";
import { toast } from "react-toastify";

export default function Listtt() {
  const { list } = useEditContext();
  const [listEdit, setListEdit] = useState({
    listTitle: list?.listTitle,
    listType: list?.listType,
    listGenre: list?.listGenre,
  });

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await API.editList(list.id, listEdit);

      console.log(res);

      if (res.status === 200) {
        toast.success("List edited successfully.", {
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
            <input
              type="text"
              placeholder="List Title"
              value={listEdit.listTitle}
              onChange={(e) =>
                setListEdit({ ...listEdit, listTitle: e.target.value })
              }
            />
            <label>Type</label>
            <input
              type="text"
              placeholder="List Type"
              value={listEdit.listType}
              onChange={(e) =>
                setListEdit({ ...listEdit, listType: e.target.value })
              }
            />
            <label>Genre</label>
            <input
              type="text"
              placeholder="List Genre"
              value={listEdit.listGenre}
              onChange={(e) =>
                setListEdit({ ...listEdit, listGenre: e.target.value })
              }
            />
          </div>
          <div className="productFormRight">
            <button className="productButton" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
