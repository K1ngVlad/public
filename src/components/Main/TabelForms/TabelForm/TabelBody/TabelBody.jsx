import { useDispatch } from 'react-redux';
import TabelBodyStyles from './TabelBodyStyles';

const TabelBody = (props) => {
  const img = require('../../../../../img/Check.png');
  const quanity = props.quanity;
  const textWidth = quanity === 1 ? 260 : 290;
  const dispatch = useDispatch();
  const title =
    quanity === 1
      ? 'А signature that you will fall in love with'
      : 'We create both simple and complex signatures';
  const OnClickHeandler = (e) => {
    console.log('клик');
    const siteHeight = document.documentElement.scrollTop;

    const height = e.clientY;
    dispatch({
      type: 'setPopupHeight',
      payload: height,
    });
    const scroll = window.innerWidth - document.body.clientWidth;
    // document.querySelector('header').style.paddingRight = `${scroll * 2}px`;
    document
      .querySelector('header')
      .querySelector('div').style.marginRight = `${scroll * 2 - 4}px`;
    document
      .querySelector('header')
      .querySelector('div')
      .querySelector('div').style.left = `${scroll - 4}px`;
    document.querySelector('main').style.paddingRight = `${scroll}px`;
    document.querySelector('footer').style.paddingRight = `${scroll}px`;
    dispatch({
      type: 'switchFixed',
    });
    dispatch({
      type: 'setHeight',
      payload: siteHeight,
    });
    dispatch({ type: 'switchPopup' });
    dispatch({ type: 'setTitle', payload: title });
  };
  const classes = TabelBodyStyles({ textWidth });
  if (quanity === 1)
    return (
      <div className={classes.TabelBody}>
        <hr className={classes.TabelLine} />
        <div className={classes.TabelTextContainer}>
          <div className={classes.TabelIcon}>
            <div className={classes.TabelIconBox}>
              <img alt="icon" src={img} className={classes.TabelIconImg} />
            </div>
          </div>
          <div className={classes.TabelText}>
            Signature based on your wishes, which you will love
          </div>
        </div>
        <div className={classes.TabelTextContainer}>
          <div className={classes.TabelIcon}>
            <div className={classes.TabelIconBox}>
              <img alt="icon" src={img} className={classes.TabelIconImg} />
            </div>
          </div>
          <div className={classes.TabelText}>
            Personal tutorial for signature
          </div>
        </div>
        <div
          onClick={(e) => {
            OnClickHeandler(e);
          }}
          className={classes.TabelLink}
        >
          Learn more
        </div>
      </div>
    );
  else {
    return (
      <div className={classes.TabelBody}>
        <hr className={classes.TabelLine} />
        <div className={classes.TabelTextContainer}>
          <div className={classes.TabelIcon}>
            <div className={classes.TabelIconBox}>
              <img alt="icon" src={img} className={classes.TabelIconImg} />
            </div>
          </div>
          <div className={classes.TabelText}>
            Simple and beautiful signature. You can easily use it every day
          </div>
        </div>
        <div className={classes.TabelTextContainer}>
          <div className={classes.TabelIcon}>
            <div className={classes.TabelIconBox}>
              <img alt="icon" src={img} className={classes.TabelIconImg} />
            </div>
          </div>
          <div className={classes.TabelText}>
            More complex, elegant signature for special occasions
          </div>
        </div>
        <div className={classes.TabelTextContainer}>
          <div className={classes.TabelIcon}>
            <div className={classes.TabelIconBox}>
              <img alt="icon" src={img} className={classes.TabelIconImg} />
            </div>
          </div>
          <div className={classes.TabelText}>
            Personal tutorial for 2 signatures
          </div>
        </div>
        <div onClick={OnClickHeandler} className={classes.TabelLink}>
          Learn more
        </div>
      </div>
    );
  }
};

export default TabelBody;
