import {categories} from '../../data/moviesData.json';
import {ADD_CATEGORY} from '../actions/categoryAction';
import {ADD_MOVIES, DELETE_MOVIES, EDIT_MOVIES} from '../actions/moviesAction';

const initialState = {
  categories: categories,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      console.log('action =>>>>', action);
      return {...state, categories: [...state.categories, action.catData]};
    case ADD_MOVIES:
      return {
        ...state,
        categories: [
          ...state.categories.map((item, i) =>
            item.name === action.movieData.type
              ? {...item, movies: [...item.movies, action.movieData]}
              : item,
          ),
        ],
      };
    case DELETE_MOVIES:
      console.log(action);
      return {
        ...state,
        categories: state.categories.map((item, i) =>
          item.name === action.movieType
            ? {
                ...item,
                movies: [
                  ...item.movies.filter(
                    (movieItem, j) => movieItem.name !== action.movieName,
                  ),
                ],
              }
            : item,
        ),
      };
    case EDIT_MOVIES:
      console.log('Action =>', action);
      return {
        ...state,
        categories: [
          ...state.categories.map((item, i) =>
            item.name === action.editMovieData.type
              ? {
                  ...item,
                  movies: [
                    ...item.movies.map((movieItem, j) => {
                      if (movieItem.name === action.oldName) {
                        console.log('MovieItem =>', movieItem);
                        console.log(
                          'action.editMovieData =>',
                          action.editMovieData,
                        );
                        return action.editMovieData;
                      } else {
                        return movieItem;
                      }
                    }),
                  ],
                }
              : item,
          ),
        ],
      };
    default:
      return state;
  }
};

export default categoryReducer;
