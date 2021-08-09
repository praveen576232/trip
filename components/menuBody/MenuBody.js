import styles from '../../styles/Home.module.scss'
import ImageCard from './cards/ImageCards'
import TripImage from '../../public/travel_51.jpg'
import { useRouter } from 'next/router'
function MenuBody({onClickedLink}) {
    const router = useRouter()
    const trips = [
        {
          imageSrc: TripImage,
          infoHeadding: "hillroad rodies",
          infoBody: "manali",
          infoFooter: "3 Days 2 Nights",
        },
        {
          imageSrc: TripImage,
          infoHeadding: "hillroad rodies",
          infoBody: "manali",
          infoFooter: "3 Days 2 Nights",
        }]
        const linkClicked =(url) => {
            router.push(url); 
            onClickedLink()
        }
    return (
      <>
        <div className={styles.menuBodyWraper}>
                  <div className={`has-text-weight-bold  is-size-3 ${styles.navigationList}`}>
                  <p onClick={() => { linkClicked('/')} } className="is-size-4 pb-3 has-text-white pt-2">Home</p>
                   <p onClick={() =>{ linkClicked('/about')}} className="is-size-4 pb-3 has-text-white">About</p>
                   <p onClick={() =>{ linkClicked('/contact')}} className="is-size-4 pb-3 has-text-white">Contact</p>
                   <p onClick={() =>{ linkClicked('/package')}} className="is-size-4 pb-3 pb-5 has-text-white">Packages</p>
                  </div>
               </div>
               <div className={`${styles.menuBodyLeft}`}>
              <div className={styles.menuImageCard}>
              <ImageCard imageSrc={TripImage} infoBody={trips[0].infoBody} infoHeadding={trips[0].infoHeadding} infoFooter={trips[0].infoFooter}/>

              </div>
              <div className={styles.menuImageCard2}>
              <ImageCard imageSrc={TripImage} infoBody={trips[0].infoBody} infoHeadding={trips[0].infoHeadding} infoFooter={trips[0].infoFooter}/>

              </div>
               </div>
      </>
    )
}

export default MenuBody
