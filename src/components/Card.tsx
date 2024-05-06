import '../componentsStyles/Card.css'
interface CardProps{
    cardItem:Object
}

const Card:React.FC<{props:CardProps}> = (props) => {
    console.log(props )
    return(
        <div className="cardContainer">
            <div className="cardOverlay"></div>
            
            <p className="para">Experience</p>
            <p className="tinyText">Yet to begin</p>
        </div>
    )
}


export default Card 