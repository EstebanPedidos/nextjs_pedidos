//MAterial UI
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
//Inputs
import TextField from '@material-ui/core/TextField';
//Componentes
import ModalExecutive   from '../modals/ModalExecutive'
export default function Resumen({classes,setEjecutivo,ejecutivo,isEjecutivo,carrito,partidas,total,setCupon,cupon,validaCodigoDescuento}){
    return (
        <>
            <Grid item xs={12} sm={4}>
                <Paper className={classes.paper}  elevation={0}>
                    {isEjecutivo && (
                    <div>
                        <ModalExecutive
                        resenapedidos={carrito.configCarrito.resenapedidos}
                        setEjecutivo={setEjecutivo}
                        ejecutivo={ejecutivo.ejecutivo}
                        />
                    </div>
                    )}
                    <div>
                        <Box component="div" m={1} className={classes.root}>
                            <Grid container  alignItems="center" spacing={1}>
                                <Grid item xs={6} sm={12} lg={6}>
                                    <Box textAlign="left">  
                                        <Typography component="h2" variant="h6">
                                            Resumen
                                        </Typography>
                                    </Box>  
                                </Grid>
                                <Grid item xs={6} sm={12} lg={6}>
                                    {partidas > 0 && (
                                        <Paper variant="outlined">
                                        <Typography variant="body2">   
                                            <Box py={1} fontWeight="fontWeightMedium">    
                                                {partidas} {partidas > 1 ? `productos` : `producto`}
                                            </Box>
                                        </Typography>
                                        </Paper>
                                    )}
                                </Grid>
                            </Grid>
                        </Box>
                    </div>       
                    <Box component="div">
                        <form className={classes.root} noValidate autoComplete="off">
                            <Divider light /> 
                                <Box component="div" className={classes.root} pt={3}>
                                    <Grid container  alignItems="center" spacing={1}> 
                                        <Grid item xs={6} sm={12} lg={6}>
                                            <TextField label="Código de descuento" type="text" name="cupon" onChange={({target})=>{setCupon(target.value)}} id="discountcode"  variant="outlined" value={cupon}/>
                                        </Grid>
                                        <Grid item xs={6} sm={12} lg={6}>
                                            <Button disableElevation
                                                variant="contained"
                                                fullWidth
                                                size="large"
                                                className={classes.buttonDiscount} 
                                                onClick={validaCodigoDescuento}
                                                >
                                                Aplicar
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Box>
                        </form>
                    </Box>               
                    {partidas > 0 ? (
                        <div>
                            <Box component="div" m={1} pt={3}>
                                <Divider light /> 
                                    <Box component="div" className={classes.root} py={3}>
                                        <Grid container direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                                            <Grid item xs={4}>
                                                <Box textAlign="left">  
                                                    <Grid container direction="column" justifyContent="center" spacing={1}>
                                                        <Grid item>
                                                            <Typography variant="subtitle1" textAlign="left">
                                                                Subtotal{" "}
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item>
                                                            <Typography variant="subtitle1" >
                                                                Envío
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <Box textAlign="right"> 
                                                    <Grid container direction="column" justifyContent="center" spacing={1}>
                                                        
                                                        <Grid item>
                                                            <Typography variant="subtitle1"  >
                                                                <Box component="span" fontWeight="fontWeightBold">
                                                                    ${Precios('formatcurrency',{subtotal:total,fixed:2})} MXN
                                                                </Box>
                                                            </Typography>
                                                        </Grid>                                                                
                                                        <Grid item>
                                                            <Typography variant="body2">
                                                                Calculado adelante
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Grid container justifyContent="flex-end" alignItems="center" spacing={1}>
                                                    <Grid item>
                                                        <Typography variant="body2">
                                                            <Box component="span" fontWeight="fontWeightMedium">
                                                                Precios incluyen IVA
                                                            </Box>
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                <Divider light />
                            </Box>
                            <Box component="div" py={2} >
                            <Button
                                variant="contained"
                                fullWidth
                                size="large"
                                color="primary"
                                onClick={reservaCarrito}
                            >
                                Continuar compra
                            </Button>
                            </Box>
                            {(deleteAll)  ? (
                                <Box component="div">
                                    <Eliminar
                                    Delete={Delete}
                                    object={"E"}
                                    ms_but={'Eliminar productos'}
                                    titilo={'Eliminar productos'}
                                    mensaje={'¿Estás seguro de eliminar los productos seleccionados?'}
                                    />
                                </Box>
                            ) : (
                                <Box component="div">
                                    <Eliminar
                                    Delete={Delete}
                                    object={"V"}
                                    ms_but={'Vaciar carrito'}
                                    titilo={'Vaciar carrito'}
                                    mensaje={'¿Estás seguro de eliminar todos los productos?'}
                                    />
                                </Box>
                            )}
                        </div>
                    ) : (
                        <Box component="div" m={1} pt={3}>
                            <Divider light /> 
                                <Box component="div" className={classes.root} py={3}>
                                    <Typography variant="subtitle2" color="textSecondary">Aún no tienes productos</Typography>
                                </Box>
                            <Divider light /> 
                        </Box>
                    )}
                </Paper>
            </Grid>
        </>
    )
}