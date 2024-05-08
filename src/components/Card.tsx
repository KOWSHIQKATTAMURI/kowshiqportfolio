import '../componentsStyles/Card.css'
import { GoArrowRight } from "react-icons/go";
interface CardProps{
    heading:String,
    answer:String,
    icon: React.ElementType,
    exist?:Boolean
}

const Card:React.FC<CardProps> = (props) => {
    
    return(
        <div className="cardContainer">
            <div className="cardOverlay"></div>
            <props.icon className='svgIcon'/>
            <p className="para">{props.heading}</p>
            <p className="highLight tinyText">{props.answer}</p>
            {
                props.exist && (
                    <p className='arrowPara tinyText'>
                        Write Me <GoArrowRight/>
                    </p>
                )
            }
        </div>
    )
}


export default Card 