import { Navbar } from "../../Components"

export const Header = () => {
    return (
        <>
            <div id="headerDiv">
                <img id="logo" src="http://localhost:3000/logo2.png" alt="Cannot Be Displayed" />
                <h2 id="pageTitle">Lawrence Math Circle</h2>
            </div>
            <Navbar />
        </>
    )
}