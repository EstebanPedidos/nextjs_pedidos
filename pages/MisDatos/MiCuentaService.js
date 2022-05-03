import axios from 'axios'


const url = 'https://api-pickup.pedidos.com/API-Rest';

const obtieneMisDatos = url+'/miCuenta/obtieneMisDatos';
const obtieneTelefonos = url+'/miCuenta/obtieneTelefonos';
const obtieneNoCelulares = url+'/carritoyreservado/obtieneNoCelulares';
const obtieneTipoTelefono = url+'/miCuenta/obtieneTipoTelefono';
// const todosMisTelefonos = url+'/miCuenta/todosMisTelefonos';
// const consultaEjecutivo = url+'/miCuenta/consultaEjecutivo';
const consultaTransportista = url+'/miCuenta/consultaTransportista';
const obtieneDatosFacturacion = url+'/miCuenta/obtieneDatosFacturacion';
const consultaDirecciones = url+'/miCuenta/consultaDirecciones';
const agregaDireccion = url+'/miCuenta/agregaDireccion';
const eliminaDireccion = url+'/miCuenta/eliminaDireccion';
const consultaPedidos = url+'/miCuenta/consultaPedidos';
const consultaPedidosFecha = url+'/miCuenta/consultaPedidosFecha';
const consultaFacturas = url+'/miCuenta/consultaFacturas';
const detallePedido = url+'/miCuenta/detallePedido';
const consultaArchivo = url+'/miCuenta/consultaArchivo';
const obtieneCfdi = url+'/miCuenta/obtieneCfdi';
const consultaCp = url+'/miCuenta/consultaCp';
const consultaNotasFecha = url+'/miCuenta/consultaNotasFecha';
const obtieneFavoritosFrecuentes = 'https://api-pickup.pedidos.com/API-Rest/miCuenta/obtieneFavoritosFrecuentes';
const eliminaFavorito = url+'/miCuenta/eliminaFavorito';
const eliminaRfc = url+'/miCuenta/eliminaRfc';
const cancelaPedido = url+'/miCuenta/cancelaPedido';
const guardaDatoFactNuevo = url+'/miCuenta/guardaDatoFactNuevo';
const getRefacturacion = url+'/miCuenta/getRefacturacion';
const cambioContrasena = url+'/miCuenta/cambioContrasena';
const todosMisTelefonos = url+'/miCuenta/todosMisTelefonos';
const actualizarNotificaciones = url+'/miCuenta/actualizarNotificaciones';
const agregaTelCel = url+'/miCuenta/agregaTelCel';

class MiCuentaService {


    obtieneMisDatos(usuarioNum){
        return axios.post(obtieneMisDatos+'?usuarioNum='+usuarioNum,{
            headers: {
                'Content-Type': 'application/json',
                'Access-control-Allow-Origin' : '*',
                'Access-control-Allow-Methods' : 'GET, PUT, POST, DELETE',
            },
        });
    }

    obtieneTelefonos(usuarioNum){
        return axios.post(obtieneTelefonos+'?usuarioNum='+usuarioNum, {
            headers: {
                'Content-Type': 'application/json',
                'Access-control-Allow-Origin' : '*',
                'Access-control-Allow-Methods' : 'GET, PUT, POST, DELETE',
            }});
    }

    obtieneNoCelulares(cliente_num){
        return axios.get(obtieneNoCelulares+'?cliente_num='+cliente_num, {
            headers: {
                'Content-Type': 'application/json',
                'Access-control-Allow-Origin' : '*',
                'Access-control-Allow-Methods' : 'GET, PUT, POST, DELETE',
            }
        });
    }

    obtieneTipoTelefono(){
        return axios.post(obtieneTipoTelefono,{
            headers: {
                'Content-Type': 'application/json',
                'Access-control-Allow-Origin' : '*',
                'Access-control-Allow-Methods' : 'GET, PUT, POST, DELETE',
            }});
    }

    todosMisTelefonos(clienteNum,usuarioNum){
        return axios.post(todosMisTelefonos+'?clienteNum='+clienteNum+'&usuarioNum='+usuarioNum,{
            headers: {
                'Content-Type': 'application/json',
                'Access-control-Allow-Origin' : '*',
                'Access-control-Allow-Methods' : 'GET, PUT, POST, DELETE',
            }});
    }

    consultaEjecutivo(clienteNum){
        return axios.post(obtieneTipoTelefono+'?clienteNum='+clienteNum,{
            headers: {
                'Content-Type': 'application/json',
                'Access-control-Allow-Origin' : '*',
                'Access-control-Allow-Methods' : 'GET, PUT, POST, DELETE',
            }});
    }

