import {Layout} from '../../layout/Layout';
import {makeStyles} from '@mui/styles';
import Banner from '../../components/sopote-tecnico/Banner';
import HowItWorks from '../../components/sopote-tecnico/HowItWorks';
import Schedule from '../../components/sopote-tecnico/Schedule';

const useStyles = makeStyles({
	container: {
		backgroundColor: '#f6f7fa',
	},
});

export const TechnicalSupport = () => {
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

export default TechnicalSupport;
