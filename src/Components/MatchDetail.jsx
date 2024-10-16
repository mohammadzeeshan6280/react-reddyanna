// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import "../ModuleCss/MatchDetail.css"

// function MatchDetail() {
//     const { id } = useParams();
//     const [matchDetails, setMatchDetails] = useState(null);

//     useEffect(() => {
//         fetch("https://api.cricapi.com/v1/currentMatches?apikey=3b25de51-8538-4074-96b9-f0ecf29d2196&offset=0")
//             .then((response) => response.json())
//             .then((data) => {
//                 if (data.status === 'success') {
//                     const match = data.data.find((match) => match.id === id);
//                     console.log("Match details:", match); // Inspect data
//                     setMatchDetails(match);
//                 } else {
//                     console.error('Failed to fetch match details', data.message);
//                 }
//             })
//             .catch((error) => console.error('Error fetching match details', error));
//     }, [id]);

//     if (!matchDetails) {
//         return <p>Loading match details...</p>;
//     }

//     // Safely extract data with defaults
//     const { teams = [], score = [], status = '', target = 0, lastOvers = [] } = matchDetails || {};
//     const team1 = teams[0] || 'Team 1';
//     const team2 = teams[1] || 'Team 2';

//     const team1FirstInning = score[0] || { r: 0, w: 0, o: 0 };
//     const team1SecondInning = score[1] || { r: 0, w: 0, o: 0 };
//     const team2FirstInning = score[2] || { r: 0, w: 0, o: 0 };

//     return (
//         <>
//             <main>
//                 <div className="container-main">
//                     <div className="row-ctm">
//                         {/* Team 1 */}
//                         <div className="team">
//                             <div className="team_name">{team1}</div>
//                             {/* <div className="curr_inn">
//                                 <span className="run">{team1FirstInning.r}/{team1FirstInning.w}</span>
//                                 <span className="over">({team1FirstInning.o})</span>
//                             </div> */}
//                             <div className="curr_inn">
//                                 <span className="run">{team1SecondInning.r}/{team1SecondInning.w}</span>
//                                 <span className="over">({team1SecondInning.o})</span>
//                                 <br />
//                                 <span className="over">CRR : {team1SecondInning.crr || 'N/A'}</span>
//                             </div>
//                         </div>

//                         {/* Match Status */}
//                         <div className="match_status">
//                             <span className="commantry">{status}</span>
//                             <p className="target">{`Lead by ${target} runs`}</p>
//                             <span className="day">
//                                 <div className="score-over">
//                                     <ul>
//                                         {lastOvers.map((ball, index) => (
//                                             <li key={index} className={`six-balls ${ball === '6' || ball === '4' ? 'b-color' : ''}`}>
//                                                 {ball}
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                             </span>
//                         </div>

//                         {/* Team 2 */}
//                         <div className="team">
//                             <div className="team_name">{team2}</div>
//                             {/* <div className="curr_inn">
//                                 <span className="run">{team2FirstInning.r}/{team2FirstInning.w}</span>
//                                 <span className="over">({team2FirstInning.o})</span>
//                                 <br />
//                                 <span className="over">CRR : {team2FirstInning.crr || 'N/A'} | RRR: {team2FirstInning.rrr || 'N/A'}</span>
//                             </div> */}
//                             <div className="curr_inn">
//                                 <span className="run">{team1FirstInning.r}/{team1FirstInning.w}</span>
//                                 <span className="over">({team1FirstInning.o})</span>
//                                 <br />
//                                 <span className="over">CRR : {team2FirstInning.crr || 'N/A'} | RRR: {team2FirstInning.rrr || 'N/A'}</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </main>
//         </>
//     );
// }

// export default MatchDetail;


import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import "../ModuleCss/MatchDetail.css"
// import { Button } from 'bootstrap';

