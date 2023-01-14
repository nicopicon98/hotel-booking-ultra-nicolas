import PaginationComponent from '../../components/Pagination/PaginationComponent';
import { SnackbarUtilities } from '../../utilities/snackbar-manager.utility';
import MissingParam from '../../components/MissingParam/MissingParam';
import useGEThotelsByParams from '../../hooks/useGEThotelsByParams';
import { HotelLoader } from '../../components/Loaders/HotelLoader';
import { createHotelAdapter } from '../../adapters';
import { Listing } from '../../components/Listing';
import classes from './HotelSearch.module.css'
import { useState, useEffect } from 'react';

export const HotelsSearch = () => {
  const { isHotelsLoading, isValueEmpty, hotels } = useGEThotelsByParams();
  const [currentPage, setCurrentPage] = useState(1);
  const hotelsPerPage = 5;
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Get current hotels
  const indexOfLastPost = currentPage * hotelsPerPage;
  const indexOfFirstPost = indexOfLastPost - hotelsPerPage;
  const currentHotels = hotels?.slice(indexOfFirstPost, indexOfLastPost);

  //loading
  const loader = isHotelsLoading && <div className={classes.loaderContainer}><HotelLoader /><p className={classes["loaderContainer__text"]}>Cargando hoteles...</p></div>

  // it's all up and running
  const resPos = !isHotelsLoading && !isValueEmpty && currentHotels && currentHotels.map(e => {
    const {
      image, hotelName, location, feedback, partialPrice, totalPrice
    } = createHotelAdapter(e)
    return (
      <Listing
        image={image}
        hotelName={hotelName}
        location={location}
        feedback={feedback}
        partialPrice={partialPrice}
        totalPrice={totalPrice}
        key={e.id}
      />
    )
  })

  //empty values
  const emptyValues = !isHotelsLoading && isValueEmpty && <MissingParam />

  //pagination
  const pag = !isHotelsLoading && !isValueEmpty && <PaginationComponent
    hotelsPerPage={hotelsPerPage}
    totalHotels={hotels?.length}
    paginate={paginate}
  />

  useEffect(() => {
    isValueEmpty && SnackbarUtilities.warning("Hay valores vacios")
  }, [isValueEmpty])

  return (
    <div className={classes.container}>
      {loader}
      {emptyValues}
      <div className={classes["container__hotelsCon"]}>{resPos}</div>
      <div className={classes["container__hotelsPagCon"]}>
        {pag}
      </div>
    </div>
  )
}