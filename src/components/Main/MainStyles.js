import { createUseStyles } from 'react-jss';

const MainStyles = createUseStyles({
  Main: {
    width: (theme) => theme.width,
    marginTop: 81,
    marginBottom: 115,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: (theme) => (theme.fixed || theme.popup ? 'fixed' : 'static'),
    top: (theme) =>
      theme.popup
        ? 535 - theme.height
        : theme.fixed
        ? 535 - theme.siteHeight
        : 0,
  },
});

export default MainStyles;
