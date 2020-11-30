import { PersonalCard } from "./PersonalCard"
import "./AboutUs.css"

export const AboutUs = () => {
    const cards = [
        {
            name: "Will Thomas",
            imageUrl: "./AboutUsPhotos/Picard and Gandalf and Balrog.png",
            description: "Lorem Ipsum Dolor"
        },
        {
            name: "Durbatuluk 1701",
            imageUrl: "./AboutUsPhotos/GitHub Profile Pic.jpg",
            description: "Programming stuff mumbo jumbo"
        },
        {
            name: "Mr. Conference",
            imageUrl: "./AboutUsPhotos/conference room.bmp",
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