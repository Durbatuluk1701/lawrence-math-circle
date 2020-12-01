import { PersonalCard } from "./PersonalCard"
import "./People.css"

export const People = () => {
    const cards = [
        {
            name: "Will Thomas",
            imageUrl: "http://localhost:3000/AboutUsPhotos/Picard and Gandalf and Balrog.png",
            description: "Lorem Ipsum Dolor"
        },
        {
            name: "Durbatuluk 1701",
            imageUrl: "http://localhost:3000/AboutUsPhotos/GitHub Profile Pic.jpg",
            description: "Programming stuff mumbo jumbo"
        },
        {
            name: "Mr. Conference",
            imageUrl: "http://localhost:3000/AboutUsPhotos/conference room.bmp",
            description: "I am a conference room"
        }
    ]

    return (
        <div>
            <h1 className="centered" style={{ marginBottom: "5%" }}>About Us</h1>
            <div id="cardContainer">
                {
                    cards.map(({ name, imageUrl, description }) => {
                        return (
                            <PersonalCard
                                name={name}
                                imageUrl={imageUrl}
                                description={description}
                                key={`PersonalCard_${name}`}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}