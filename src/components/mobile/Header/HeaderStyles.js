import { createUseStyles } from 'react-jss';

const HeaderStyles = createUseStyles({
  Header: {
    backgroundColor: 'black',
    height: 39,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingLeft: 150,
    // paddingRight: 15,
    position: 'fixed',
    width: '100%',
  },
  HeaderContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    hegiht: '100%',
    width: '90.625%',
  },
  Item: {
    width: 14,
    height: 12,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  Logo: {
    height: 14.29,
    width: 'auto',
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    left: 0,
    right: 0,
    textAlign: 'center',
    // marginLeft: (theme) => theme.margin,
  },
  Line: {
    width: '100%',
    height: 0.82,
    backgroundColor: 'white',
  },
  CashContainer: {
    // width: ,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(180deg, #174C38 0%, #093D29 100%)',
    borderRadius: 3,
    paddingLeft: 5,
    paddingRight: 7,
  },
  Cash: {
    fontSize: 14,
    fontWeight: 600,
    color: 'white',
    display: 'flex',
    fontFamily: 'SF-pro-semibold',
  },

  CashIcon: {
    fontSize: 14,
    fontWeight: 600,
    color: 'white',
    fontFamily: 'SF-pro-medium',
    marginRight: 3,
  },
  // CashContainerBox: {

  // }
});

export default HeaderStyles;
