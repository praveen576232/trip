import styles from '../../../styles/Home.module.scss'

function SmallCircleColor({className,diameter,left,top,bottom,right,color}) {
    return (
      <div className={`bodydotCircle ${className}`} >
  <style jsx>{`
              .bodydotCircle {
                  width:${diameter}px;
                  height:${diameter}px;
                  background-color:${color};
                  position:absolute;
                  top:${top};
                  bottom:${bottom};
                  left:${left};
                  right:${right};
                  border-radius:50% ;
              }
            `}

            </style>
      </div>


    )
}

export default SmallCircleColor
