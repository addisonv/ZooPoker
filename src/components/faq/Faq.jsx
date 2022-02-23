import "./faq.scss"

export default function Faq() {
    return(
        <div className="container" id="faq">
            <div className="accordion">
                <div className="title">
                    <h2>FAQ</h2>
                </div>
                <div className="accordion-items" id="question1">
                    <a className="accordion-link" href="#question1">
                        What is Zoo Poker?
                        {/* <i className="icon ion-md-add"></i>
                        <i className="icon ion-md-remove"></i> */}
                    </a>
                    <div className="answer">
                        <p>We are an exclusive community-driven poker club who provides worthwhile events, tournaments, and giveaways to our members.</p>
                    </div>
                </div>
                <div className="accordion-items" id="question2">
                    <a className="accordion-link" href="#question2">
                        Where are games and tournaments played?
                        {/* <i className="icon ion-md-add"></i>
                        <i className="icon ion-md-remove"></i> */}
                    </a>
                    <div className="answer">
                        <p>Zoo Poker’s mint will be fulfilling a contract to build our own state-of-the-art web3 poker platform for our club to exclusively play on. We will host all of our events, registration, tournaments, and giveaways through our platform. Until our phase 1 platform is ready for holders. We will be hosting our events and tournaments through ClubGG.</p> 
                    </div>
                </div>
                <div className="accordion-items" id="question3">
                    <a className="accordion-link" href="#question3">
                        When can I buy a Zoo Poker card?
                        {/* <i className="icon ion-md-add"></i>
                        <i className="icon ion-md-remove"></i> */}
                    </a>
                    <div className="answer">
                        <p>April 2022 (official mint date will be announced soon)</p>
                    </div>
                </div>
                <div className="accordion-items" id="question4">
                    <a className="accordion-link" href="#question4">
                        Where can I buy a Zoo Poker card?
                        {/* <i className="icon ion-md-add"></i>
                        <i className="icon ion-md-remove"></i> */}
                    </a>
                    <div className="answer">
                        <p>Our initial public mint will occur in early April. For those that are not lucky enough to mint initially, please find our collection on Opensea and pick the panda that most fits you!</p> 
                    </div>
                </div>
                <div className="accordion-items" id="question5">
                    <a className="accordion-link" href="#question5">
                        What are the perks of owning a Zoo Poker card?
                        {/* <i className="icon ion-md-add"></i>
                        <i className="icon ion-md-remove"></i> */}
                    </a>
                    <div className="answer">
                        <p>On top of gaining access into our community and our servers, you will be a member of an exclusive poker club that hosts “free-to-sit” poker tournaments for its members. Our holders do not pay buy-ins during our first season of events and tournaments. Free to play, lots to win!</p> 
                    </div>
                </div>
                <div className="accordion-items" id="question6">
                    <a className="accordion-link" href="#question6">
                        What type of governance rights do Zoo Poker holders get?
                        {/* <i className="icon ion-md-add"></i>
                        <i className="icon ion-md-remove"></i> */}
                    </a>
                    <div className="answer">
                        <p>Each NFT in the Zoo Poker collection will have voting rights in a variety of decisions we bring to our community. These decisions include reinvestment decisions, team additions, prizes, collaborations, and more.
                    <br />Voting share categories:
                    <br />Aces - (10 votes per NFT)
                    <br />Faces - (2 votes per NFT)
                    <br />Numbers - (1 vote per NFT)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}