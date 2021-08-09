import Image from 'next/image'
import travel1 from '../../../public/travel1.jpg'

function Circle({className}) {
    return (
        <figure className={`image  ${className}`}>

            <Image className={` is-rounded`}  src={travel1} alt="" width={256} height={256} layout="responsive"/>
          
     </figure>
    )
}

export default Circle
