import { useSelector } from 'react-redux';
import CashTabel from '../../CashTabel/CashTabel';
import CostItemStyles from './CostItemStyles';

const CostItem = () => {
  const cash = useSelector((state) => state.cash.cash);
  const classes = CostItemStyles();
  return (
    <div className={classes.CostItem}>
      <div className={classes.topCostItem}>
        <div className={classes.totalCost}>Total cost: </div>
        <CashTabel
          cash={cash}
          propertys={{
            cashSize: 16,
            height: 19,
            marginTop: 4,
            marginBottom: 0,
            iconSize: 6,
            color: 'white',
            cross: true,
            topIcon: '1.5%',
            fontFamily: 'SF-pro-semibold',
            fontIcon: 'SF-pro-medium',
          }}
          cross={true}
        />
      </div>

      <CashTabel
        cash={cash}
        propertys={{
          cashSize: 28,
          height: 33,
          marginTop: 0,
          marginBottom: 0,
          iconSize: 12,
          color: 'white',
          topIcon: 5,
          fontFamily: 'SF-pro-regular',
          fontIcon: 'SF-pro-regular',
        }}
      />
    </div>
  );
};

export default CostItem;
