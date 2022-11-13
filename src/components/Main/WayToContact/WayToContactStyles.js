import { createUseStyles } from 'react-jss';

const WayToContactStyles = createUseStyles({
  WayToContact: {
    marginTop: 6,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: 736,
  },
  contactText: {
    height: 25,
    fontSize: 21,
    marginBottom: 30,
    fontFamily: 'SF-pro-light',
    fontWeight: 300,
  },
  checkBoxes: {
    width: '100%',
    marginTop: 30,
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export default WayToContactStyles;
