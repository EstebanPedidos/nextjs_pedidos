import { makeStyles } from '@mui/styles'
import clsx from 'clsx'
import {Grid, Typography,} from '@mui/material';


const useStyles = makeStyles({
  bigTitle: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
  },
  title: {
    fontSize: '1rem',
    fontWeight: 'bold',
  }
})

export interface DataItem {
  title: string,
  bigTitle: boolean,
  text: string,
  icon: string,
}

export interface IHowItWorksItemProps {
  item: DataItem
}

export const HowItWorksItem: React.FC<IHowItWorksItemProps> = ({ item }) => {
  const classes = useStyles()
  const titleClassName = clsx({
    [classes.bigTitle]: item.bigTitle,
    [classes.title]: !item.bigTitle
  })

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Grid container>
        <Grid item xs={1.5}>
          {item.icon && (
            <item.icon />
          )}
        </Grid>
        <Grid item xs={10.5}>
          <Typography component="h1" variant="h5"
            // component={item.bigTitle ? "h1" : "h4"}
            className={titleClassName}
            gutterBottom
          >
            {item.title}
          </Typography>
          <Typography component="p">
            {item.text}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default HowItWorksItem
