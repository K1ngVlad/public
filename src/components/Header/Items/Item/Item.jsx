import ItemStyles from './ItemStyle.js';

const Item = (props) => {
  const classes = ItemStyles();
  return <div className={classes.Item}><a className={classes.ItemLink} href={props.link}>{props.text}</a></div>;
};

export default Item;
