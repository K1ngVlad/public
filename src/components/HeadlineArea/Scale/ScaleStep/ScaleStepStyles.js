import { createUseStyles } from 'react-jss';

const ScaleStepStyles = createUseStyles({
  ScaleStep: {
    height: '100%',
    width: '33.33333333%',
    backgroundColor: (theme) => theme.backGround,
  },
});

export default ScaleStepStyles;
