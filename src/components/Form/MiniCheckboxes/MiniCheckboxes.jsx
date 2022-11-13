import MiniCheckbox from './MiniCheckbox/MiniCheckbox';
import MiniCheboxesStyles from './MiniCheckboxesStyles';

const MiniCheckboxes = (props) => {
  const { name, title, arr } = props;
  const classes = MiniCheboxesStyles();
  return (
    <div className={classes.MiniCheckboxes}>
      <div className={classes.Title}>{title}</div>
      {/* <div className={classes.MiniCheckboxesContainer}> */}
      {arr.map((e) => {
        return (
          <MiniCheckbox
            value={e.value}
            textValue={e.textValue}
            key={Math.random()}
            cash={e.cash}
            name={name}
          />
        );
      })}
      {/* </div> */}
    </div>
  );
};

export default MiniCheckboxes;
