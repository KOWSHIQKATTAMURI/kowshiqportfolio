
interface HeaderProps{
    heading: String,
    intro: String
}

const SectionHeader:React.FC<HeaderProps>  = ({heading, intro}) => {
    return(
        <div className="sectionHeader">
          <h1 className="mediumHeading">{heading}</h1>
          <p className="para">{intro}</p>
        </div>
    )
}

export default SectionHeader