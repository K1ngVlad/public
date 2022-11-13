import Item from './Item/Item.jsx';
import ItemsStyles from './ItemsStyle.js';
import { useSelector } from 'react-redux';
// import CostItem from './CostItem/CostItem.jsx';

const Items = () => {
  const page = useSelector((state) => state.page.page);
  const classes = ItemsStyles();
  return (
    <div className={classes.Items}>
      <Item text="Our works" link='https://mysign-studio.com/#rec467244511' />
      <Item text="Work process" link='https://mysign-studio.com/#rec467244512' />
      <Item text="The learning process" link='https://mysign-studio.com/#rec467244513' />
      <Item text="FAQ" link='https://mysign-studio.com/#rec467244520' />
    </div>
  );
};

export default Items;
