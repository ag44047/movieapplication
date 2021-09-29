import "./addList.css";
import { useState } from "react";


export default function AddList() {
    const [list, setList] = useState(null);

    const handleChange = (e) => {
        const value = e.target.value;
        setList({ ...list, [e.target.name]: value });
    };
    const handleSelect = (e) => {
        console.log(e.target.selectedoptions);
    };
    return (
        <div className="newProduct">
            <h1 className="addProductTitle">New List!!!!!!</h1>
            <form className="addProductForm">
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
                    <label>Genre</label>
                    <input
                        type="text"
                        placeholder=" Description"
                        name="genre"
                        onChange={handleChange}
                    />
                </div>
                <div className="addProductItem">
                    <label>Type</label>
                    <select name="type" onChange={handleChange}>
                        <option value="movie">Movie</option>
                        <option value="series">Series</option>
                    </select>
                </div>
                <div className="addProductItem">
                    <label>Content</label>
                    <select multiple name="content" onChange={handleSelect}>
                        <option value="movie">Movie</option>

                    </select>
                </div>
                <button className="addProductButton">Create</button>
            </form>
        </div>
    );
}
