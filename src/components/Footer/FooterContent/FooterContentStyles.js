import { createUseStyles } from 'react-jss';

const FooterContentStyles = createUseStyles({
  FooterContent: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  copyright: {
    color: 'rgba(0, 0, 0, 0.65)',
    height: 14,
    fontSize: 12,
    fontFamily: 'SF-pro-light',
  },
  icons: {
    width: 68.17,
    display: 'flex',
    justifyContent: 'space-between',
  },
  links: {
    display: 'flex',
    height: 14,
    width: 254,
    justifyContent: 'space-between',
    fontFamily: 'SF-pro-light',
    // marginLeft: 20,
  },
  link: {
    height: '100%',

  },
  linklink: {
    // color: 'rgba(0, 0, 0, 0.65)',
    fontSize: 12,
    color: 'rgb(1, 68, 136, 0.65)',
    textDecoration: 'underline',
  },
});

export default FooterContentStyles;
