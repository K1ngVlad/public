console.log('текущая страница ' + localStorage.getItem('page'));
const defaultState = {
  page: Number(localStorage.getItem('page')) || 1,
  extraOptions: false || Boolean(localStorage.getItem('extraOptions')),
};

const pageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'changePage':
      localStorage.setItem('page', action.payload);
      return { ...state, page: action.payload };
    case 'switchExtra':
      if (state.extraOptions) {
        localStorage.setItem('extraOptions', '');
        return { ...state, extraOptions: false };
      }
      localStorage.setItem('extraOptions', ' ');
      return { ...state, extraOptions: true };
    default:
      return state;
  }
};

export default pageReducer;
