import { createUseStyles } from 'react-jss';

const CostItemStyles = createUseStyles({
  CostItem: {
    height: 62,
    width: 128,
    background: 'linear-gradient(180deg, #174C38 0%, #093D29 100%)',
    borderRadius: 10,
    marginTop: 16,
    marginLeft: 62,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  topCostItem: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  totalCost: {
    color: 'white',
    fontSize: 12,
    marginBottom: 2,
    marginRight: 2,
    fontFamily: 'SF-pro-light',
  },
});

export default CostItemStyles;
