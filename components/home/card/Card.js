import styles from '../../../styles/Home.module.scss'

import {FaPlay}  from 'react-icons/fa'
function Card({Icon}) {
  return (
    <div className={`${styles.mycard} card`}>
    <div className="card-content">
      <div className={styles.mycardIconWraper}>
         <Icon className={styles.mycardIcon}/>
      </div>
    <p className={`${styles.cardHeading} title has-text-centered`} >
    Invite Friends
    </p>
      <div className="content">
        Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.
      </div>
      <div className="has-text-centered">
          <p>Know more  <FaPlay color="#F8A32A" size={8}/></p>
      </div>
    </div>
  </div>
  );
}

export default Card;
