import { useDispatch, useSelector } from 'react-redux';
import TableBody from './TableBody/TableBody';
import TableFormStyles from './TableFormStyles';

const TableForm = (props) => {
  const dispatch = useDispatch();
  const currentQuanity = useSelector((state) => state.options.signatureQuanity);
  const currentCash = useSelector((state) => state.cash.signatureQuanity);
  const quanity = props.quanity;
  let height, overheight, img, heightImg, cash, margin;
  if (quanity === 1) {
    height = 340;
    overheight = 435;
    margin = 200;
    heightImg = 216;
    cash = 'FREE';
    img = require('../../../../img/table_tent_mockup2 2.png');
  } else {
    img = require('../../../../img/Группа 1 6.png');
    margin = 100;
    cash = 19.99;
    height = 384;
    heightImg = 180;
    overheight = 479;
  }
  const border = quanity === currentQuanity ? '3px solid #174C38' : 'none';
  const marginTop = quanity === currentQuanity ? 43 : 46;
  const marginBottom = quanity === currentQuanity ? 15 : 18;
  // if (quanity === 2) {
  //   if (quanity !== currentQuanity) {
  //     marginBottom = 3;
  //   }
  // }
  const OnClickHeandler = (e) => {
    if (e.target.textContent === 'Learn more') return;
    dispatch({
      type: 'switchOption',
      payload: {
        key: 'signatureQuanity',
        value: quanity,
      },
    });

    dispatch({
      type: 'removeCash',
      payload: currentCash,
    });
    if (typeof cash === 'number') {
      dispatch({
        type: 'addCash',
        payload: cash,
      });
      dispatch({
        type: 'changeCash',
        payload: {
          key: 'signatureQuanity',
          value: cash,
        },
      });
    } else {
      dispatch({
        type: 'changeCash',
        payload: {
          key: 'signatureQuanity',
          value: 0,
        },
      });
    }
  };
  const classes = TableFormStyles({
    height,
    overheight,
    heightImg,
    border,
    margin,
    marginTop,
    marginBottom,
  });
  return (
    <div
      onClick={(e) => {
        OnClickHeandler(e);
      }}
      className={classes.TableForm}
    >
      <div className={classes.OverTable}>
        <div className={classes.TableImg}>
          <img alt="img" src={img} className={classes.TableImgImg} />
        </div>
        <TableBody cash={cash} quanity={quanity} />
      </div>
    </div>
  );
};

export default TableForm;
