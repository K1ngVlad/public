import TabelForm from './TabelForm/TabelForm';
import TabelFormsStyles from './TabelFormsStyles';

const TabelForms = () => {
  const classes = TabelFormsStyles();
  return (
    <div className={classes.TabelForms}>
      <TabelForm quanity={1} />
      <TabelForm quanity={2} />
    </div>
  );
};

export default TabelForms;
