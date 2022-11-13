import { createUseStyles } from 'react-jss';

const TableTextStyles = createUseStyles({
  TableText: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: 250,
    marginBottom: 10,
    paddingLeft: 25,
  },
  TableTextText: {
    fontSize: 14,
    width: 190,
    fontFamily: 'SF-pro-light',
  },
  TableTextIcon: {
    width: 16,
    height: 16,
    marginRight: 10,
  },
});

export default TableTextStyles;
