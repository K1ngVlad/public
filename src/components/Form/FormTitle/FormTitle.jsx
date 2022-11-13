import FormTitleStyles from './FormTitleStyles';

const FormTitle = () => {
  const classes = FormTitleStyles();
  return <div className={classes.FormTitle}>Confirm your information</div>;
};

export default FormTitle;
