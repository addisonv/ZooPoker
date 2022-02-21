import "./menu.scss"

export default function Menu({ menuOpen, setMenuOpen }) {
    return(
        <div className={"menu "+(menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#about">About</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#faq">FAQ</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#team">Team</a>
                </li>
            </ul>
        </div>
    )
}