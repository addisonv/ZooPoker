import "./about.scss"

export default function About() {
    return(
        <div className="about" id="about">
            <div className="a-left">
                <h1 className="a-title">What is Zoo Poker?</h1>
                <p className="a-desc">
                    
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                     
                </p>
                    <button className="btn">
                        <a href="#roadmap">ROADMAP</a>
                    </button>
            </div>
            <div className="a-right">
            <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="assets/zoopokerlogoblack.png" alt="Zoo Poker" className="a-img"/>
                </div>
            </div>
        </div>
    )
}