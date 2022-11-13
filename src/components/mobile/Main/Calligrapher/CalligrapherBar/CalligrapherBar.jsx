import CalligrapherBarStyles from './CalligrapherBarStyles';

const CalligrapherBar = (props) => {
  const { places, month } = props;
  const classes = CalligrapherBarStyles({ ...props });
  return (
    <div className={classes.CalligrapherBarContainer}>
      <div className={classes.CalligrapherBar}></div>
      <div className={classes.CalligrapherBarText}>
        {places} places left in {month}
      </div>
    </div>
  );
};

export default CalligrapherBar;
