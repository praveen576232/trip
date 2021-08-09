import Image from 'next/image'
import playstore from '../../public/playstore1.png'
// import applestore from '../../public/applestore.jpg'
import Circle from './circle/Circle'
import SmallCircleColor from './circle/CircleColor'
import styles from '../../styles/Home.module.scss'
import {BsPlayFill} from 'react-icons/Bs'
function Body() {
    return (
        <div className={`${styles.body} is-family-primary is-flex `}>

           <div className={`${styles.bodyText} mb-3 `}>
               {/* <CircleColor  />  */}
              <p className={`${styles.letterSpacing} is-size-6 is-size-7-mobile is-capitalized has-text-grey is-family-primary  `}>This is your gateway to a getaway!</p> 
              <p className={`${styles.letterSpacing} is-size-1 is-size-4-mobile is-capitalized has-text-black pt-5`}>Travel with your </p>
              <p className={`${styles.letterSpacing} is-size-1 is-size-4-mobile is-capitalized has-text-black pb-5`}>favourite buddies</p>
               <div className="is-flex">
               <button className={`button is-black     is-flex is-align-content-center mr-5 ${styles.mediaButton}`}>
                  <Image src={playstore} alt="" width={18} height={18}/>
                   <p className={`is-family-primary  is-size-7 mx-1 has-text-weight-bold has-text-smokewhite`}>Android</p>
               </button> 
               <button className={` button is-black  is-flex is-align-content-center`}>
                  <Image src={playstore} alt="" width={18} height={18}/>
                   <p className={`is-family-primary  is-size-7 mx-1 has-text-weight-bold has-text-smokewhite`}>Android</p>
               </button> 
               </div>
              <div className={`pt-5 is-size-7 is-flex is-align-items-center ${styles.letterSpacingForKnowMore}`}>
              <p className="">know more</p>
               <BsPlayFill color="#F1B833"/>
              </div>
           </div>
           <div className={`${styles.bodyright} column `}>
                 <Circle className={styles.cImage1}  />
                 <Circle className={styles.cImage2} className2={styles.bodyImage2} />
                 <Circle className={styles.cImage3} className2={styles.bodyImage3} />
                 <Circle className={styles.cImage4} className2={styles.bodyImage4} />
               
         
                 <SmallCircleColor className={styles.bodySmallCircleColor1} diameter={25} top='28%' right='25%' color="#C0E6A1"/>
                 <SmallCircleColor className={styles.bodySmallCircleColor2} diameter={35} top='16%' left='36%' color="#F1B833"/>
                 <SmallCircleColor className={styles.bodySmallCircleColor3} diameter={25} bottom='39%' left='33%' color="#FF8F6B"/>
                 <SmallCircleColor className={styles.bodySmallCircleColor4} diameter={25} bottom='28%' left='11%' color="#F1B833"/>
                  

           </div>
            <div className={`${styles.homedotCircle}`}>
            <SmallCircleColor  diameter={45} top='35%' left='4%' color="#F9E044"/>
              <SmallCircleColor diameter={45} bottom='-13%' left='5%' color="#C0E6A1"/>
            </div>
        </div>
    )
}

export default Body
