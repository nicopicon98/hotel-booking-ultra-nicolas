import { BsTagFill } from "react-icons/bs";
import classes from './Listing.module.css'
import { ButtonIcon } from "../ButtonIcon"
import { BsHeart } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";
import { Card } from "../Card"
import { FC } from 'react';

interface Props {
  image?: string;
  hotelName?: string;
  location?: string;
}

const url = "https://www.rios.com/wp-content/uploads/2019/12/1-Hotel_Hunter-Kerhart_068-homepage-banner.jpg";

export const Listing: FC<Props> = ({
  image = url,
  hotelName = "Nombre no disponible",
  location = "no hay info"
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
            <p className={classes["basicInfoContainer__feedRat"]}>6,8/10</p>
            <p>(3.452 opiniones)</p>
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
          <p className={classes["priceContainer_parcialPrice"]}>COP 916.118</p>
          <p className={classes["priceContainer_totalPrice"]} >COP 2.070.427 en total</p>
        </section>
      </div>
    </Card>
  )
}