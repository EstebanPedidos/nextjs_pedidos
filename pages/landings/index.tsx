import {
	Container,
	Typography,
	List,
	ListItem,
	ListItemText,
	Box,
	Link as StyleLink,
} from '@mui/material';
import Link from 'next/link';

interface ILink {
	path: string;
	text: string;
	description?: string;
}

const links: ILink[] = [
	{
		text: 'Empresas ',
		path: '/empresas',
		description: '',
	},
	{
		text: 'Pedidos ',
		path: '/pedido',
		description: '',
	},
	{
		text: 'Aviso de privacidad ',
		path: '/soho/aviso-privacidad',
		description: '',
	},
	{
		text: 'Cajas de papel',
		path: '/soho/cajas-de-papel',
	},
	{
		text: 'Condiciones de envio',
		path: '/soho/condiciones-de-envio',
	},
	{
		text: 'devoluciones y garantias',
		path: '/soho/devoluciones-garantias',
	},
	{
		text: 'Forma de pago',
		path: '/soho/forma-de-pago',
	},
	{
		text: 'Politicas',
		path: '/soho/politicas',
	},
	{
		text: 'Soho precios',
		path: '/soho/soho-precios',
	},
	{
		text: 'Terminos y condciiones',
		path: '/soho/terminos-y-condiciones',
	},
	{
		text: 'Servicios  - express ciudad de mexico',
		path: '/servicios/express-cdmx',
	},
	{
		text: 'Pickup',
		path: '/servicios/pickup',
	},
	{
		text: 'Modificar factura ',
		path: '/soho/cliente/modificar-factura',
	},
	{
		text: 'Soporte técnico',
		path: '/soporte-tecnico',
	},
];

const Ladings = () => {
	return (
		<Container>
			<Box mt='2rem'>
				<Typography align='center' variant='h3' component='h3'>
					Landings
				</Typography>
				<List>
					{links.map(({path, text}, index) => (
						<ListItem key={index}>
							<ListItemText>
								<StyleLink>
									<Link href={path}>
										<a>{text}</a>
									</Link>
								</StyleLink>
							</ListItemText>
						</ListItem>
					))}
				</List>
			</Box>
		</Container>
	);
};

export default Ladings;
