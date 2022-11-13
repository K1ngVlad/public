import Input from './Input/Input.jsx';
import InputFieldsStyles from './InputFieldsStyels.js';

const InputFields = (props) => {
  const margin = props.margin;
  const classes = InputFieldsStyles();
  return (
    <div className={classes.InputField}>
      <Input margin={margin} name="fullName" text="Your full name" />
      <Input margin={margin} name="numberPhone" text="+1 (999) 999-99-99" />
      <Input margin={margin} name="emailAdress" text="Type your Email adress" />
    </div>
  );
};

export default InputFields;
