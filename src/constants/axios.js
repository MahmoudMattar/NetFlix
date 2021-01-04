import axios from "axios";

// making requests to the movies database
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  
});

export default instance;