function MatchDetail() {
    const { id } = useParams();
    const [matchDetails, setMatchDetails] = useState(null);

    useEffect(() => {
        fetch("https://api.cricapi.com/v1/currentMatches?apikey=4a1eca73-ea08-4838-8ae7-55ed394660dc&offset=0")
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 'success') {
                    const match = data.data.find((match) => match.id === id);
                    console.log("Match details:", match); // Inspect data
                    setMatchDetails(match);
                } else {
                    console.error('Failed to fetch match details', data.message);
                }
            })
            .catch((error) => console.error('Error fetching match details', error));
    }, [id]);

    if (!matchDetails) {
        return <p>Loading match details...</p>;
    }

    // Safely extract data with defaults
    const { teams = [], score = [], status = '', lastOvers = [] } = matchDetails || {};
    const team1 = teams[0] || 'Team 1';
    const team2 = teams[1] || 'Team 2';

    const team1FirstInning = score[0] || { r: 0, w: 0, o: 0 };
    const team1SecondInning = score[1] || { r: 0, w: 0, o: 0 };
    const team2FirstInning = score[2] || { r: 0, w: 0, o: 0 };

    // Calculating Target (if applicable)
    const target = team1SecondInning.r > 0 ? team1SecondInning.r + 1 : 0;

    // Calculating Run Rates
    const crrTeam1 = team1SecondInning.r / team1SecondInning.o || 'N/A';
    const crrTeam2 = team2FirstInning.r / team2FirstInning.o || 'N/A';
    const rrrTeam2 = target > 0 ? (target - team2FirstInning.r) / (20 - team2FirstInning.o) : 'N/A';

    return (
        <>
            <main>
                <div className="row">
                    <div className=" detail-center-column col-lg-8 col-md-12">
                        <div className="details-page middle-page-content">
                            <div className="card-header game-heading">

                                <span className="card-header-title">Pakistan v England</span>

                                <span className="date-time">(07/10/2024 10:30:00 AM)</span>

                            </div>
                            <div className="container-main">
                                <div className="row-ctm">
                                    {/* Team 1 */}
                                    <div className="team">
                                        <div className="team_name">{team1}</div>
                                        <div className="curr_inn">
                                            <span className="run">{team1FirstInning.r}/{team1FirstInning.w}</span>
                                            <span className="over">({team1FirstInning.o})</span>
                                        </div>
                                        <div className="curr_inn">
                                            <span className="run">{team1SecondInning.r}/{team1SecondInning.w}</span>
                                            <span className="over">({team1SecondInning.o})</span>
                                            <br />
                                            <span className="over">CRR : {crrTeam1}</span>
                                        </div>
                                    </div>

                                    {/* Match Status */}
                                    <div className="match_status">
                                        <span className="commantry">{status}</span>
                                        <p className="target">{`target > 0 ? Target: ${target} runs : "No target set"`}</p>
                                        <span className="day">
                                            <div className="score-over">
                                                <ul>
                                                    {lastOvers.map((ball, index) => (
                                                        <li key={index} className={`six-balls ${ball === '6' || ball === '4' ? 'b-color' : ''}`}>
                                                            {ball}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </span>
                                    </div>

                                    {/* Team 2 */}
                                    <div className="team">
                                        <div className="team_name">{team2}</div>
                                        <div className="curr_inn">
                                            <span className="run">{team2FirstInning.r}/{team2FirstInning.w}</span>
                                            <span className="over">({team2FirstInning.o})</span>
                                            <br />
                                            <span className="over">CRR : {crrTeam2} | RRR: {rrrTeam2}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sr-widget-1"></div>
                            {/* MARKET SECTION */}
                            <div>
                                <div className="market_section">
                                    <p>
                                        <span className="mrkname">Match Odds</span>
                                        <NavLink to="#" className="add-pin">
                                            <i className="bi bi-bookmark"></i>
                                        </NavLink>
                                        <span className="min-max">
                                            Min: 100 | Max: 25k
                                            <NavLink to="#" className="ms-2 game-rules-icon">
                                                <span>
                                                    <i className="bi bi-info-square-fill"></i>
                                                </span>
                                            </NavLink>
                                            {/* <NavLink to="#Match_Odds" className="collapsed an-collapse"></NavLink> */}
                                            <button href="#Match_Odds" data-bs-toggle="collapse" aria-expanded="true" className="an-collapse "></button>
                                        </span>
                                    </p>
                                    <div id="Match_Odds" className="collapse show">
                                        <div>
                                            <div className="row align-items-center oddsHeader">
                                                <div className="col-lg-6 col-md-5 col-8 px-0"></div>
                                                <div className="col-lg-6 col-md-7 col-4 px-0">
                                                    <div className="btn-group">
                                                        <button className="ex-bl d-none d-md-block"></button>
                                                        <button className="ex-bl d-none d-md-block"></button>
                                                        <button className="back">back</button>
                                                        <button className="lay">lay</button>
                                                        <button className="ex-bl d-none d-md-block"></button>
                                                        <button className="ex-bl d-none d-md-block"></button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row mx-0 align-items-center">
                                                <div className="col-lg-6 col-md-5 col-8 px-0">
                                                    <span className="marketevent">Pakistan</span>
                                                </div>
                                                <div className="col-lg-6 col-md-7 col-4 px-0">
                                                    <div className="btn-group">
                                                        <button className="back back-light d-md-block d-none">
                                                            <span>170</span>
                                                            <small>21.49</small>
                                                        </button>
                                                        <button className="back back-light d-md-block d-none">
                                                            <span>180</span>
                                                            <small>9.6</small>
                                                        </button>
                                                        <button className="back">
                                                            <span>190</span>
                                                            <small>88.84</small>
                                                        </button>
                                                        <button className="lay">
                                                            <span>200</span>
                                                            <small>13.18</small>
                                                        </button>
                                                        <button className="d-md-block d-none lay lay-light">
                                                            <span>210</span>
                                                            <small>8.23</small>
                                                        </button>
                                                        <button className="d-md-block d-none lay lay-light">
                                                            <span>220</span>
                                                            <small>2.5</small>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row mx-0 align-items-center">
                                                <div className="col-lg-6 col-md-5 col-8 px-0">
                                                    <span className="marketevent">England</span>
                                                </div>
                                                <div className="col-lg-6 col-md-7 col-4 px-0">
                                                    <div className="btn-group">
                                                        <button className="back back-light d-md-block d-none">
                                                            <span>2.32</span>
                                                            <small>498.31</small>
                                                        </button>
                                                        <button className="back back-light d-md-block d-none">
                                                            <span>2.34</span>
                                                            <small>5187.38</small>
                                                        </button>
                                                        <button className="back">
                                                            <span>2.36</span>
                                                            <small>360.17</small>
                                                        </button>
                                                        <button className="lay">
                                                            <span>2.38</span>
                                                            <small>2467.46</small>
                                                        </button>
                                                        <button className="d-md-block d-none lay lay-light">
                                                            <span>2.4</span>
                                                            <small>3171.72</small>
                                                        </button>
                                                        <button className="d-md-block d-none lay lay-light">
                                                            <span>2.42</span>
                                                            <small>3438.99</small>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row mx-0 align-items-center">
                                                <div className="col-lg-6 col-md-5 col-8 px-0">
                                                    <span className="marketevent">The Draw</span>
                                                </div>
                                                <div className="col-lg-6 col-md-7 col-4 px-0">
                                                    <div className="btn-group">
                                                        <button className="back back-light d-md-block d-none">
                                                            <span>1.72</span>
                                                            <small>5764.46</small>
                                                        </button>
                                                        <button className="back back-light d-md-block d-none">
                                                            <span>1.73</span>
                                                            <small>2290.04</small>
                                                        </button>
                                                        <button className="back">
                                                            <span>1.75</span>
                                                            <small>3355.75</small>
                                                        </button>
                                                        <button className="lay">
                                                            <span>1.76</span>
                                                            <small>2816.93</small>
                                                        </button>
                                                        <button className="d-md-block d-none lay lay-light">
                                                            <span>1.77</span>
                                                            <small>5165.56</small>
                                                        </button>
                                                        <button className="d-md-block d-none lay lay-light">
                                                            <span>1.78</span>
                                                            <small>1024.56</small>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row mx-0 align-items-center">
                                                <div className="col-12 text-right px-0">
                                                    <span className="msgs">
                                                        <marquee>
                                                            <i className="mdi mdi-email mr-1"></i>🏏ICC WOMENS T20 WORLD CUP 2024 SPECIAL CUP WINNER🏆BETS STARTED IN OUR
                                                            EXCHANGE🏏
                                                        </marquee>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*  */}
                                <div>
                                    <div className="market_section">
                                        <div>
                                            <p>
                                                <span className="mrkname">BOOKMAKER</span>
                                                <NavLink to="#" className="add-pin">
                                                    <i className="bi bi-bookmark"></i>
                                                </NavLink>
                                                <span className="min-max">
                                                    Min: 100 | Max: 500k
                                                    <NavLink to="#" className="ms-2 game-rules-icon">
                                                        <span>
                                                            <i className="bi bi-info-square-fill"></i>
                                                        </span>
                                                    </NavLink>
                                                    <NavLink
                                                        to="#bookmaker0"
                                                        className="an-collapse "
                                                        data-bs-toggle="collapse"
                                                        aria-expanded="true"
                                                    ></NavLink>
                                                </span>
                                            </p>
                                            <div className="collapse show" id="bookmaker0">
                                                <div className="row align-items-center oddsHeader">
                                                    <div className="col-lg-6 col-md-5 col-8 px-0"></div>
                                                    <div className="col-lg-6 col-md-7 col-4 px-0">
                                                        <div className="btn-group">
                                                            <button className="ex-bl d-none d-md-block"></button>
                                                            <button className="ex-bl d-none d-md-block"></button>
                                                            <button className="back">back</button>
                                                            <button className="lay">lay</button>
                                                            <button className="ex-bl d-none d-md-block"></button>
                                                            <button className="ex-bl d-none d-md-block"></button>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Pakistan Market */}
                                                <div className="row mx-0 align-items-center">
                                                    <div className="col-lg-6 col-md-5 col-8 px-0">
                                                        <span className="marketevent">Pakistan</span>
                                                    </div>
                                                    <div className="col-lg-6 col-md-7 col-4 px-0">
                                                        <div className="btn-group">
                                                            <button className="back back-light d-md-block d-none">
                                                                <span>-</span>
                                                                <small>0.0</small>
                                                            </button>
                                                            <button className="back back-light d-md-block d-none">
                                                                <span>-</span>
                                                                <small>0.0</small>
                                                            </button>
                                                            <button className="back">
                                                                <span>0</span>
                                                                <small>0.0</small>
                                                            </button>
                                                            <button className="lay">
                                                                <span>0</span>
                                                                <small>0.0</small>
                                                            </button>
                                                            <button className="d-md-block d-none lay lay-light">
                                                                <span>-</span>
                                                                <small>0.0</small>
                                                            </button>
                                                            <button className="d-md-block d-none lay lay-light">
                                                                <span>-</span>
                                                                <small>0.0</small>
                                                            </button>
                                                            <div className="suspended">suspended</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* England Market */}
                                                <div className="row mx-0 align-items-center">
                                                    <div className="col-lg-6 col-md-5 col-8 px-0">
                                                        <span className="marketevent">England</span>
                                                    </div>
                                                    <div className="col-lg-6 col-md-7 col-4 px-0">
                                                        <div className="btn-group">
                                                            <button className="back back-light d-md-block d-none">
                                                                <span>-</span>
                                                                <small>0.0</small>
                                                            </button>
                                                            <button className="back back-light d-md-block d-none">
                                                                <span>-</span>
                                                                <small>0.0</small>
                                                            </button>
                                                            <button className="back">
                                                                <span>0</span>
                                                                <small>0.0</small>
                                                            </button>
                                                            <button className="lay">
                                                                <span>0</span>
                                                                <small>0.0</small>
                                                            </button>
                                                            <button className="d-md-block d-none lay lay-light">
                                                                <span>-</span>
                                                                <small>0.0</small>
                                                            </button>
                                                            <button className="d-md-block d-none lay lay-light">
                                                                <span>-</span>
                                                                <small>0.0</small>
                                                            </button>
                                                            <div className="suspended">suspended</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* The Draw Market */}
                                                <div className="row mx-0 align-items-center">
                                                    <div className="col-lg-6 col-md-5 col-8 px-0">
                                                        <span className="marketevent">The Draw</span>
                                                    </div>
                                                    <div className="col-lg-6 col-md-7 col-4 px-0">
                                                        <div className="btn-group">
                                                            <button className="back back-light d-md-block d-none">
                                                                <span>83</span>
                                                                <small>500k</small>
                                                            </button>
                                                            <button className="back back-light d-md-block d-none">
                                                                <span>-</span>
                                                                <small>0.0</small>
                                                            </button>
                                                            <button className="back">
                                                                <span>0</span>
                                                                <small>0.0</small>
                                                            </button>
                                                            <button className="lay">
                                                                <span>86</span>
                                                                <small>500k</small>
                                                            </button>
                                                            <button className="d-md-block d-none lay lay-light">
                                                                <span>-</span>
                                                                <small>0.0</small>
                                                            </button>
                                                            <button className="d-md-block d-none lay lay-light">
                                                                <span>-</span>
                                                                <small>0.0</small>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Marquee Message */}
                                                <div className="row mx-0 align-items-center">
                                                    <div className="col-12 text-right px-0">
                                                        <span className="msgs">
                                                            <marquee>
                                                                <i className="mdi mdi-email mr-1"></i>
                                                                Bangladesh Women v West Indies Women : Advance Toss,BM &amp; Fancy Bets
                                                                Started in our Exchange 🏏
                                                            </marquee>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* MINI BOOKMAKER Section */}
                                    <div className="market_section">
                                        <div>
                                            <p>
                                                <span className="mrkname">MINI BOOKMAKER</span>
                                                <NavLink to="#" className="add-pin">
                                                    <i className="bi bi-bookmark"></i>
                                                </NavLink>
                                                <span className="min-max">
                                                    Min: 100 | Max: 200k
                                                    <NavLink to="#" className="ms-2 game-rules-icon">
                                                        <span>
                                                            <i className="bi bi-info-square-fill"></i>
                                                        </span>
                                                    </NavLink>
                                                    <NavLink
                                                        to="#bookmaker2"
                                                        className="an-collapse "
                                                        data-bs-toggle="collapse"
                                                        aria-expanded="true"
                                                    ></NavLink>
                                                </span>
                                            </p>
                                            <div className="collapse show" id="bookmaker2">
                                                <div className="row align-items-center oddsHeader">
                                                    <div className="col-lg-6 col-md-5 col-8 px-0"></div>
                                                    <div className="col-lg-6 col-md-7 col-4 px-0">
                                                        <div className="btn-group">
                                                            <button className="ex-bl d-none d-md-block"></button>
                                                            <button className="ex-bl d-none d-md-block"></button>
                                                            <button className="back">back</button>
                                                            <button className="lay">lay</button>
                                                            <button className="ex-bl d-none d-md-block"></button>
                                                            <button className="ex-bl d-none d-md-block"></button>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Pakistan Market */}
                                                <div className="row mx-0 align-items-center">
                                                    <div className="col-lg-6 col-md-5 col-8 px-0">
                                                        <span className="marketevent">Pakistan</span>
                                                    </div>
                                                    <div className="col-lg-6 col-md-7 col-4 px-0">
                                                        <div className="btn-group">
                                                            <button className="back back-light d-md-block d-none">
                                                                <span>-</span>
                                                                <small>0.0</small>
                                                            </button>
                                                            <button className="back back-light d-md-block d-none">
                                                                <span>-</span>
                                                                <small>0.0</small>
                                                            </button>
                                                            <button className="back">
                                                                <span>0</span>
                                                                <small>0.0</small>
                                                            </button>
                                                            <button className="lay">
                                                                <span>0</span>
                                                                <small>0.0</small>
                                                            </button>
                                                            <button className="d-md-block d-none lay lay-light">
                                                                <span>-</span>
                                                                <small>0.0</small>
                                                            </button>
                                                            <button className="d-md-block d-none lay lay-light">
                                                                <span>-</span>
                                                                <small>0.0</small>
                                                            </button>
                                                            <div className="suspended">suspended</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* England Market */}
                                                <div className="row mx-0 align-items-center">
                                                    <div className="col-lg-6 col-md-5 col-8 px-0">
                                                        <span className="marketevent">England</span>
                                                    </div>
                                                    <div className="col-lg-6 col-md-7 col-4 px-0">
                                                        <div className="btn-group">
                                                            <button className="back back-light d-md-block d-none">
                                                                <span>118</span>
                                                                <small>200k</small>
                                                            </button>
                                                            <button className="lay">
                                                                <span>123</span>
                                                                <small>200k</small>
                                                            </button>
                                                            <button className="d-md-block d-none lay lay-light">
                                                                <span>-</span>
                                                                <small>0.0</small>
                                                            </button>
                                                            <button className="d-md-block d-none lay lay-light">
                                                                <span>-</span>
                                                                <small>0.0</small>
                                                            </button>
                                                            <button className="d-md-block d-none lay lay-light">
                                                                <span>-</span>
                                                                <small>0.0</small>
                                                            </button>
                                                            <button className="d-md-block d-none lay lay-light">
                                                                <span>-</span>
                                                                <small>0.0</small>
                                                            </button>
                                                            <div className="suspended">suspended</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* The Draw Market */}
                                                <div className="row mx-0 align-items-center">
                                                    <div className="col-lg-6 col-md-5 col-8 px-0">
                                                        <span className="marketevent">The Draw</span>
                                                    </div>
                                                    <div className="col-lg-6 col-md-7 col-4 px-0">
                                                        <div className="btn-group">
                                                            <button className="back back-light d-md-block d-none">
                                                                <span>0</span>
                                                                <small>0.0</small>
                                                            </button>
                                                            <button className="lay">
                                                                <span>0</span>
                                                                <small>0.0</small>
                                                            </button>
                                                            <button className="d-md-block d-none lay lay-light">
                                                                <span>-</span>
                                                                <small>0.0</small>
                                                            </button>
                                                            <button className="d-md-block d-none lay lay-light">
                                                                <span>-</span>
                                                                <small>0.0</small>
                                                            </button>
                                                            <button className="d-md-block d-none lay lay-light">
                                                                <span>-</span>
                                                                <small>0.0</small>
                                                            </button>
                                                            <button className="d-md-block d-none lay lay-light">
                                                                <span>-</span>
                                                                <small>0.0</small>
                                                            </button>
                                                            <div className="suspended">suspended</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SECTION  */}
                    <div className="detail-right-column col-md-12 col-lg-4 d-none d-lg-block">
                        <div className="place-bet-card card place-bet mb-1">
                            <div className="card-header">
                                <h6 className='card-header game-heading'>Place Bet</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default MatchDetail;