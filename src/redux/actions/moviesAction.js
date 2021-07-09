export const ADD_MOVIES = 'ADD_MOVIES';
export const DELETE_MOVIES = 'DELETE_MOVIES';
export const EDIT_MOVIES = 'EDIT_MOVIES';

export const addMovies = (name, rate, description, type) => {
  return {
    type: ADD_MOVIES,
    movieData: {
      name,
      rate,
      description,
      type,
    },
  };
};

export const deleteMovies = (name, type) => {
  return {type: DELETE_MOVIES, movieName: name, movieType: type};
};

export const editMovies = (oldName, name, rate, description, type) => {
  return {
    type: EDIT_MOVIES,
    editMovieData: {name, rate, description, type},
    oldName,
  };
};
