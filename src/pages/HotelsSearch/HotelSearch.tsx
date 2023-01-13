import useGEThotelsByParams from '../../hooks/useGEThotelsByParams';
import { Listing } from '../../components/Listing';
import classes from './HotelSearch.module.css'
import { useState } from 'react';
import PaginationComponent from '../../components/Pagination/PaginationComponent';

export const HotelsSearch = () => {
  const { isHotelsLoading, isValueEmpty, hotels } = useGEThotelsByParams();
  const [currentPage, setCurrentPage] = useState(1);
  const hotelsPerPage = 5;
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Get current hotels
  const indexOfLastPost = currentPage * hotelsPerPage;
  const indexOfFirstPost = indexOfLastPost - hotelsPerPage;
  const currentHotels = hotels?.info.slice(indexOfFirstPost, indexOfLastPost);

  //loading
  const loader = isHotelsLoading && <p>Cargando...</p>

  // it's all up and running
  const resPos = !isHotelsLoading && currentHotels && currentHotels.map(e => {
    return (
      <Listing
        image={e.propertyImage?.image.url}
        hotelName={e.name}
        location={hotels!.location}
        feedback={e.reviews}
        partialPrice={e.price?.displayMessages[0].lineItems[1].price?.formatted!}
        totalPrice={e.price?.displayMessages[0].lineItems[0].price?.formatted!}
        key={e.id}
      />
    )
  })

  //empty values
  const emptyValues = !isHotelsLoading && isValueEmpty && <p>Valores vacios</p>

  //pagination
  const pag = !isHotelsLoading && !isValueEmpty && <PaginationComponent
    hotelsPerPage={hotelsPerPage}
    totalHotels={hotels!.info.length}
    paginate={paginate}
  />

  return (
    <div className={classes.container}>
      <div className={classes["container__hotelsCon"]}> {loader} {resPos} {emptyValues} </div>
      <div style={{backgroundColor: '#F6F4F3', paddingBottom: '10px'}}>
        {pag}
      </div>
    </div>
  )
}