//Pauquetes
import {useHistory} from 'react-router-dom'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
//Data Display
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
//Inputs
import TextField from '@material-ui/core/TextField';
//Lab
import { Alert, AlertTitle } from '@material-ui/lab';
//Navigation
import Link from '@material-ui/core/Link';
//Componentes MUI4

//Servicos
import Services from '../../services/Services'
//Funciones
import Precios from '../../services/Precios'
export default function Verifica_pedido(props){
    return (
        <h1></h1>
    )
}

export async function getServerSideProps(context) {
    let services        = await Services('POST','/carritoyreservado/getCarrito?clienteNum='+839494+'&usuarioNum='+168020+'&top=10&afiliado=S',{})
    let carrito         = await services.data
    let total           = await data.configCarrito.precarrito.map(item => ((Precios('formatcurrency',{subtotal:item.precio,fixed:2})*item.cantidad)+(Precios('formatcurrency',{subtotal:item.precioSeguro,fixed:2})*item.cantSeguro)+(Precios('formatcurrency',{subtotal:item.precioGarant1,fixed:2})*item.cantGarant1)+(Precios('formatcurrency',{subtotal:item.precioGarant2,fixed:2})*item.cantGarant2))).reduce((prev, curr) => prev + curr, 0)
    let isEjecutivo     = await (data.configCarrito.resenapedidos.length > 0)
    let num_partidas    = await data.configCarrito.precarrito.length
    
    return {
        props: {
            carrito:        carrito,
            total:          total,
            isEjecutivo:    isEjecutivo,
            num_partidas:   num_partidas
        },
      }
}