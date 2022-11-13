const defaultState = {
  contact: localStorage.getItem('contact') || 'Email',
  soon: localStorage.getItem('soon') || '7 Days',
  revision: localStorage.getItem('revision') || '3 revisions',
  electronicFormat: localStorage.getItem('electronicFormat') || 'No',
  calligrapher: localStorage.getItem('calligrapher') || 'experienced',
  buttonPress: false || Boolean(localStorage.getItem('buttonPress')),
  signatureQuanity: Number(localStorage.getItem('signatureQuanity')) || 1,
  valid: localStorage.getItem('valid') || true,
  validRed: false || Boolean(localStorage.getItem('validRed')),
  fullName: '' || localStorage.getItem('fullName'),
  numberPhone: '' || localStorage.getItem('numberPhone'),
  emailAdress: '' || localStorage.getItem('emailAdress'),
  emailValid: false || Boolean(localStorage.getItem('emailValid')),
  nameValid: false || Boolean(localStorage.getItem('nameValid')),
  payment:
    localStorage.getItem('payment') ||
    'Card / Apple pay / Google pay with Stripe',
  error: localStorage.getItem('error') || 'Please fill all fields',
  siteHeight: 0 || Number(localStorage.getItem('siteHeight')),
};

const optionsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'switchOption':
      const { key, value } = action.payload;
      if (value === false) {
        localStorage.setItem(key, '');
        return { ...state, [key]: value };
      }
      if (value === true) {
        localStorage.setItem(key, ' ');
        return { ...state, [key]: value };
      }
      localStorage.setItem(key, value);
      return { ...state, [key]: value };
    default:
      return state;
  }
};

export default optionsReducer;
