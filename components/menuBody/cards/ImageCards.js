import Image from 'next/image'
import styles from '../../../styles/Home.module.scss'

function ImageCards({imageSrc,infoHeadding,infoBody,infoFooter}) {
    return (
        <div className={`${styles.MenuBodyImageCardBody}`}>
            <Image
            className={`${styles.MenuBodyimageCard}`}
    alt=""
    src={imageSrc}
    width={350}
    height={400}
    layout="responsive"
/>

           
<div className={`card ${styles.MenuImageInfoCard}`}>
    <p className="  pl-2 is-size-7 is-size-9-mobile has-text-grey-light is-uppercase has-text-weight-light">{infoHeadding}</p>
    <p className={`pl-2  is-size-6 is-size-5-mobile is-capitalized has-text-weight-bold ${styles.menuheaderCard}`}>{infoBody}</p>
    <p className="pl-2 is-size-7  has-text-grey">{infoFooter}</p>
</div>
        </div>
    )
}

export default ImageCards
