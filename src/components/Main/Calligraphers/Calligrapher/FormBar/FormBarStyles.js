import { createUseStyles } from 'react-jss';

const FormBarStyles = createUseStyles({
  FormBarConteiner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 25,
    width: '84.571428571%',
    border: '2px solid #174C38',
    borderRadius: 6,
    marginBottom: 21,
  },
  FormBar: {
    marginLeft: 5,
    width: (theme) => theme.widthBar,
    height: 17,
    backgroundColor: (theme) => theme.colorBar,
    borderRadius: 3,
  },
  FormBarText: {
    marginRight: 10,
    fontSize: 12,
    fontFamily: 'SF-pro-regular',
  },
  FormBarPlaces: {
    fontSize: 12,
    fontFamily: 'SF-pro-regular',
  },
});

export default FormBarStyles;
