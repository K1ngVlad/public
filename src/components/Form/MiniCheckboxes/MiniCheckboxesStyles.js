import { createUseStyles } from 'react-jss';

const MiniCheboxesStyles = createUseStyles({
  MiniCheckboxes: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 30,
    minWidth: 200,
  },
  Title: {
    height: 19,
    fontSize: 16,
    fontFamily: 'SF-pro-light',
    color: '#014488',
    textDecoration: 'underline',
    // marginBottom: 17,
  },
  // MiniCheckboxesContainer: {},
});

export default MiniCheboxesStyles;
