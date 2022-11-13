import { useSelector } from 'react-redux';
import HeaderStyles from './HeaderStyles';

const Header = () => {
  const page = useSelector((state) => state.page.page);
  const cash = useSelector((state) => state.cash.cash);
  const OnClickHeandler = () => {
    window.location.href = 'https://mysign-studio.com'
  }
  const margin = page === 2 ? 60 : 0;
  const img = require('../../../img/Logo.png');
  const classes = HeaderStyles({ margin });
  return (
    <header className={classes.Header}>
      <div className={classes.HeaderContainer}>
        <div className={classes.Item}>
          <div className={classes.Line}></div>
          <div className={classes.Line}></div>
          <div className={classes.Line}></div>
        </div>
        <img onClick={OnClickHeandler} alt="img" className={classes.Logo} src={img} />
        {page !== 1 ? (
          <div className={classes.CashContainer}>
            <div className={classes.Cash}>
              <div className={classes.CashIcon}>$</div> {cash}
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </header>
  );
};

export default Header;
