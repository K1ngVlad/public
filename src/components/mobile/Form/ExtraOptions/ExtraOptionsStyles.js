import { createUseStyles } from 'react-jss';

const ExtraOptionsStyles = createUseStyles({
  ExtraOptions: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 0,
  },
  ExtraLink: {
    marginBottom: 15,
    fontSize: 14,
    alignSelf: 'flex-start',
    textDecoration: 'underline',
    color: 'rgba(1, 68, 136, 0.65)',
    fontFamily: 'SF-pro-light',
  },
  ExtraContainerFirst: {
    height: 195,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 25,
    aligntItems: 'center',
    alignItems: 'center',
    paddingRight: 3,
  },
  ExtraContainer: {
    height: 125,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
    aligntItems: 'center',
    paddingRight: 3,
  },
});

export default ExtraOptionsStyles;
