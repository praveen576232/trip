import PackageImage from "../../../public/travel_51.jpg";
import Image from "next/image";
import { FaHotel } from "react-icons/fa";
import { SiIfood } from "react-icons/si";
import { AiFillCar } from "react-icons/ai";
import { BiCamera } from "react-icons/bi";

import styles from "../../../styles/Package.module.scss";
function Card({ImageSrc,title,info,place,price,validDate}) {
  return (
    <div className={`card ${styles.packageCardBody}`}>
      <div className={`card-image ${styles.packageImageWrapper}`}>
        <Image src={ImageSrc} alt="" className={styles.cardImage} />
      </div>
      <div className={`${styles.cardContent}`}>
        <div className="">
          <p className={`is-size-4 is-size-5-mobile is-uppercase ${styles.packageCardTitle}`}>{title}</p>
          <p className="is-size-5 is-size-6-mobile mb-4 is-capitalized">{place}</p>
          <p className={`is-size-7 is-size-7-mobile ${styles.packageCardInfoDaysInfo}`}>{info}</p>
          <p className={`${styles.packageCardInfoPrice}`}>
            Starting from:  <strong className="is-size-4 is-size-5-mobile"> &#x20B9;{price}</strong>
          </p>
          <div className={`is-flex is-align-items-center is-justify-content-flex-start ${styles.packageInculde}`}>
            <p className={`is-size-7 ${styles.packageCardIncludeTag}`}>Includes</p>
            <div className={`is-flex is-flex-direction-column is-align-items-center is-justify-content-center mr-5 ml-2`}>
              <FaHotel  color={"grey"} size={35}/>
              <p className="is-size-7 has-text-grey">Hotel</p>
            </div>
            <div className={`is-flex is-flex-direction-column is-align-items-center is-justify-content-center mr-5`}>
            <SiIfood color={"grey"}  size={35}/>
              <p className="is-size-7 has-text-grey">Meals</p>
            </div>
            <div className={`is-flex is-flex-direction-column is-align-items-center is-justify-content-center mr-5`}>
            <BiCamera  color={"grey"} size={35}/>
              <p className="is-size-7 has-text-grey">Sightseeing</p>
            </div>
            <div className={`is-flex is-flex-direction-column is-align-items-center is-justify-content-center mr-5`}>
            <AiFillCar color={"grey"}  size={35}/>
              <p className="is-size-7 has-text-grey">Transfers</p>
            </div>
           
           
          </div>
          <div className="is-flex is-justify-content-space-between is-align-items-center mt-4">
              <div className={`is-flex is-flex-direction-column is-justify-content-center is-align-items-center ${styles.packageCardFooter}`}>
                  <p className="is-size-7 is-uppercase">Valid from</p>
                  <p className="is-size-7 is-uppercase">{validDate}</p>
              </div>
              <p className={`is-size-6 ${styles.packageFooterButton}`}>Explore More</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
