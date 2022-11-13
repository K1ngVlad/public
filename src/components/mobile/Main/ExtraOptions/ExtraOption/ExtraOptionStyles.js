import { createUseStyles } from 'react-jss';

const ExtraOptionStyles = createUseStyles({
  ExtraOption: {
    marginBottom: 35,
    fontSize: 18,
    fontWeight: 500,
    backgroundColor: 'white',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
    borderRadius: 6,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  ExtraOptionTitle: {
    width: (theme) => theme.titleWidth,
    fontSize: 18,
    marginTop: 18,
    marginBottom: 22,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'SF-pro-medium',
    paddingLeft: 3,
  },
  ExtraOptionTitleTop: {
    // width: '100%',
    textAlign: 'center',
  },
  ExtraOptionTitleBot: {
    width: 210,
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 500,
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  ExtraOptionContainer: {
    width: '92.068965517%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: (theme) => theme.height,
  },
  ExtraLearn: {
    marginTop: 20,
    marginBottom: 27,
    fontSize: 14,
    textDecoration: 'underline',
    color: 'rgba(1, 68, 136, 0.65)',
    fontFamily: 'SF-pro-light',
  },
});

export default ExtraOptionStyles;
