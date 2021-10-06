import { useState, useEffect } from "react";
import "./listList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import * as API from "../../api/movies/movie";

export default function MovieList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const fetchData = async () => {
    setLoading(true);

    try {
      const res = await API.getLists();
      const data = await res.data;

      console.log("listlist: ", data);

      setData([...data]);
      setError(undefined);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("data:", data);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "id", width: 90 },

    {
      field: "listTitle",
      headerName: "Title",
      width: 150,
    },
    {
      field: "listGenre",
      headerName: "Genre",
      width: 150,
    },
    {
      field: "listType",
      headerName: "Type",
      width: 150,
    },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/dashboard/listtt/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  if (loading) return <h6>Loading lists...</h6>;
  if (error)
    return <h6>Something wrong happened, please refresh your page!</h6>;

  return (
    <div className="productList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
