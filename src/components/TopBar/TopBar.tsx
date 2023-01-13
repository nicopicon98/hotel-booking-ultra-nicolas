import classes from './TopBar.module.css'
import { BiWorld } from 'react-icons/bi'

export const TopBar = () => {
  return (
    <div className={classes.topBarContainer}>
      {/* Language */}
      <div className={classes["topBarContainer__languageCon"]}>
        <BiWorld color='#D32F2F'/>
        <p className={classes["topBarContainer__language"]}>Español</p>
      </div>
      {/* Log-in */}
      <div className={classes["topBarContainer__loginCon"]}>
        <p className={classes["topBarContainer__login"]}>Iniciar sesion</p>
      </div>
    </div>
  )
}