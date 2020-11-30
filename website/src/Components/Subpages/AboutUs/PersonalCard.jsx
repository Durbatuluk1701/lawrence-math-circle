export const PersonalCard = ({ name, imageUrl, description }) => {
    return (
        <div className="personalCard">
            <img style={{
                width: "90%",
                margin: "auto"
            }} src={imageUrl} alt={`${name}`} />
            <h3 style={{
                textAlign: "center",
                width: "100%"
            }}>{name}</h3>
            <p style={{
                textAlign: "center",
                margin: "0 auto",
                width: "80%"
            }}>{description}</p>
        </div>
    )
}