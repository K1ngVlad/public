import TableTextStyles from './TableTextStyles';

const TableText = (props) => {
  const img = require('../../../../../../img/Check.png');
  const classes = TableTextStyles();
  return (
    <div className={classes.TableText}>
      <img alt="icon" src={img} className={classes.TableTextIcon} />
      <div className={classes.TableTextText}>{props.text}</div>
    </div>
  );
};

export default TableText;
