import { Navbar } from "../../Components"

// Nav Href is way to decode current route
export const Header = ({ navHref }) => {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <img id="logo" src="./logo.png" alt="Cannot Be Displayed" />
            </div>
            <Navbar defValue={navHref} />
        </>
    )
}