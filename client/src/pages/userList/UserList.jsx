import "./userList.css";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import * as API from "../../api/user/user";
import { useEditContext } from "../../lib/edit/EditContext";
import { Snackbar } from "@material-ui/core";

export default function UserList() {
  const [data, setData] = useState(userRows);
  const [error, setError] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { handleEditUser } = useEditContext();

  const handleFetchData = async () => {
    try {
      const res = await API.getUsers();

      const data = await res.data;

      console.log("arrived data  ", data);
      setData(data);
    } catch (error) {
      throw new Error("Error happened while fetching data on userlist");
    }
  };

  const handleDelete = async (id) => {
    try {
      setIsLoading(true);

      const res = await API.deleteUser(id);

      console.log(res);

      if (res.status === 200) {
        setError(undefined);
        setMessage("User deleted successfully.");

        setData((old) => old.filter((user) => user.id !== id));
      }
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = async (id) => {
    const selectedForEdit = data.find((el) => el.id === id);
    if (!selectedForEdit) return;
    handleEditUser({ ...selectedForEdit });
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "displayName",
      headerName: "Username",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.displayName}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/dashboard/user/" + params.row.id}>
              <button
                className="userListEdit"
                onClick={() => handleEdit(params.row.id)}
              >
                Edit
              </button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      {message}
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
