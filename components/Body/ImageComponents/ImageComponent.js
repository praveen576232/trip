import Image from 'next/image'
import styles from '../../../styles/Home.module.scss'
import travel1 from '../../../public/travel1.jpg'
import travel2 from '../../../public/travel2.jpg'
function ImageComponent() {
    return (
        <div className={`${styles.image}`}>
            <div className="">
            <Image
            className={`${styles.image}`}
    alt="The guitarist in the concert."
    src={travel1}
    width={50}
    height={50}
    layout="responsive"
/>
            </div>

           
<div className="card">
    <p className="pt-2 has-text-grey-light is-uppercase has-text-weight-light">hillroad rodies</p>
    <p className="card-header-title is-size-4 is-capitalized has-text-weight-bold">manali</p>
    <p className="">3 Days 2 Nights</p>
</div>
        </div>
    )
}

export default ImageComponent
