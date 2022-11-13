import { createUseStyles } from 'react-jss';
const img = require('../../../img/Rectangle.png');
const HeadlineStyles = createUseStyles({
  Headline: {
    width: '100%',
    height: 343,
    backgroundColor: 'black',
    backgroundSize: 'cover',
    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.36), rgba(0, 0, 0, 0.36)), url(${img})`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: (theme) => (theme.popupFixed ? 'fixed' : 'static'),
    top: (theme) => -theme.siteHeight,
  },
});

export default HeadlineStyles;
