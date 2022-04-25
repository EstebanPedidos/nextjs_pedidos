import { Layout } from '../../layout/Layout';
import { makeStyles } from '@mui/styles';
// import Banner from '/components/express-cdmx/Banner';
import Banner from '../../components/express-cdmx/Banner';
import HowItWorks from '../../components/express-cdmx/HowItWorks';
import Schedule from '../../components/express-cdmx/Schedule';

const useStyles = makeStyles({
	container: {
		backgroundColor: '#f6f7fa',
	},
});

export const ExpressCDMX = () => {
	const classes = useStyles();

	return (
		<Layout>
			<div className={classes.container}>
				<Banner />
				<HowItWorks />
				<Schedule />
			</div>
		</Layout>
	);
};

export default ExpressCDMX;