    consultaTransportista(clienteNum){
        return axios.post(consultaTransportista+'?clienteNum='+clienteNum,{
            headers: {
                'Content-Type': 'application/json',
                'Access-control-Allow-Origin' : '*',
                'Access-control-Allow-Methods' : 'GET, PUT, POST, DELETE',
            }});
    }

    obtieneDatosFacturacion(clienteNum){
        return axios.post(obtieneDatosFacturacion+'?clienteNum='+clienteNum,{
            headers: {
                'Content-Type': 'application/json',
                'Access-control-Allow-Origin' : '*',
                'Access-control-Allow-Methods' : 'GET, PUT, POST, DELETE',
            }});
    } 

    consultaDirecciones(clienteNum){
        return axios.post(consultaDirecciones+'?clienteNum='+clienteNum,{
            headers: {
                'Content-Type': 'application/json',
                'Access-control-Allow-Origin' : '*',
                'Access-control-Allow-Methods' : 'GET, PUT, POST, DELETE',
            }});
    } 

    agregaDireccion(peticionesJson){
        return axios.post(agregaDireccion,{peticionesJson},{
            headers: {
                'Content-Type': 'application/json',
                'Access-control-Allow-Origin' : '*',
                'Access-control-Allow-Methods' : 'GET, PUT, POST, DELETE',
            }});
    } 

    eliminaDireccion(dirNum, clienteNum){
        return axios.post(eliminaDireccion+'?dirNum='+dirNum+'&clienteNum='+clienteNum,{
            headers: {
                'Content-Type': 'application/json',
                'Access-control-Allow-Origin' : '*',
                'Access-control-Allow-Methods' : 'GET, PUT, POST, DELETE',
            }});
    } 

    consultaPedidos(clienteNum){
        return axios.post(consultaPedidos+'?clienteNum='+clienteNum,{
            headers: {
                'Content-Type': 'application/json',
                'Access-control-Allow-Origin' : '*',
                'Access-control-Allow-Methods' : 'GET, PUT, POST, DELETE',
            }});
    } 

    consultaPedidosFecha(clienteNum, fechaPedidos){
        return axios.post(consultaPedidosFecha+'?clienteNum='+clienteNum+'&fechaPedidos='+fechaPedidos,{
            headers: {
                'Content-Type': 'application/json',
                'Access-control-Allow-Origin' : '*',
                'Access-control-Allow-Methods' : 'GET, PUT, POST, DELETE',
            }});
    } 

    consultaFacturas(clienteNum, fechaFacturas){
        return axios.post(consultaFacturas+'?clienteNum='+clienteNum+'&fechaFacturas='+fechaFacturas,{
            headers: {
                'Content-Type': 'application/json',
                'Access-control-Allow-Origin' : '*',
                'Access-control-Allow-Methods' : 'GET, PUT, POST, DELETE',
            }});
    } 

    detallePedido(clienteNum, pedidoNum){
        return axios.post(detallePedido+'?clienteNum='+clienteNum+'&pedidoNum='+pedidoNum,{
            headers: {
                'Content-Type': 'application/json',
                'Access-control-Allow-Origin' : '*',
                'Access-control-Allow-Methods' : 'GET, PUT, POST, DELETE',
            }});
    }

    obtieneCfdi(tipoPersona){
        return axios.post(obtieneCfdi+'?tipoPersona='+tipoPersona,{
            headers: {
                'Content-Type': 'application/json',
                'Access-control-Allow-Origin' : '*',
                'Access-control-Allow-Methods' : 'GET, PUT, POST, DELETE',
            }});
    }

    consultaArchivo(clienteNum, invoice, extension){
        return axios.post(consultaArchivo+'?clienteNum='+clienteNum+'&invoice='+invoice+'&extension='+extension,{
            headers: {
                'Access-control-Allow-Origin' : '*',
                'Access-control-Allow-Methods' : 'GET, PUT, POST, DELETE',
            }, 
            responseType: 'blob',
        });
    }

    consultaCp(cp){
        return axios.post(consultaCp+'?cp='+cp,{
            headers: {
                'Content-Type': 'application/json',
                'Access-control-Allow-Origin' : '*',
                'Access-control-Allow-Methods' : 'GET, PUT, POST, DELETE',
            }});
    }

    consultaNotasFecha(clienteNum, fechaNotas){
        return axios.post(consultaNotasFecha+'?clienteNum='+clienteNum+'&fechaNotas='+fechaNotas,{
            headers: {
                'Content-Type': 'application/json',
                'Access-control-Allow-Origin' : '*',
                'Access-control-Allow-Methods' : 'GET, PUT, POST, DELETE',
            }});
    }

    // async enviarEmail(email, asunto, mensaje){
    // //const {email, asunto, mensaje} = this.state;
    // const form = await axios.post(enviarCorreo, {
    //     email, 
    //     asunto,
    //     mensaje
    // })
    // }

