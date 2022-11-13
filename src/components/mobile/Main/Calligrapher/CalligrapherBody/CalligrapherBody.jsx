import CalligrapherBodyStyles from './CalligrapherBodyStyles';

const CalligrapherBody = (props) => {
  const img = require('../../../../../img/Check.png');
  const classes = CalligrapherBodyStyles();
  switch (props.type) {
    case 'base':
      return (
        <div className={classes.CalligrapherBody}>
          <img alt="img" src={img} className={classes.CalligrapherIcon} />
          <div className={classes.CalligrapherText}>
            Professional calligrapher that will create <br />a signature, which
            you will love.
          </div>
        </div>
      );
    case 'experienced':
      return (
        <div className={classes.CalligrapherBody}>
          <img alt="img" src={img} className={classes.CalligrapherIcon} />
          <div className={classes.CalligrapherText}>
            Prized calligraphers who are among <br /> the best in the industry,
            skilled in <br /> a wide range of styles
          </div>
        </div>
      );
    case 'head':
      return (
        <div className={classes.CalligrapherBody}>
          <img alt="img" src={img} className={classes.CalligrapherIcon} />
          <div className={classes.CalligrapherText}>
            The most experienced artist in our studio, <br /> who created
            signatures for the most <br /> important clients
          </div>
        </div>
      );

    default:
      break;
  }
};

export default CalligrapherBody;
