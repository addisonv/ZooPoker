import "./team.scss"

export default function Team() {
    return(
        <div className="team" id="team">
                <div className="row">
                    <div className="section-title">
                        <h2>Meet the Team</h2>
                    </div>
                    <div className="flex">
                        {/* Team Member 1 */}
                        <div className="single-team">
                            <div className="team-img">
                                <img src="assets/zoopokerteam1.jpeg" alt="" /> 
                            </div>
                            <div className="team-info">
                                <h3>Team Member 1</h3>  
                                <p>Title</p>
                            </div>  
                            <p className="team-text">Lorum Ipsum dolor sitamet, consectur adipisicing elit.</p>
                        </div>

                        {/* Team Member 2 */}
                        <div className="single-team">
                            <div className="team-img">
                                <img src="assets/zoopokerteam2.jpeg" alt="" /> 
                            </div>
                            <div className="team-info">
                                <h3>Team Member 1</h3>  
                                <p>Title</p>
                            </div>  
                            <p className="team-text">Lorum Ipsum dolor sitamet, consectur adipisicing elit.</p>
                        </div>

                        {/* Team Member 3 */}
                        {/* <div className="single-team">
                            <div className="team-img">
                                <img src="assets/zoopokerlogoblack.png" alt="" /> 
                            </div>
                            <div className="team-info">
                                <h3>Team Member 1</h3>  
                                <p>Title</p>
                            </div>  
                            <p className="team-text">Lorum Ipsum dolor sitamet, consectur adipisicing elit.</p>
                        </div> */}

                        {/* Team Member 4 */}
                        {/* <div className="single-team">
                            <div className="team-img">
                                <img src="assets/zoopokerlogoblack.png" alt="" /> 
                            </div>
                            <div className="team-info">
                                <h3>Team Member 1</h3>  
                                <p>Title</p>
                            </div>  
                            <p className="team-text">Lorum Ipsum dolor sitamet, consectur adipisicing elit.</p>
                        </div> */}
                    </div>
                </div>
        </div>
    )
}