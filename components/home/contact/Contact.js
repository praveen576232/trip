import styles from '../../../styles/Home.module.scss'

function Contact() {
  return (
    <div className={`${styles.contactBody} section`}>
      <p className="has-text-centered is-size-2 is-size-4-mobile has-text-weight-bold">Contact Us</p>
      <div className="">
        <div className={styles.contact}>
          <div className="is-flex is-flex-wrap-wrap is-justify-content-center is-align-items-center ">
            <div className={` ${styles.contactInput}`}>
              <label>Full Name</label>
              <input className="" placeholder="Enter your name" />
            </div>
            <div className={` ${styles.contactInput}`}>
              <label>Email address</label>
              <input placeholder="Enter your E-mail" />
            </div>
            
          </div>

          <div className="is-flex is-flex-wrap-wrap is-justify-content-center is-align-items-center ">
            <div className={` ${styles.contactInput}`}>
              <label>Phone number</label>
              <input className="" placeholder="Enter your phoneNumber" />
            </div>
            <div className={` ${styles.contactInput}`}>
              <label>location</label>
              <input placeholder="Enter your location" />
            </div>
            
          </div>
           <div className={styles.contactMessageBox}>
           <label>Message</label>
           <textarea placeholder="enter your message hear."/>
           </div>
           <button className={`button is-rounded has-text-white has-background-black  has-text-weight-bold pl-6 pr-6 pt-5 pb-5 mt-6 ${styles.contactSubmitButton}`}>SUBMIT</button>
        </div>
      </div>
      
    </div>
  );
}

export default Contact;
