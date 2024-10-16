import '../ModuleCss/Rules.css'; // Import the CSS for styling

// const Rules = () => {
//   return (
//     <div className="fancy-section">
//       <div className="fancy-header">Football Fancy</div>
//       <div className="fancy-content">
//         <p>
//           Company reserves the right to suspend/void any id/bets if the same is found to be illegitimate. 
//           For example incase of vpn/robot-use/multiple entry from same IP/ multiple bets at same time (Punching) and others. 
//           Note: only winning bets will be voided...
//         </p>
//         <p>
//           <strong>Tournament Total Goals</strong>, Team Total Goals goals scored in 90 minutes or in extra-time will count. 
//           Goals scored in penalty shootouts do not count.
//         </p>
//         <p>
//           <strong>Tournament Corners</strong> - Only corners taken in 90 minutes count.
//         </p>
//         <p>
//           <strong>Tournament Penalties Missed/Converted</strong> - Penalties taken in 90 minutes, extra-time and penalty shootouts all count. 
//           If a penalty has to be re-taken, the previous disallowed penalty(ies) do not count.
//         </p>
//       </div>
//       <div className="fancy-header">Big Bash League</div>
//     </div>
//   );
// };

// export default Rules;


import  { useState } from 'react';


// const Ruels = () => {
//   // State to manage the visibility of the content sections
//   const [isFootballFancyVisible, setFootballFancyVisible] = useState(true);
//   const [isBigBashVisible, setBigBashVisible] = useState(true);

//   // Toggle functions
//   const toggleFootballFancy = () => {
//     setFootballFancyVisible(!isFootballFancyVisible);
//   };

//   const toggleBigBash = () => {
//     setBigBashVisible(!isBigBashVisible);
//   };

//   return (
//     <div className="fancy-section">
//       {/* Football Fancy Section */}
//       <div className="fancy-header" onClick={toggleFootballFancy}>
//         Football Fancy 
//       </div>
//       {isFootballFancyVisible && (
//         <div className="fancy-content">
//           <p>
//             Company reserves the right to suspend/void any id/bets if the same is found to be illegitimate. 
//             For example incase of vpn/robot-use/multiple entry from same IP/ multiple bets at same time (Punching) and others. 
//             Note: only winning bets will be voided...
//           </p>
//           <p>
//             <strong>Tournament Total Goals</strong>, Team Total Goals goals scored in 90 minutes or in extra-time will count. 
//             Goals scored in penalty shootouts do not count.
//           </p>
//           <p>
//             <strong>Tournament Corners</strong> - Only corners taken in 90 minutes count.
//           </p>
//           <p>
//             <strong>Tournament Penalties Missed/Converted</strong> - Penalties taken in 90 minutes, extra-time and penalty shootouts all count. 
//             If a penalty has to be re-taken, the previous disallowed penalty(ies) do not count.
//           </p>
//         </div>
//       )}

//       {/* Big Bash League Section */}
//       <div className="fancy-header" onClick={toggleBigBash}>
//         Big Bash League
//       </div>
//       {isBigBashVisible && (
//         <div className="fancy-content">
//           {/* You can add content here for the Big Bash League */}
//           <p>Big Bash League content goes here...</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Ruels




