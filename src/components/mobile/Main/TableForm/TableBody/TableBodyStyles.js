import { createUseStyles } from 'react-jss';

const TableBodyStyles = createUseStyles({
  TableBody: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  TableTitle: {
    fontSize: 18,
    fontWeight: 500,
    fontFamily: 'SF-pro-medium',
  },
  TableLine: {
    width: '92.413793103%',
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    marginTop: 10,
    marginBottom: 17,
  },
  TabelLink: {
    fontSize: 14,
    marginTop: 10,
    marginBottom: 10,
    textDecoration: 'underline',
    color: 'rgba(1, 68, 136, 0.65)',
    fontFamily: 'SF-pro-light',
  },
});

export default TableBodyStyles;
