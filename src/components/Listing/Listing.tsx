import { BsTagFill } from "react-icons/bs";
import classes from './Listing.module.css'
import { ButtonIcon } from "../ButtonIcon"
import { BsHeart } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";
import { Card } from "../Card"
import { FC } from 'react';
import { Reviews } from '../../interfaces/ReqRespHotelInterface';

interface Props {
  image?: string;
  hotelName?: string;
  location?: string;
  feedback?: Reviews;
  partialPrice?: string;
  totalPrice?: string;
}

const url = "https://www.rios.com/wp-content/uploads/2019/12/1-Hotel_Hunter-Kerhart_068-homepage-banner.jpg";

export const Listing: FC<Props> = ({
  image = url,
  hotelName = "Nombre no disponible",
  location = "no hay info",
  partialPrice = "$N/A",
  totalPrice = "$N/A",
  feedback,
}) => {

  const clickHandler = () => {
    console.log("xd")
  }

  return (
    <Card>
      {/* Image and fav-button */}
      <div className={classes.btnImgContainer}>
        <img src={image} alt="hotelImg" />
        <ButtonIcon
          onClick={clickHandler}
          Icon={BsHeart}
          btnStyles={classes["btnImgContainer__btnImg"]}
          colorIcon="black"
          iconSize={50}
        />
      </div>
      {/* Basic info */}
      <div className={classes.basicInfoContainer}>
        <section>
          <h3>{hotelName}</h3>
          <p className={classes["basicInfoContainer__location"]}>{location}</p>
        </section>
        <section>
          <p className={classes["basicInfoContainer__totReimb"]}>Totalmente reembolsable</p>
          <div className={classes["basicInfoContainer__seals"]}>
            <BiMoon />
            <p>Acumula sellos</p>
          </div>
          <div className={classes["basicInfoContainer__feedRatCon"]}>
            {feedback?.score
              ? <>
                <p className={classes["basicInfoContainer__feedRat"]}>{feedback.score}/10</p>
                <p>({feedback.total} opiniones)</p>
              </>
              : <p className={classes["basicInfoContainer__feedRat"]}>no disponible</p>
            }
          </div>
        </section>
      </div>
      {/* Price */}
      <div className={classes.priceContainer}>
        <section className={classes["priceContainer__secretPriceCon"]}>
          <BsTagFill color='white' size={20} />
          <p className={classes["priceContainer__secretPrice"]}>Precio secreto disponible</p>
        </section>
        <section className={classes["priceContainer_priceCon"]}>
          <p className={classes["priceContainer_parcialPrice"]}>{partialPrice} USD</p>
          <p className={classes["priceContainer_totalPrice"]} >{totalPrice} USD en total</p>
        </section>
      </div>
    </Card>
  )
}