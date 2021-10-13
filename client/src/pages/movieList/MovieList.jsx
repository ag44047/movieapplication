import { useState, useEffect } from "react";
import "./movieList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import * as API from "../../api/movies/movie";
import { useEditContext } from "../../lib/edit/EditContext";
import { toast } from "react-toastify";

export default function MovieList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const { handleEditMovie } = useEditContext();

  const handleClick = (id) => {
    const selectedForEdit = data.find((el) => el.id === id);
    if (!selectedForEdit) return;
    handleEditMovie({ ...selectedForEdit });
    console.log(data);
  };

  const fetchData = async () => {
    setLoading(true);

    try {
      const res = await API.getMovies();
      const data = await res.data;

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

  const handleDelete = async (id) => {
    setData(data.filter((item) => item.id !== id));
    try {
      const res = await API.deleteMovie(id);

      if (res.status === 200) {
        toast.success("Movie deleted successfully.", {
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

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "movie",
      headerName: "Movie",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    {
      field: "genre",
      headerName: "Genre",
      width: 120,
    },
    {
      field: "year",
      headerName: "Year",
      width: 120,
    },
    {
      field: "limit",
      headerName: "Limit",
      width: 120,
    },
    {
      field: "isSeries",
      headerName: "isSeries",
      width: 120,
    },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/dashboard/movie/" + params.row.id}>
              <button
                className="productListEdit"
                onClick={() => handleClick(params.row.id)}
              >
                Edit
              </button>
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

  if (loading) return <h6>Loading movies...</h6>;

  if (error) return <h6>Something went wrong, please refresh your page!</h6>;

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
