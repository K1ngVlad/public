import { createUseStyles } from 'react-jss';

const ScaleStyles = createUseStyles({
  ScalesContainer: {
    marginBottom: 41,
    width: 192,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  ScalesTitle: {
    color: 'white',
    marginBottom: 10,
    fontSize: 14,
    fontFamily: 'SF-pro-light',
  },
  Scales: {
    width: '100%',
    height: 2,
    backgroundColor: '#FFFFFF80',
    display: 'flex',
  },
  Scale1: {
    height: '100%',
    width: '33.3333333333333%',
    backgroundColor: 'white',
  },
  Scale2: {
    height: '100%',
    width: '33.3333333333333%',
    backgroundColor: (theme) => theme.second,
  },
  Scale3: {
    height: '100%',
    width: '33.3333333333333%',
  },
});

export default ScaleStyles;
