import makeStyles from '@mui/styles/makeStyles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));



export default function Breadcrumb(breadcrumb) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Breadcrumbs color="inherit" variant="overline" separator="›" aria-label="breadcrumb">
        <Link  href="https://pedidos.com/busquedas.asp">
          {breadcrumb.site}
        </Link>
        <Link color="inherit" href={`https://pedidos.com/busquedas.asp?/${breadcrumb.categoria}`}> 
          {breadcrumb.categoria}
        </Link>
        <Link color="inherit" href={`https://pedidos.com/busquedas.asp?/${breadcrumb.categoria}/${breadcrumb.subcategoria}`} >
        {breadcrumb.subcategoria}
        </Link>
         <Link color="inherit" href={`https://pedidos.com/busquedas.asp?/${breadcrumb.categoria}/${breadcrumb.subcategoria}/${breadcrumb.productos}`} >
        {breadcrumb.productos}
        </Link> 
        <Typography color="textPrimary">{breadcrumb.Producto}</Typography>
      </Breadcrumbs>
    </div>
  );
}