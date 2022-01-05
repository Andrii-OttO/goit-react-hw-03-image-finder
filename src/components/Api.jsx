// import axios from "axios";
const axios = require("axios");

const fetchPicture = (query, currentPage) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${currentPage}&key=25101994-7bfa15225df0fe408aedebc37&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits);
};
export default fetchPicture;

// function fetchPicture(searchQuery, currentPage) {
//   return fetch(
//     `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=25101994-7bfa15225df0fe408aedebc37&image_type=photo&orientation=horizontal&per_page=12`
//   ).then((response) => {
//     if (response.ok) return response.json();
//   });
// }
// export default fetchPicture;
