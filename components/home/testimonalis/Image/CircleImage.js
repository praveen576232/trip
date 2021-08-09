import Image from 'next/image'
import styles from '../../../../styles/Home.module.scss'

import travelImg from '../../../../public/travel_51.jpg'
function CircleImage({diameter,left,top,bottom,right,color}) {
    return (
        <div className={styles.myCircleImage}>
            <div className={`dotCircle ${styles.smallDotCircle}`} >

            </div>
            <div className={`image ${styles.circleImageWraper}` }>

            <Image className={  `  ${styles.circleImage}`} src={travelImg} alt="" width={200} height={200}/>
            </div>
            <div className ={`card ${styles.circleImageCard} ${styles.hideCircleImageCard}`}>
            <div className="card-content">
                <div className={`has-text-centered ${styles.circleImageCardContent}`}>
                    <p className="pr-5 has-text-grey">Amet Minim Mollit Non Deserunt Ullamco Est Sit 
                      Aliquq Dolor Do Amet Sint. Velit Officia Co</p>
                    <p className={`pt-2 ${styles.circleImageCardText}`}>Jerome Bell</p>
                    <p className="has-text-grey">Architect</p>
                </div>

               </div>
            </div>
            <style jsx>{`
              .dotCircle {
                  width:${diameter}px;
                  height:${diameter}px;
                  background-color:${color};
                  position:absolute;
                  top:${top}px;
                  bottom:${bottom}px;
                  left:${left}px;
                  right:${right}px;
                  border-radius:50% ;
              }
            `}

            </style>
        </div>
    )
}

export default CircleImage
