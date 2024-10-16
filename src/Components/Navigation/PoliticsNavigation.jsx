
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../home.css"

const PoliticsNavigation = () => {
  const [collapsedSections, setCollapsedSections] = useState({
    collapse00: false,
    collapse01: false,
    collapse02: false,
    collapse03: false,
    collapse04: false,
    collapse05: false,
    collapse06: false,
    collapse07: false,
    collapse08: false,
    collapse09: false,
    collapse010: false,
    collapse011: false,
    collapse012: false,
    collapse013: false,
    collapse014: false,
  });

  const toggleCollapse = (sectionId) => {
    setCollapsedSections((prevState) => ({
      ...prevState,
      [sectionId]: !prevState[sectionId],
    }));
  };

  return (
    <ul className="nav-content">
      {/* Caribbean Premier League */}
      <li>
        <NavLink
          onClick={() => toggleCollapse('collapse00')}
          className="collapsed"
          to="#"
        >
          <span>Caribbean Premier League</span>
          <i className={`bi bi-caret-down ms-auto arrow ${collapsedSections.collapse00 ? 'rotate-180' : ''}`} ></i>
        </NavLink>
        {collapsedSections.collapse00 && (
          <ul className="nav-second-level">
            <li><NavLink to="#">Caribbean Premier League</NavLink></li>
            <li><NavLink to="#">Barbados Royals vs Trinbago Knight Riders</NavLink></li>
            <li><NavLink to="#">Barbados Royals v Guyana Amazon Warriors</NavLink></li>
            <li><NavLink to="#">St. Lucia Kings vs Antigua And Barbuda Falcons</NavLink></li>
          </ul>
        )}
      </li>

      {/* Others */}
      <li>
        <NavLink
          onClick={() => toggleCollapse('collapse01')}
          className="collapsed"
          to="#"
        >
          <span>Others</span>
          <i className={`bi bi-caret-down ms-auto arrow ${collapsedSections.collapse01 ? 'rotate-180' : ''}`}></i>
        </NavLink>
        {collapsedSections.collapse01 && (
          <ul className="nav-second-level">
            <li><NavLink to="#">India A vs India D</NavLink></li>
            <li><NavLink to="#">New Star Club vs Bud Cricket Club</NavLink></li>
            <li><NavLink to="#">🎮PAKISTAN T10 VS SOUTH AFRICA T10</NavLink></li>
            <li><NavLink to="#">Zagreb Chiefs V Afyonkarahisar Shs</NavLink></li>
            <li><NavLink to="#">🎮AFGHANISTAN T10 VS SRI LANKA T10</NavLink></li>
            <li><NavLink to="#">🎮ENGLAND T10 VS NEW ZEALAND T10</NavLink></li>
            <li><NavLink to="#">🎮MELBOURNE STARS T10 PERTH SCORCHERS T10</NavLink></li>
            <li><NavLink to="#">Gauhati Town Club v Ankurjyoti Club</NavLink></li>
            <li><NavLink to="#">🎮LUCKNOW SUPER GIANTS T10  VS GUJARAT TITANS T10</NavLink></li>
            <li><NavLink to="#">🎮SOUTH AFRICA T10 VS WEST INDIES T10</NavLink></li>
            <li><NavLink to="#">Afyonkarahisar Shs V Belgrade</NavLink></li>
            <li><NavLink to="#">Zagreb Chiefs V Belgrade</NavLink></li>
            <li><NavLink to="#">Dirang Dragons V Tawang Tigers</NavLink></li>
            <li><NavLink to="#">Sir Oliver Split V Belgrade</NavLink></li>
            <li><NavLink to="#">Afyonkarahisar Shs V Sir Oliver Split</NavLink></li>
            <li><NavLink to="#">River Rine Club v New Star Club</NavLink></li>
            <li><NavLink to="#">Bud Cricket Club v City Cricket Club</NavLink></li>
          </ul>
        )}
      </li>

      {/* Virtual Cricket / Virtual Cricket In-Play */}
      <li>
        <NavLink
          onClick={() => toggleCollapse('collapse02')}
          className="collapsed"
          to="#"
        >
          <span>Virtual Cricket / Virtual Cricket In-Play</span>
          <i className={`bi bi-caret-down ms-auto arrow ${collapsedSections.collapse02 ? 'rotate-180' : ''}`}></i>
        </NavLink>
        {collapsedSections.collapse02 && (
          <ul className="nav-second-level">
            <li><NavLink to="#">Chennai vs. Mumbai  </NavLink></li>
          </ul>
        )}
      </li>

      {/*Simulated Reality League / SA T20 League SRL */}
      <li>
        <NavLink
          onClick={() => toggleCollapse('collapse03')}
          className="collapsed"
          to="#"
        >
          <span>Simulated Reality League / SA T20 League SRL</span>
          <i className={`bi bi-caret-down ms-auto arrow ${collapsedSections.collapse03 ? 'rotate-180' : ''}`}></i>
        </NavLink>
        {collapsedSections.collapse03 && (
          <ul className="nav-second-level">
            <li><NavLink to="#">Durban Super Giants SRL V Mi Cape Town SRL</NavLink></li>
          </ul>
        )}
      </li>

      {/* Simulated Reality League / Premier League SRL */}
      <li>
        <NavLink
          onClick={() => toggleCollapse('collapse04')}
          className="collapsed"
          to="#"
        >
          <span>Simulated Reality League / Premier League SRL</span>
          <i className={`bi bi-caret-down ms-auto arrow ${collapsedSections.collapse04 ? 'rotate-180' : ''}`}></i>
        </NavLink>
        {collapsedSections.collapse04 && (
          <ul className="nav-second-level">
            <li><NavLink to="#">Royal Challengers Bangalore SRL V Mumbai Indians SRL</NavLink></li>
            <li><NavLink to="#">Delhi Capitals SRL V Gujarat Titans SRL</NavLink></li>
          </ul>
        )}
      </li>

      {/* Kerala T20 Trophy */}
      <li>
        <NavLink
          onClick={() => toggleCollapse('collapse05')}
          className="collapsed"
          to="#"
        >
          <span>Kerala T20 Trophy</span>
          <i className={`bi bi-caret-down ms-auto arrow ${collapsedSections.collapse05 ? 'rotate-180' : ''}`}></i>
        </NavLink>
        {collapsedSections.collapse05 && (
          <ul className="nav-second-level">
            <li><NavLink to="#">Aries Kollam Sailors v Calicut Globstars</NavLink></li>
            <li><NavLink to="#">Thrissur Titans v Alleppey Ripples</NavLink></li>
            <li><NavLink to="#">Kochi Blue Tigers v Thrissur Titans</NavLink></li>
            <li><NavLink to="#">Aries Kollam Sailors v Trivandrum Royals</NavLink></li>
          </ul>
        )}
      </li>

      {/* Simulated Reality League / T20 International SRL*/}
      <li>
        <NavLink
          onClick={() => toggleCollapse('collapse06')}
          className="collapsed"
          to="#"
        >
          <span>Simulated Reality League / T20 International SRL</span>
          <i className={`bi bi-caret-down ms-auto arrow ${collapsedSections.collapse06 ? 'rotate-180' : ''}`}></i>
        </NavLink>
        {collapsedSections.collapse06 && (
          <ul className="nav-second-level">
            <li><NavLink to="#">India SRL V England SRL</NavLink></li>
            <li><NavLink to="#">Pakistan SRL V South Africa SRL</NavLink></li>
          </ul>
        )}
      </li>

      {/* Pakistan Champions One Day Cup */}
      <li>
        <NavLink
          onClick={() => toggleCollapse('collapse07')}
          className="collapsed"
          to="#"
        >
          <span>Pakistan Champions One Day Cup</span>
          <i className={`bi bi-caret-down ms-auto arrow ${collapsedSections.collapse07 ? 'rotate-180' : ''}`}></i>
        </NavLink>
        {collapsedSections.collapse07 && (
          <ul className="nav-second-level">
            <li><NavLink to="#">Stallions v Lions</NavLink></li>
            <li><NavLink to="#">Dolphins v Panthers</NavLink></li>
            <li><NavLink to="#">Wolves v Stallions</NavLink></li>
          </ul>
        )}
      </li>

      {/* Simulated Reality League / Big Bash League SRL */}
      <li>
        <NavLink
          onClick={() => toggleCollapse('collapse08')}
          className="collapsed"
          to="#"
        >
          <span>Simulated Reality League / Big Bash League SRL</span>
          <i className={`bi bi-caret-down ms-auto arrow ${collapsedSections.collapse08 ? 'rotate-180' : ''}`}></i>
        </NavLink>
        {collapsedSections.collapse08 && (
          <ul className="nav-second-level">
            <li><NavLink to="#">Sydney Sixers SRL V Sydney Thunder SRL</NavLink></li>
          </ul>
        )}
      </li>

      {/* International Twenty20 Matches */}
      <li>
        <NavLink
          onClick={() => toggleCollapse('collapse09')}
          className="collapsed"
          to="#"
        >
          <span>International Twenty20 Matches</span>
          <i className={`bi bi-caret-down ms-auto arrow ${collapsedSections.collapse09 ? 'rotate-180' : ''}`}></i>
        </NavLink>
        {collapsedSections.collapse09 && (
          <ul className="nav-second-level">
            <li><NavLink to="#">England v Australia</NavLink></li>
          </ul>
        )}
      </li>

      {/* Rachael Heyhoe Flint Trophy */}
      <li>
        <NavLink
          onClick={() => toggleCollapse('collapse010')}
          className="collapsed"
          to="#"
        >
          <span>Rachael Heyhoe Flint Trophy</span>
          <i className={`bi bi-caret-down ms-auto arrow ${collapsedSections.collapse010 ? 'rotate-180' : ''}`}></i>
        </NavLink>
        {collapsedSections.collapse010 && (
          <ul className="nav-second-level">
            <li><NavLink to="#">South East Stars v Southern Vipers</NavLink></li>
            <li><NavLink to="#">Northern Diamonds v Sunrisers</NavLink></li>
          </ul>
        )}
      </li>

      {/* T20 Blast */}
      <li>
        <NavLink
          onClick={() => toggleCollapse('collapse011')}
          className="collapsed"
          to="#"
        >
          <span>T20 Blast</span>
          <i className={`bi bi-caret-down ms-auto arrow ${collapsedSections.collapse011 ? 'rotate-180' : ''}`}></i>
        </NavLink>
        {collapsedSections.collapse011 && (
          <ul className="nav-second-level">
            <li><NavLink to="#">Surrey v Somerset</NavLink></li>
            <li><NavLink to="#">Gloucestershire v Sussex</NavLink></li>
          </ul>
        )}
      </li>
    </ul>
  );
};

export default PoliticsNavigation;
