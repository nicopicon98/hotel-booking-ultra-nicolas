import { useState } from 'react';
import { Location } from '../models';
import { getHotelLocations } from '../services';

const useGETlocations = () => {
  const [location, setLocation] = useState<Location>()
  const [isLocationLoading, setIsLocationLoading] = useState(false)
  const [error, setError] = useState<string>();

  const searchByCityNameHandler = async (q: string) => {
    try {
      setIsLocationLoading(true)
      const { sr } = await getHotelLocations(q)
      const location = sr.find(e => {
        return e.type.toLowerCase() === 'city' || e.type.toLowerCase() === 'neighborhood'
      });
      if (!sr.length || !location) {
        setError("Ningun criterio coincide con tu busqueda, intentalo de nuevo")
        setIsLocationLoading(false);
        setLocation({
          gaiaId: '',
          displayName: '',
          shortName: ''
        })
        console.log("entro");
        return
      }
      setError("");
      setLocation({ gaiaId: location?.gaiaId!, displayName: location?.regionNames.displayName!, shortName: location.regionNames.shortName })
      setIsLocationLoading(false);
      console.log(sr);
    } catch (error) {
      setError("Ocurrio un error");
    }
  }

  return {
    location,
    isLocationLoading,
    error,
    searchByCityNameHandler
  }

}

export default useGETlocations