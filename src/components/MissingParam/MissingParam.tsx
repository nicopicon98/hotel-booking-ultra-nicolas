import classes from './MissingParam.module.css'

const MissingParam = () => {
  return (
    <div className={classes.missingParamContainer}>
      <p className={classes["missingParamContainer__text"]}>Lo sentimos, faltan parametros de busqueda</p>
    </div>
  )
}

export default MissingParam