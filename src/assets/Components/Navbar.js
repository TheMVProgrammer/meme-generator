import TrollFace from "../Images/TrollFace.svg"

export default function Navbar() {
    return (
        <nav className="nav-bar">
            <div className="logo">
                <img src={TrollFace} alt = "troll-face-logo"/>
                <h1>Meme Generator</h1>
            </div>
            <p>React Course - Project 3</p>
        </nav>
    )
}