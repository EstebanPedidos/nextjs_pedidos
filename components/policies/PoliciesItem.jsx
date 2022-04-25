// import { Icon, Link } from '@material-ui/core';
import { Icon, Link } from '@mui/material';
import { COLORS } from '/themes/light-theme';

export const Item = ({ icon: IconItem, title, path }) => {
	return (
		<Link
			style={{
				// border: `solid ${isActive ? '3px' : '1px'}`,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				gridGap: '5px',
				padding: '1em 1.5em',
				minWidth: '230px',
				borderColor: COLORS.primary,
				cursor: 'pointer',
				borderRadius: '10px',
			}}>
			<Icon>
				<IconItem />
			</Icon>
			<span>{title}</span>
		</Link>
	);
};
