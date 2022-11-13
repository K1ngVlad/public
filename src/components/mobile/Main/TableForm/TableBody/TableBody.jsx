import { useDispatch } from 'react-redux';
import CashTabel from '../../../../CashTabel/CashTabel';
import TableBodyStyles from './TableBodyStyles';
import TableText from './TableText/TableText';

const TableBody = (props) => {
  const quanity = props.quanity;
  const title =
    quanity === 1
      ? 'А signature that you will fall in love with'
      : 'We create both simple and complex signatures';
  const dispatch = useDispatch();
  const OnClickHeandler = () => {
    if (quanity === 1) {
      document.body.style.overflow = 'hidden';
    }

    const siteHeight = document.documentElement.scrollTop;

    dispatch({
      type: 'switchFixed',
    });
    dispatch({
      type: 'setHeight',
      payload: siteHeight,
    });

    dispatch({
      type: 'switchPopup',
    });
    dispatch({
      type: 'setTitle',
      payload: title,
    });
    window.scrollTo(0, 0);
  };
  const arr =
    quanity === 1
      ? [
          'Signature based on your wishes, which you will love',
          'Personal tutorial for signature',
        ]
      : [
          'Simple and beautiful signature. You can easily use it every day',
          'More complex, elegant signature for special occasions',
          'Personal tutorial for 2 signatures',
        ];
  const classes = TableBodyStyles();
  return (
    <div className={classes.TableBody}>
      <div className={classes.TableTitle}>{quanity} amazing signature</div>
      <div className={classes.TableLine}></div>
      {arr.map((e) => {
        return <TableText key={e} text={e} />;
      })}

      <div onClick={OnClickHeandler} className={classes.TabelLink}>
        Learn more
      </div>
      <CashTabel
        cash={props.cash}
        propertys={{
          cashSize: 32,
          color: '#174C38',
          iconSize: 16,
          topIcon: 5,
          fontFamily: 'SF-pro-medium',
          fontIcon: 'SF-pro-regular',
        }}
      />
    </div>
  );
};

export default TableBody;
