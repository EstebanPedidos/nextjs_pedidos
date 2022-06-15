import { makeStyles } from '@mui/styles';
import { FC } from 'react';
import { Layout } from '../../layout/Layout';
import Banner from '../../components/pickup/Banner';
import HowItWorks from '../../components/pickup/HowItWorks';
import Terms from '../../components/pickup/Terms';
import Demonstration from '../../components/pickup/Demonstration';
import Schedule from '../../components/pickup/Schedule';

const useStyles = makeStyles({
	container: {
		backgroundColor: '#f6f7fa',
	},
});

export interface IContainerProps {
	children: JSX.Element | JSX.Element[];
}

export const Container: FC<IContainerProps> = ({ children }) => {
	const classes = useStyles();

	return <div className={classes.container}>{children}</div>;
};

export const Pickup = () => {
	return (
		<Layout title='PickUp Center | Pedidos.com'>
			<Container>
				<Banner />
			</Container>
			<HowItWorks />
			<Terms />
			<Container>
				<Demonstration />
				<Schedule />
			</Container>
		</Layout>
	);
};

export default Pickup;
