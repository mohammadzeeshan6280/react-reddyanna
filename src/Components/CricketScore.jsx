// import "../ModuleCss/CricketScore.css"
const CricketScore = () => {
  return (
    <div>
      <div className="container-main"></div>
      <div className="row-ctm">
        <div className="team">
          <div className="team_name">Mumbai </div>
          <div className="curr_inn">
            <span className="run">537/10</span>
            <span className="over">(141.0)</span>
          </div>
          <div className="curr_inn">
            <span className="run">153/6</span>
            <span className="over">(40.0)</span>
            <br />
            <span className="over">CRR : 3.83</span>
          </div>
        </div>

        <div className="match_status">
          <span className="commantry">day 4 stumps</span>
          <p className="target">Mum lead by 274 runs</p>
          <span className="day">
            <div className="score-over">
              <ul>
                <li className="six-balls">1</li>
                <li className="six-balls b-color">6</li>
                <li className="six-balls b-color">4</li>
                <li className="six-balls">0</li>
                <li className="six-balls">0</li>
                <li className="six-balls">0</li>
              </ul>
            </div>
          </span>
        </div>

        <div className="team">
          <div className="team_name">Rest of India</div>
          <div className="curr_inn">
            <span className="run">416/10</span>
            <span className="over">(110.0)</span>
            <br />
            <span className="over">CRR : 3.78 | RRR: 3.05</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CricketScore;
