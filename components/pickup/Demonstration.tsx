import { FC } from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  container: {
    padding: '8rem 4rem',
    textAlign: 'center',
  }
})

export interface IContainerProps {
  children: JSX.Element
}

export const Container: FC<IContainerProps> = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      {children}
    </div>
  )
}

export const Demonstration = () => {
  return (
    <Container>
      <iframe width="944" height="500" src="https://www.youtube.com/embed/y2QBWl0zOU8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </Container>
  )
}

export default Demonstration
