
import styles from '../../styles/Home.module.scss'
import Image from 'next/image'
import TravelImg from '../../public/travel_51.jpg'

function CircleImageWithDot({diameter}) {
    return (
        
             <div className={`image setImageCircleSize  ${styles.homeSingleImageDiv}`}>
                   <div  className={`${styles.dotCircle} ${styles.dot1}`}/>
                   <div  className={`${styles.dotCircle} ${styles.dot2}`}/>
                   <div  className={`${styles.dotCircle} ${styles.dot3}`}/>
                   <div  className={`${styles.dotCircle} ${styles.dot4}`}/>
                   <div  className={`${styles.dotCircle} ${styles.dot5}`}/>

                
                           <Image  className={`is-rounded `} src={TravelImg} alt="" width={50} height={50} layout="responsive"/>
                           <style jsx>
                               {`
                               .setImageCircleSize {
                                   width: ${diameter}px ;
                                   height: ${diameter}px ;
                               }
                               `}
                           </style>
                   </div>
      
    )
}

export default CircleImageWithDot
