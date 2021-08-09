
import styles from '../../styles/Home.module.scss'
import SmallCircleColor from '../Body/circle/circleColor'
function FrontTemplate({title,subtitle}) {
    return (
        <div className={`${styles.frontTemplate} is-flex is-flex-direction-column is-justify-content-center is-align-items-center`}>
              <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
              <p className="is-size-5 is-size-7-mobile has-text-centered ">{title}</p>
             <p className="is-size-2 is-size-4-mobile has-text-weight-bold pt-3">{subtitle}</p>
              </div>
             <div className={`${styles.homedotCircle}`}>
            <SmallCircleColor  diameter={45} top='35%' left='4%' color="#F9E044"/>
              <SmallCircleColor diameter={45} bottom='-13%' left='5%' color="#C0E6A1"/>
            </div>
        </div>
    )
}

export default FrontTemplate
