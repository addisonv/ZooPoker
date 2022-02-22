import "./about.scss"

export default function About() {
    return(
        <div className="about" id="about">
            <div className="a-left">
                <h1 className="a-title">What is Zoo Poker?</h1>
                <p className="a-desc">
                    
                Zoo Poker is an original NFT collection of 3D playing cards. Each playing card NFT will serve as a membership pass to a season of events, tournaments, and giveaways. In addition to our season of events and tournaments, the Zoo Poker Club will be funding the build of a premier holders-only token verified poker platform for our members to use for all games. Join this amazing community as we build the world's first 100% community poker DAO and build the future of web3 poker.
 #itsZOOtime
                     
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