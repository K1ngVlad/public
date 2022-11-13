import IconStyles from './IconStyles';

const Icon = (props) => {
  const classes = IconStyles();
  const img = require(`../../../../img/${props.img}.png`);
  const OnClickHeandler = () => {
    console.log(props.href);
    document.location.href = props.href;
  };
  return (
    <div onClick={OnClickHeandler} className={classes.IconContainer}>
      <img className={classes.Icon} alt="icon" src={img} />
    </div>
  );
};

export default Icon;
