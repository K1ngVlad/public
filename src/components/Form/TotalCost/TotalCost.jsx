import { useSelector } from 'react-redux';
import CashTabel from '../../CashTabel/CashTabel';
import TotalCostStyles from './TotalCostStyles';

const TotalCost = () => {
  const cash = useSelector((state) => state.cash.cash);
  const classes = TotalCostStyles();
  return (
    <div className={classes.TotalCost}>
      <div className={classes.TotalCostText}>Total cost:</div>
      <CashTabel
        cash={cash}
        propertys={{
          color: '#174C38',
          cashSize: 50,
          iconSize: 16,
          topIcon: 10,
          marginBottom: 0,
          marginTop: 0,
          height: 50,
          fontFamily: 'SF-pro-semibold',
          fontIcon: 'SF-pro-medium',
        }}
      />
      <CashTabel
        cash={cash}
        propertys={{
          color: 'black',
          cashSize: 37,
          iconSize: 12,
          topIcon: 6,
          cross: true,
          marginBottom: 0,
          marginTop: 0,
          height: 37,
          fontFamily: 'SF-pro-regular',
          fontIcon: 'SF-pro-regular',
        }}
      />
    </div>
  );
};

export default TotalCost;