    obtieneFavoritosFrecuentes(clienteNum){
        return axios.post(obtieneFavoritosFrecuentes+'?clienteNum='+clienteNum,{
            headers: {
                'Content-Type': 'application/json',
                'Access-control-Allow-Origin' : '*',
                'Access-control-Allow-Methods' : 'GET, PUT, POST, DELETE',
            }});
    }

    eliminaFavorito(clienteNum, itemNum){
        return axios.post(eliminaFavorito+'?cliente='+clienteNum+'&itemNum='+itemNum,{
            headers: {
                'Content-Type': 'application/json',
                'Access-control-Allow-Origin' : '*',
                'Access-control-Allow-Methods' : 'GET, PUT, POST, DELETE',
            }});
    }

    eliminaRfc(rfcNum, rfc, clienteNum){
        return axios.post(eliminaRfc+'?rfcNum='+rfcNum+'&rfc='+rfc+'&clienteNum='+clienteNum,{
            headers: {
                'Content-Type': 'application/json',
                'Access-control-Allow-Origin' : '*',
                'Access-control-Allow-Methods' : 'GET, PUT, POST, DELETE',
            }});
    }

    cancelaPedido(clienteNum, pedidoNum){
        return axios.post(cancelaPedido+'?clienteNum='+clienteNum+'&pedidoNum='+pedidoNum,{
            headers: {
                'Content-Type': 'application/json',
                'Access-control-Allow-Origin' : '*',
                'Access-control-Allow-Methods' : 'GET, PUT, POST, DELETE',
            }});
    }

    guardaDatoFactNuevo(clienteNum, clienteRfc, usoCfdi, razonSocial, telefono, contact, direccion, cp, colonia, estado, delegacion, mpago){
        return axios.post(guardaDatoFactNuevo,{
            clienteNum:clienteNum,
		    clienteRfc:clienteRfc,
            usoCfdi:usoCfdi,
		    razonSocial:razonSocial,
		    telefono:telefono,
		    contact:contact,
		    direccion:direccion,
		    cp:cp,
		    colonia:colonia,
		    estado:estado,
		    delegacion:delegacion,
		    mpago:mpago
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'Access-control-Allow-Origin' : '*',
                'Access-control-Allow-Methods' : 'GET, PUT, POST, DELETE',
            }});
    }

    getRefacturacion(clienteNum, clienteRfc, usoCfdi, razonSocial, telefono, contact, direccion, cp, colonia, estado, delegacion, invoice_num, pedido_num, mpago){
        return axios.post(getRefacturacion,{
            clienteNum:clienteNum,
		    clienteRfc:clienteRfc,
            usoCfdi:usoCfdi,
		    razonSocial:razonSocial,
		    telefono:telefono,
		    contact:contact,
		    direccion:direccion,
		    cp:cp,
		    colonia:colonia,
		    estado:estado,
            invoice_num:invoice_num,
            pedido_num:pedido_num,
		    delegacion:delegacion,
		    mpago:mpago
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'Access-control-Allow-Origin' : '*',
                'Access-control-Allow-Methods' : 'GET, PUT, POST, DELETE',
            }});
    }

    cambioContrasena(usuarioNum,contrasenaA,contrasenaN, contrasenaN2){
        return axios.post(cambioContrasena+'?usuarioNum='+usuarioNum+'&contrasenaA='+contrasenaA+'&contrasenaN='+contrasenaN+'&contrasenaN2='+contrasenaN2,{
            headers: {
                'Content-Type': 'application/json',
                'Access-control-Allow-Origin' : '*',
                'Access-control-Allow-Methods' : 'GET, PUT, POST, DELETE',
            }});
    }

    actualizarNotificaciones(usuarioNum, telFijo,telCel,envClien,envMsg){
        return axios.post(actualizarNotificaciones+'?usuarioNum='+usuarioNum+'telFijo='+telFijo+'&telCelular='+telCel+'&envCliente='+envClien+'&envMensaje='+envMsg,{
            headers: {
                'Content-Type': 'application/json',
                'Access-control-Allow-Origin' : '*',
                'Access-control-Allow-Methods' : 'GET, PUT, POST, DELETE',
            }});
    }

    agregaTelCel(telNum, clienteNum, usuarioNum, telefono, extension, tipoNum, fechaRegistro, status, rolNum){
        return axios.post(agregaTelCel,{
            telNum:telNum,
		    clienteNum:clienteNum,
            usuarioNum:usuarioNum,
		    telefono:telefono,
		    extension:extension,
		    tipoNum:tipoNum,
		    fechaRegistro:fechaRegistro,
		    status:status,
		    rolNum:rolNum
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'Access-control-Allow-Origin' : '*',
                'Access-control-Allow-Methods' : 'GET, PUT, POST, DELETE',
            }});
    }    

}

export default new MiCuentaService();