import '../componentsStyles/Card.css'
interface CardProps{
    heading:String,
    answer:String,
    icon: React.ElementType
}

const Card:React.FC<CardProps> = (props) => {
    
    return(
        <div className="cardContainer">
            <div className="cardOverlay"></div>
            <props.icon className='svgIcon'/>
            <p className="para">{props.heading}</p>
            <p className="tinyText">{props.answer}</p>
        </div>
    )
}


export default Card 