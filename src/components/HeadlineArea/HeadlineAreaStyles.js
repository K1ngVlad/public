import { createUseStyles } from 'react-jss';
const img = require('../../img/Backgound.png');

const HeadlineAreaStyles = createUseStyles({
  Headline: {
    width: '100%',
    height: 535,
    backgroundColor: 'gray',
    backgroundSize: 'cover',
    backgroundImage: `url(${img})`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    textAlign: 'center',
    position: (theme) => theme.position,
    bottom: 1053,
  },
});

export default HeadlineAreaStyles;
