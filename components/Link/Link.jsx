import React from 'react';
import NextLink from 'next/link';
import { Link as MUILink } from '@material-ui/core';

const Link = React.forwardRef((props, ref) => {
	const { href } = props;

	return (
		<NextLink href={href} passHref>
			<MUILink ref={ref} {...props} />
		</NextLink>
	);
});

Link.displayName = 'CustomLink';

export default Link;
