import CashTabelStyles from './CashTabelStyles';

const CashTabel = (props) => {
  const { cash, propertys } = props;
  const currentCash = propertys.cross
    ? Math.round((cash + (cash / 100) * 60) * 100) / 100
    : cash;
  const classes = CashTabelStyles({ ...propertys });
  return (
    <div className={classes.TabelCashContainer}>
      {typeof currentCash === 'number' ? (
        <div className={classes.TabelCashIcon}>$</div>
      ) : (
        ''
      )}
      <div className={classes.TabelCash}>{currentCash}</div>
    </div>
  );
};

export default CashTabel;
