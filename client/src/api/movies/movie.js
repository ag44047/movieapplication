import axios from "axios";
import * as API from "../api";

export const getMovies = async () => API.requests.get("/movies");

export const getMovieById = async (id) => API.requests.get(`/movies/${id}`);

export const getLists = async () => API.requests.get("/listts");

export const addMovie = async (movie) =>
  API.requests.post("/movies", { movie });
