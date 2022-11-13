import { useDispatch, useSelector } from 'react-redux';
import CashTabel from '../../../CashTabel/CashTabel';
import TabelBody from './TabelBody/TabelBody';
import TabelFormStyles from './TabelFormStyles';
import TabelHead from './TabelHead/TabelHead';

const TabelForm = (props) => {
  const choisenQuanity = useSelector((state) => state.options.signatureQuanity);
  const choisenQuanityCash = useSelector(
    (state) => state.cash.signatureQuanity
  );
  const dispath = useDispatch();
  const quanity = props.quanity;
  const border = choisenQuanity === quanity ? '3px solid #174C38' : 'none';
  const marginAll = choisenQuanity === quanity ? 0 : 3;
  let img, cash, height, overHeight, imgHeight, margin, overover;
  if (quanity === 1) {
    img = require('../../../../img/table_tent_mockup2 2.png');
    cash = 'FREE';
    height = 482;
    overHeight = 325;
    imgHeight = 270;
    margin = 300;
    overover = 595;
  } else {
    img = require('../../../../img/Группа 1 6.png');
    cash = 19.99;
    height = 545;
    overHeight = 380;
    imgHeight = 270;
    margin = 110;
    overover = 650;
  }
  const OnClickHeandler = (e) => {
    // console.log('fsdfsdfsfs');
    if (e.target.textContent === 'Learn more') return;
    dispath({
      type: 'switchOption',
      payload: { key: 'signatureQuanity', value: quanity },
    });

    if (typeof choisenQuanityCash === 'number') {
      dispath({
        type: 'removeCash',
        payload: choisenQuanityCash,
      });
    }

    if (typeof cash === 'number') {
      dispath({
        type: 'addCash',
        payload: cash,
      });
      dispath({
        type: 'changeCash',
        payload: { key: 'signatureQuanity', value: cash },
      });
    } else {
      dispath({
        type: 'changeCash',
        payload: { key: 'signatureQuanity', value: 0 },
      });
    }
  };
  const classes = TabelFormStyles({
    border,
    height,
    overHeight,
    imgHeight,
    margin,
    marginAll,
    overover,
  });
  return (
    <div
      onClick={(e) => {
        OnClickHeandler(e);
      }}
      className={classes.TabelForm}
    >
      <div className={classes.OverTabel}>
        <div className={classes.TabelImg}>
          <img className={classes.TabelImgImg} alt="img" src={img} />
        </div>
        <div className={classes.Tabel}>
          <TabelHead quanity={quanity} />

          <TabelBody quanity={quanity} />
          <CashTabel
            cash={cash}
            propertys={{
              cashSize: 50,
              marginTop: 0,
              marginBottom: 39,
              height: 60,
              iconSize: 21,
              color: '#174C38',
              topIcon: '5%',
              fontFamily: 'SF-pro-medium',
              fontIcon: 'SF-pro-regular',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TabelForm;
