import React, { useState, useEffect } from "react";
import * as API from "../../api/movies/movie";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
export const Home = ({ type }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);

      const res = await API.getLists();
      const data = await res.data;

      setData(data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {isLoading ? (
        <h6>Loading...</h6>
      ) : (
        data.map((list) => <List movies={[...list.content]} type={type} />)
      )}
    </div>
  );
};
