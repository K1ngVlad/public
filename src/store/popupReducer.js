const defaultState = {
  popup: false || Boolean(localStorage.getItem('popup')),
  title: '' || localStorage.getItem('title'),
  portfolio: 0 || Number(localStorage.getItem('portfolio')),
  signature: 0 || Number(localStorage.getItem('signaturePhoto')),
  popupFixed: false || Boolean(localStorage.getItem('fixed')),
  siteHeight: 0 || Number(localStorage.getItem('height')),
  popupHeight: 0 || Number(localStorage.getItem('popupHeight')),
};

const popupReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'setTitle':
      localStorage.setItem('title', action.payload);
      return { ...state, title: action.payload };
    case 'switchPopup':
      if (state.popup) {
        localStorage.setItem('popup', '');
        return { ...state, popup: false };
      }
      localStorage.setItem('popup', ' ');
      return { ...state, popup: true };
    case 'setPortfolio':
      localStorage.setItem('portfolio', action.payload);
      return { ...state, portfolio: action.payload };
    case 'setSignature':
      localStorage.setItem('signaturePhoto', action.payload);
      return { ...state, signature: action.payload };
    case 'switchFixed':
      if (state.popupFixed) {
        localStorage.setItem('fixed', '');
        return { ...state, popupFixed: false };
      }
      localStorage.setItem('fixed', ' ');
      return { ...state, popupFixed: true };
    case 'setHeight':
      localStorage.setItem('height', action.payload);
      return { ...state, siteHeight: action.payload };

    case 'setPopupHeight':
      localStorage.setItem('popupHeight', action.payload);
      return { ...state, popupHeight: action.payload };
    default:
      return state;
  }
};

export default popupReducer;