const Rules = () => {
  const [open, setOpen] = useState(true); // Initially open
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null); // Close if it&apos;s already open
    } else {
      setOpenSection(section); // Open the clicked section
    }
  };

  const handleClose = () => {
    setOpen(false); // Close the entire modal
  };

  if (!open) {
    return null; // Return nothing if the modal is closed
  }

  return (
    <div className="rules-container">
      <div className="header">
        <h2>Rules</h2>
        <button className="close-btn" onClick={handleClose}>X</button>
      </div>
      <div className="section-box">
      <div className="section">
        <div className="section-header" onClick={() => toggleSection('footballFancy')}>
          Football Fancy
        </div>
        {openSection === 'footballFancy' && (
          <div className="section-content">
          <table>
            <tr>
                <td><p>Company reserves the right to suspend/void any id/bets if the same is found to be illegitimate. For example incase of vpn/robot-use/multiple entry from same IP/ multiple bets at same time (Punching) and others. Note : only winning bets will be voided...</p></td>
            </tr>
            <tr>
                <td><p>Tournament Total Goals, Team Total Goals goals.scored in 90 minutes or in extra-time will count.Goals scored in penalty shootouts do not count.</p></td>

            </tr>
            <tr>

                <td><p>Tournament Corners - Only corners taken in 90 minutes count.</p></td>
            </tr>
            <tr>
                <td><p>Tournament Penalties Missed/Converted - Penalties taken in 90 minutes, extra-time and penalty shootouts all count. If a penalty has to be re-taken the previous disallowed penalty(ies) do not count.</p></td>

            </tr>
          </table>         
          </div>
        )}
      </div>
      <div className="section">
        <div className="section-header" onClick={() => toggleSection('bigBashLeague')}>
          Big Bash League
        </div>
        {openSection === 'bigBashLeague' && (
          <div className="section-content">
          <table>
  <tr>
    <td>
      <span>Total match 1st over run:- Average 6 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Highest innings run - Only first innings is valid.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Lowest innings run - Only first innings is valid.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total 1st 6 over run - Average 46 runs will be given if total 20 overs is not played, This event is valid only for the 1st innings.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Fours - Average 25 fours will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Sixes - Average 10 sixes will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Wickets - Average 12 wickets will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Wides - Average 8 wides will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Extras - Average 14 extras will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Fifties - Average 2 fifties will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Caught out - Average 8 catch out will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Bowled out - Average 2 bowled out will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Highest 6 over run - Both innings are valid.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Highest run in individual match - Both innings are valid.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Highest Fours in individual match - Both innings are valid.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Highest Sixes in individual match - Both innings are valid.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total LBW - Average 1 LBW will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Highest Wickets in individual match - Both innings are valid.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Highest extras in individual match - Both innings are valid.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Highest match 1st over run in individual match - Only 1st innings will be considered as valid.</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>All events related to bowler are valid only for the league stages, both innings will be considered as valid. A minimum of 32 overs has to be bowled else the same will be voided. If the mentioned bowler has bowled one legal delivery then it will be considered as 1 over even if the over is not completed.</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>All events based on ground are decided based on the initial fixture. In case of any changes in the venue between the series, then average will be given based on the initial fixture for the number of games reduced. Similarly, if any match is added newly to the venue, it will not be considered.</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>Average for wickets taken will be given in case match abandoned or over reduced or the player has not bowled a single legal delivery before the over got reduced.</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>Fancy based on all individual teams/players/ground are valid only for league stage.</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>Management decision will be final.</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>Bellerive Oval: Hobart</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total 1st over run: Average 6 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total 6 over run: Average 46 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Fours: Average 28 fours will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Sixes: Average 11 sixes will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Wides: Average 8 wides will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Extras: Average 14 extras will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Run: Average 330 runs will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Manuka Oval: Canberra</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total 1st over run: Average 5 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total 6 over run: Average 44 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Fours: Average 24 fours will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Sixes: Average 10 sixes will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Wickets: Average 12 wickets will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Wides: Average 8 wides will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Extras: Average 13 extras will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Run: Average 318 runs will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Bellerive Oval: Hobart</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Wickets: Average 12 wickets will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Aurora Stadium: Launceston</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total 1st over run: Average 6 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid.</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Total 6 over run: Average 45 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid.</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Fours: Average 25 fours will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Sixes: Average 10 sixes will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Wickets: Average 12 wickets will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Wides: Average 8 wides will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Extras: Average 14 extras will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Run: Average 320 runs will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>The Gabba: Brisbane</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total 1st over run: Average 6 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total 6 over run: Average 44 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Fours: Average 24 fours will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Sixes: Average 9 sixes will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Wickets: Average 12 wickets will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Wides: Average 8 wides will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Extras: Average 13 extras will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Run: Average 310 runs will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>QUEENSLAND</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total 1st over run: Average 6 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total 6 over run: Average 44 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Fours: Average 24 fours will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Sixes: Average 10 sixes will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Wickets: Average 12 wickets will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Wides: Average 8 wides will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Extras: Average 14 extras will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Run: Average 315 runs will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Adelaide Oval</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total 1st over run: Average 6 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total 6 over run: Average 46 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Fours: Average 27 fours will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Sixes: Average 10 sixes will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Wickets: Average 12 wickets will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Wides: Average 8 wides will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Extras: Average 14 extras will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Run: Average 320 runs will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Perth Stadium</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total 1st over run: Average 6 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total 6 over run: Average 46 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Fours: Average 26 fours will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Sixes: Average 12 sixes will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Wickets: Average 12 wickets will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Wides: Average 9 wides will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Extras: Average 16 extras will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Run: Average 340 runs will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Showground Stadium</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total 1st over run: Average 6 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total 6 over run: Average 44 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Fours: Average 25 fours will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Sixes: Average 9 sixes will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Wickets: Average 12 wickets will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Wides: Average 8 wides will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Extras: Average 14 extras will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Run: Average 315 runs will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Docklands Stadium</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total 1st over run: Average 6 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total 6 over run: Average 46 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Fours: Average 25 fours will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Sixes: Average 11 sixes will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Wickets: Average 12 wickets will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Wides: Average 8 wides will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Extras: Average 14 extras will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Run: Average 320 runs will be given in case match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
        <td>
            <p>Perth Stadium</p>
        </td>
    </tr>
    <tr>
        <td>
            <span>Total 1st over run: Average 6 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid</span>
        </td>
    </tr>
    <tr>
        <td>
            <span>Total 6 over run: Average 46 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid</span>
        </td>
    </tr>
    <tr>
        <td>
            <span>Total Fours: Average 26 fours will be given in case match abandoned or over reduced</span>
        </td>
    </tr>
    <tr>
        <td>
            <span>Total Sixes: Average 12 Sixes will be given in case match abandoned or over reduced</span>
        </td>
    </tr>
    <tr>
        <td>
            <span>Total Wickets: Average 12 wickets will be given in case match abandoned or over reduced</span>
        </td>
    </tr>
    <tr>
        <td>
            <span>Total Wide: Average 9 Wide will be given in case match abandoned or over reduced</span>
        </td>
    </tr>
    <tr>
        <td>
            <span>Total Extras: Average 16 Extras will be given in case match abandoned or over reduced</span>
        </td>
    </tr>
    <tr>
        <td>
            <span>Total Run: Average 340 runs will be given in case match abandoned or over reduced</span>
        </td>
    </tr>
    <tr>
        <td>
            <p>Showground Stadium</p>
        </td>
    </tr>
    <tr>
        <td>
            <span>Total 1st over run: Average 6 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid</span>
        </td>
    </tr>
    <tr>
        <td>
            <span>Total 6 over run: Average 44 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid</span>
        </td>
    </tr>
    <tr>
        <td>
            <span>Total Fours: Average 25 fours will be given in case match abandoned or over reduced</span>
        </td>
    </tr>
    <tr>
        <td>
            <span>Total Sixes: Average 9 Sixes will be given in case match abandoned or over reduced</span>
        </td>
    </tr>
    <tr>
        <td>
            <span>Total Wickets: Average 12 wickets will be given in case match abandoned or over reduced</span>
        </td>
    </tr>
    <tr>
        <td>
            <span>Total Wide: Average 8 Wide will be given in case match abandoned or over reduced</span>
        </td>
    </tr>
    <tr>
        <td>
            <span>Total Extras: Average 14 Extras will be given in case match abandoned or over reduced</span>
        </td>
    </tr>
    <tr>
        <td>
            <span>Total Run: Average 315 runs will be given in case match abandoned or over reduced</span>
        </td>
    </tr>
    <tr>
        <td>
            <p>Docklands Stadium</p>
        </td>
    </tr>
    <tr>
        <td>
            <span>Total 1st over run: Average 6 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid</span>
        </td>
    </tr>
    <tr>
        <td>
            <span>Total 6 over run: Average 46 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid</span>
        </td>
    </tr>
    <tr>
        <td>
            <span>Total Fours: Average 25 fours will be given in case match abandoned or over reduced</span>
        </td>
    </tr>
    <tr>
        <td>
            <span>Total Sixes: Average 11 Sixes will be given in case match abandoned or over reduced</span>
        </td>
    </tr>
    <tr>
        <td>
            <span>Total Wickets: Average 12 wickets will be given in case match abandoned or over reduced</span>
        </td>
    </tr>
    <tr>
        <td>
            <span>Total Wide: Average 8 Wide will be given in case match abandoned or over reduced</span>
        </td>
    </tr>
    <tr>
        <td>
            <span>Total Extras: Average 14 Extras will be given in case match abandoned or over reduced</span>
        </td>
    </tr>
    <tr>
        <td>
            <span>Total Run: Average 320 runs will be given in case match abandoned or over reduced</span>
        </td>
    </tr>
    <tr>
        <td>
            <p>Melbourne Ground</p>
        </td>
    </tr>
    <tr>
        <td>
            <span>Total 1st over run: Average 6 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid</span>
        </td>
    </tr>
    <tr>
        <td>
            <span>Total 6 over run: Average 45 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid</span>
        </td>
    </tr>
    <tr>
        <td>
            <span>Total Fours: Average 26 fours will be given in case match abandoned or over reduced</span>
        </td>
    </tr>
    <tr>
        <td>
            <span>Total Sixes: Average 10 Sixes will be given in case match abandoned or over reduced</span>
        </td>
    </tr>
    <tr>
        <td>
            <span>Total Wickets: Average 12 wickets will be given in case match abandoned or over reduced</span>
        </td>
    </tr>
    <tr>
        <td>
            <span>Total Wide: Average 8 Wide will be given in case match abandoned or over reduced</span>
        </td>
    </tr>
    <tr>
        <td>
            <span>Total Extras: Average 15 Extras will be given in case match abandoned or over reduced</span>
        </td>
    </tr>
    <tr>
        <td>
            <span>Total Run: Average 330 runs will be given in case match abandoned or over reduced</span>
        </td>
    </tr>
    <tr>
        <td>
            <p>Sydney Ground</p>
        </td>
    </tr>
    <tr>
        <td>
            <span>Total 1st over run: Average 6 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid</span>
        </td>
    </tr>
    <tr>
        <td>
            <span>Total 6 over run: Average 46 runs will be given if total 20 overs is not played, only 1st innings will be considered as valid</span>
        </td>
    </tr>
    <tr>
        <td>
            <span>Total Fours: Average 26 fours will be given in case match abandoned or over reduced</span>
        </td>
    </tr>
    <tr>
        <td>
            <span>Total Sixes: Average 12 Sixes will be given in case match abandoned or over reduced</span>
        </td>
    </tr>
    <tr>
        <td>
            <span>Total Wickets: Average 12 wickets will be given in case match abandoned or over reduced</span>
        </td>
    </tr>
    <tr>
        <td>
            <span>Total Wide: Average 8 Wide will be given in case match abandoned or over reduced</span>
        </td>
    </tr>
    <tr>
        <td>
            <span>Total Extras: Average 15 Extras will be given in case match abandoned or over reduced</span>
        </td>
    </tr>
    <tr>
        <td>
            <span>Total Run: Average 335 runs will be given in case match abandoned or over reduced</span>
        </td>
    </tr>
    <tr>
        <td>
            <p>Average will be given for player if the mentioned player is not included in the playing 11</p>
        </td>
    </tr>
    <tr>
        <td>
            <p>If the mentioned player is not included in playing 11 for 3 consecutive matches and the mentioned player will be deleted</p>
        </td>
    </tr>
    <tr>

        <td>
            <p>Super over will not be included</p>
        </td>
    </tr>
</table>   
          </div>
        )}
      </div>
      <div className="section">
        <div className="section-header" onClick={() => toggleSection('lunchFavourite')}>
          Lunch Favourite
        </div>
        {openSection === 'lunchFavourite' && (
          <div className="section-content">
          <table>
    <tr>
        <td>
            <p>1. The team which is favourite at lunch will be considered as the lunch favourite, or the team which is favourite after the first innings last ball will be considered as lunch favourite in our exchange.</p>
        </td>
    </tr>
    <tr>
        <td>
            <p>2. In any circumstances, management decision will be final.</p>
        </td>
    </tr>
    <tr>
        <td>
            <p>3. In case of a tie in T20 or one-day lunch favourite game, all bets will be deleted in our exchange.</p>
        </td>
    </tr>
    <tr>
        <td>
            <p>4. In case overs are reduced in a match, the team which is favourite at lunch will be considered as the lunch favourite.</p>
        </td>
    </tr>
    <tr>
        <td>
            <span>4.1 For example: If the match is reduced to 18 overs per side in T20 or One Day, then after 18 overs, the team which is favourite at lunch will be considered as the lunch favourite.</span>
        </td>
    </tr>
    <tr>
        <td>
            <p>5. In case of weather interruptions, if the first innings match overs are reduced and a direct target is given to the team which will bat in the second innings, then the lunch favourite will be considered after the target is given at lunch.</p>
        </td>
    </tr>
    <tr>
        <td>
            <span>5.1 For example: In a T20 match, if rain comes at 14 overs and the match is interrupted due to rain with a direct target given to the second batting team, then the team which is favourite in match odds after the target is given will be considered as the lunch favourite.</span>
        </td>
    </tr>
</table>

          </div>
        )}
      </div>
      <div className="section">
        <div className="section-header" onClick={() => toggleSection('bookmaker')}>
          Bookmaker
        </div>
        {openSection === 'bookmaker' && (
          <div className="section-content">
          <table>
    <tr>
        <td>
            <p>company reserves the right to suspend/void any ID/bets if the same is found to be illegitimate. Examples include VPN use, robot use, multiple entries from the same IP, multiple bets placed at the same time (punching), and others. Note: Only winning bets will be voided.</p>
        </td>
    </tr>
    <tr>
        <td>
            <p>Due to any reason where a team is receiving an advantage or disadvantage, we are not concerned.</p>
        </td>
    </tr>
    <tr>
        <td>
            <p>Company reserves the right to suspend/void any id/bets if the same is found to be illegitimate. For example incase of vpn/robot-use/multiple entry from same IP/ multiple bets at the same time (Punching) and others. Note : only winning bets will be voided.</p>
        </td>
    </tr>
    <tr>
        <td>
            <p>We will simply compare both teams scores after 25 overs to declare the winner in ODI matches (25 over comparison).</p>
        </td>
    </tr>
    <tr>
        <td>
            <p>We will simply compare both teams scores after 10 overs to declare the winner in T20 matches (10 over comparison).</p>
        </td>
    </tr>
    <tr>
        <td>
            <p>Any queries about the result or rates should be contacted within 7 days of the specific event. Queries will not be considered valid post 7 days from the event.</p>
        </td>
    </tr>
    <tr>
        <td>
            <p>If two teams end up with equal points, the result will be determined based on the official point table.</p>
        </td>
    </tr>
    <tr>
        <td>
            <p>We will simply compare both teams 6 overs higher score team will be declared winner in T20 matches (If both teams same score means, low wickets team will be declared winner. In case, both teams same score & same wickets means highest boundaries team will be declared winner.If all same then will be declared No result).</p>
        </td>
    </tr>
    <tr>
        <td>
            <p>Tennis:- Advance fancy market</p>
        </td>
    </tr>
    <tr>
        <td>
            <span>If the second set is not completed, all bets regarding this market will be voided.</span>
        </td>
    </tr>
    <tr>
        <td>
            <span>If a player retires after the completion of the second set, the market will be settled as if the match went to three sets.</span>
        </td>
    </tr>
    <tr>
        <td>
            <p>Virtual Cricket</p>
        </td>
    </tr>
    <tr>
        <td>
            <span>In any situation where the video gets interrupted or stopped due to technical issues, the bookmaker market will be voided.</span>
        </td>
    </tr>
</table>

          </div>
        )}
      </div>
      <div className="section">
        <div className="section-header" onClick={() => toggleSection('politics')}>
         Politics
        </div>
        {openSection === 'politics' && (
          <div className="section-content">
          <table>
    <tr>
        <td>
            <p>Indian State Legislative Assembly Elections</p>
        </td>
    </tr>
    <tr>
        <td>
            <span>1. This event is to decide the winner of various legislative assemblies of India.</span>
        </td>
    </tr>
    <tr>
        <td>
            <span>2. The final result declared by the Election Commission of India for assembly elections of various states of India for a particular year will be valid in our exchange. Customers are entirely responsible for their bets at all times.</span>
        </td>
    </tr>
    <tr>
        <td>
            <span>3. All bets will be voided if the election doesn’t take place within the given time as per the Election Commission or our exchange management decision.</span>
        </td>
    </tr>
    <tr>
        <td>
            <span>4. The company reserves the right to suspend/void any bets on this event at any time if they are found not to be legitimate with certainty of the outcome.</span>
        </td>
    </tr>
    <tr>
        <td>
            <span>5. Accidental issues during assembly elections will not be counted in our exchange. If required, additional candidates may be added upon request.</span>
        </td>
    </tr>
    <tr>
        <td>
            <span>6. Kindly be informed that no candidates will be partially settled and will remain in the market until they are fully settled. This ensures that all customers can continue trading for the candidates they have positions on, as each candidate is still a valid runner in this market.</span>
        </td>
    </tr>
    <tr>
        <td>
            <span>7. Please be informed that transmissions described as “live” by some broadcasters may actually be delayed due to various scenarios.</span>
        </td>
    </tr>
    <tr>
        <td>
            <span>8. If any candidate withdraws for any reason, including death, all bets on the market will be valid and will be settled as per the defined rules.</span>
        </td>
    </tr>
</table>

          </div>
        )}
      </div>
      <div className="section">
        <div className="section-header" onClick={() => toggleSection('fancy-market')}>
         Fancy Market
        </div>
        {openSection === 'fancy-market' && (
          <div className="section-content">
          <table>
  <tr>
    <td>
      <p>1. Even odd game betting rate rules.</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>1.1 Completed game is valid, in case due to rain overs are reduced or match abandoned, particular game will be deleted.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>1.2 All bets regarding to ODD/EVEN player/partnership are valid if one legal delivery is being played, else the bets will be deleted. Player odd/even all advance bets will be valid if one legal delivery is being played in match otherwise voided.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>1.3 All bets regarding Odd/Even sessions will be deleted if the particular session is incomplete, for example match got abandoned or finished before the end of particular session.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>1.4 In any circumstances management decision will be final.</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>2. Top batsman rules:-</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>2.1 If any player does not come as per playing eleven then all bets will be deleted for the particular player.</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>2.2 If two players make the same run in a single match (e.g., M Agarwal 30 runs and A Rayudu 30 runs), both players settlement will be done at 50% (50%, 50%) of their original value as given by our exchange.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Suppose we have opened value of M Agarwal 3.75 back and customer place bets on 10000 @ 3.75 rates and A Rayudu 3.0 back and customer place bets on 10000 @ 3.0 rates.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Whole inning result announces 30 run by both player then
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Rule of top batsman:-if you bet on M Agarwal you will be get half amount of this rate (10000*3.75/2=18750 you will get)
</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>Rule of top batsman:-if you bet on A Rayudu you will be get half amount of this rate (10000*3.00/2=15000 you will get)
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>Top batsman only 1st inning valid.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>For one day 50 over and for t-20 match 20 over must be played for top batsmen otherwise all bets will be deleted.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Man of the Match Rules
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>1. All bets will be deleted in case the match is abandoned or over reduced.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>2. All bets will be deleted if the mentioned player is not included in playing 11.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>3. In case Man of the Match is shared between two players then Dead heat rule will be applicable, For example K Perera and T Iqbal shares the Man of the Match, then the settlement will be done 50% of the rates accordingly.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>4. Rules similar to our Top Batsman rules.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Maximum Sixes by Team</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>1. All bets will be deleted if match abandoned or over reduced
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>2. All bets will be deleted if both the teams hits same number of sixes.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>3. Super over will not be considered.</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Maximum 6 or 10 over runs</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>1. All bets will be deleted if match abandoned or over reduced.</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>2. All the bets will be deleted if both the teams score is same (Runs scored in 6 or 10 overs)</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>3. 6 overs for T20 and 10 overs for ODI
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>4. Both the innings are valid.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>5. This fancy will be valid for 1st 6 overs of both innings for T20 and 1st 10 overs of both innings for ODI
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Batsman Match</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>Batsman Match:- Bets for Favourite batsman from the two batsman matched.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>All bets will be deleted if any one of the mentioned player is not included in playing 11.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>All bets will be deleted unless one ball being played by both the mentioned players.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>All bets will be deleted if over reduced or Match abandoned.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>All bets will be deleted if both the player scored same run. For example H Amla and J Bairstow are the batsman matched, H Amla and J Bairstow both scored 38 runs then all bets will be deleted.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Both innings will be valid</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Opening Pair
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>1. Bets for Favourite opening pair from the two mentioned opening pair.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>2. Runs made by both the opening player will be added. For example:- J Roy scored 20 runs and J Bairstow scored 30 runs result will be 50 runs.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>3. Highest run made by the pair will be declared as winner. For example: Opening pair ENG total is 70 runs and Opening pair SA is 90 runs, then SA 90 runs will be declared as winner.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Both innings will be valid
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Our exchange Special
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>All bets will be deleted if the mentioned player is not included in playing 11.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>All bets will be deleted if match abandoned or over reduced.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Both innings will be valid
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Direction of First Boundary
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>All bets will be deleted if match abandoned or over reduced.

</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>The boundary hit through off side of the stump will be considered as off side four.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>The boundary hit through leg side of the stump will be considered as leg side four.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Boundaries through extras (byes,leg byes,wide,overthrow) will not be considered as valid.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Only 1st Inning will be considered
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Fifty & Century by Batsman
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>All bets will be deleted if match abandoned or over reduced.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>All bets will be deleted if the mentioned batsman is not included in playing 11.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>All bets will be deleted unless the batsman faces one legal ball.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Both Innings will be valid.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>1st over Fancy
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>Boundaries through extras (byes,leg byes,wide,overthrow) will not be considered.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Odd Even Fancy

</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>Incompleted games will be deleted. Over reduced or abandoned all bets will be deleted.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>For example:-275 run SL bhav must be played 50 over if rain comes or any condition otherwise 275 run SL bets will be deleted.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Next Man out
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>Next man out fancy advance & in regular. Both inning will be valid. If any player does not come in opening then all bets will be deleted. If over reduced or abandoned then all bets will be deleted.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Caught out
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>Caught out fancy in advance & in regular. Both inning will be valid. If over reduced or match abandoned then all bets will be deleted.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Wkt & All out Fancy
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>5 wkt in 10 over & All out in 20 over fancy is valid for both inning. If match abandoned or over reduced all bets will be deleted.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Test Match: Game Completed Fancy
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>1. This is the fancy for match to be won/ completed in which day & session (Completed: Game has to be completed)

</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>2. If match drawn then all the sessions will be considered as lost.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Meter Fancy
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>In case match abandoned or over reduced mid point rule will be applicable
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>For example: If Dhoni meter is 75 / 77 and the match abandoned or over reduced, then the result will be 76
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>In case of single difference result will be given for the higher rate of the final rate (eg 53/54) and match gets abandoned then the result will be given as 54
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Midpoint rule is applicable for test match also. However for lambi meter/ inning meter 70 overs has to be played only then the same will be considered as valid
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Maximum Boundaries:-</p>
    </td>
  </tr>

  <tr>
    <td>
      <span>If the number of fours or sixes of both the team is equal, then all bets of the respective event will get voided
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Khado:- Test
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>Minimum 70 over has to be played by the particular team only then the Khado of the team will be considered as valid, else the same will be voided
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Only Over Rule
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>Only over session is not completed mid over so that Particular over session bets will be deleted.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>In case due to rain or match abandoned particular only session will be deleted.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Ex :- 17.3 over team all out/run chase so only 18 over session bets will be deleted. in case 17.4 over team all out/run chase so only 18 over session bets will be valid.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Penalty Runs Rule
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>Penalty runs will be counted in all fancy. (This rule applicable from 20th March 2024)
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Total Match Fancy
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Match Six Hitters :- Number of players who hit six in a match. For Example :- 1st inning 5 players come for Batting and hit a six by 3 batsman & same as a 2nd inning 6 players come to bat and hit a six by 2 batsman. Result is 3 + 2 = 5
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Match Four Hitters :- Number of players who hit four in match. For example:- 1st inning 6 players come for batting and hit a four by 4 batsman & same as a 2nd inning 5 players come for batting and hit a four by 3 batsmen. Result is 4 + 3 = 7
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Match Wicket Takers :- Number of bowlers who take a wkt in match. For example :- 1st inning 5 bowlers come to bowling and wkt taker 3 bowlers & same as a 2nd inning 4 bowlers come to bowling and wkt taker 2 bowlers. Result is 3 + 2 = 5
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>100 balls Event: The events for 1 to 100 balls will be considered valid only if the number of balls mentioned has been played completely. However if the balls got reduced before the particular event then the same will be voided, if the team batting first get all out prior to 100 balls the balance balls will be counted from second innings. For example if team batting first gets all out in 81 balls balance 19 balls will be counted from second innings and that 19 balls all events are counted. This same is valid for 1st Innings only.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>1. All fancy bets will be validated when match has been tied.
</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>2. All advance fancy will be suspended before toss or weather condition.
</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>3. In case technical error or any circumstances any fancy is suspended and does not resume result will be given all previous bets will be valid (based on haar/jeet).
</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>4. If any case wrong rate has been given in fancy that particular bets will be cancelled.
</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>5. In any circumstances management decision will be final related to all exchange items. Our scorecard will be considered as valid if there is any mismatch in online portal
</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>6. In case customer make bets in wrong fancy we are not liable to delete, no changes will be made and bets will be consider as confirm bet.
</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>7. Due to any technical error market is open and result has came all bets after result will be deleted.
</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>8. Manual bets are not accepted in our exchange
</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>9.Our exchange will provide 5 second delay in our tv.
</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>10. Company reserves the right to suspend/void any id/bets if the same is found to be illegitimate. For example incase of vpn/robot-use/multiple entry from same IP/ multiple bets at same time (Punching) and others. Note : only winning bets will be voided, For example: If we find such entries (above mentioned) from any id and their bets are (200000 lay in a 6 over session for the rate 40 and 200000 back for the rate of 48) and the actual score is 38, bets of 40 lay will be voided and the bets for 48 back will be considered valid.
</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>11. Company reserves the right to void any bets (only winning bets) of any event at any point of the match if the company believes there is any cheating/wrong doing in that particular event by the players (either batsman/bowler)
</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>12. Once our exchange give username and password it is your responsibility to change a password.
</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>14. Warning:- live scores and other data on this site is sourced from third party feeds and may be subject to time delays and/or be inaccurate. If you rely on this data to place bets, you do so at your own risk. Our exchange does not accept responsibility for loss suffered as a result of reliance on this data.
</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>15.Traders will be block the user ID if find any misinterpret activities, No queries accept regarding.
</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>16. Our exchange is not responsible for misuse of client id.
</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>Test
</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>1 Session:-
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>1.1 Complete session valid in test.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>1.2 Middle session and Session is not completed due to Innings declared or all out so that particular over considered as completed and remaining over counted in next team Innings for ex:- In case of Innings declared or all out In 131.5th over Considered as 132 over completed remaining 1 over counted for 133 over middle session and 3 over counted for 135 over session from next team Innings and One over session and Only over session is not completed due to innings declared so that Particular over session bets will be deleted and all out considered as valid for ex:- In case of Innings declared In 131.5th over so 132 over will be deleted and if all out then 132 over and Only 132 over will be Valid.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>1.3 1st day 1st session run minimum 25 over will be played then result is given otherwise 1st day 1st session will be deleted.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>1.4 1st day 2nd session run minimum 25 over will be played then result is given otherwise 1st day 2nd session will be deleted.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>1.5 1st day total run minimum 80 over will be played then result is given otherwise 1st day total run will be deleted. If a team get All Out before the day stumps, the other team&apos;s 1st day score will be added to 1st day total run event. (i.e. AUSTRALIA got all out at 251 before the day stumps, then ENGLAND hit 100 runs in the remaining overs of 1st day, so the result of 1st day total run event will be 351).
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>1.6 Test Match advance session is Valid in only 1st inning.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>2 Test lambi/ Inning run:-
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>2.1 Mandatory 70 over played in test lambi paari/ Innings run. If any team all-out or declaration lambi paari/ innings run is valid.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>2.2 In case due to weather situation match has been stopped all lambi trades will be deleted.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>2.3 In test both lambi paari / inning run is valid in advance fancy.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>3 Test batsman:-
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>3.1 In case batsmen is injured he/she is made 34 runs the result will be given 34 runs.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>3.2 Batsman 50/100 run if batsman is injured or declaration the result will be given on particular run.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>3.3 In next men out fancy if player is injured particular fancy will be deleted.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>3.4 In advance fancy opening batsmen is only valid if same batsmen came in opening the fancy will be valid in case one batsmen is changed that particular player fancy will be deleted.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>3.5 Test match advancefancy batsman Run valid in only 1st inning.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>4 Test partnership:-
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>4.2 Partnership and player runs due to weather condition or match abandoned the result will be given as per score.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>4.3 Advance partnership is valid in case both players are different or same.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>4.4 Test Match advance fancy partnership is valid in only 1st inning.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>5 Other fancy advance (test):-
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>5.1 Four, sixes, wide, wicket, extra run, total run, highest over and top batsmen is valid only if 300 overs has been played or the match has been won by any team otherwise all these fancy will be deleted. Additionally all events are valid only for 1st innings( this is applicable to all individual team events also)
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>2 Odi rule:-
</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>Session:-
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>Match 1st over run advance fancy only 1st innings run will be counted.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Complete session is valid in case due to rain or match abandoned particular session will be deleted.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>For example:- 35 over run team a is playing any case team A is all-out in 33 over team a has made 150 run the session result is validated on particular run.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Advance session is valid in only 1st innings.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>50 over runs:-
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>In case 50 over is not completed all bet will be deleted due to weather or any condition.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Advance 50 over runs is valid in only 1st innings.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Odi batsman runs:-
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>In case batsman is injured he/she is made 34 runs the result will be given 34 runs.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>In next men out fancy if player is injured particular fancy will be deleted.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>In advance fancy opening batsmen is only valid if same batsmen came in opening the fancy will be valid in case one batsmen is changed that particular player fancy will be deleted.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Odi partnership runs:-
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>Advance partnership is valid in case both players are different or same.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Only 1st inning partnerships are valid in particular match.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Other fancy:-
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>Four, sixes, wide, wicket, extra run, total run, highest over ,top batsman,maiden over,caught-out,no-ball,run-out,fifty and century are valid only match has been completed in case due to rain over has been reduced all other fancy will be deleted.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>T20:-
</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>Session:-
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>Match 1st over run advance fancy only 1st innings run will be counted.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Complete session is valid in case due to rain or match abandoned particular session will be deleted.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>For example :- 15 over run team a is playing any case team a is all-out in 13 over team A has made 100 run the session result is validated on particular run.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Advance session is valid in only 1st innings.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>20 over runs:-
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>Advance 20 over run is valid only in 1st innings. 20 over run will not be considered as valid if 20 overs is not completed due to any situation
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>T20 batsman runs:-
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>In case batsman is injured he/she is made 34 runs the result will be given 34 runs.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>In next men out fancy if player is injured particular fancy will be deleted.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>In advance fancy opening batsmen is only valid if same batsmen came in opening the fancy will be valid in case one batsmen is changed that particular player fancy will be deleted.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>T20 partnership runs:-
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>Advance partnership is valid in case both players are different or same.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Only 1st inning partnerships are valid in particular match.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>1st 2 & 3 Wickets runs:- T20/ODI
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>Advance event is valid in only 1st Innings.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>If over reduced due to rain or weather condition or match abandoned the result will be given as per score.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Other fancy:-
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>T-20 ,one day and test match in case current innings player and partnership are running in between match has been called off or abandoned that situation all current player and partnership results are valid.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Four, sixes, wide, wicket, extra run, total run, highest over and top batsman,maiden over,caught-out,no-ball,run-out,fifty and century are valid only match has been completed in case due to rain over has been reduced all other fancy will be deleted. 1st 6 over dot ball and 20 over dot ball fancy only valid is 1st innings.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>1st wicket lost to any team balls meaning that any team 1st wicket fall down in how many balls that particular fancy at least minimum one ball have to be played otherwise bets will be deleted.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>1st wicket lost to any team fancy valid both innings.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>How many balls for 50 runs any team meaning that any team achieved 50 runs in how many balls that particular fancy at least one ball have to be played otherwise that fancy bets will be deleted.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>How many balls for 50 runs fancy any team only first inning valid.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>1st 6 inning boundaries runs any team fancy will be counting only according to run scored fours and sixes at least 6 over must be played otherwise that fancy will be deleted.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>1st inning 6 over boundaries runs any team run like wide ,no-ball ,leg-byes ,byes and over throw runs are not counted this fancy.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>How many balls face any batsman meaning that any batsman how many balls he/she played that particular fancy at least one ball have to be played otherwise that fancy bets will be deleted.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>How many balls face by any batsman both innings valid.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Lowest scoring over will be considered valid only if the over is completed fully (all six deliveries has to be bowled)
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Concussion in Test:-
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>All bets of one over session will be deleted in test scenario, in case session is incomplete. For example innings declared or match suspended to bad light or any other conditions.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>1. All bets will be considered as valid if a player has been replaced under concussion substitute, result will be given for the runs scored by the mentioned player. For example DM Bravo gets retired hurt at 23 runs, then result will be given for 23.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>2. Bets of both the player will be valid under concussion substitute.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Total Match- Events (test):-
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>Minimum of 300 overs to be bowled in the entire test match, otherwise all bets related to the particular event will get void. For example, Total match caught outs will be valid only if 300 overs been bowled in the particular test match
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Limited over events-Test:-
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>This event will be considered valid only if the number of overs defined on the particular event has been bowled, otherwise all bets related to this event will get void. For example 0-25 over events will be valid only if 25 overs has been bowled, else the same will not be considered as valid
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>If the team gets all out prior to any of the defined overs, then balance overs will be counted in next innings. For example if the team gets all out in 23.1 over the same will be considered as 24 overs and the balance overs will be counted from next innings.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Bowler Wicket event&apos;s- Test:-
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>Minimum of one legal over (one complete over) has to be bowled by the bowler mentioned in the event, else the same will not be considered as valid
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Bowler over events- Test:-
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>The mentioned bowler has to complete the defined number of overs, else the bets related to that particular event will get void. For example if the mentioned bowler has bowled 8 overs, then 5 over run of that particular bowler will be considered as valid and the 10 over run will get void
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Player ball event&apos;s- Test:-
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>This event will be considered valid only if the defined number of runs made by the mentioned player, else the result will be considered as 0 (zero) balls
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>For example if Root makes 20 runs in 60 balls and gets out on 22 runs, result for 20 runs will be 60 balls and the result for balls required for 25 run Root will be considered as 0 (Zero) and the same will be given as result
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Limited over events-ODI:-
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>This event will be considered valid only if the number of overs defined on the particular event has been bowled, otherwise all bets related to this event will get void. 0-50 over events will be valid only if 50 over completed, if the team batting first get all out prior to 50 over the balance over will be counted from second innings. For example if team batting first gets all out in 35 over balance 15 over will be counted from second innings, the same applies for all events if team gets all out before the defined number of overs
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>The events which remains incomplete will be voided if over gets reduced in the match due to any situation, for example if match interrupted in 15 overs due to rain/badlight and post this over gets reduced. Events for 0-10 will be valid, all other events related to this type will get deleted.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>This events will be valid only if the defined number of over is completed. For example team batting first gets all out in 29.4 over then the same will be considered as 30 over, the team batting second must complete 20 overs only then 0-50 over events will be considered as valid. In case team batting second gets all out in 19.4 over then 0-50 over event will not be considered as valid, This same is valid for 1st Innings only.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Bowler event- ODI:-
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>The mentioned bowler has to complete the defined number of overs, else the bets related to that particular event will get void. For example if the mentioned bowler has bowled 8 overs, then 5 over run of that particular bowler will be considered as valid and the 10 over run will get void
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Both innings are valid
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Other event:- T20
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>The events for 1-10 over and 11-20 over will be considered valid only if the number of over mentioned has been played completely. However if the over got reduced before the particular event then the same will be voided, if the team batting first get all out prior to 20 over the balance over will be counted from second innings. For example if team batting first gets all out in 17 over balance 3 over will be counted from second innings and that 3 over all events are counted. This same is valid for 1st Innings only.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>If over got reduced in between any running event, then the same will be considered valid and the rest will be voided. For example.., match started and due to rain/bad light or any other situation match got interrupted at 4 over and later over got reduced. Then events for 1-10 is valid rest all will be voided
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Bowler Session: Bowler session advance events only valid for 1st inning. This event is valid only if the bowler has completed his maximum quota of overs, else the same will be voided. However if the match has resulted and the particular bowler has already started bowling his final over then result will be given even if he haven&apos;t completed the over. For example B Kumar is bowling his final over and at 3.4 the match has resulted then result will be given for B Kumar over runs
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Incase of DLS, the over got reduced then the bowler who has already bowled his maximum quota of over that result will be considered as valid and the rest will be voided
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Dot ball Event:
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>Only No run will count as dot ball.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>If wicket means that will not count as dot ball.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Most Dot balls By a Bowler Event:
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>Leg bye run and wickets considered as Dot ball in bowler
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Boundary on Match 1st Free hit
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>Both innings are valid
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Boundary hit on Free hit only be considered as valid
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Bets will be deleted if there is no Free hit in the mentioned match
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Boundary by bat will be considered as valid
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Boundaries by Player
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>Both Four and six are valid
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>No Boundaries Event:
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>Both Four and Six are valid
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Batsman bat boundaries only considered as valid
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Free hit boundaries also valid
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Bets will be voided if that particular ball not completed
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Result will be Given 0 or 4 (No or Yes). For Example batsman hit boundary in particular ball means Result is 0 otherwise Result is 4.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Any query regarding result or rate has to be contacted within 7 days from the event, query after 7 days from the event will not be considered as valid
</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>Virtual Cricket
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>Scorecard available on the video will be considered as valid. At any situation, if there is a difference between the scorecard in the website and the scorecard available on video. Score card available on video will be valid
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>In case of any technical issues the video gets interrupted/stopped and the same cannot be continued, the existing markets will be voided. However the markets which are already finished/settled will remain valid.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>CPL:-
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>If CPL fixture 0f 33 matches gets reduced due to any reason, then all the special fancies will be voided (Match abandoned due to rain/bad light will not be considered in this)
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Fancy based on all individual teams are valid only for league stage
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total 1st over runs: Average 6 runs will be given in case match abandoned or over reduced
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total fours: Average 22 fours will be given in case match abandoned or over reduced
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total sixes: Average 13 sixes will be given in case match abandoned or over reduced
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Wickets - Average will 13 Wickets be given in case match abandoned or over reduced
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Wides - Average 10 wides will be given in case match abandoned or over reduced
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Extras - Average 18 extras will be given in case match abandoned or over reduced
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total No ball - Average 1 no ball will be given in case match abandoned or over reduced
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Fifties - Average 1 fifties will be given in case match abandoned or over reduced
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Caught outs: Average 9 caught out will be given in case match abandoned or over reduced
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>At any situation if result is given for any particular event based on the rates given for the same, then the particular result will be considered valid, similarly if the tournament gets canceled due to any reason the previously given result will be considered valid
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Management decision will be final
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Highest innings run - Only first innings is valid
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Lowest innings run - Only first innings is valid
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Highest over run: Both innings are valid
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Highest 1st over run in individual match: Both innings are valid, however for CPL we have created the fancy for 1st innings only
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Highest Fours in individual match: Both innings are valid
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Highest Sixes in individual match: Both innings are valid
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Highest Extras in individual match: Both innings are valid
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Highest Wicket in individual match: Both innings are valid
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Super over will not be included
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Barbados Tridents
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>Opening partnership run: Average 24 runs will be given in case match abandoned or over reduced
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>First 6 over run: Average 45 run will be given in case match abandoned or over reduced
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>St Kitts and Nevis Patriots
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>Opening partnership run: Average 25 runs will be given in case match abandoned or over reduced
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>First 6 over run: Average 45 run will be given in case match abandoned or over reduced
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Trinbago Knight Riders
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>Opening partnership run: Average 22 runs will be given in case match abandoned or over reduced
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>First 6 over run: Average 46 run will be given in case match abandoned or over reduced
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Guyana Amazon Warriors
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>Opening partnership run: Average 23 runs will be given in case match abandoned or over reduced
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>First 6 over run: Average 44 run will be given in case match abandoned or over reduced
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>St Lucia Zouks
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>Opening partnership run: Average 22 runs will be given in case match abandoned or over reduced
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>First 6 over run: Average 43 run will be given in case match abandoned or over reduced
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Jamaica Tallawahs
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>Opening partnership run: Average 24 runs will be given in case match abandoned or over reduced
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>First 6 over run: Average 46 run will be given in case match abandoned or over reduced
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>Tour Special Events
</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>Australia tour of Sri Lanka, 2022
</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>If first match of tour (T20 or ODI) cancelled or over reduce in first match, then all special fancy events will be deleted
</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>If First match played completely and next match gets over reduced or cancelled, then that match bets all bets will be deleted and first match bets will be valid and average will count in other bets
</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>Ex. : First match total 4&apos;s is 20 and second match over reduced so bets after first match upto second match started that all deleted and for other bets average counted total 4&apos;s is 24 and third match total 4&apos;s is 26, So Result of Total 4&apos;s is 70
</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>T20 :
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Matches 1st over runs : Average 6 runs will be given in case match abandoned or over reduced (only 1st innings valid)
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Matches 1st 6 over runs : Average 45 runs will be given in case match abandoned or over reduced (Only 1st Innings valid)
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total fours: Average 24 fours will be given in case match abandoned or over reduced
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total sixes: Average 9 sixes will be given in case match abandoned or over reduced
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Boundaries: Average 33 Boundaries will be given in case match abandoned or over reduced
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Fifties - Average 2 Fifties will be given in case match abandoned or over reduced
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Wickets - Average 12 Wickets will be given in case match abandoned or over reduced
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Wides - Average 8 Wides will be given in case match abandoned or over reduced
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Extras - Average 15 Extras will be given in case match abandoned or over reduced
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Caught outs: Average 8 Caught out will be given in case match abandoned or over reduced
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Bowled:- Average 2 Bowled out will be given in case match abandoned or over reduced
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total LBW:- Average 2 LBW will be given in case match abandoned or over reduced
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Total Run out:- Average 1 Run out will be given in case match abandoned or over reduced
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>At any situation if result is given for any particular event based on the rates given for the same, then the particular result will be considered valid, similarly if the tournament gets canceled due to any reason the previously given result will be considered valid
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>Most runs given by Bowler in an Inning of Tour : Maximum How much Runs conceded by a individual Bowler in an Innings. Ex : For T20I How much runs conceded by a bowler in his 4 overs Quota.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Highest total runs in individual match of IPL : Maximum Total runs of both Teams in individual match.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Highest innings run - Only first inning is valid
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Highest Partnership - Both innings are valid
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Highest 1st over run of individual match: only first inning is valid
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Highest Fours of individual match: Both innings are valid
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Highest Sixes of individual match: Both innings are valid
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Highest Extras of individual match: Both innings are valid
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Highest over run: Both innings are valid
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Top Batsman Runs in Tour : Most runs by an Individual Player in any Individual matches in ODI/T20I Format of Tour
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Highest Wickets by Bowler in Tour : Most Wickets taken by Individual Player in Overall ODI/T20I Format of Tour
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Highest Over runs in Tour : Most Runs Scored in Any Single Over of any Individual Match in Overall ODI/T20I Format of Tour
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Player Total Runs : Total Runs Scored by an Individual Player in Full ODI/T20I Format of Tour
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Player Total 4s : Total 4s Hitted by an Individual Player in Full ODI/T20I Format of Tour
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Player Total 6s : Total 6s Hitted by an Individual Player in Full ODI/T20I Format of Tour
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>Player Boundaries : Total Boundaries Hitted by an Individual Player in Full ODI/T20I Format of Tour
</span>
    </td>
  </tr>
  <tr>
    <td>
      <p>For Player based Events, If any Player not in playing 11 suppose First match any player played completely but if same player not available in next match, then that match bets all bets will be deleted and first match bets will be valid and average will count in other bets
</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>If any one match not in Playing 11 means Average Given for that match
</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>Average For Players:
</p>
    </td>
  </tr>
  <tr>
    <td>
      <span>A Finch Total Runs, Boundaries, 4s and 6s : 26,4,3 & 1.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>D Warner Total Runs, Boundaries, 4s and 6s : 28,5,4& 1.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>P Nissanka Total Runs, Boundaries, 4s and 6s : 22,3,2 & 1.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>D Gunathilaka Total Runs, Boundaries, 4s and 6s : 23,3,2 & 1.
</span>
    </td>
  </tr>
  <tr>
    <td>
      <span>J Hazlewood,M Starc,D Chameera & M Theekshana : 2 wkts Average given if player not in playing 11.
</span>
    </td>
  </tr> 
</table>


          </div>
        )}
      </div>
      <div className="section">
        <div className="section-header" onClick={() => toggleSection('ipl')}>
         IPL
        </div>
        {openSection === 'ipl' && (
          <div className="section-content">
        <table>
          <tr>
            <td>
              <p>IPL Special 2024 Valid Only For First 21 Matches. If IPL fixture of 21 matches gets reduced due to any reason, then all the special fancies will be voided (Match abandoned due to rain/bad light will not be considered in this)</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Management decision will be final</p>
            </td>
          </tr>
          <tr>
            <td>
              <span>Total 1st over runs: Average 6 runs will be given in case match abandoned or over reduced (only 1st innings valid)</span>
            </td>
          </tr>

          <tr>
            <td>
              <span>Total fours: Average 28 fours will be given in case match abandoned or over reduced</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Total sixes: Average 14 sixes will be given in case match abandoned or over reduced</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Total Wickets - Average will 12 Wickets be given in case match abandoned or over reduced</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Total Wides - Average 10 wides will be given in case match abandoned or over reduced</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Total Extras - Average 17 extras will be given in case match abandoned or over reduced</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Total No ball :- Average 1 No ball will be given in case match abandoned or over reduced</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Total Fifties - Average 2 fifties will be given in case match abandoned or over reduced</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Total Caught outs: Average 8 caught out will be given in case match abandoned or over reduced</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Total Bowled:- Average 2 Bowled out will be given in case match abandoned or over reduced</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Total LBW:- Average 1 LBW will be given in case match abandoned or over reduced</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Total Run out:- Average 1 Run out will be given in case match abandoned or over reduced</span>
            </td>
          </tr>
          <tr>
            <td>
              <p>At any situation if result is given for any particular event based on the rates given for the same, then the particular result will be considered valid, similarly if the tournament gets canceled due to any reason the previously given result will be considered valid</p>
            </td>
          </tr>
          <tr>
            <td>
              <span>How many matches win by a team : Only valid for league stage matches. Ex. For CSK, How many matches CSK win during league stages only considered. Playoffs matches not considered in this.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Most 4&apos;s by individual batsman of IPL : Maximum Number of Fours Hit By A Batsman in full Tournament. Ex. Last Season (2021) R Gaikwad Hit 64 Fours in 16 Matches. So, 64 was the Result for last season.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Most 4&apos;s by an individual batsman in an Inning of IPL : Maximum Number of Fours Hit By A Batsman in one Innings. Ex. Last Season (2021) S Yadav Hit 13 Fours in 55th league Match. So, 13 was the Result for last season.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Most 6&apos;s by individual batsman of IPL : Maximum Number of Sixes Hit By A Batsman in full Tournament. Ex. Last Season (2021) KL Rahul Hit 30 Sixes in 13 Matches. So, 30 was the Result for last season.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Most 6&apos;s by individual batsman in an Inning of IPL : Maximum Number of Sixes Hit By A Batsman in one Innings. Ex. Last Season (2021) K Pollard Hit 8 Sixes in 27th league Match. So, 8 was the Result for last season.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Most runs given by Bowler in an Inning of IPL : Maximum How much Runs conceded by a individual Bowler in an Innings. Ex : Last Season (2021) L Ngidi concede 62 runs in 4 overs of 27th Match. So, 62 was the Result for last season.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Most wickets by Bowler in an inning of IPL : Maximum How much Wickets taken by a individual Bowler in an Innings. Ex : Last Season (2021) H Patel taken 5 wickets in 1st Match. So, 5 was the Result for last season.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Most 50&apos;s by individual batsman of IPL : Maximum Number of Fifties Hit By A Batsman in full Tournament. Ex. Last Season (2021) Faf duPlessis Hit 6 fifties in 16 Matches. So, 6 was the Result for last season.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Highest total runs in individual match of IPL : Maximum total runs of both Teams in individual match. Ex . Last Season (2021) RR vs PBKS match both teams Total runs 438 (4th League Match) . So, 438 was the Result for Last Season.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Highest Innings run - Only first Innings is valid</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Lowest innings run - Only first innings is valid</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Highest over run: Both innings are valid</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Highest Match 1st over run in individual match: Only first innings is valid</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Highest Fours in individual match: Both innings are valid</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Highest Sixes in individual match: Both innings are valid</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Highest Extras in individual match: Both innings are valid</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Highest Wicket in individual match: Both innings are valid</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Highest 6 over run: - Both innings are valid</span>
            </td>
          </tr>
          <tr>
            <td>
              <p>Super over will not be included</p>
            </td>
          </tr>
          <tr>
            <td>
              <span>In fastest fifty always the first 50 runs will be considered, for example of R Sharma scores 1st fifty in 17 balls and scores 100 in next 14 balls, fastest 50 will be given based on the balls for the 1st fifty runs</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Total No ball :- Average 1 No ball</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Total 30s: Average 2 Thirties</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Highest Match 1st 6 over run: Only first Innings is valid</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Highest Partnership Runs in IPL: Both Innings are valid</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Most Balls Faced By a Batsman of IPL : Maximum balls Faced by an Individual Batsman in the Single M</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Most Dot balls By a Bowler in an Innings of IPL : Maximum Dot balls Bowled by a Bowler in his Quota. Wickets, Leg byes and Byes Considered as Dot ball</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Highest Match 1st over run: Only first Innings is valid</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Highest Partnership Runs in IPL: Both Innings are valid</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Total Impact over’s: Number of over’s scored 10 runs or above. Team wise only 1st inning are valid and Match wise both innings are valid.</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Bowler Event :- 2 Over Wkts , Dotballs , Boundaries , Runs bets vaild in 1st Two Overs (1st inning Vaild ) The mention Bowler has to Run(Start over) the defined number of Overs , else the bets related to that particular event will get void. For example if the mentioned bowler has bowled 3 Overs , then 2 Over of that particular bowler will be considered as valid and the 4 Over will get void. If team get all out in the mentioned bowler Running Over then result considered as valid.. For example mentioned bowler 1.4 Over bowled & team all out in 19.4 then bowler 2nd over result is valid and 4th over fancy is voided Or Bowler bowled 3.3 over & team all out on 19.3 then Both 2 & 4 over is valid.</span>
            </td>
          </tr>
         
        </table>

          </div>
        )}
      </div>
      <div className="section">
        <div className="section-header" onClick={() => toggleSection('wpl')}>
         Women&apos;s  Premier League (WPL)
        </div>
        {openSection === 'wpl' && (
          <div className="section-content">
        <table>
          <tr>
            <td> <span>1. If WPL fixture of 22 matches gets reduced due to any reason, then all the special fancies will be voided (Match abandoned due to rain/bad light will not be considered in this).</span></td>
          </tr>
          <tr>
            <td> <span>2. Total matches 1st over runs : Average 5 runs will be given in case match abandoned or over reduced (only 1st innings valid).</span></td>
          </tr>
          <tr>
            <td> <span>3. Total matches 1st 6 over runs:- Average 40 runs will be given in case match abandoned or over reduced (Only 1st Innings valid).</span></td>
          </tr>
          <tr>
            <td> <span>4. Total 4&apos;s : Average 32 fours will be given in case match abandoned or over reduced</span></td>
          </tr>
          <tr>
            <td> <span>5. Total 30&apos;s: Average 2 sixes will be given in case match abandoned or over reduced.</span></td>
          </tr>
          <tr>
            <td> <span>6. Total 50&apos;s - Average 1 fifties will be given in case match abandoned or over reduced.</span></td>
          </tr>
          <tr>
            <td> <span>7. Total Wickets - Average will 12 Wickets be given in case match abandoned or over reduced.</span></td>
          </tr>
          <tr>
            <td> <span>8. At any situation if result is given for any particular event based on the rates given for the same, then the particular result will be considered valid, similarly if the tournament gets canceled due to any reason the previously given result will be considered valid.
</span></td>
          </tr>
          <tr>
            <td> <span>9. Highest innings run - Both innings are valid.
</span></td>
          </tr>
          <tr>
            <td> <span>10. Lowest innings run - Only first innings is valid.
</span></td>
          </tr>
          <tr>
            <td> <span>11. Highest Match 1st over runs in the match: Only first innings is valid.
</span></td>
          </tr>
          <tr>
            <td> <span>12. Highest 1st 6 over runs: - Only first innings is valid.
</span></td>
          </tr>
          <tr>
            <td> <span>13. Highest 4&apos;s in individual match: Both innings are valid.
</span></td>
          </tr>
          <tr>
            <td> <span>14. Highest Wickets in individual match: Both innings are valid.
</span></td>
          </tr>
          <tr>
            <td> <span>15. Highest over runs: Both innings are valid.
</span></td>
          </tr>
          <tr>
            <td> <span>16. Most Balls Faced By a Batsman : Maximum Balls Faced by a batsman in one Innings.
</span></td>
          </tr>
          <tr>
            <td> <span>17. Most 4&apos;s by individual batsman in an Inning : Maximum Number of Fours Hit By A Batsman in one Innings.
</span></td>
          </tr>
          <tr>
            <td> <span>18. Most Dot balls By a Bowler in an Inning : Maximum Dot balls Bowled by a Bowler in his Quota of Innings.
</span></td>
          </tr>
          <tr>
            <td> <span>19. Most runs given by Bowler in an Inning : Maximum Runs conceded by a individual Bowler in an Innings.
</span></td>
          </tr>
          <tr>
            <td> <span>20. Most wickets by Bowler in an inning : Maximum Wickets taken by a individual Bowler in an Innings.
</span></td>
          </tr>
          <tr>
            <td> <span>21. In fastest fifty always the first 50 runs will be considered, for example of S Mandhana scores 1st fifty in 17 balls and scores 100 in next 14 balls, fastest 50 will be given based on the balls for the 1st fifty runs Super over will not be included.
</span></td>
          </tr>
        </table>

          </div>
        )}
      </div>
      <div className="section">
        <div className="section-header" onClick={() => toggleSection('psl')}>
         Pakistan Super League (PSL)
        </div>
        {openSection === 'psl' && (
          <div className="section-content">
        <table>
          <tr>
            <td> <span>1. If PSL fixture of 34 matches gets reduced due to any reason, then all the special fancies will be voided (Match abandoned due to rain/bad light will not be considered in this).
</span></td>
          </tr>
          <tr>
            <td> <span>2. Total Matches 1st over runs : Average 6 runs will be given in case match abandoned or over reduced (only 1st innings valid).
</span></td>
          </tr>
          <tr>
            <td> <span>3. Total Matches 1st 6 over runs : Average 50 runs will be given in case match abandoned or over reduced (Only 1st Innings valid).
</span></td>
          </tr>
          <tr>
            <td> <span>4. Total fours: Average 32 fours will be given in case match abandoned or over reduced.
</span></td>
          </tr>
          <tr>
            <td> <span>5. Total sixes: Average 13 sixes will be given in case match abandoned or over reduced.
</span></td>
          </tr>
          <tr>
            <td> <span>6. Total 30&apos;s: Average 2 Thirties will be given in case match abandoned or over reduced.
</span></td>
          </tr>
          <tr>
            <td> <span>7. Total Fifties - Average 2 Fifties will be given in case match abandoned or over reduced.
</span></td>
          </tr>
          <tr>
            <td> <span>8. Total Wickets - Average 13 Wickets will be given in case match abandoned or over reduced.
</span></td>
          </tr>
          <tr>
            <td> <span>9. Total Wides - Average 11 Wides will be given in case match abandoned or over reduced.
</span></td>
          </tr>
          <tr>
            <td> <span>10. Total Extras - Average 18 Extras will be given in case match abandoned or over reduced.
</span></td>
          </tr>
          <tr>
            <td> <span>11. Total Caught outs: Average 8 Caught out will be given in case match abandoned or over reduced.
</span></td>
          </tr>
          <tr>
            <td> <span>12. Total Bowled:- Average 2 Bowled out will be given in case match abandoned or over reduced.
</span></td>
          </tr>
          <tr>
            <td> <span>13. Total LBW:- Average 1 LBW will be given in case match abandoned or over reduced.
</span></td>
          </tr>
          <tr>
            <td> <span>14. Total Run out:- Average 1 Run out will be given in case match abandoned or over reduced At any situation if result is given for any particular event based on the rates given for the same, then the particular result will be considered valid, similarly if the tournament gets canceled due to any reason the previously given result will be considered valid.
</span></td>
          </tr>
          <tr>
            <td> <span>15. Highest innings run - Both innings are valid.
</span></td>
          </tr>
          <tr>
            <td> <span>16. Lowest innings run - Only first innings is valid.
</span></td>
          </tr>
          <tr>
            <td> <span>17. Highest Match 1st over runs in the match: Only first innings is valid.
</span></td>
          </tr>
          <tr>
            <td> <span>18. Highest 1st 6 over runs: - Only first innings is valid.
</span></td>
          </tr>
          <tr>
            <td> <span>19. Highest 4&apos;s in individual match: Both innings are valid.
</span></td>
          </tr>
          <tr>
            <td> <span>20. Highest 6&apos;s in individual match: Both innings are valid.
</span></td>
          </tr>
          <tr>
            <td> <span>21. Highest Wickets in individual match: Both innings are valid.
</span></td>
          </tr>
          <tr>
            <td> <span>22. Highest Extras in individual match: Both innings are valid.
</span></td>
          </tr>
          <tr>
            <td> <span>23. Highest over runs: Both innings are valid.
</span></td>
          </tr>
          <tr>
            <td> <span>24. Most Balls Faced By a Batsman : Maximum Balls Faced by a batsman in one Innings.
</span></td>
          </tr>
          <tr>
            <td> <span>25. Most 4&apos;s by individual batsman in an Inning : Maximum Number of Fours Hit By A Batsman in one Innings.
</span></td>
          </tr>
          <tr>
            <td> <span>26. Most 6&apos;s by individual batsman in an Inning : Maximum Number of Sixes Hit By A Batsman in one Innings.
</span></td>
          </tr>
          <tr>
            <td> <span>27. Most Dot balls By a Bowler in an Inning : Maximum Dot balls Bowled by a Bowler in his Quota of Innings.
</span></td>
          </tr>
          <tr>
            <td> <span>28. Most runs given by Bowler in an Inning : Maximum Runs conceded by a individual Bowler in an Innings.
</span></td>
          </tr>
          <tr>
            <td> <span>29. Most wickets by Bowler in an inning : Maximum Wickets taken by a individual Bowler in an Innings.
</span></td>
          </tr>
          <tr>
            <td> <span>30. Total 50 Plus Partnership runs- 50 and above 50 runs partnership will be counted in this event..
</span></td>
          </tr>
          <tr>
            <td> <span>31. In fastest fifty always the first 50 runs will be considered, for example of R Sharma scores 1st fifty in 17 balls and scores 100 in next 14 balls, fastest 50 will be given based on the balls for the 1st fifty runs Super over will not be included.
</span></td>
          </tr>
          
        </table>
        

          </div>
        )}
      </div>
      <div className="section">
        <div className="section-header" onClick={() => toggleSection('kabaddi')}>
        Kabaddi
        </div>
        {openSection === 'kabaddi' && (
          <div className="section-content">
          <table>

          <tr>
            <td> <span>In any circumstances management decision will be final related to all Fancy of kabaddi of our exchange.
</span></td>
          </tr>
          <tr>
            <td> <span>All fancy bets will be validated when match has been tied.
</span></td>
          </tr>
          <tr>
            <td> <span>Result of individual player of fancy will be validated only when player play that match.
</span></td>
          </tr>
          <tr>
            <td> <span>In any case wrong rate has been given in fancy that particular bets will be deleted.
</span></td>
          </tr>
          <tr>
            <td> <span>For Playoffs Final Result Of 40 Minutes Of Two Halves Will Be Valid In Our Exchange
</span></td>
          </tr>
          
          </table>
          </div>
        )}
      </div>
      <div className="section">
        <div className="section-header" onClick={() => toggleSection('horse-racing')}>
        Horse Racing
        </div>
        {openSection === 'horse-racing' && (
          <div className="section-content">
        <table>
        <tr>
            <td> <p>General</p></td>
          </tr>
          <tr>
            <td> <span>1. All individual race markets will be determined according to the official result at the time of the weigh-in announcement (or equivalent). Subsequent disqualifications, appeals or amendments to the result will be disregarded.
</span></td>
          </tr>
          <tr>
            <td> <span>2. If a race is abandoned or otherwise declared void, or in the event of a walkover, all bets on that race will be void.
</span></td>
          </tr>
          <tr>
            <td> <span>3. If the scheduled venue is changed after the market has been loaded by us, all bets will be void. Where a race does not take part on its scheduled day, all bets will be void.
</span></td>
          </tr>
          <tr>
            <td> <span>4. If a scheduled surface type is changed (e.g., turf to dirt) all bets will stand.
</span></td>
          </tr>
          <tr>
            <td> <p>Non-Runner Rule
</p></td>
          </tr>
          <tr>
            <td> <span>5. Our&apos;s non-runner rule relates to the adjustment of odds-on bets already matched when a horse in a race is declared a non-runner. To adjust We apply a reduction factor to the remaining runners. The reduction factor allocated to a non-runner is a calculation (the details of which are described below) of that horse&apos;s chances of winning (or being placed, etc as appropriate) and is applied to bets already matched on the other runners in the relevant market or markets. Any horse listed when the relevant market is loaded which does not subsequently come under the starter&apos;s orders is deemed to be a non-runner.
</span></td>
          </tr>
          <tr>
            <td> <span>6. When the market is loaded each horse is given a reduction factor, based on a forecast price, which is expressed as a percentage. These reduction factors may be updated periodically at the discretion of the Us based on trading in the market, but after approximately 15 minutes (approximately 5 minutes for Australian and US markets) from the scheduled off time of a given race, they will be updated only in exceptional circumstances. The current reduction factor percentage for each horse can be viewed on the info page on Our website or by asking the Helpdesk.
</span></td>
          </tr>
          <tr>
            <td> <span>7. Accurate reduction factors will only be applied to selections in the event of a non-runner. Once a non-runner is declared each selection in the market will be given an appropriate reduction factor. Reduction factors can be amended at Our’s discretion at any time throughout the market life cycle (including post-race).
</span></td>
          </tr>
          <tr>
            <td> <span>8. For Australian racing, reduction factors may be updated periodically at the discretion of the Us based on trading in the market, but after approximately five minutes from the scheduled off time of a given race, they will be updated only in exceptional circumstances.
</span></td>
          </tr>
          <tr>
            <td> <span>9. Reductions will be made to both win and place markets but applied differently (as described below), and horses will have a different reduction factor for each market.
</span></td>
          </tr>
          <tr>
            <td> <span>10. As soon as We become aware that a horse is an official non-runner or a highly likely non-runner, following a statement to the press from connections, the following will happen: All matched bets on that horse will be void and the horse will be removed from the market. In the win market: if the reduction factor of the non-runner is 2.5% or greater, the traded price of all the matched bets on the remaining horses will be reduced by an amount equal to the non-runner final reduction factor and all the unmatched offers to lay will be cancelled. If the non-runners reduction factor is less than 2.5%, reductions will not be applied and unmatched bets will not be cancelled.
</span></td>
          </tr>
          <tr>
            <td> <span>11. In the place market, the reduction factor of all non-runners will be applied (even if less than 2.5%) and the potential winnings aboutmatched bets on the remaining horses will be reduced by an amount equal to the non-runners final reduction factor. Only if the non-runners reduction factor is 4.0% or greater will all the unmatched offers to lay be cancelled.
</span></td>
          </tr>
          <tr>
            <td> <span>12. All the reduction factors on the remaining horses will be adjusted to reflect their improved chance of winning.
</span></td>
          </tr>
          <tr>
            <td> <span>13. Reduction factors are not applied to bets which are struck in play. However, if a market is turned in-play prematurely by error (or, for example, there is a false start), all bets matched during this time will be subject to any later reduction factor, provided the market is turned out of play before the race commences. In the event of a late withdrawal, wereserve the right to remove the runner after the completion of the race. In this case, only those bets matched before the off will be affected by a reduction factor.
</span></td>
          </tr>
          <tr>
            <td> <span>14. In the event of a non-runner being removed from a race in error or following incorrect information regarding a runner’s participation, we will reinstate both the runner and all previously matched bets associated with that runner. All bets made between the time of withdrawal and reinstatement will be void in both the place market and the win market. The reduction factor applied to matched bets at the time of withdrawal will be reversed and the original prices will become valid.
</span></td>
          </tr>
          <tr>
            <td> <span>15. Any non-runners will be removed from the relevant markets in the order in which they are brought to our attention. If We become aware of more than one non-runner at the same time, it will remove the non-runners from the relevant markets in race card order.
</span></td>
          </tr>
          <tr>
            <td> <span>16. If a runner is not included in a market because of an error or because of incorrect information regarding a runner’s participation, we reserve the right to introduce the missing runner into the market at any time before settlement (even after the race has been run), provided that We are determined that the missing runner is not a material runner (i.e., a selection with a reduction factor of approx. 2.5% or less in the win market). In such circumstances, all pre-play unmatched and matched bets will stand, however, if the runner is not introduced before the start of the race, all in-play bets will be void. However, if the missing runner is deemed to be a material runner, then the malformed market will be void and a new market will be loaded where possible.
</span></td>
          </tr>
          <tr>
            <td> <span>17. How the Reductions are applied to Exchange markets In the win market, reductions will be made on the traded price. For example: if the non-runners final reduction factor is 25% the traded price on all previously matched bets on other horses will be reduced by 25% - the traded price of 8.0 would become 6.0 etc. And these might be further reduced if another horse is subsequently declared a non-runner.
</span></td>
          </tr>
          <tr>
            <td> <span>18. In the EW Market, reductions will be made on the traded win price. The advertised place terms will then apply to the revised win prices. For example: if the non-runners final reduction factor is 25% the traded price on all previously matched bets on other horses will be reduced by 25% - - the traded price of 8.0 would become 6.0. If each Way terms were 1/5th odds for 3 places, the corresponding price for the Place portion of the bet would reduce from 2.4 to 2.0. In the place market, reductions will be made to the potential winnings on the bet only, and not the traded price. For example: if the non-runners final reduction factor is 25% the potential winnings on all previously matched bets on the other horses will be reduced by 25% - a traded price of 8.0 would become 6.25. For example, a £10 bet on a horse to be placed at a traded price of 8.0 would provide winnings of £70. If there is a non-runner with a reduction factor of 25% in the race, that factor will be applied to the £70 of potential winnings leaving potential winnings of £52.50. Therefore, the revised traded price will be 6.25.
</span></td>
          </tr>
          <tr>
            <td> <span>19. The traded price may be further reduced if any other horse(s) is subsequently declared a non-runner, however, odds cannot be reduced below 1.01.
</span></td>
          </tr>
          <tr>
            <td> <span>20. Reserves: A reserve runner may appear in the relevant markets but will have a non-applicable reduction factor until we are received confirmation that it is a confirmed runner, in which case an applicable reduction factor may apply to it.
</span></td>
          </tr>
          <tr>
            <td> <span>21. For the avoidance of doubt, any reduction factor applicable to a non-runner replaced by a reserve will be applied to all bets struck on the relevant markets, before the removal from those markets of such non-runner by Us. Likewise, should a reserve runner become a confirmed runner but subsequently become a non-runner, any reduction factor applicable to such non-runner will be applied to all bets struck on the relevant markets, before the removal from those markets of such non-runner by Us.
</span></td>
          </tr>
          <tr>
            <td> <span>22. Additional rules Card numbers are posted as a guide only: bets are placed on a named horse. Horses will not be coupled. Where any horse(s) runs for purse money only it is deemed a non-runner for betting purposes. Should this result in the number of possible winners stated in the relevant Market Information being equal to or greater than the number of runners in the relevant Betfair market, all bets in the market will be void.
</span></td>
          </tr>
          

        </table>

          </div>
        )}
      </div>
      <div className="section">
        <div className="section-header" onClick={() => toggleSection('world-cup')}>
        World Cup
        </div>
        {openSection === 'world-cup' && (
          <div className="section-content">
        <table>
        <tr>
            <td> <p>Company reserves the right to suspend/void any id/bets if the same is found to be illegitimate. For example incase of vpn/robot-use/multiple entry from same IP/ multiple bets at same time (Punching) and others. Note : only winning bets will be voided...
</p></td>
          </tr>
        <tr>
            <td> <p>In case of any circumstances, management decision will be final for all the fancies under world cup.
</p></td>
          </tr>
        <tr>
            <td> <p>WC:-WORLD CUP
</p></td>
          </tr>
        <tr>
            <td> <p>MOM:-MAN OF THE MATCH.
</p></td>
          </tr>
        <tr>
            <td> <span>Match 1st over run:- This fancy is valid only for first innings of the match, Average 4 runs will be given in case of match abandoned or the entire 50 over is not played.
</span></td>
          </tr>
          <tr>
            <td> <span>Highest inning run:- This fancy is valid only for first innings of the match.
</span></td>
          </tr>
          <tr>
            <td> <span>Lowest innings run:- This fancy is valid only for first innings of the match.
</span></td>
          </tr>
          <tr>
            <td> <span>Total Fours:- Average 48 Fours will be given if the match is abandoned or over reduced
</span></td>
          </tr>
          <tr>
            <td> <span>Total Sixes:- Average 10 Sixes will be given if the match is abandoned or over reduced
</span></td>
          </tr>
          <tr>
            <td> <span>Total Wickets:- Average 15 Wickets will be given if the match is abandoned or over reduced
</span></td>
          </tr>
          <tr>
            <td> <span>Total Wide:- Average 14 Wide will be given if the match is abandoned or over reduced
</span></td>
          </tr>
          <tr>
            <td> <span>Total Extras:- Average 25 Extras will be given if the match is abandoned or over reduced
</span></td>
          </tr>
          <tr>
            <td> <span>Total No ball:- Average 2 No ball will be given if the match is abandoned or over reduced
</span></td>
          </tr>
          <tr>
            <td> <span>Total Fifties:- Average 3 Fifties will be given if the match is abandoned or over reduced
</span></td>
          </tr>
          <tr>
            <td> <span>Total Centuries:- Average 1 century will be given if the match is abandoned or over reduced
</span></td>
          </tr>
          <tr>
            <td> <span>Total Run outs:- Average 1 Run out will be given if the match is abandoned or over reduced
</span></td>
          </tr>
          <tr>
            <td> <span>Total Ducks:- Average 1 Duck out will be given if the match is abandoned or over reduced. If the player is not out in the score of zero the same will not be considered as Duck out.
</span></td>
          </tr>
          <tr>
            <td> <span>Total Caught Out:- Average 10 Caught Out will be given if the match is abandoned or over reduced
</span></td>
          </tr>
          <tr>
            <td> <span>All fancy related to Individual teams are valid only for league matches (9 matches played by the teams in league stages)
</span></td>
          </tr>
          <tr>
            <td> <span>In case any player mentioned in our world cup fancy doesn’t play for the first three consecutive matches all the bets will be deleted.
</span></td>
          </tr>
          <tr>
            <td> <span>1. In case any player mentioned in our world cup fancy got ruled out or doesn’t play post few matches the bets after the last match played by the above mentioned player will be deleted. For example: U Khawaja played for first three league matches and doesn’t play after that, then bets for the first three matches will be valid. Bets after third match will be deleted.
</span></td>
          </tr>
          <tr>
            <td> <span>2. First 10 over runs is valid for both innings for all the teams.
</span></td>
          </tr>
          <tr>
            <td> <span>3. Total runs by team:- Average will be given if the match is abandoned or over reduced
</span></td>
          </tr>
          <tr>
            <td> <span>4. First 10 over runs by team:- Average will be given if the match is abandoned or over reduced
</span></td>
          </tr>
          <tr>
            <td> <span>5. Fours by team:- Average will be given if the match is abandoned or over reduced
</span></td>
          </tr>
          <tr>
            <td> <span>6. Sixes by team:- Average will be given if the match is abandoned or over reduced
</span></td>
          </tr>
          <tr>
            <td> <span>7. Opening wicket partnership:- Average will be given if the match is abandoned or over reduced
</span></td>
          </tr>
          <tr>
            <td> <span>8. Runs by player:- Average will be given if the match is abandoned or over reduced, Average will be given unless one ball is being played after the player enters the crease
</span></td>
          </tr>
          <tr>
            <td> <span>9. Wickets by player:- Average will be given if the match is abandoned or over reduced, Average will be given unless one legal delivery has been bowled by the mentioned player.
</span></td>
          </tr>
          <tr>
            <td> <span>10. Sixes by player:- Average will be given if the match is abandoned or over reduced, Average will be given unless one ball is being played after the player enters the crease.
</span></td>
          </tr>
          <tr>
            <td> <p>Average of every fancy follows:
</p></td>
          </tr>
          <tr>
            <td> <p>Total runs by ENG 295 runs per game
</p></td>
          </tr>
          <tr>
            <td> <span>First 10 over runs of ENG 56 runs per game
</span></td>
          </tr>
          <tr>
            <td> <span>Total Fours by ENG 25 fours per game
</span></td>
          </tr>
          <tr>
            <td> <span>Total Sixes by ENG 7 sixes per game
</span></td>
          </tr>
          <tr>
            <td> <span>Opening wicket partnership runs of ENG 44 runs per game
</span></td>
          </tr>
          <tr>
            <td> <span>J Roy runs 38 runs per game
</span></td>
          </tr>
          <tr>
            <td> <span>J Bairstow runs 43 runs per game
</span></td>
          </tr>
          <tr>
            <td> <span>J Root runs 43 runs per game
</span></td>
          </tr>
          <tr>
            <td> <span>J Archer wickets 2 wickets per game
</span></td>
          </tr>
          <tr>
            <td> <span>C Woakes wickets 2 wickets per game
</span></td>
          </tr>
          <tr>
            <td> <span>A Rashid wickets 2 wickets per game
</span></td>
          </tr>
          <tr>
            <td> <span>J Bairstow Sixes 2 sixes per game
</span></td>
          </tr>
          <tr>
            <td> <span>J Buttler Sixes 2 sixes per game
</span></td>
          </tr>
          <tr>
            <td> <p>Total runs by IND 285 runs per game
</p></td>
          </tr>
          <tr>
            <td> <span>First 10 over runs of IND 53 runs per game
</span></td>
          </tr>
          <tr>
            <td> <span>Total Four by IND 26 fours per game
</span></td>
          </tr>
          <tr>
            <td> <span>Total Sixes by IND 6 sixes per game
</span></td>
          </tr>
          <tr>
            <td> <span>Opening wicket partnership runs of IND 41 runs per game
</span></td>
          </tr>
          <tr>
            <td> <span>S Dhawan runs 38 runs per game
</span></td>
          </tr>
          <tr>
            <td> <span>R Sharma runs 43 runs per game
</span></td>
          </tr>
          <tr>
            <td> <span>V Kohli runs 48 runs per game
</span></td>
          </tr>
          <tr>
            <td> <span>J Bumrah wickets 2 wickets per game
</span></td>
          </tr>
          <tr>
            <td> <span>M Shami wickets 2 wickets per game
</span></td>
          </tr>
          <tr>
            <td> <span>K Yadav wickets 2 wickets per game
</span></td>
          </tr>
          <tr>
            <td> <span>R Sharma Sixes 2 sixes per game
</span></td>
          </tr>
          <tr>
            <td> <span>H Pandya Sixes 1 sixes per game
</span></td>
          </tr>
          <tr>
            <td> <p>Total runs by AUS 280 runs per game
</p></td>
          </tr>
          <tr>
            <td> <span>First 10 over runs of AUS 52 runs per game
</span></td>
          </tr>
          <tr>
            <td> <span>Total Four by AUS 26 fours per game
</span></td>
          </tr>
          <tr>
            <td> <span>Total Sixes by AUS 6 sixes per game
</span></td>
          </tr>
          <tr>
            <td> <span>Opening wicket partnership runs of AUS 40 runs per game
</span></td>
          </tr>
          <tr>
            <td> <span>D Warner runs 43 runs per game
</span></td>
          </tr>
          <tr>
            <td> <span>A Finch runs 38 runs per game
</span></td>
          </tr>
          <tr>
            <td> <span>S Smith runs 42 runs per game
</span></td>
          </tr>
          <tr>
            <td> <span>M Starc wickets 2 wickets per game
</span></td>
          </tr>
          <tr>
            <td> <span>P Cummins wickets 2 wickets per game
</span></td>
          </tr>
          <tr>
            <td> <span>A Zampa wickets 2 wickets per game
</span></td>
          </tr>
          <tr>
            <td> <span>D Warner Sixes 2 sixes per game
</span></td>
          </tr>
          <tr>
            <td> <p>Total runs by SA 270 runs per game
</p></td>
          </tr>
          <tr>
  <td><span>First 10 over runs of SA 51 runs per game</span></td>
</tr>
<tr>
  <td><span>Total Fours by SA 24 fours per game</span></td>
</tr>
<tr>
  <td><span>Total Sixes by SA 5 sixes per game</span></td>
</tr>
<tr>
  <td><span>Opening wicket partnership runs of SA 37 runs per game</span></td>
</tr>
<tr>
  <td><span>H Amla runs 38 runs per game</span></td>
</tr>
<tr>
  <td><span>F Du Plessis runs 39 runs per game</span></td>
</tr>
<tr>
  <td><span>V Der Dussen runs Runs per game</span></td>
</tr>
<tr>
  <td><span>Q De Kock runs 36 Runs per game</span></td>
</tr>
<tr>
  <td><span>I Tahir wickets 2 wickets per game</span></td>
</tr>
<tr>
  <td><span>K Rabada wickets 2 wickets per game</span></td>
</tr>
<tr>
  <td><span>D Steyn wickets 2 wickets per game</span></td>
</tr>
<tr>
  <td><span>Q De Kock Sixes 1 sixes per game</span></td>
</tr>
<tr>
  <td><span>Total runs by NZ 275 runs per game</span></td>
</tr>
<tr>
  <td><span>First 10 over runs of NZ 50 runs per game</span></td>
</tr>
<tr>
  <td><span>Total Fours by NZ 25 fours per game</span></td>
</tr>
<tr>
  <td><span>Total Sixes by NZ 5 sixes per game</span></td>
</tr>
<tr>
  <td><span>Opening wicket partnership runs of NZ 37 runs per game</span></td>
</tr>
<tr>
  <td><span>C Munro runs 32 runs per game</span></td>
</tr>
<tr>
  <td><span>M Guptill runs 38 runs per game</span></td>
</tr>
<tr>
  <td><span>K Williamson runs 45 runs per game</span></td>
</tr>
<tr>
  <td><span>H Nicholls runs Runs per game</span></td>
</tr>
<tr>
  <td><span>T Boult wickets 2 wickets per game</span></td>
</tr>
<tr>
  <td><span>T Southee wickets 1 wickets per game</span></td>
</tr>
<tr>
  <td><span>M Santner wickets 1 wickets per game</span></td>
</tr>
<tr>
  <td><span>M Guptill Sixes 2 Sixes per game</span></td>
</tr>
<tr>
  <td><p>Total runs by WI 270 runs per game</p></td>
</tr>

<tr>
  <td><span>First 10 over runs of WI 49 runs per game</span></td>
</tr>
<tr>
  <td><span>Total Fours by WI 23 fours per game</span></td>
</tr>
<tr>
  <td><span>Total Sixes by WI 7 sixes per game</span></td>
</tr>
<tr>
  <td><span>Opening wicket partnership runs of WI 35 runs per game</span></td>
</tr>
<tr>
  <td><span>C Gayle runs 37 runs per game</span></td>
</tr>
<tr>
  <td><span>E Lewis runs 32 runs per game</span></td>
</tr>
<tr>
  <td><span>DM Bravo runs 32 runs per game</span></td>
</tr>
<tr>
  <td><span>S Hope runs 37 runs per game</span></td>
</tr>
<tr>
  <td><span>K Roach wickets 1 wickets per game</span></td>
</tr>
<tr>
  <td><span>S Cottrell wickets 1 wickets per game</span></td>
</tr>
<tr>
  <td><span>J Holder wickets 1 wicket per game</span></td>
</tr>
<tr>
  <td><span>A Nurse wickets 1 wickets per game</span></td>
</tr>


<tr>
  <td><p>Total runs by PAK 270 runs per game</p></td>
</tr>
<tr>
  <td><span>First 10 over runs of PAK 50 runs per game</span></td>
</tr>
<tr>
  <td><span>Total Fours by PAK 24 fours per game</span></td>
</tr>
<tr>
  <td><span>Total Sixes by PAK 5 sixes per game</span></td>
</tr>
<tr>
  <td><span>Opening wicket partnership runs of PAK 36 runs per game</span></td>
</tr>
<tr>
  <td><span>Imam Ul Haq runs 36 runs per game</span></td>
</tr>
<tr>
  <td><span>B Azam runs 44 runs per game</span></td>
</tr>
<tr>
  <td><span>F Zaman runs 34 runs per game</span></td>
</tr>
<tr>
  <td><span>H Ali wickets 2 wickets per game</span></td>
</tr>
<tr>
  <td><span>Shadab Khan wickets 2 wickets per game</span></td>
</tr>
<tr>
  <td><span>Shaheen Afridi wickets 2 wickets per game</span></td>
</tr>
<tr>
  <td><span>F Zaman Sixes 1 sixes per game</span></td>
</tr>
<tr>
  <td><p>C Gayle Sixes 2 Sixes per game
</p></td>
</tr>
<tr>
  <td><p>A Russell Sixes 2 Sixes per game
</p></td>
</tr>
<tr>
  <td><p>Total runs by SL 250 runs per game</p></td>
</tr>
<tr>
  <td><span>First 10 over runs of SL 48 runs per game</span></td>
</tr>
<tr>
  <td><span>Total Fours by SL 22 fours per game</span></td>
</tr>
<tr>
  <td><span>Total Sixes by SL 4 sixes per game</span></td>
</tr>
<tr>
  <td><span>Opening wicket partnership runs of SL 32 runs per game</span></td>
</tr>
<tr>
  <td><span>D Karunaratne runs 31 runs per game</span></td>
</tr>
<tr>
  <td><span>L Thirimanne runs 29 runs per game</span></td>
</tr>
<tr>
  <td><span>K Mendis runs 33 runs per game</span></td>
</tr>
<tr>
  <td><span>L Malinga wickets 1 wickets per game</span></td>
</tr>
<tr>
  <td><span>S Lakmal wickets 1 wickets per game</span></td>
</tr>
<tr>
  <td><span>J Vandersay wickets 1 wickets per game</span></td>
</tr>
<tr>
  <td><span>T Perera Sixes 1 sixes per game</span></td>
</tr>
<tr>
  <td><p>Total runs by BAN 245 runs per game</p></td>
</tr>
<tr>
  <td><span>First 10 over runs of BAN 48 runs per game</span></td>
</tr>
<tr>
  <td><span>Total Fours by BAN 22 fours per game</span></td>
</tr>
<tr>
  <td><span>Total Sixes by BAN 4 sixes per game</span></td>
</tr>
<tr>
  <td><span>Opening wicket partnership runs of BAN 32 runs per game</span></td>
</tr>
<tr>
  <td><span>T Iqbal runs 34 runs per game</span></td>
</tr>
<tr>
  <td><span>S Sarkar runs 29 runs per game</span></td>
</tr>
<tr>
  <td><span>M Rahim runs 31 runs per game</span></td>
</tr>
<tr>
  <td><span>M Hasan wickets 1 wickets per game</span></td>
</tr>
<tr>
  <td><span>M Rahman wickets 1 wickets per game</span></td>
</tr>
<tr>
  <td><span>M Mortaza wickets 1 wickets per game</span></td>
</tr>
<tr>
  <td><span>T Iqbal Sixes 1 sixes per game</span></td>
</tr>




<tr>
  <td><p>Total runs by AFG 235 runs per game</p></td>
</tr>

        </table>

          </div>
        )}
      </div>
      <div className="section">
        <div className="section-header" onClick={() => toggleSection('binary')}>
        Binary
        </div>
        {openSection === 'binary' && (
          <div className="section-content">
        <tr>
            <td>
                <p>1. All session&apos;s bets will be confirmed at market rate only.</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>2. All session&apos;s settlement price means result can be checked from exchange&apos;s official sites.</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>3. All session&apos;s result will be settlement price provided by exchange after market close.</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>4. Every product has two types of prices SPOT and FUTURE. We provide only near month&apos;s FUTURE price in Binary Session. You can check it from the official website of that product.</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>5. Session&apos;s timings : NFY, B-NFY, AXS, ICI, RIL, SBI, TT STL - Monday to Friday 10:00 a.m. to 2:30 p.m. GOLD, SILVER, CRUDE - Monday to Friday 11:30 a.m. to 10:30 p.m. CMX CRUDE, DOWJONES, NASDAQ, SNP - Monday to Friday 7:30 p.m. to 12:00 a.m.</p>
            </td>
        </tr>
        <tr>
            <td>
                <span>Same bets same time from multiple id not allowed.</span>
            </td>
        </tr>
        <tr>
            <td>
                <span>Operating and market making bets (cheating/line/chamka bets) are not allowed.</span>
            </td>
        </tr>
        <tr>
            <td>
                <span>if any case wrong rate has been given in fancy that particular bets will be cancelled.</span>
            </td>
        </tr>
        <tr>
            <td>
                <span>Deleted bets will remove under 24hr and clients will be notified.</span>
            </td>
        </tr>

          </div>
        )}
      </div>
      <div className="section">
        <div className="section-header" onClick={() => toggleSection('match')}>
        Match
        </div>
        {openSection === 'match' && (
          <div className="section-content">
        <tr>
            <td>
                <span>Company reserves the right to suspend/void any id/bets if the same is found to be illegitimate. For example incase of vpn/robot-use/multiple entry from same IP/ multiple bets at same time (Punching) and others. Note : only winning bets will be voided, For example: If we find such entries (above mentioned) from any id and their bets are (200000 lay in a 6 over session for the rate 40 and 200000 back for the rate of 48) and the actual score is 38, bets of 40 lay will be voided and the bets for 48 back will be considered valid.</span>
            </td>
        </tr>
        <tr>
            <td>
                <span>TENNIS Match Odds :- If 1st set has been not completed at the time of the retirement or disqualification, then all bets relating to that individual match will be void.</span>
            </td>
        </tr>
        <tr>
            <td>
                <span>FOOTBALL Match Odds :- All bets apply to the relevant full regular time period including stoppage time. Any extra-time and/or penalty shoot-out is not included. For the cancellation of a goal, due to VAR, bets matched between the time of the goal being scored and the time at which the video assistant referee finishes the review will be voided. For the cancellation of a red card, due to VAR, bets matched after the time at which the video assistant referee commences the review will be voided.</span>
            </td>
        </tr>
        <tr>
            <td>
                <span>FOOTBALL Under_Over Goals :- In the event of a match starting but not being completed, all bets will be void, unless the specific market outcome is already determined,</span>
            </td>
        </tr>

          </div>
        )}
      </div>
      <div className="section">
        <div className="section-header" onClick={() => toggleSection('khado')}>
        Khado
        </div>
        {openSection === 'khado' && (
          <div className="section-content">
        <tr>
            <td>
                <span>Only First inning valid for T20 and one day matches.</span>
            </td>
        </tr>
        <tr>
            <td>
                <span>Same will be work like Lambi. If match abandoned or over reduced, all bets will be deleted.</span>
            </td>
        </tr>
        <tr>
            <td>
                <span>You can choose your own value in this event.</span>
            </td>
        </tr>

          </div>
        )}
      </div>
      <div className="section">
        <div className="section-header" onClick={() => toggleSection('election')}>
        Election
        </div>
        {openSection === 'election' && (
          <div className="section-content">
        <tr>
            <td>
                <p>1. The final result declared by election commission of India for Loksabha election 2019 will be valid in our exchange.</p>
            </td>
        </tr>

        <tr>
            <td>
                <p>2. Accidental issues during Loksabha election 2019 will not be counted in our exchange.</p>
            </td>
        </tr>

          </div>
        )}
      </div>
      <div className="section">
        <div className="section-header" onClick={() => toggleSection('virtual-tennis')}>
        Virtual Tennis
        </div>
        {openSection === 'virtual-tennis' && (
          <div className="section-content">
        <tr>
            <td>
                <span>1. If streaming stops or some technical issue occurs, the match will be abandoned.</span>
            </td>
        </tr>
        <tr>
            <td>
                <span>2. If there is any technical interference in the match then also the match will be abandoned.</span>
            </td>
        </tr>
        <tr>
            <td>
                <span>3. *There will be 3 sets in the match. There are 3 games in 1 set.</span>
            </td>
        </tr>
        <tr>
            <td>
                <span>4. *In the match, within any set, there are 3-3 games between the two players (level game) till a tie break of 5 points is played, according to which the one who gets 2 points more than the difference of points will win the set.</span>
            </td>
        </tr>

          </div>
        )}
      </div>
      <div className="section">
        <div className="section-header" onClick={() => toggleSection('casino')}>
        Casino Payout Restrictions
        </div>
        {openSection === 'casino' && (
          <div className="section-content">
        <tr>
            <td>
                <span>1. Restriction of payout is applicable for all Crash games (include Aviator).</span>
            </td>
        </tr>
        <tr>
            <td>
                <span>2. In Single round, User is eligible for a max payout of 500 times his bet amount, example if the bet is 100 then max payout shall be 100 X 500= 50000, any winning above this multiplier shall not be paid out by the company</span>
            </td>
        </tr>
        <tr>
            <td>
                <span>3. Another restriction is max payout amount is capped at 2,00,00,000 (2 Crore points) , if net winning amount is beyond this amount then user shall be paid only this amount as max winning in Casino games.</span>
            </td>
        </tr>

          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default Rules;

