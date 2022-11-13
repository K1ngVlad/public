import { useDispatch } from 'react-redux';
import Checkboxes from '../../Checkboxes/Checkboxes';
import OptionFormStyles from './OptionFormStyles';

const OptionForm = (props) => {
  const descript = props.descript;
  const margin = descript ? 10 : 20;
  const classes = OptionFormStyles({ margin });
  const dispatch = useDispatch();
  const OnClickHeandler = (e) => {
    const siteHeight = document.documentElement.scrollTop;
    const scroll = window.innerWidth - document.body.clientWidth;
    console.log('scroll ' + scroll);
    console.log(window.innerWidth);
    console.log(document.documentElement.clientWidth);
    const height = e.clientY;
    dispatch({
      type: 'setPopupHeight',
      payload: height,
    });
    dispatch({
      type: 'switchFixed',
    });
    dispatch({
      type: 'setHeight',
      payload: siteHeight,
    });

    document
      .querySelector('header')
      .querySelector('div').style.marginRight = `${scroll * 2 - 4}px`;
    document
      .querySelector('header')
      .querySelector('div')
      .querySelector('div').style.left = `${scroll - 4}px`;
    document.querySelector('main').style.paddingRight = `${scroll}px`;
    document.querySelector('footer').style.paddingRight = `${scroll}px`;
    dispatch({ type: 'switchPopup' });
    dispatch({ type: 'setTitle', payload: props.popupTitle });
  };
  const arr = props.values.map((e) => {
    return { width: props.width, value: e.value, cash: e.cash, day: e.day };
  });

  return (
    <div className={classes.OptionForm}>
      <div className={classes.OptionFormTitle}>{props.title}</div>
      {descript ? (
        <div className={classes.OptionFormDescript}>{descript}</div>
      ) : (
        ''
      )}
      <Checkboxes
        months={props.months}
        arr={arr}
        name={props.name}
        width="88.152173913%"
        height={76}
      />
      <div
        onClick={(e) => {
          OnClickHeandler(e);
        }}
        className={classes.OptionFormLink}
      >
        Learn more
      </div>
    </div>
  );
};

export default OptionForm;
