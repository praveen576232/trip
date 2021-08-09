import CircleImage from './Image/CircleImage'
import styles from '../../../styles/Home.module.scss'
function TestIMonails() {
    return (
       <div className="mt-5">
          <div className="mt-6">
              <p className="is-size-2 mb-3 has-text-centered has-text-weight-bold">Testimonails</p>
          <div className={styles.textIMonails}>
           
           <div className={styles.textIMonailsAllImages}>
                     <div className={`${styles.textIMonailsImage} ${styles.row1}` }>
                                <CircleImage diameter={25}  bottom={-30}  right={70} color="#C0E6A1"/>
                                <Spacer width={400}/>
                                <CircleImage/>
                                <Spacer width={400}/>
                                <CircleImage diameter={25}  bottom={-30}  right={70} color="#C0E6A1"/>
                                <Spacer width={400}/>
                                
                     </div>
                     <div className={`${styles.textIMonailsImage} ${styles.row2}`}>
                     <Spacer width={400}/>
                                <CircleImage diameter={25}  bottom={-10}  right={80} color="#FF8F6B"/>
                                <Spacer width={400}/>
                                <CircleImage diameter={25}  top={50}  right={60} color="#FF8F6B"/>
                                <Spacer width={400}/>
                                <CircleImage diameter={25}  top={100}  right={80} color="#FF8F6B"/>
                                
                     </div>
                     <div className={`${styles.textIMonailsImage} ${styles.row3}`}>
                     <Spacer width={180}/>
                                <CircleImage/>
                                <Spacer width={400}/>
                                <CircleImage diameter={25}  top={60}  right={80} color="#F8A32A"/>
                                <Spacer width={300}/>
                                <CircleImage diameter={25}  top={30}  right={30} color="#F8A32A"/>
                                
                     </div>
                     <div className={`${styles.textIMonailsImage} ${styles.row4}`}>
                     <Spacer width={380}/>
                                <CircleImage diameter={15}  top={20}  right={80} color="#90BAF8"/>
                                <Spacer width={380}/>
                                <CircleImage diameter={15}  bottom={-30}  right={80} color="#90BAF8"/>
                                <Spacer width={380}/>
                                <CircleImage diameter={15}  bottom={-50}  right={80} color="#90BAF8"/>
                                
                     </div>
                     <div className={`${styles.textIMonailsImage} ${styles.row5}`}>
                                <CircleImage/>
                                <Spacer width={380}/>
                                <CircleImage/>
                                <Spacer width={380}/>
                                <CircleImage/>
                                
                     </div>
           </div>
               
       </div>
          </div>
       </div>
    )
}

export default TestIMonails


function Spacer({width}){
    return (
        <div className={`spacer ${styles.spacer}`} >
          <style jsx>{
              `
              .spacer{
                  width:${width}px;
                  height:100px;
                
                  margin-left:5px;
                //   background-color:black;
                //   border:1px solid red;
              }
              `
          }</style>
        </div>
    )
}