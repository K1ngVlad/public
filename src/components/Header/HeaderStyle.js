import { createUseStyles } from 'react-jss';

const HeaderStyles = createUseStyles({
  Header: {
    width: '100%',
    height: 95,
    backgroundColor: '#02100B',
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  HeaderContainer: {
    width: '80%',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  ItemsContainer: {
    display: 'flex',
    // marginRight: '11.458333333%',
    justifyContent: 'space-between',
  },
});

export default HeaderStyles;
