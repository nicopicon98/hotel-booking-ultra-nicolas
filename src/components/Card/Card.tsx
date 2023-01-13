import classes from './Card.module.css'

export const Card = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <div className={classes.cardContainer}>
      {children}
    </div>
  )
}