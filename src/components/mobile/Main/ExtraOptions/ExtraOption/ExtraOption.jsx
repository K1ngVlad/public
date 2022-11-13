import { useDispatch } from 'react-redux';
import MobileBox from '../../MobileBox/MobileBox';
import ExtraOptionStyles from './ExtraOptionStyles';

const ExtraOption = (props) => {
  const { height, arr, title, bot, months, titleWidth, popTitle } = props;
  const dispatch = useDispatch();

  const OnClickHeandler = () => {
    document.body.style.overflow = 'hidden';
    const siteHeight = document.documentElement.scrollTop;
    dispatch({
      type: 'switchFixed',
    });
    dispatch({
      type: 'setHeight',
      payload: siteHeight,
    });
    dispatch({ type: 'switchPopup' });
    dispatch({ type: 'setTitle', payload: popTitle });
    window.scrollTo(0, 0);
  };

  const classes = ExtraOptionStyles({ height, titleWidth });
  return (
    <div className={classes.ExtraOption}>
      <div className={classes.ExtraOptionTitle}>
        <div className={classes.ExtraOptionTitleTop}>{title}</div>

        {bot ? <div className={classes.ExtraOptionTitleBot}>{bot}</div> : ''}
      </div>
      <div className={classes.ExtraOptionContainer}>
        {arr.map((e) => {
          let descript = '';
          if (e.day) {
            const dayDecide = e.day;
            console.log(e);
            const date = new Date();
            date.setDate(date.getDate() + dayDecide);
            const day = date.getDate();
            const monthNum = date.getMonth();
            const month = months[monthNum];
            descript = `Will be ready on ${month} ${day}`;
          }

          return (
            <MobileBox
              width="100%"
              height={55}
              title={e.value}
              value={e.value}
              name={e.name}
              cash={e.cash}
              descript={descript}
              key={Math.random()}
            />
          );
        })}
      </div>
      <div onClick={OnClickHeandler} className={classes.ExtraLearn}>
        Learn more
      </div>
    </div>
  );
};

export default ExtraOption;
