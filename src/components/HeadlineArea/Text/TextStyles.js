import '../../../font.css';
import { createUseStyles } from 'react-jss';

const TextStyles = createUseStyles({
  Text: {
    fontFamily: 'SF Pro Display',
    width: '100%',
    // height: 301,
    color: 'white',
    marginBottom: 46,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  Tell: {
    fontFamily: 'SF-pro-medium',
    fontSize: 50,
    height: 60,
    marginBottom: 32,
    width: 700,
    // fontWeight: 500,
  },
  Just: {
    fontFamily: 'SF-pro-light',
    fontWeight: 300,
    fontSize: 28,
    height: 33,
    width: 355,
  },
});

export default TextStyles;
