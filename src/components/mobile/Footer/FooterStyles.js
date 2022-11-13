import { createUseStyles, ThemeProvider } from 'react-jss';

const FooterStyles = createUseStyles({
  Footer: {
    marginTop: 56,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    position: (theme) => theme.position,
    bottom: 1000,
  },
  FooterText: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.65)',
    marginBottom: 16,
    fontFamily: 'SF-pro-light',
  },
  FooterIcons: {
    display: 'flex',
    marginBottom: 15,
    height: 13,
    width: 112,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  FooterIcon: {},
  FooterLinks: {
    display: 'flex',
    marginBottom: 32,
    height: 14,
    width: 254,
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: 'SF-pro-light',
    fontSize: 12,
  },
  FooterLink: {
    fontSize: 12,
    textDecoration: 'underline',
    color: 'rgba(1, 68, 136, 0.65)',
  },
  FooterLinkLink: {
    fontSize: 12,
    textDecoration: 'underline',
    color: 'rgba(1, 68, 136, 0.65)',
  },
  FooterLine: {
    width: 292,
    height: 1,
    marginBottom: 20,
    backgroundColor: '#0000001A',
  },
});

export default FooterStyles;
