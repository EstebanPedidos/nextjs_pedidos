import * as React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import MuiLink from '@mui/material/Link';
import { styled } from '@mui/material/styles';

// Add support for the sx prop for consistency with the other branches.
const Anchor = styled('a')({});

interface NextLinkComposedProps {
	href: any;
	linkAs: object | string;
	locale: string;
	passHref: boolean;
	prefetch: boolean;
	replace: boolean;
	scroll: boolean;
	shallow: boolean;
	to: object | string;
	className: string;
}

export const NextLinkComposed = React.forwardRef(function NextLinkComposed(
	props: NextLinkComposedProps,
	ref: React.RefObject<HTMLAnchorElement>
) {
	const { to, linkAs, replace, scroll, shallow, prefetch, locale, ...other } =
		props;

	return (
		<NextLink
			href={to}
			prefetch={prefetch}
			as={linkAs}
			replace={replace}
			scroll={scroll}
			shallow={shallow}
			passHref
			locale={locale}>
			<Anchor ref={ref} {...other} />
		</NextLink>
	);
});

interface LinkProps {
	activeClassName?: string;
	as?: object | string;
	className?: string;
	href: any;
	linkAs?: object | string;
	locale?: string;
	noLinkStyle?: boolean;
	prefetch?: boolean;
	replace?: boolean;
	role?: string;
	scroll?: boolean;
	children: React.ReactNode;
	underline?: 'none' | 'hover' | 'always';
	shallow?: boolean;
	target?: string;
	sx?: any;
}

const Link = React.forwardRef(function Link(
	props: LinkProps,
	ref: React.Ref<HTMLAnchorElement>
) {
	const {
		activeClassName = 'active',
		as,
		className: classNameProps,
		href,
		linkAs: linkAsProp,
		locale,
		noLinkStyle,
		prefetch,
		replace,
		role,
		scroll,
		shallow,
		...other
	} = props;

	const router = useRouter();
	const pathname = typeof href === 'string' ? href : href.pathname;
	const className = clsx(classNameProps, {
		[activeClassName]: router.pathname === pathname && activeClassName,
	});

	const isExternal =
		typeof href === 'string' &&
		(href.indexOf('http') === 0 || href.indexOf('mailto:') === 0);

	if (isExternal) {
		if (noLinkStyle) {
			return <Anchor className={className} href={href} ref={ref} {...other} />;
		}

		return <MuiLink className={className} href={href} ref={ref} {...other} />;
	}

	const linkAs = linkAsProp || as;
	const nextjsProps = {
		to: href,
		linkAs,
		replace,
		scroll,
		shallow,
		prefetch,
		locale,
	};

	if (noLinkStyle) {
		return (
			<NextLinkComposed
				className={className}
				ref={ref}
				href={href}
				passHref
				{...nextjsProps}
				{...other}
			/>
		);
	}

	return (
		<MuiLink
			component={NextLinkComposed}
			className={className}
			ref={ref}
			passHref
			{...nextjsProps}
			{...other}
		/>
	);
});

export default Link;
