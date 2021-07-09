export const ADD_CATEGORY = 'ADD_CATEGORY';

export const addCategory = (name, desc) => {
  return {
    type: ADD_CATEGORY,
    catData: {
      name,
      desc,
      movies: [],
    },
  };
};
