import React from "react";
import {
  RefinementList,
  SearchBox,
  Hits,
  Configure,
  Highlight,
  Pagination,
  InstantSearch, 
  Stats
} from "react-instantsearch-dom";

import {
	Box,
	Grid,
	Paper,
	Typography,
	Button,
	Card,
	CardContent,
	CardMedia,
    Hidden,
    FormControl,
    InputLabel,
    Select, 
    MenuItem,
    
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import { useRouter } from 'next/router';
import Link from 'next/link';


const HitComponent = ({ hit }) => (
  <div className="hit">
    <Box >
				<Card elevation={0} >
					<Box py={2} px={2} component='div'>
                            <Grid
                                container
                                direction='row'
                                justifyContent='space-around'
                                alignItems='center'
                                spacing={3}
                            >
                                <Grid item xs={12} sm={4} lg={4} justify='center'>
                                    <Link href={`/articulos/${hit.URL}`} 
                                        onClick={() =>
                                        insights('clickedObjectIDsAfterSearch', {
                                            eventName: 'Product Clicked'
                                        })
                                        }
                                    >
                                        <a>
                                            <CardMedia
                                                
                                                component='img'
                                                alt={hit.ITEM_NUM}
                                                height='180'
                                                image={
                                                    'https://pedidos.com/myfotos/large/(L)' +
                                                    hit.ITEM_NUM +
                                                    '.jpg'
                                                }
                                                title={hit.ITEM_NUM}
                                            />
                                        </a>
                                    </Link>
                                </Grid>
                                <Grid item xs={12} sm={8} lg={5}>
                                    <Box textAlign='left'>
                                        <CardContent>
                                            <Box
                                                component='div'
                                                display='flex'
                                                pb={2}>
                                                {hit.ENVIO_GRATIS ? (
                                                    <Paper
                                                        variant='outlined'
                                                        >
                                                        <Typography variant='subtitle2'>
                                                            Envío Gratis
                                                        </Typography>
                                                    </Paper>
                                                ) : (
                                                    ''
                                                )}
                                                {hit.APLICA_EXPRESS ? (
                                                    <Paper
                                                        variant='outlined'
                                                        >
                                                        <Typography variant='subtitle2'>
                                                            Pídelo Express
                                                        </Typography>
                                                    </Paper>
                                                ) : (
                                                    ''
                                                )}
                                            </Box>
                                            <Link
                                                href={`/articulos/${hit.URL}`}
                                                >
                                                <a>
                                                    <Typography
                                                        component='body2'
                                                        variant='p'
                                                        textAlign='left'>
                                                        {hit.FILTROS.MARCA}
                                                    </Typography>
                                                    <Typography
                                                        variant='subtitle1'
                                                        className='hit-name'
                                                        color='textSecondary'>
                                                        <Highlight
                                                            attribute='TITULO'
                                                            hit={hit}
                                                        />
                                                    </Typography>
                                                </a>
                                            </Link>
                                            <div className='hit-description'>
                                                <Typography
                                                    component='body2'
                                                    variant='p'>
                                                    Clave alterna:{' '}
                                                    <Highlight
                                                        attribute='SORT_NAME'
                                                        hit={hit}
                                                    />
                                                </Typography>
                                            </div>
                                        </CardContent>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={12} lg={3} align='left'>
                                    <Box component='div' m={1}>
                                        <Typography
                                            variant='h5'
                                            component='body1'
                                           >
                                            ${hit.PRECIO}
                                        </Typography>
                                        <br></br>
                                        {hit.PRECIO > 500 ? (
                                            <Typography
                                                component='body2'
                                                variant='p'
                                                style={{ color: 'green' }}>
                                                Hasta 18 meses sin intereses
                                            </Typography>
                                        ) : (
                                            ''
                                        )}
                                    </Box>
                                    {hit.STOCK ?
                                        <Link
                                            href={`/articulos/${hit.URL}`}
                                           >
                                            <a>
                                                <Button
                                                    variant='contained'
                                                    size='large'
                                                    color='secondary'
                                                    fullWidth>
                                                    Comprar
                                                </Button>
                                            </a>
                                        </Link>
                                    :
                                        <Button
                                            variant='outlined'
                                            size='large'
                                            fullWidth
                                            disableElevation
                                            disabled>
                                            Agotado
                                        </Button>
                                    }
                                
                                </Grid>
                            </Grid>
					</Box>
				</Card>
			</Box>
  </div>
);

export function App(props) {


	const [indexX, setIndex] = React.useState('Pedidos');

    const handleChange = (event) => {
		setIndex(event.target.value);
	}; 

  return (
    <InstantSearch {...props}>
      <Configure hitsPerPage={20} />
      <header>
        <Grid container direction="row" justifyContent="space-between" alignItems="flex-end" spacing={2}>
            <Grid item xs={12} sm={12} md={8}  lg={6}>
                <Box component="div">
                    <Typography variant="h3" component="h1" sx={{fontWeight:'500'}}>{props.url} </Typography>
                    <Typography variant="subtitle1">
                    <Stats
                    translations={{
                        stats(nbHits) {
                        return  nbHits > 1
                        ? `${nbHits} Resultados`
                        : ''
                        },
                    }}
                    />
                    </Typography>
                    {/* NOTA: Lo siguiente que requiere? */}
                    <div style={{ display: 'none' }}>
                        <SearchBox defaultRefinement={props.url}/>
                    </div>
                </Box>
            </Grid>
            <Hidden mdDown>
                <Grid item xs={12} sm={12} lg={3}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} sm={6}>
                            <Paper elevation={4} >
                            <Typography variant="overline" display="block">Hasta</Typography>
                                <Typography  component="body1" variant="h4" sx={{fontWeight:'600'}}><Typography component="span" variant="h4" color="primary">18</Typography> MSI</Typography>
                                <Typography variant="caption" display="block" gutterBottom color="textSecondary">Meses sin Intereses*</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <Paper elevation={4} > 
                                <Typography variant="overline" display="block">Hasta</Typography>
                                <Typography component="body1" variant="h4" sx={{fontWeight:'600'}}><Typography component="span" variant="h4" color="primary">24</Typography> MSI*</Typography>
                                <Typography variant="caption" display="block" gutterBottom color="textSecondary">con CitiBanamex</Typography>
                            </Paper>
                        </Grid>
                    </Grid>  
                </Grid>
            </Hidden>
            <Grid item xs={12} sm={12} md={4} lg={3} >
                <FormControl fullWidth>
                <InputLabel id="product-order-select-label">Ordenar por:</InputLabel>
                <Select
                    labelId="product-order-select-label"
                    id="product-order-select"
                    value={indexX}
                    label="Ordenar por:"
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="Pedidos_Mas_Vendido">
                    <em>Más Vendido</em>
                    </MenuItem>
                    <MenuItem value="Pedidos">Sugerido</MenuItem>
                    <MenuItem value="Pedidos_Precio_asc">Precio  Menor a Mayor</MenuItem>
                    <MenuItem value="Pedidos_Precio_desc">Precio Mayor a Menor</MenuItem>
                </Select>
                </FormControl>
            </Grid>
        </Grid>
      </header>
      <main>
        <div className="menu">
          <RefinementList attribute="MARCA" />
        </div>
        <div className="results">
          <Hits hitComponent={HitComponent} />
        </div>
      </main>
      <footer>
        <Pagination />
      </footer>
    </InstantSearch>
  );
}
