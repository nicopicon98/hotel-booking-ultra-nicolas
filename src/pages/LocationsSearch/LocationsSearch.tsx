import { SimpleInput } from '../../components/SimpleInput/SimpleInput';
import useGETlocations from '../../hooks/useGETlocations';
import classes from './LocationsSearch.module.css';


export const LocationsSearch = () => {

  const { error, isLocationLoading, location, searchByCityNameHandler } = useGETlocations();

  const resPosNoErr = location?.gaiaId && !isLocationLoading &&
    <section className={classes["locaSearchContainer__respCon"]}>
      <div className={classes["locaSearchContainer__respMatchCon"]}>
        <p className={classes["locaSearchContainer__respMatchLegend"]}>Mejor coindidencia: </p>
        <p>{location.displayName}</p>
      </div>
      <div className={classes["locaSearchContainer__respMatchIdCon"]}>
        <p className={classes["locaSearchContainer__respMatchId"]}>Numero de identificador: </p>
        <p>{location.gaiaId}</p>
      </div>
    </section>

  return (
    <div className={classes.locSearchContainer}>
      <section className={classes["locSearchContainer__formCon"]}>
        <SimpleInput onSubmitForm={searchByCityNameHandler} />
        {isLocationLoading && <p style={{ fontStyle: 'italic' }}>Cargando...</p>}
        {resPosNoErr}
        {error && !isLocationLoading && <p>Ocurrio un error, porfavor intentelo mas tarde</p>}
      </section>
    </div>
  )
}