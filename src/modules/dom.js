import axios from 'axios';

const urlInvolvement = process.env.INVOLVEMENT_API_LINK || 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const idInvolvement = process.env.INVOLVEMENT_ID || 'v0DZEEXmzVXZDs3EcqLI';
const receiveData = async () => {
  try {
    const response = await axios.get(
      `${urlInvolvement}/apps/${idInvolvement}/likes/`,
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
const displayMovies = async (data) => {
  const main = document.querySelector('.main');
  main.innerHTML = '';
  const section = document.createElement('section');
  section.classList.add('movie-container');
  const dataInfo = await receiveData();
  data.forEach((movie) => {
    const likes = dataInfo.filter(
      (info) => info.item_id === movie.id.toString(),
    );
    // show likes
    const showLikes = likes.length === 0 ? '<span class="like-count">0</span> likes' : `<span class="like-count">${likes[0].likes}</span> likes`;
    section.innerHTML += `
      <div class="movie-card">

          <img class="img-card" src="https://image.tmdb.org/t/p/original${movie.poster_path}" alt="image poster">
          <div class="title-icon"><h2>${movie.title}</h2><i id="${movie.id}" class="fa fa-heart-o pointer like"></i></div>
          <div class="likes">${showLikes}</div>
          <div class="btn"> <button href="/movie#${movie.id}" class="spaLink btn-1">Comments</button>       
      </div>
      `;
  });
  main.appendChild(section);
};
export { displayMovies, receiveData };
