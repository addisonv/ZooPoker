import "./topbar.scss"

export default function Topbar({ menuOpen, setMenuOpen} ) {
    return(
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo"><img src="assets/zoopokerlogo.png" alt="Zoo Poker Logo" /></a>
                </div>
                <div className="right">
                    {/* <nav>
                        <div class="nav-links">
                            <ul>
                                <li><img src="images/twitterlogo.png" alt="Twitter Link" /> </li>
                                <li><img src="images/discordlogo.png" alt="Discord Link" /> </li>
                                <li><img src="images/whitepapericon.png" alt="Whitepaper Link" /> </li>
                            </ul>
                        </div>
                        </nav> */}
                    

                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}