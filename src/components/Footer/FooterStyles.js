import { createUseStyles } from 'react-jss';

const FooterStyles = createUseStyles({
  Footer: {
    width: '63.888888888%',
    height: 65,
    position: (theme) => theme.position,
  },
  line: {
    width: '100%',
    // border: '1px solid rgba(0, 0, 0, 0.1)',
    backgroundColor: '#0000001A',
    height: 1,
  },
});

export default FooterStyles;
