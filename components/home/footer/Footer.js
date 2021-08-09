import styles from "../../../styles/Home.module.scss";
import Image from "next/image";
import playstore from "../../../public/playstore1.png";
import travelImg from '../../../public/travel_51.jpg'
function Footer() {
  return (
      <div className={styles.footerBody}>
    <div className={styles.footerImages}>
        <Image className={styles.footerImage} src={travelImg} alt="" width={200} height={200}/>
        <Image className={styles.footerImage} src={travelImg} alt="" width={200} height={200}/>
        <Image className={styles.footerImage} src={travelImg} alt="" width={200} height={200}/>
        <Image className={`is-hidden-mobile ${styles.footerImage}`} src={travelImg} alt="" width={200} height={200}/>
        <Image className={`is-hidden-mobile ${styles.footerImage}`} src={travelImg} alt="" width={200} height={200}/>
    </div>
      
    <div className={`${styles.footer}`}>
      <div className="section">
        <div className={`is-flex is-align-items-center  ${styles.footerContent} `}>
         
        <div className={`is-flex is-flex-direction-column `}>
            <div className={`is-flex mb-5 `}>
              <div
                className={`is-flex is-flex-direction-column ${styles.footerLogoText}`}
              >
                <p className="is-size-4 has-text-weight-bold has-text-white ">
                  REAL
                </p>
                <p className="is-size-4 has-text-weight-bold has-text-white">
                  rodies
                </p>
              </div>
              <div className={`is-flex is-flex-direction-column`}>
                <p className="is-size-6 has-text-grey">TRAVEL</p>
                <p className="is-size- has-text-grey">AGENCY</p>
              </div>
            </div>
            <div>
              <div className="is-flex">
                <button
                  className={`button is-align-items-start    is-flex is-align-content-center mr-3  ${styles.footerMediaButton}`}
                >
                  <Image src={playstore} alt="" width={10} height={10} />
                  <p className={`${styles.letterSpacing} mx-1 has-text-white`}>
                    Android
                  </p>
                </button>
                <button
                  className={` button  is-flex is-align-content-flex-start is-align-items-start ${styles.footerMediaButton}`}
                >
                  <Image src={playstore} alt="" width={12} height={12} />
                  <p className={`${styles.letterSpacing} mx-1 has-text-white`}>
                    Android
                  </p>
                </button>
              </div>
            </div>
          </div>


        <div className={`is-flex is-flex-direction-row ${styles.footerInfo}`}>
        <div className={`is-size-5 is-size-6-mobile is-flex is-flex-direction-column ${styles.footerNavigation}`}>
                 <p  className="has-text-white mb-4">Navigation</p>
                 <a  className="has-text-white">Home</a>
                 <a  className="has-text-white">Packages</a>
                 <a  className="has-text-white">About us</a>
                 <a  className="has-text-white">contact</a>
             </div>
       
              <div className={`is-size-5 is-size-6-mobile is-flex has-text-white is-flex-direction-column`}>
                  <p className="has-text-white mb-4">Contact</p>

                  <p>Bouvet Island</p>
                  <p>Jeanetteside</p>
                  <p>53 Brannon Falls</p>
                  <p>Suite 406</p>
                  <p>860-270-8915</p>
                  <p>info@apico.com</p>
              </div>
            
        </div>
        </div>
      </div>
      <div className={styles.footerEnd}></div>
    </div>
    </div>
  );
}

export default Footer;
