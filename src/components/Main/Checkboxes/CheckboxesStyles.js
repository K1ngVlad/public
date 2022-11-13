import { createUseStyles } from 'react-jss';

const CheckboxesStyles = createUseStyles({
  Checkboxes: {
    width: (theme) => theme.width,
    height: (theme) => theme.height,
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export default CheckboxesStyles;
