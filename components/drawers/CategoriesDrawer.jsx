import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Box, Icon, Typography } from '@material-ui/core';

import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';
import CreateIcon from '@material-ui/icons/Create';
import ReceiptIcon from '@material-ui/icons/Receipt';

// import { useUiContext } from '../../context/UiContext';

const useStyles = makeStyles({
	list: {
		width: 300,
	},
	fullList: {
		width: 'auto',
	},
	icon: {
		minWidth: '40px',
	},
});

const itemsList = [
	{
		icon: CreateIcon,
		text: 'Productos para la oficina',
		path: '',
	},
	{
		icon: ReceiptIcon,
		text: 'Papel',
		path: '',
	},
	{
		icon: ReceiptIcon,
		text: 'Papel',
		path: '',
	},
	{
		icon: ReceiptIcon,
		text: 'Papel',
		path: '',
	},
	{
		icon: ReceiptIcon,
		text: 'Papel',
		path: '',
	},
	{
		icon: ReceiptIcon,
		text: 'Papel',
		path: '',
	},
	{
		icon: ReceiptIcon,
		text: 'Papel',
		path: '',
	},
	{
		icon: ReceiptIcon,
		text: 'Papel',
		path: '',
	},
	{
		icon: ReceiptIcon,
		text: 'Papel',
		path: '',
	},
];

export function CategoriesDrawer() {
	const classes = useStyles();
	// const { isOpenDrawer, drawerToggle } = useUiContext();

	const list = (anchor) => (
		<div
			className={clsx(classes.list, {
				[classes.fullList]: anchor === 'top' || anchor === 'bottom',
			})}
			role='presentation'>
			<Box
				marginTop='2rem'
				paddingLeft='1rem'
				paddingBottom={'1rem'}
				display='flex'
				gridGap='0.5rem'>
				<Icon>
					<StoreMallDirectoryIcon />
				</Icon>
				<Typography variant='h5' component='h4'>
					Categorías
				</Typography>
			</Box>
			<Divider />

			<List>
				{itemsList.map(({ text, icon: IconList }) => (
					<ListItem button key={text}>
						<ListItemIcon className={classes.icon}>
							<IconList />
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</div>
	);

	return (
		<div>
			{['left'].map((anchor) => (
				<React.Fragment key={anchor}>
					<Drawer
						anchor={'left'}
						open={false}
						onClose={() => console.log(false)}>
						{list(anchor)}
					</Drawer>
				</React.Fragment>
			))}
		</div>
	);
}
