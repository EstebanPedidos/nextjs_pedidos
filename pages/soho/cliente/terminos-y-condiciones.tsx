import React from 'react';
import Link from 'components/Link'
import {Box, Container,  Grid, Typography} from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { Layout } from 'layout/Layout';

const Item = ({data})=>{
	return(
	<>  
	 <ListItemButton sx={{ pl: 2 }}>
            <ListItemText primary={
				<Typography variant='subtitle2' component='h2' >
					{data.title}
				</Typography>	
			} />
    </ListItemButton>
	</> 
	)
  }

export const TerminosYCondicionesDeEnvio = () => {
	const [open, setOpen] = React.useState(true);

	const handleClick = () => {
	  setOpen(!open);
	};
  
	return (
	<Layout>
		<Container maxWidth="xl">
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Box marginTop='2rem'>
						<Typography align='center' variant='h3'component='h1'color='primary'>
							Términos y condiciones de uso
						</Typography>
					</Box>
				</Grid>
				<Grid item xs={12} sm={5} lg={4}>
					<Typography variant='h6'component='h2' fontWeight={500} align='justify' pl={2}>
						ÍNDICE
					</Typography>
					<List
						sx={{ width: '100%', bgcolor: 'background.paper' }}
						component="nav"
						aria-labelledby="nested-list-subheader"
						subheader={
							<ListSubheader component="div" id="nested-list-subheader">
							Pedidos.com
							</ListSubheader>
						}
    				>
						<ListItemButton onClick={handleClick}>
							<ListItemIcon>
								<BookOutlinedIcon />
							</ListItemIcon>
							<ListItemText primary="Contenido" />
							{open ? <ExpandLess /> : <ExpandMore />}
						</ListItemButton>
							<Collapse in={open} timeout="auto" unmountOnExit>
								<List component="div" disablePadding>
									{/* <Link href="/"> */}
										<Item data={{
											title:'1. OBJETO Y ALCANCE',
											}}
										/>
									{/* </Link> */}
									<Item data={{
										title:'2. ALGUNAS DEFINICIONES',
										 }}
									/>
									<Item data={{
										title:'3. COMPRAVENTA DE PRODUCTOS',
										 }}
									/>
									<Item data={{
										title:'4. DEVOLUCIONES Y CANCELACIONES',
										 }}
									/>
									<Item data={{
										title:'5. RECISIÓN DE OPERACIONES',
										 }}
									/>
									<Item data={{
										title:'6. GARANTÍA',
										 }}
									/>
									<Item data={{
										title:'7. OBLIGACIONES DE PEDIDOS.COM',
										 }}
									/>
									<Item data={{
										title:'8. OBLIGACIONES DEL USUARIO',
										 }}
									/>
									<Item data={{
										title:'9. OTROS SERVICIOS EN LÍNEA',
										 }}
									/>
									<Item data={{
										title:'10. AVISO DE PRIVACIDAD',
										 }}
									/>
									<Item data={{
										title:'11. PROPIEDAD INDUSTRIAL E INTELECTUAL',
										 }}
									/>
									<Item data={{
										title:'12. VÍNCULOS A SITIOS WEB DE TERCEROS',
										 }}
									/>
									<Item data={{
										title:'13. RESPONSABILIDAD DE PEDIDOS.COM',
										 }}
									/>
									<Item data={{
										title:'14. RESPONSABILIDAD DEL USUARIO',
										 }}
									/>
									<Item data={{
										title:'15. USOS NO AUTORIZADOS',
										 }}
									/>
									<Item data={{
										title:'16. CAMBIOS A LOS TyC',
										 }}
									/>
									<Item data={{
										title:'17. NO ASOCIACIÓN',
										 }}
									/>
									<Item data={{
										title:'18. VICIOS OCULTOS',
										 }}
									/>
									<Item data={{
										title:'19. NOTIFICACIONES Y DOMICILIOS',
										 }}
									/>
									<Item data={{
										title:'20. CONSENTIMIENTO',
										 }}
									/>
									<Item data={{
										title:'21. LEGISLACIÓN APLICABLE Y JURISDICCIÓN',
										 }}
									/>
									<Item data={{
										title:'22. VIGENCIA',
										 }}
									/>
									<Item data={{
										title:'23. MANIFESTACIÓN DEL CONSENTIMIENTO',
										 }}
									/>

								</List>
							</Collapse>
					</List>
				</Grid>
				<Grid item xs={12} sm={7} lg={8}>
					<Box component="div" pt={2}>
						<Box marginTop='2rem'>
							<Typography variant='subtitle1' fontWeight={500} align='justify'>
								Operadora de Soluciones para Oficina S.A. de C.V. es una sociedad constituida conforme a las leyes de los Estados Unidos Mexicanos, que tiene su domicilio en Alejandro Dumas 135 Planta baja Local B, Colonia Polanco, Alcaldía Miguel Hidalgo, 11550, CDMX y a la cual haremos referencia en lo sucesivo como “Pedidos.com”, quien es la empresa a cargo de la gestión del sitio Web pedidos.com y de los Sitios Web Asociados.
							</Typography>
						</Box>
						<Box component="section" id="objetoyalcance" pt={2}>
							<Typography variant='subtitle2' component='h2' color='primary' >
								1. OBJETO Y ALCANCE
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
							Los presentes Términos y Condiciones (en adelante, los “TyC”) tienen por objeto regular las actividades desarrolladas en nuestro sitio Web pedidos.com, y en lo conducente, en nuestros Sitios Web Asociados, incluyendo de manera enunciativa más no limitativa (I) la consulta de información en línea sobre los distintos productos de ofrecidos por Pedidos.com; (II) la consulta de información en línea, (III) los foros de discusión y chats, (IV) las promociones, trivias, concursos, juegos y/o sorteos en línea, y (v) comunicaciones promocionales y de telemarketing de los productos ofrecidos, y los demás que en un futuro se habiliten en el sitio y/o nuestros sitios Web Asociados (en adelante los “Servicios en Línea”). Algunos de los Servicios en Línea precisan de diversos actos previos de inscripción o registro que implican el suministro de datos personales por parte de Usted (a quien en adelante se le denominará como “Usuario”) según los requisitos previstos en las Ventanas de Diálogo del Sitio Web o de los Sitios Web Asociados. En adición a los presentes TyC, la utilización del Sitio Web y de los Sitios Web Asociados también se sujetará a las demás Políticas y Avisos de Pedidos.com, incluyendo nuestros Avisos de Privacidad, los cuales se tienen aquí por reproducidos como si se incluyeran a la letra; así como a las instrucciones que se publiquen en el Sitio Web pedidos.com y/o en los Sitios Web Asociados.
							</Typography>
						</Box>
						<Box component="div" pt={2}>
							<Typography variant='subtitle2' component='h2' color='primary' >
								2. ALGUNAS DEFINICIONES
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
								Para facilitar la lectura de los presentes TyC le pedimos considerar las siguientes definiciones:
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
								SITIOS WEB ASOCIADOS.- Se refiere a cualquier sitio web de Pedidos.com, así como a las siguientes subcuentas de los sitios de redes sociales en los que Pedidos.com participa como usuario: www.facebook.com/pedidoscom; www.youtube.com/pedidostv; www.instagram.com/pedidoscom; www.twitter.com/Pedidos_com;
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
								SERVICIOS EN LÍNEA.- Se refiere a las actividades descritas en el apartado anterior;
							</Typography>

							<Typography variant='body1' component='p' align='justify'>
								USUARIOS.- Son los visitantes a nuestro sitio Web que utilizan los Servicios en Línea;
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
								VENTANA DE DIÁLOGO.- Formato electrónico del Sitio Web pedidos.com, así como de los Sitios Web asociados en los que el Usuario suministra sus datos personales y la información para la prestación de los Servicios en Línea.
							</Typography>
						</Box>
						<Box component="div" pt={2}>
							<Typography variant='subtitle2' component='h2' color='primary' >
								3. COMPRAVENTA DE PRODUCTOS
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
								Al acceder a una Ventana de Diálogo en la que se ofrezcan en venta Productos, y al ingresar la información y datos personales que le sean requeridos se entenderá dado el consentimiento del Usuario sobre la oferta de venta. Pedidos.com especificará la existencia del producto solicitado y solo ofrecerá aquellos productos que tenga en existencia. Las partes quedan obligadas desde el momento en que se determine el precio y objeto.
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
								El Usuario acepta que en cualquier operación verificada a través del Sitio Web pedidos.com se sobreentenderá que conoce las características y limitaciones del Producto o Servicio especificados y que acepta los términos en los que le han sido ofrecidos.
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
								Los precios de las ofertas presentadas señalarán la inclusión en su monto de los impuestos referentes y en su caso se especificarán aquellos cargos adicionales tales como flete y seguro en los casos en los que sea aplicable, así como otros cargos, de ser aplicables. De existir costos adicionales, Pedidos.com los especificará antes de que se tenga por perfeccionada la operación respectiva.
							</Typography>

							<Typography variant='body1' component='p' align='justify'>
								Formas de Pago. El usuario podrá elegir las siguientes formas de pago: (I) Paga al recibir: si el usuario realiza un pedido deberá ser entregado dentro de la CDMX (Distrito Federal) y Guadalajara en donde podrá realizar su pago contra entrega ya sea con tarjeta de crédito o débito. En esta modalidad tales pagos sólo podrán ser elegidos por el Usuario cuando estos traten de operaciones no mayores, o no sean superiores a MX$ 10,000.00 (diez mil pesos moneda nacional 00/100) si se efectuarán por medio de tarjeta de debito o crédito, que el producto a entregar no ocupe un volumen o espacio superior al comprendido a .13 metros cúbicos y que el producto a entregar no tenga un peso mayor de 20kg. (II) Pago por medio de PayPal: El Usuario podrá realizar su pago por medio de su cuenta PayPal. Con motivo de protección del Usuario, Pedidos.com rechazará el pago efectuado por tal medio si la dirección dada para el envío a Pedidos.com no es la misma que aquella registrada en PayPal.(III) Pago a Meses sin Intereses con tarjetas participantes: El usuario podrá diferir a MSI su pago vía Paypal y con tarjetas participantes: Banorte, BBVA Bancomer, CitiBanamex, American Express, Santander y HSBC. (IV)Tarjeta Visa o Mastercard: El Usuario podrá realizar su pago con tarjeta de Débito o Crédito. Pedidos.com no lleva el control, ni efectúa tales operaciones de pago, siendo estas realizadas directamente entre el usuario y la Institución Financiera de que se trate, razón por la cual Pedidos.com no conserva ni trata dato alguno para efectuar tales cobros. Solo se verán reflejados los pagos realizados el mismo día si estos son realizados antes de las 14:00 horas del día, de lo contrario el pago se reflejara en el sistema de Pedidos.com hasta el siguiente día hábil. (V) Deposito Bancario: EL usuario podrár realizar su pago por este medio Pedidos.com le proporcionará su número de cuenta en BANCOMER . De igual manera el depósito se verá reflejado en el sistema de Pedidos.com el mismo día si se realiza antes de las 14:00 horas del día, de lo contrario se reflejará hasta el siguiente día hábil.
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
								Tiempo de entrega. Si el envío se efectuará dentro de México, Distrito Federal el pedido será entregado el mismo día con la forma de envío express o en Pedidos.com PickUp Center si es seleccionado. Con los otros métodos, el pago debe de realizarse antes de las 12:00 horas en día hábil, salvo el caso de que el pedido salga de diferentes bodegas, caso en el cual el tiempo se prolongará de 1 a 5 días hábiles para respetar el horario y fecha de entrega. Para tales efectos, antes de que el Usuario realice el pago se le informará por medio de una leyenda si el pedido provendrá de diferentes bodegas.
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
								Tiempo de entrega. En caso de que el producto tenga el aviso de entrega más dos días, quiere decir que ese producto se demorará 2 días en embarcarse o en enviarse, por lo que, no aplicará la entrega el mismo día y a su vez el tiempo de entrega se demorará dos días extras.

								Dado a que existen códigos postales en donde ninguna de nuestras paqueterías cumple con el tiempo de entrega de 1 a 5 días hábiles las reglas posteriores no aplicarán en tales supuestos.

								En caso de suscitarse algún problema con el envío Pedidos.com se obliga a dar un seguimiento oportuno del pedido hasta que sea entregado en óptimas condiciones.
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
								Términos de Envío. Pedidos.com enviará al domicilio señalado en la operación el producto o prestará el servicio solicitado bajo los siguientes términos. El tiempo de entrega se tomará a partir de la fecha de envío. Si el pedido es pagado después de las 2:00 pm, Pedidos.com enviará el producto o prestará el servicio el siguiente día hábil. En caso de que el pedido tenga un peso mayor a 15 kg. el tiempo de entrega aumentará de 5 a 10 días hábiles, en el entendido de que los pedidos mayores a 15 kg. se envían vía terrestre y no aérea. El envío tiene cargos adicionales para el usuario, consulta nuestros costos de envío (sin importar las piezas, peso o volumen). Según el caso, algunos pedidos podrán entregarse por entregas diferentes en tiempos diferentes, ello en el entendido que para la protección de los intereses del Usuario, o por la protección y seguridad del envío, o por encontrarse los componentes en cajas o bodegas diferentes sea de realizarse de tal modo.
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
								Servicio Entrega Express. El servicio Express está disponible sólo de Lunes a Viernes de días laborales en un horario de 9:00hrs a 17:00hrs, tiene un costo de 45 pesos ya con IVA incluido. Los productos participantes para este servicio serán aquellos que se muestren en la sección Express y sólo se podrán comprar la cantidad máxima que entre en una motocicleta de reparto, esta cantidad se mostrará en el carrito de compras, para que el usuario esté consiente de cuanto espacio tiene disponible en la motocicleta de reparto. El tiempo prometido de entrega es máximo 3 horas una vez sea confirmado el pedido por alguno de nuestros ejecutivos, en caso de que el pedido no llegue en ese tiempo, el cargo extra de 45 pesos serán reembolsados en un lapso no mayor a 2 días. Sólo aplica en los pagos contra entrega o al recibir, no se aceptarán otro tipos de pagos.
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
								Servicio Entrega en Pedidos.com PickUp Center. Este servicio de entrega está disponible de Lunes a Sábado en días laborales en un horario de 10:00hrs a 18:30hrs. Al pedir en línea en Pedidos.com la opción será válida o podrá usarse siempre y cuando la cantidad máxima de volumen del producto/pedido a entregar no sobrepase y no ocupe un volumen o espacio superior al comprendido a 0.13 metros cúbicos y no tener un peso mayor de 20kg. La opción de este servicio se mostrará en el carrito de compras si es válida para la entrega del pedido. No olvides que para recoger el pedido debe de llegar un correo electrónico con el código QR que debes llevar para poder recoger tu pedido en Pedidos.com PickUp Center. El tiempo prometido de entrega dependerá de los productos de tu pedido, donde las entregas podrán ser en 3 horas o bien al día siguiente siempre y cuando sea día hábil y cumpla con los horarios hábiles laborales.
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
								En relación con cualquier pago realizado por el Usuario a Pedidos.com se entregará, de así solicitarse, la factura o el comprobante fiscal digital conducente con los requisitos de ley, dentro de los siguientes 5 días hábiles a la fecha en que se realizó el pago. En el caso de operaciones que impliquen múltiples pagos, Pedidos.com entregará al Usuario la factura o el comprobante fiscal digital una vez cubierto el último pago.
							</Typography>
						</Box>
						<Box component="div" pt={2}>
							<Typography variant='subtitle2' component='h2' color='primary' >
								4. DEVOLUCIONES Y CANCELACIONES
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
							Los pagos hechos en exceso del precio estipulado, son recuperables por el consumidor. Si el proveedor no devuelve la cantidad cobrada en exceso dentro del término de 5 días hábiles siguientes a la reclamación además de la sanción que corresponda, estará obligado a pagar el máximo de los intereses a los que refiere el artículo 91 de la Ley Federal del de Protección del Consumidor. El Usuario solo podrá solicitar la devolución de tal exceso dentro un año a partir de la fecha en que tuvo lugar el pago.
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
								En términos del artículo 92 de la Ley Federal de Protección del Consumidor el Usuario podrá optar por la reposición del producto o a la devolución de la cantidad pagada, contra la entrega del producto adquirido en los siguientes casos: (i) Si el bien no corresponde a la calidad, marca, o especificaciones y demás elementos sustanciales bajo los cuales se haya ofrecido o no cumple con las normas oficiales mexicanas; (ii) Si el bien reparado no queda en estado adecuado para su uso o destino, dentro del plazo de garantía, y (i) En los demás casos previstos por la Ley Federal de Protección al Consumidor. Tal reclamación podrá ser presentada por el Usuario indistintamente a Pedidos.com, al fabricante o al importador, dentro de los dos meses siguientes a la fecha en que se haya recibido el producto, siempre que no se hubiese alterado por culpa del Usuario.
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
								El proveedor de Pedidos.com deberá satisfacer la reclamación en un plazo que no excederá de quince días contados a partir de dicha reclamación. Pedidos.com, el fabricante o el importador podrá negarse a satisfacer la reclamación en los siguientes casos: (i) si ésta es extemporánea; (ii) cuando el producto haya sido usado en condiciones distintas a las recomendadas o propias de su naturaleza o destino; (iii) o si ha sufrido un deterioro esencial, irreparable y grave por causas imputables al consumidor.
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
								El producto deberá devolverse en las mismas condiciones en que se entregó y deberá llegar en su empaque original y en los casos que aplique, con los accesorios o regalos incluidos. El envío deberá hacerse usando el mismo embalaje que Pedidos.com utilizó para enviarlo a tu domicilio, considerando de manera enunciativa mas no limitativa el no pegar nada que altere el empaque y embalaje original.
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
								En cualquier momento el Usuario podrá cancelar su pedido. En caso de que ya esté pagado se le hará la devolución de dinero en un lapso no mayor a 10 días hábiles.
							</Typography>
						</Box>
						<Box component="div" pt={2}>
							<Typography variant='subtitle2' component='h2' color='primary' >
								5. RECISIÓN DE OPERACIONES
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
							Las partes podrán rescindir el contrato en términos del artículo 82 de la Ley Federal de Protección al consumidor y los términos del artículo 1949 del Código Civil Federal.
							</Typography>
						</Box>
						<Box component="div" pt={2}>
							<Typography variant='subtitle2' component='h2' color='primary' >
								6. GARANTÍA
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
								Operadora de Soluciones para Oficina S.A. de C.V. ha establecido la presente política con base a los criterios de aceptación o rechazo de garantías que presentan nuestros proveedores. Se tramitará una garantía siempre que el producto adquirido contenga un defecto de fabricación que afecte su funcionamiento. Requisitos: - Copia de factura legible y anexos de números de serie para componentes de PC´s. - Presentar el producto completo, en su empaque original, accesorios, drivers, manuales, cables, papel, etc. - Que el producto que se presenta a garantía este dentro del tiempo que otorga el fabricante: para componentes de PC´S y equipo de oficina un año (excepto gabinetes que cuentan con 3 meses y fuentes con 6 meses), para consumibles y papelería tres meses (solo HP cuenta con un año y XEROX con un mes), para muebles de oficina un año (El año es comercial: 360 días). En caso de que se complique Pedidos hará la recolección del producto. - De forma escrita o verbal deberá detallar lo más específico posible la falla que presenta el producto que se desea ingresar a garantía. - El producto que presenta la falla debe contener el código de barra por parte de Operadora de Soluciones para Oficina S.A. de C.V. adherido al componente para PC. - En caso de cartuchos de tinta y tóner se requiere presentar prueba de impresión defectuosa o carta membretada explicando el problema del producto (requerimiento de proveedores ). - Para cámaras Kodak y equipos de la marca Panasonic es requisito indispensable presentar original de la póliza de garantía. Todo producto que se acepte a garantía está sujeto a la revisión y autorización del fabricante. Se anula la garantía: - Por mal uso, abuso o modificación del equipo por personal no autorizado por Operadora de Soluciones para Oficina S.A. de C.V. (intervención manual en el equipo). - Si el producto presenta el código de barra rayado en el componente. - En los casos que las etiquetas del proveedor sean removidas o alteradas. - Por producto en mal estado (marcas, rayones con plumón indeleble y etiquetas ajenas al código de barras de Operadora de Soluciones para Oficina S.A. de C.V.). - No se aceptan garantías que presenten daño físico entendiendo como tal a: producto quemado, roto, golpeado, intervenido, con resistencias rotas, con sellos de garantía violados, circuitos o soldaduras quemadas o conexiones dañadas. - En caso de Consumibles no se aceptará a garantía ningún producto objeto de una operación reañizada con más de 60días naturales de antiguedad- En caso de cartuchos de tinta y toner que presenten menos del 50% de su contenido. - No hay garantía por rendimiento de cartuchos de tinta y tóner. - Por pixeles quemados en notebooks o monitores con pantalla LCD. Cada marca tiene establecido un mínimo de pixeles quemados para hacer válida la garantía. Restricciones: - Si se recibe el producto incompleto , se pagará de la misma forma hasta que el proveedor lo haga. - Para el caso específico de equipos : monitores, quemadores, DVD's, CD ROM´S, impresoras, reguladores, no break's, multifuncionales, faxes, copiadoras, laptop's, cámaras digitales, máquinas de escribir, video cámaras, iPod's, escáners, PDA's, proyectores, notebook's, teléfonos, MP3, etc., la garantía se tramitará en el centro de servicio respectivo de cada marca, el tiempo de respuesta y reparación dependerá del mismo. - Operadora de Soluciones para Oficina S.A. de C.V. no está obligada a indemnizar al Usuario o a terceras personas por daños directos o indirectos del uso del producto, salvo en los casos establecidos en la Ley Federal de Protección del Consumidor. - Operadora de Soluciones para Oficina S.A. de C.V. no se hace responsable de productos que no se recojan en 3 meses a partir de la fecha de ingreso. Trámite de garantía: - Para toda garantía que sea aceptada. Operadora de Soluciones para Oficina S.A. de C.V. entregará un recibo de la garantía al distribuidor mismo que servirá para la reclamación posterior. Sólo se podrá pagar la garantía con el recibo original. - Para todas las garantías que envíen los Usuarios del interior de la República deberá presentarse el paquete en perfectas condiciones, de lo contrario no se recibirá el paquete por la mensajería que se envíe. Tiempo de respuesta: En Componentes de PC's tenemos 2 tipos de garantías: Garantía express: - Para toda garantía que sea aceptada. Operadora de Soluciones para Oficina S.A. de C.V. entregará un recibo de la garantía al distribuidor mismo que servirá para la reclamación posterior. Sólo se podrá pagar la garantía con el recibo original. - Para todas las garantías que envíen los Usuarios del interior de la República deberá presentarse el paquete en perfectas condiciones, de lo contrario no se recibirá el paquete por la mensajería que se envíe. - Se tramitará garantía express en productos como: floppy´s, gabinetes, tarjetas madre, modems, mouses, monitores, bocinas, teclados, discos duros, procesadores, CD Roms, dvd´s, combos, memorias, excepto: paquetes de software, y equipos como: no break´s, reguladores, impresoras, multifuncionales, fax, artículos de oficina, papelería y muebles. - Se aplica garantía express en: Canon (3 meses), HP (1 año) siempre y cuando vengan con su empaque original, y su carta membretada u hoja de impresión. (Requerimiento de proveedores), y las demás marcas están sujetas a la revisión, dictamen y respuesta del proveedor. - El pago de esta garantía será posterior al diagnóstico. Garantía normal: - Si la garantía se presenta dentro de los primeros 30 días de efectuada la compra y cumple con la política, deberá ser pagada en un lapso de 72 hrs. (excepto equipo). - El diagnóstico es de 24 hrs. A partir de su ingreso, después será enviado con el proveedor. - Si la garantía se está presentando después de los 30 días efectuada la compra, se pagará al Usuario entre 7 y 15 días hábiles como máximo. - En productos sobre pedido el tiempo de respuesta dependerá totalmente del proveedor y productos con clave “CE” tendrán garantía a razón del acuerdo pactado en la compra. En Consumibles: - El tiempo de respuesta se sujetará al que otorga cada fabricante ya que depende del mismo el diagnóstico, aprobación y pago de la garantía. - Se aplica garantía express en Canon y HP siempre y cuando vengan con su empaque original, y su carta membretada u hoja de impresión (Requerimiento de proveedor). Forma de pago de garantías: - Cambio físico de la misma forma que ingreso el producto a garantía. - Nota de crédito en caso de que no haya existencia disponible se hará con relación al precio vigente en nuestro sistema dentro de los primeros 30 días de efectuada la compra, después de este plazo se realizará una depreciación a la nota de crédito. - En el caso de muebles de oficina se hacen reparaciones o se sustituyen piezas. No existe garantía en los siguientes productos: Refacciones, cilindros y drums, artículos de limpieza, software e higiénicos. En las siguientes marcas: PANASONIC, FELLOWES, AVERY, MEGAFAX, CINTAS LEXMARK, UNIFAX, LEEDS, MITA, MINOLTA, SHARP, CONSUMIBLES BROTHER, 3M, SOFTWARE Y PAPELES DE TODAS LAS MARCAS. Producto de lento movimiento (LM) y producto de remate (ZD). En la marca ANSEL la garantía se tramita directamente con proveedor.
							</Typography>
						</Box>
						<Box component="div" pt={2}>
							<Typography variant='subtitle2' component='h2' color='primary' >
								7. OBLIGACIONES DE PEDIDOS.COM
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
								Pedidos.com se compromete a entregar al Usuario oportunamente los Productos seleccionados por él, al igual que a suministrarle los servicios solicitados, en los tiempos convenidos y bajo las condiciones acordadas, pero sujeto siempre a la disponibilidad del Producto y de los técnicos de Pedidos.com, según sea el caso, para su entrega en territorio nacional.
							</Typography>
						</Box>
						<Box component="div" pt={2}>
							<Typography variant='subtitle2' component='h2' color='primary' >
								8. OBLIGACIONES DEL USUARIO
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
								El Usuario se obliga a realizar los pagos correspondientes al precio del Producto, así como los impuestos al valor agregado, el flete, y los demás gastos que se incluyan y desglosen en la factura o el Comprobante Fiscal Digital. Los montos totales a pagar deberán ser expresados en moneda nacional, e incluir el impuesto al valor agregado y cualquier otro costo asociado. El Usuario podrá realizar el pago mediante los medios de pago antes mencionados en los presentes TyC. En determinadas operaciones –según el monto de estas- Pedidos.com podrá solicitar al Usuario medios adicionales de identificación y documentos que acrediten su personalidad con motivo de cumplir la legislación aplicable. Pedidos.com tendrá el derecho a negar, restringir o condicionar al Usuario sobre el acceso o la compra en caso de cualquier tipo agresión, o bien, poner en riesgo a cualquier miembro del equipo de Pedidos.com. En caso de crear más cuentas, realizar pagos o compras, si el equipo de Pedidos.com detecta que son de su pertenencia, Pedidos.com podrá retener la venta de estos con la obligación de devolver su dinero en un tiempo no mayor a 2 días a partir de que se tengan los datos necesarios para realizar la devolución de dinero.
							</Typography>
						</Box>
						<Box component="div" pt={2}>
							<Typography variant='subtitle2' component='h2' color='primary' >
								9. OTROS SERVICIOS EN LÍNEA
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
							Pedidos.com podrá habilitar en el Sitio Web pedidos.com foros de discusión y chats para proporcionar información a los Usuarios o para atender sus dudas y/o peticiones concretas. De igual manera, podrá instrumentar promociones, trivias, concursos, juegos y/o sorteos en línea, cuyos requerimientos y reglas serán detallados en el apartado correspondiente del Sitio Web. Respecto de los foros de discusión y chats, Pedidos.com hace de su conocimiento que algunos de ellos son moderados, y que todos son objeto de acceso por parte de un representante de Pedidos.com por razones técnicas. Pedidos.com no controla el contenido que los Usuarios pudieren incluir, siendo que algunos son foros de discusión pública. Como en cualquier foro interactivo abierto a muchos Usuarios, el Usuario deberá considerar con detenimiento si desea suministrar la información y sus datos personales, pues dichos foros, son considerados públicos por lo que Pedidos.com hace del conocimiento del Usuario que en tales supuestos el uso y revelación de datos personales no se realiza de manera exclusiva a Pedidos.com.
							</Typography>
						</Box>
						<Box component="div" pt={2}>
							<Typography variant='subtitle2' component='h2' color='primary' >
								10. AVISO DE PRIVACIDAD
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
								Pedidos.com es respetuoso de su privacidad y de sus datos personales, y por ello le pide que lea detenidamente los Avisos de Privacidad disponibles en pedidos.com y en los Sitios Web Asociados, según corresponda, mismos que se tienen por reproducidos en el presente apartado y que forma parte integrante de los presentes TyC. Pedidos.com incentiva a las personas a que manifiesten cualesquiera preocupaciones respecto del tratamiento que damos a sus datos personales, contactando para tales efectos a nuestro Oficial de Privacidad a través de los medios que se especifican en nuestros Avisos de Privacidad. Pedidos.com buscará resolver esas preocupaciones.
							</Typography>
							<Box component="div" pt={2}>
								<Typography variant='subtitle2' component='h2' color='primary' >
									a.) PayPal
								</Typography>
								<Typography variant='body1' component='p' align='justify'>
									"PayPal es un controlador independiente utilizado para procesar los datos del cliente, información aquí:
						
								</Typography>
								<Typography variant='body1'>
								https://www.paypal.com/mx/webapps/mpp/ ua/privacy-full”
								</Typography>
							</Box>
						</Box>
						<Box component="div" pt={2}>
							<Typography variant='subtitle2' component='h2' color='primary' >
								11. PROPIEDAD INDUSTRIAL E INTELECTUAL
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
								Las partes convienen que los elementos y contenidos del Sitio Web de pedidos.com y en los Sitios Web Asociados incluidos de manera enunciativa mas no limitativa los distintos avisos comerciales, marcas, nombres de dominio, logos, imágenes, gráficos, textos, animaciones, sonidos, diseños industriales, programas de cómputo, bases de datos, reservas de uso, diseño y formato de las páginas Web, y demás (son marcas registradas en México y en otros países), se encuentran protegidos en virtud de las leyes nacionales, tratados internacionales y por instrumentos contractuales y la titularidad de los derechos de propiedad intelectual e industrial corresponden exclusivamente a Operadora de Soluciones para Oficina S.A. de C.V. y/o aquellos proveedores o sujetos que mantengan una relación jurídica con Operadora de Soluciones para Oficina S.A. de C.V. En tal virtud, el Usuario reconoce y acepta que no adquiere ningún derecho sobre los citados activos de propiedad intelectual e industrial por el simple acceso y uso de los Servicios en Línea ofrecidos en el Sitio Web pedidos.com y/o en los Sitios Web Asociados. Por tal motivo el Usuario sólo podrá acceder a una copia temporal que descarga en la memoria de su sistema informático para acceder a los Servicios En Línea ofrecidos en tales Sitios Web, el Usuario no podrá almacenar, transmitir, retransmitir, reproducir, enajenar por cualquier título o distribuir, ningún elemento o contenido del Sitio Web pedidos.com y/o en los Sitios Web Asociados. En ningún momento se considerará que el acceso al Sitio Web pedidos.com y/o a los Sitios Web Asociados y el uso de los Servicios En Línea constituye una autorización o licencia para utilizar dichos servicios o los elementos y demás contenidos del Sitio Web y/o de los Sitios Web Asociados con fines distintos los previstos en los presentes TyC. Pedidos.com prohíbe cualquier vínculo de acceso, sea por medio de ligas (links), hiperligas (hiperlinks), enlaces, banners, botones, encuadre de o hacia (Frames) a los Servicios en Línea ofrecidos en el Sitio Web pedidos.com y/o en los Sitios Web Asociados. De igual manera, Pedidos.com prohíbe que se habiliten, utilicen o comercialicen los Servicios ofrecidos en dichos Sitios Web en cualquier otro Sitio Web, a menos que Pedidos.com hubiese otorgado la correspondiente autorización previa y por escrito. Pedidos.com, se reserva el derecho de inhabilitar cualquier vínculo de acceso que considere inapropiado, sea cual fuere la razón, con motivo de proteger el mayor interés del Usuario. Cualquier derecho no expresamente otorgado en virtud de los presentes TyC se entiende reservado. El Usuario se obliga a: (i) no llevar a cabo ningún acto que pudiera afectar o disminuir los derechos sobre los activos de propiedad industrial e intelectual de Pedidos.com y/o de las empresas del mismo, y (ii) a abstenerse de darles cualquier otro uso que pudiera derivar en un beneficio para sí o para cualquier otro tercero. Adicionalmente, queda expresamente prohibido al Usuario utilizar, traducir, o modificar, en todo o en parte, los activos de propiedad intelectual e industrial en comento, para la producción cualquier trabajo derivado, compilación o base de datos, o para cualquier otro fin distinto al expresamente autorizado.
							</Typography>
						</Box>
						<Box component="div" pt={2}>
							<Typography variant='subtitle2' component='h2' color='primary' >
								12. VÍNCULOS A SITIOS WEB DE TERCEROS
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
								El Sitio Web pedidos.com y/o en los Sitios Web Asociados se pueden proporcionar vínculos a Sitios Web de terceros para su comodidad e información. En caso de que usted acceda a estos vínculos, abandonará el Sitio Web pedidos.com y/o los Sitios Web Asociados. Con independencia de que Pedidos.com celebre contratos con tales terceros y les comunique sus Avisos de Privacidad, Pedidos.com no tiene control sobre tales Sitios Web ni sobre sus términos y condiciones, sus avisos, políticas o prácticas de privacidad, ni sobre sus contenidos, productos, servicios, materiales o cualquier otra información contenida en o disponible a través de dichos Sitios, los cuales pueden diferir de los presentes Términos y Condiciones. La inclusión de los vínculos a sitios Web de terceros de ninguna manera se debe entender como una recomendación de Pedidos.com sobre los mismos, ni sobre sus productos y servicios. En tal virtud, Pedidos.com sólo es responsable de su sitio web, por lo que aconseja al Usuario revisar los Términos y Condiciones, avisos de privacidad y/o políticas y/o prácticas de privacidad de tales sitios. El acceso a cualquier Sitio Web enlazado a pedidos.com y/o a los Sitios Web Asociados es bajo su propio riesgo.
							</Typography>
						</Box>
						<Box component="div" pt={2}>
							<Typography variant='subtitle2' component='h2' color='primary' >
								13. RESPONSABILIDAD DE PEDIDOS.COM
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
								El Usuario entiende y acepta que Pedidos.com no tiene control sobre el acceso al Protocolo de Internet (IP) por parte de personas que intenten violar la seguridad de la red y equipos de Pedidos.com o de los Usuarios, por lo tanto, Pedidos.com sólo puede responsabilizarse de las propias medidas de seguridad que tome en consideración con la administración de su sitio y no de otros ajenos. Pedidos.com se compromete a llevar a cabo las medidas razonables para proteger la información generada, recibida, transmitida, o archivada en el Sitio pedidos.com y/o en los Sitios Web Asociados. Las partes acuerdan que bastará con la utilización de software para combatir los códigos maliciosos y firewalls.
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
								En consideración con lo anterior Pedidos.com no se hace responsable de cualquier daño o perjuicio que pudieran tener los Usuario por el simple uso o no uso del portal o portales de internet de Pedidos.com.
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
								En cuanto a la entrega de productos y servicios, Pedidos.com será responsable en los siguientes términos:
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
								Pedidos.com sólo será responsable de los bienes y servicios ofrecidos por él a través de sus páginas de internet. Sólo será responsable por los casos en los que opere con dolo o culpa producto de notoria negligencia. De igual manera, las partes, acuerdan que en toda operación se entenderá que Pedidos.com actúa de buena fe. Pedidos.com sólo será responsable por el valor de los servicios o bienes ofrecidos, acordando las partes que el valor considero para tales efectos será aquel que las partes pactaron en cada operación por el intercambio del bien o servicio, no pudiendo ser Pedidos.com responsable por cualquier otro concepto, salvo por los casos establecidos en los presentes TyC. Pedidos.com solo será Responsable en aquellos casos en que el Usuario haya cumplido con sus respectivas obligaciones. Pedidos.com no será responsable por casos de Fuerza Mayor o Casos Fortuitos. La entrega de los productos o servicios se efectuará conforme los términos presentados con anterioridad. Si por casos fuera del control de las partes no fuera posible cumplir con los tiempos de entrega establecidos en los presentes TyC, Pedidos.com no será responsable por la demora en tales casos, aunque deberá informar de tal demora al Usuario. Entiéndase que con lo pasado Pedidos.com no pierde su obligación y responsabilidad de entregar los pedidos solicitados según corresponda.
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
								Pedidos.com y el Usuario acuerdan que Pedidos.com sólo será responsable del riesgo del que puedan estar sujetos los objetos de sus operaciones desde el momento en que estos salgan de las instalaciones de Pedidos.com hasta el momento en que sean entregados al Usuario y no en cualquier otro momento.
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
								Pedidos.com estará sujeto a responder por los vicios ocultos de sus productos en los términos de la Ley Federal de Protección al Consumidor. El Usuario reconoce que está enterado de las cualidades de los productos ofrecidos en las páginas de Pedidos.com, incluso de aquellos productos potencialmente peligrosos.			
							</Typography>
						</Box>
						<Box component="div" pt={2}>
							<Typography variant='subtitle2' component='h2' color='primary' >
								14. RESPONSABILIDAD DEL USUARIO
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
								El Usuario reconoce y acepta que Pedidos.com, al igual que sus demás empresas no serán de ninguna manera responsables frente a otras personas respecto al uso por parte del Usuario, por lo que el Usuario será el único responsable por el uso del Sitio pedidos.com.com y/o a los Sitios Web Asociados o sus Servicios en línea. De tal manera el Usuario será responsable de cualquier daño o perjuicio ocasionado por afectar cualquier derecho de tercero, incluyendo de manera enunciativa, mas no limitativa, los derechos de autor, de propiedad industrial, de privacidad y protección de datos; o de cualquier ley, reglamento o código federal, estatal o municipal aplicable. El Usuario deberá indemnizar a Pedidos.com de cualquier daño o perjuicio que sufra por ejecutar tales conductas. La información que el Usuario envíe en las secciones de comentarios, sugerencias, ideas, u otras análogas y que sean puestas a disposición de los Usuarios de los Servicios En Línea a través de las Ventanas De Diálogo del sitio Web pedidos.com y/o a los Sitios Web Asociados será responsabilidad del Usuario y se entiende que el Usuario acepta que dicha información sea considerada como información públicapara todos los efectos legales. Pedidos.com se reserva el derecho, de rehusarse a prestar servicios a cualquier persona, física o moral que contravenga estos TyC.
							</Typography>
						</Box>
						<Box component="div" pt={2}>
							<Typography variant='subtitle2' component='h2' color='primary' >
								15. USOS NO AUTORIZADOS
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
								El Usuario se obliga a no utilizar los elementos, contenidos y servicios del Sitio Web pedidos.com y/o de los Sitios Web Asociados para cualquier propósito contrario a las leyes, los presentes TyC o las buenas costumbres. También se obliga a no utilizar los elementos, contenidos y servicios del Sitio Web pedidos.com y/o a los Sitios Web Asociados para deshabilitar, dañar o deteriorar el funcionamiento de los sistemas informáticos y equipos de telecomunicaciones de Pedidos.com, o para alterar, acceder indebidamente, modificar o destruir los datos o información que los mismos almacenen, procesen o transmitan. Asimismo, se obliga a no obstaculizar o interferir el uso y disfrute de los elementos, contenidos y servicios del Sitio Web pedidos.com y/o de los Sitios Web Asociados para ningún otro usuario. También se obliga a no utilizar los elementos, contenidos y servicios del sitio Web pedidos.com y/o de los Sitios Web Asociados para el envío de correo electrónico no solicitado (spam), sea comercial, proselitista o de cualquier naturaleza, o para el envío de mensajes de datos en cadena, esquemas comerciales de pirámide, concursos, mensajes difamatorios, obscenos, pornográficos, o que violen derechos de propiedad intelectual o industrial de Pedidos.com o de cualquier tercero. De igual manera, el Usuario se abstendrá de procesar, transmitir y distribuir todo tipo de código malicioso, incluyendo entre otros los virus, gusanos, puertas traseras (back doors), Caballos de Troya, Zombies, bombas lógicas o cualquier programa de cómputo, aplicación o archivo que pueda afectar, dañar o impedir el correcto funcionamiento de los elementos, contenidos y servicios del Sitio Web pedidos.com y/o de los Sitios Web Asociados o de los sistemas informáticos y equipos de Telecomunicaciones de Pedidos.com o de cualquier tercero. Pedidos.com se reserva el derecho de eliminar cualquier archivo, aplicación o mensaje de datos, que contravenga lo dispuesto en estos TyC, o que sea violatorio de cualquier disposición normativa a nivel federal o local.
							</Typography>
						</Box>
						<Box component="div" pt={2}>
							<Typography variant='subtitle2' component='h2' color='primary' >
								16. CAMBIOS A LOS TyC
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
								PEDIDOS.COM podrá actualizar los presentes TyC a efecto de reflejar los cambios en nuestras prácticas y/o políticas, así como los cambios legales y administrativos que tengan lugar. Tal modificación será publicada por medio de nuestro portal de internet. Para tales efectos consideraremos el consentimiento del Usuario, ya sea tácito o expreso. Por motivo de lo pasado, al no contar con ninguna respuesta en contrario después de 15 días naturales siguientes a la notificación de los cambios a los presentes TyC en nuestra página web, se entenderán por aceptados los términos notificados y surtirán efectos desde la fecha de publicación de tal notificación.
							</Typography>
						</Box>
						<Box component="div" pt={2}>
							<Typography variant='subtitle2' component='h2' color='primary' >
								17. NO ASOCIACIÓN
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
								Por virtud de los presentes TyC no se crea ninguna relación jurídica de representación, asociación o laboral, por lo que ni el Usuario ni Pedidos.com actuarán como representante del otro, ni podrán obligar o comprometerle frente a terceros, ni frente a sus respectivos empleados.
							</Typography>
						</Box>
						<Box component="div" pt={2}>
							<Typography variant='subtitle2' component='h2' color='primary' >
								18. VICIOS OCULTOS
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
								Por virtud de los presentes TyC no se crea ninguna relación jurídica de representación, asociación o laboral, por lo que ni el Usuario ni Pedidos.com actuarán como representante del otro, ni podrán obligar o comprometerle frente a terceros, ni frente a sus respectivos empleados.
							</Typography>
						</Box>
						<Box component="div" pt={2}>
							<Typography variant='subtitle2' component='h2' color='primary' >
								19. NOTIFICACIONES Y DOMICILIOS
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
								Pedidos.com señala como domicilio y medios para oír y recibir notificaciones relacionadas con los presentes TyC el ubicado en:
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
								Pedidos.com
									Attn: Servicios a Clientes
									Alejandro Dumas 135
									Planta baja Local B, Colonia Polanco, Alcaldía Miguel Hidalgo, 11550, CDMX
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
								También puede contactarlo vía correo electrónico a: info@pedidos.com.mx.; o a través de los demás elementos habilitados en pedidos.com y/o de los Sitios Web Asociados. Al crear una cuenta / registrarse con nosotros, aceptas recibir nuestro newsletter y/o promciones por e-mail, en cualquier momento puedes prescindir de esta opción.
							</Typography>
						</Box>
						<Box component="div" pt={2}>
							<Typography variant='subtitle2' component='h2' color='primary' >
								20. CONSENTIMIENTO
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
								Algunos de los Servicios en Línea puestos a disposición del Usuario cuentan con facilidades de administración y gestión accesibles que precisan del uso de claves y contraseñas (“Nombre de Usuario” y “Password”), que pueden ser atribuidas por Pedidos.com o seleccionadas por el Usuario, para verificar su identidad. El Usuario reconoce que cualquier operación correctamente identificada con dichas claves y contraseñas será considerada como válidamente realizada por él. Por ello, el Usuario se deberá abstener de revelar esas claves y contraseñas a otras personas, haciendo un uso personal de las mismas, y si tuviera conocimiento de que otra persona hubiese tenido acceso a las mismas o hubiese accedido al Sitio Web pedidos.com, así como de los Sitios Web Asociados con sus claves y contraseñas sin su consentimiento, el Usuario deberá notificar en forma inmediata y por escrito a la dirección de correo electrónico info@pedidos.com.mx sobre tal circunstancia.
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
								De igual manera el Usuario reconoce que al efectuar cualquier operación otorgando, por los medios que el sitio web pedidos.com ponga a su disposición, los datos necesarios para poder llevar a cabo tales operaciones, se entiende que estás han sido celebradas por el Usuario y no otra persona, aún sin que exista el uso de medios de claves y contraseñas. Pedidos.com cuenta con las medidas de seguridad necesarias para proteger tales datos. De igual manera Pedidos.com manifiesta en estos TyC que los datos patrimoniales para efectuar pagos por medio del sitio web, no son tratados por Pedidos.com, y que las operaciones de pago por productos o servicios se realizan con la única intervención de instituciones financieras y los Usuarios.
							</Typography>
						</Box>

						<Box component="div" pt={2}>
							<Typography variant='subtitle2' component='h2' color='primary' >
								21. LEGISLACIÓN APLICABLE Y JURISDICCIÓN
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
								La interpretación y aplicación de los presentes Términos y Condiciones se rige por las leyes federales de México. Las partes convienen expresa e irrevocablemente en someterse a la jurisdicción de los tribunales competentes de México ubicados en la Ciudad de México, Distrito Federal respecto a cualquier demanda, acción o procedimiento que se derive o se relacione con el los presentes TyC.
							</Typography>
						</Box>
						<Box component="div" pt={2}>
							<Typography variant='subtitle2' component='h2' color='primary' >
							22. VIGENCIA
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
							Los presentes TYC tendrán una vigencia por tiempo indefinido, e iniciará una vez que haya manifestado su consentimiento en términos de la cláusula anterior.
							</Typography>
						</Box>
						<Box component="div" pt={2}>
							<Typography variant='subtitle2' component='h2' color='primary' >
							23. MANIFESTACIÓN DEL CONSENTIMIENTO
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
							En mi carácter de Usuario del sitio pedidos.com y/o de los Sitios Web Asociados acepto sin reserva o limitación alguna el contenido de los presentes términos y condiciones.
							</Typography>
							<Typography variant='body1' component='p' align='justify'>
							Asimismo, declaro bajo protesta de decir verdad que tengo capacidad legal para contratar, que he a leído en su integridad estos TyC, mismos que he comprendido cabalmente, y que todos los datos que en su caso he ingresado en las Ventanas de Diálogo del Sitio Web pedidos.com y/o de los Sitios Web Asociados son ciertos y exactos.
							</Typography>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</Container>
	</Layout>
	);
};

export default TerminosYCondicionesDeEnvio;
