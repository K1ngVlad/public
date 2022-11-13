const defaultState = {
  cash: Number(localStorage.getItem('cash')) || 49.99,
  soon: 0 || Number(localStorage.getItem('soonCash')),
  revision: 0 || Number(localStorage.getItem('revisionCash')),
  electronicFormat: 0 || Number(localStorage.getItem('electronicFormatCash')),
  calligrapher: Number(localStorage.getItem('calligrapherCash')) || 49.99,
  signatureQuanity: 0 || Number(localStorage.getItem('signatureQuanityCash')),
};

const cashReducer = (state = defaultState, action) => {
  let cash;
  switch (action.type) {
    case 'addCash':
      cash = Math.round((state.cash + action.payload) * 100) / 100;
      localStorage.setItem('cash', cash);
      return { ...state, cash: cash };
    case 'removeCash':
      cash = Math.round((state.cash - action.payload) * 100) / 100;
      localStorage.setItem('cash', cash);
      return { ...state, cash: cash };
    case 'calculateCash':
      const {
        soon,
        revision,
        electronicFormat,
        calligrapher,
        signatureQuanity,
      } = state;
      cash =
        Math.round(
          soon +
            revision +
            electronicFormat +
            calligrapher +
            signatureQuanity * 100
        ) / 100;
      return {
        ...state,
        cash: cash,
      };
    case 'changeCash':
      localStorage.setItem(`${action.payload.key}Cash`, action.payload.value);
      return { ...state, [action.payload.key]: action.payload.value };
    default:
      return state;
  }
};

export default cashReducer;
