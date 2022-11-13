import { useSelector } from 'react-redux';
import CostItem from './CostItem/CostItem.jsx';
import HeaderStyles from './HeaderStyle.js';
import Items from './Items/Items.jsx';
import Logo from './Logo/Logo.jsx';

const Header = () => {
  const page = useSelector((state) => state.page.page);
  const classes = HeaderStyles();
  return (
    <header className={classes.Header}>
      <div className={classes.HeaderContainer}>
        <Logo />
        <div className={classes.ItemsContainer}>
          <Items />
          {page !== 1 ? <CostItem /> : ''}
        </div>
      </div>
    </header>
  );
};

export default Header;
