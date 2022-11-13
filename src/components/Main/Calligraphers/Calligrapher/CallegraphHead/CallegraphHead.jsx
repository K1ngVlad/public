import CashTabel from '../../../../CashTabel/CashTabel';
import CalligraphHeadStyles from './CallegraphHeadStyles';

const CalligraphHead = (props) => {
  const classes = CalligraphHeadStyles();
  return (
    <div className={classes.CalligraphHead}>
      {props.popular ? (
        <div className={classes.CalligraphPopularContainer}>
          <div className={classes.CalligraphPopular}>Most popular</div>
        </div>
      ) : (
        ''
      )}
      <div className={classes.CalligraphTitle}>{props.title}</div>
      <CashTabel
        cash={props.cash}
        propertys={{
          cashSize: 50,
          marginTop: 10,
          marginBottom: 0,
          height: 60,
          iconSize: 21,
          color: '#174C38',
          topIcon: '5%',
          fontFamily: 'SF-pro-medium',
          fontIcon: 'SF-pro-regular',
        }}
      />
      {/* <div className={classes.CalligraphCashContainer}>
        <div className={classes.CalligraphCashIcon}>$</div>
        <div className={classes.CalligraphCash}>{props.cash}</div>
      </div> */}
    </div>
  );
};

export default CalligraphHead;
