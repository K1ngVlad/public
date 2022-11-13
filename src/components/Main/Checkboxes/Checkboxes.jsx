import Checkbox from './Checkbox/Checkbox';
import CheckboxesStyles from './CheckboxesStyles';

const Checkboxes = (props) => {
  const { width, height, arr, name, months } = props;
  const classes = CheckboxesStyles({ width, height });
  return (
    <div className={classes.Checkboxes}>
      {arr.map((e, i) => {
        const { width, value, cash, day } = e;
        let descript = '';
        if (day) {
          const date = new Date();
          const currentDay = date.getDate();
          date.setDate(currentDay + day);
          const preDay = date.getDate();
          const numMonth = date.getMonth();
          const month = months[numMonth];
          descript = `Will be ready on ${month} ${preDay}`;
        }
        console.log(descript);
        return (
          <Checkbox
            height={height}
            width={width}
            name={name}
            value={value}
            cash={cash}
            key={Math.random()}
            descript={descript}
          />
        );
      })}
    </div>
  );
};

export default Checkboxes;
