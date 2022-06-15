import React, { useState, useEffect } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { App } from "./components/App";


//Tag Manager
import TagManager from 'react-gtm-module'

import { findResultsState } from "react-instantsearch-dom/server";
import qs from "qs";


import aa from 'search-insights';
import { createInsightsMiddleware } from 'instantsearch.js/es/middlewares'

import {
	Box,
	Grid,
     
} from '@mui/material';

import { makeStyles } from '@mui/styles';
import 'styles/algolia.module.css';

//Componentes
import { Layout } from 'layout/Layout';

//NextJs
import { useRouter } from 'next/router';


const searchClient = algoliasearch(
	'12YTHFXXB5',
	'235f66e4531637d52c48f4a91ad6fa3f'
);

const updateAfter = 700;

const createURL = (state) => `?${qs.stringify(state)}`;

const pathToSearchState = (path) =>
  path.includes("?") ? qs.parse(path.substring(path.indexOf("?") + 1)) : {};

const searchStateToURL = (searchState) =>
  searchState ? `${window.location.pathname}?${qs.stringify(searchState)}` : "";

const DEFAULT_PROPS = {
  searchClient,
  indexName: "Pedidos"
};

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	bgcontent: {
		backgroundImage:
			'linear-gradient(to bottom, #f5f6f9a8, #f5f5f5, white)',
	},
	BoxMsi: {
		padding: '8px',
		height: '7.5rem',
		textAlign: 'center',
		color: theme.palette.text.primary,
	},
	rootCard: {
		flexWrap: 'wrap',
		'& > *': {
			marginBottom: theme.spacing(4),
		},
	},
	rootCardI: {
		boxShadow:
			'0px 0px 16px rgb(195 203 214 / 16%), 0px 1px 4px rgb(195 203 214 / 16%)',
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
	},
	content: {
		flex: '2 0 auto',
		textDecoration: 'none',
	},
	cover: {
		width: 180,
		margin: 'auto',
		justifyContent: 'center',
	},
	productContent: {
		display: 'flex',
		alignItems: 'center',

		color: theme.palette.text.primary,
		paddingLeft: theme.spacing(1),
		paddingBottom: theme.spacing(1),
	},
	productLink: {
		textDecoration: 'none',
		color: theme.palette.text.primary,
	},
	hitsgeneral: {
		listStyleType: 'none',
		textDecoration: 'none',
		color: theme.palette.text.primary,
	},
	aisHitslist: { listStyleType: 'none' },
	hitPrice: { fontWeight: '600' },
	CTAlink: {
		textDecoration: 'none',
		color: theme.palette.common.white,
	},
	tagFreeShipping: {
		width: 'auto',
		padding: '8px',
		borderRadius: '5px',
		marginRight: theme.spacing(1),
		border: 'none',
		backgroundColor: 'rgb(230 245 236 / 96%)',
	},
	tagExpresshipping: {
		width: 'auto',
		padding: '8px',
		borderRadius: '5px',
		border: 'none',
		backgroundColor: 'rgba(231, 236, 243, 1)',
	},
}));

export default function Busquedas(props) {
	const classes = useStyles();

    const [searchState, setSearchState] = React.useState(props.searchState);
    const debouncedSetState = React.useRef();
    const [filtros, setFiltros] = React.useState([]);

    const router = useRouter();
	const url = router.query.query;

    let index = '';

    React.useEffect(() => {
        if (router) {
          router.beforePopState(({ url }) => {
            setSearchState(pathToSearchState(url));
          });
        }
      }, [router]);

	useEffect(() => {
        const client = algoliasearch('12YTHFXXB5', '235f66e4531637d52c48f4a91ad6fa3f');
        index = client.initIndex('Pedidos');

        index
            .search(url, {
                facets: ['*'],
            })
            .then((res) => {
                setFiltros(res.facets);
            });
    }, [index]
    );



    return(
        <Layout title={url === undefined ? '' : url+" Compra en México Pedidos.com"}>
            <div className={classes.bgcontent}>
                <div className={classes.root}>
                    <Grid container direction="row" justifyContent="center" alignItems="flex-start" >
                    <App
                        {...DEFAULT_PROPS}
                        {...url}
                        searchState={searchState}
                        resultsState={props.resultsState}
                        onSearchStateChange={(nextSearchState) => {
                        clearTimeout(debouncedSetState.current);

                        debouncedSetState.current = setTimeout(() => {
                            const href = searchStateToURL(nextSearchState);

                            router.push(href, href, { shallow: true });
                        }, updateAfter);

                        setSearchState(nextSearchState);
                        }}
                        createURL={createURL}
                    />          
                    </Grid>
                </div>
            </div>
		</Layout>
	);
}

export async function getServerSideProps({ resolvedUrl }) {
    const searchState = pathToSearchState(resolvedUrl);
    const resultsState = await findResultsState(App, {
      ...DEFAULT_PROPS,
      searchState
    });
  
    return {
      props: {
        resultsState: JSON.parse(JSON.stringify(resultsState)),
        searchState
      }
    }
};