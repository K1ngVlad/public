import { createUseStyles } from 'react-jss';

const TotalCostStyles = createUseStyles({
  TotalCost: {
    width: 380,
    heigth: 60,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  TotalCostText: {
    fontSize: 21,
    fontFamily: 'SF-pro-light',
    whiteSpace: 'nowrap',
  },
});

export default TotalCostStyles;
