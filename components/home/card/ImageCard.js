import Image from 'next/image'
import styles from '../../../styles/Home.module.scss'

function ImageCard({imageSrc,infoHeadding,infoBody,infoFooter}) {
    return (
        <div className={`card ${styles.imageCardBody}`}>
            <div className={`${styles.imageCard}`}>
            <Image
            className={`${styles.imageCard}`}
    alt=""
    src={imageSrc}
    width={70}
    height={80}
    layout="responsive"
/>
            </div>

           
<div className={`card ${styles.ImageInfoCard}`}>
    <p className="pt-5  pl-5 is-size-7 is-size-9-mobile has-text-grey-light is-uppercase has-text-weight-light">{infoHeadding}</p>
    <p className="pl-5 card-header-title is-size-4 is-size-5-mobile is-capitalized has-text-weight-bold">{infoBody}</p>
    <p className="pl-5 is-size-7  has-text-grey">{infoFooter}</p>
</div>
        </div>
    )
}

export default ImageCard
