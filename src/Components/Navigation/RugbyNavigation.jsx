
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../home.css"

const RugbyNavigation = () => {
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
        collapse015: false,
        collapse016: false,
        collapse017: false,
        collapse018: false,
        collapse019: false,
        collapse020: false,
        collapse021: false,
        collapse022: false,
        collapse023: false,
        collapse024: false,
    });

    const toggleCollapse = (sectionId) => {
        setCollapsedSections((prevState) => ({
            ...prevState,
            [sectionId]: !prevState[sectionId],
        }));
    };

    return (
        <ul className="nav-content">
            {/* WTA Guadalajara 2024*/}
            <li>
                <NavLink
                    onClick={() => toggleCollapse('collapse00')}
                    className="collapsed"
                    to="#"
                >
                    <span>WTA Guadalajara 2024</span>
                    <i className={`bi bi-caret-down ms-auto arrow ${collapsedSections.collapse00 ? 'rotate-180' : ''}`} ></i>
                </NavLink>
                {collapsedSections.collapse00 && (
                    <ul className="nav-second-level">
                        <li><NavLink to="#">WTA Guadalajara 2024</NavLink></li>
                        <li><NavLink to="#">M Trevisan v Gadecki</NavLink></li>
                        <li><NavLink to="#">Ca Osorio v Rakhimova</NavLink></li>
                        <li><NavLink to="#">Garcia v M Bouzkova</NavLink></li>
                        <li><NavLink to="#">Stakusic v Frech</NavLink></li>
                    </ul>
                )}
            </li>

            {/* WTA Monastir 2024 */}
            <li>
                <NavLink
                    onClick={() => toggleCollapse('collapse01')}
                    className="collapsed"
                    to="#"
                >
                    <span>WTA Monastir 2024</span>
                    <i className={`bi bi-caret-down ms-auto arrow ${collapsedSections.collapse01 ? 'rotate-180' : ''}`}></i>
                </NavLink>
                {collapsedSections.collapse01 && (
                    <ul className="nav-second-level">
                        <li><NavLink to="#">WTA Monastir 2024</NavLink></li>
                        <li><NavLink to="#">Sorribes Tormo v Sramkova</NavLink></li>
                        <li><NavLink to="#">L Bronzetti v Ruzic</NavLink></li>
                        <li><NavLink to="#">Eva Lys v Zeyn Sonmez</NavLink></li>
                        <li><NavLink to="#">Starodubtsewa v Kartal</NavLink></li>

                    </ul>
                )}
            </li>

            {/* Dobrich Challenger 2024 */}
            <li>
                <NavLink
                    onClick={() => toggleCollapse('collapse02')}
                    className="collapsed"
                    to="#"
                >
                    <span>Dobrich Challenger 2024</span>
                    <i className={`bi bi-caret-down ms-auto arrow ${collapsedSections.collapse02 ? 'rotate-180' : ''}`}></i>
                </NavLink>
                {collapsedSections.collapse02 && (
                    <ul className="nav-second-level">
                        <li><NavLink to="#">Royer v Olivieri</NavLink></li>
                        <li><NavLink to="#">Giustino v Nicod</NavLink></li>
                        <li><NavLink to="#">Den Ouden v Donski</NavLink></li>
                        <li><NavLink to="#">Sels v Kuzmanov</NavLink></li>
                    </ul>
                )}
            </li>

            {/* Guangzhou Challenger 2024 */}
            <li>
                <NavLink
                    onClick={() => toggleCollapse('collapse03')}
                    className="collapsed"
                    to="#"
                >
                    <span>Guangzhou Challenger 2024</span>
                    <i className={`bi bi-caret-down ms-auto arrow ${collapsedSections.collapse03 ? 'rotate-180' : ''}`}></i>
                </NavLink>
                {collapsedSections.collapse03 && (
                    <ul className="nav-second-level">
                        <li><NavLink to="#">O&apos;Connell v Albot</NavLink></li>
                    </ul>
                )}
            </li>

            {/* WTA Bucharest 2024 */}
            <li>
                <NavLink
                    onClick={() => toggleCollapse('collapse04')}
                    className="collapsed"
                    to="#"
                >
                    <span>WTA Bucharest 2024</span>
                    <i className={`bi bi-caret-down ms-auto arrow ${collapsedSections.collapse04 ? 'rotate-180' : ''}`}></i>
                </NavLink>
                {collapsedSections.collapse04 && (
                    <ul className="nav-second-level">
                        <li><NavLink to="#">Mar Carle v Kat von Deichmann</NavLink></li>
                        <li><NavLink to="#">Ale Ibragimova v Mir Bulgaru</NavLink></li>
                        <li><NavLink to="#">Maria Tig v Ano Koevermans</NavLink></li>
                    </ul>
                )}
            </li>

            {/* ITF Men / ITF Australia F5, Men Singles */}
            <li>
                <NavLink
                    onClick={() => toggleCollapse('collapse05')}
                    className="collapsed"
                    to="#"
                >
                    <span>ITF Men / ITF Australia F5, Men Singles</span>
                    <i className={`bi bi-caret-down ms-auto arrow ${collapsedSections.collapse05 ? 'rotate-180' : ''}`}></i>
                </NavLink>
                {collapsedSections.collapse05 && (
                    <ul className="nav-second-level">
                        <li><NavLink to="#">Klintcharov, Alexander vs. Bradshaw, Jacob</NavLink></li>
                        <li><NavLink to="#">Winter, Edward vs. Delaney, Jake</NavLink></li>
                    </ul>
                )}
            </li>

            {/* ITF Men / ITF Romania F18 Men Singles */}
            <li>
                <NavLink
                    onClick={() => toggleCollapse('collapse05')}
                    className="collapsed"
                    to="#"
                >
                    <span>ITF Men / ITF Romania F18 Men Singles</span>
                    <i className={`bi bi-caret-down ms-auto arrow ${collapsedSections.collapse05 ? 'rotate-180' : ''}`}></i>
                </NavLink>
                {collapsedSections.collapse05 && (
                    <ul className="nav-second-level">
                        <li><NavLink to="#">Ribeiro Lago, Elio Jose vs. Filip, Jakub</NavLink></li>
                        <li><NavLink to="#">Chirita, Ioan Alexandru vs. de Vincentis, Matteo</NavLink></li>
                        <li><NavLink to="#">Tomescu, Dan Alexandru vs. Crisostomo, Giacomo</NavLink></li>
                        <li><NavLink to="#">Andreescu, Stefan Adrian vs. Ciavarella, Niccolo</NavLink></li>
                        <li><NavLink to="#">Ortenzi, Gian Marco vs. Cina, Federico</NavLink></li>
                    </ul>
                )}
            </li>

            {/* Davis Cup*/}
            <li>
                <NavLink
                    onClick={() => toggleCollapse('collapse06')}
                    className="collapsed"
                    to="#"
                >
                    <span>Davis Cup</span>
                    <i className={`bi bi-caret-down ms-auto arrow ${collapsedSections.collapse06 ? 'rotate-180' : ''}`}></i>
                </NavLink>
                {collapsedSections.collapse06 && (
                    <ul className="nav-second-level">
                        <li><NavLink to="#">Sultanov, Khumoyun vs. Tamm, Kristjan</NavLink></li>
                        <li><NavLink to="#">Egypt vs. Hungary</NavLink></li>
                        <li><NavLink to="#">USA vs. Slovakia</NavLink></li>
                        <li><NavLink to="#">Safwat, Mohamed vs. Valkusz, Mate</NavLink></li>
                        <li><NavLink to="#">Krajicek A / Ram R vs. Klein L / Zelenay I</NavLink></li>
                        <li><NavLink to="#">Tunisia vs. Ireland</NavLink></li>
                        <li><NavLink to="#">Mansouri, Skander vs. Agwi, Michael</NavLink></li>
                        <li><NavLink to="#">Romania vs. China</NavLink></li>
                        <li><NavLink to="#">Cretu, Cezar (2001) vs. Yunchaokete, Bu</NavLink></li>
                        <li><NavLink to="#">Austria vs. Turkiye</NavLink></li>
                        <li><NavLink to="#">Rodionov, Jurij vs. Erel, Yanki</NavLink></li>
                        <li><NavLink to="#">Boitan, Gabi Adrian vs. Zhou, Yi</NavLink></li>
                        <li><NavLink to="#">Dougaz, Aziz vs. Gannon, Conor</NavLink></li>
                        <li><NavLink to="#">Kym, Jerome vs. Buse, Ignacio</NavLink></li>
                        <li><NavLink to="#">Switzerland vs. Peru</NavLink></li>
                        <li><NavLink to="#">Neumayer, Lukas vs. Ilkel, Cem</NavLink></li>
                        <li><NavLink to="#">Huesler, Marc-Andrea vs. Varillas, Juan Pablo</NavLink></li>
                        <li><NavLink to="#">Kasnikowski, Maks vs. Hong, Seongchan</NavLink></li>
                        <li><NavLink to="#">Poland vs. Republic of Korea</NavLink></li>
                        <li><NavLink to="#">France vs. Spain</NavLink></li>
                        <li><NavLink to="#">Croatia vs. Lithuania</NavLink></li>
                        <li><NavLink to="#">Gojo, Borna vs. Gaubas, Vilius</NavLink></li>
                        <li><NavLink to="#">Oliel, Yshai vs. Ovcharenko, Oleksandr</NavLink></li>
                        <li><NavLink to="#">Majchrzak, Kamil vs. Kwon, Soonwoo</NavLink></li>
                        <li><NavLink to="#">Norway vs. Portugal</NavLink></li>
                        <li><NavLink to="#">Budkov Kjaer, Nicolai vs. Faria, Jaime</NavLink></li>
                        <li><NavLink to="#">Ajdukovic, Duje vs. Butvilas, Edas</NavLink></li>
                        <li><NavLink to="#">Ruud, Casper vs. Rocha, Henrique</NavLink></li>
                        <li><NavLink to="#">Dellien, Hugo vs. Aguilar Cardozo, Joaquin</NavLink></li>

                    </ul>
                )}
            </li>

            {/* Challenger / ATP Challenger Guangzhou (Huangpu), China Men Singles*/}
            <li>
                <NavLink
                    onClick={() => toggleCollapse('collapse07')}
                    className="collapsed"
                    to="#"
                >
                    <span>Challenger / ATP Challenger Guangzhou (Huangpu), China Men Singles</span>
                    <i className={`bi bi-caret-down ms-auto arrow ${collapsedSections.collapse07 ? 'rotate-180' : ''}`}></i>
                </NavLink>
                {collapsedSections.collapse07 && (
                    <ul className="nav-second-level">
                        <li><NavLink to="#">O&apos;Connell, Christopher vs. Albot, Radu</NavLink></li>
                    </ul>
                )}
            </li>

            {/* Challenger / ATP Challenger Dobrich 2, Bulgaria Men Singles */}
            <li>
                <NavLink
                    onClick={() => toggleCollapse('collapse08')}
                    className="collapsed"
                    to="#"
                >
                    <span>Challenger / ATP Challenger Dobrich 2, Bulgaria Men Singles</span>
                    <i className={`bi bi-caret-down ms-auto arrow ${collapsedSections.collapse08 ? 'rotate-180' : ''}`}></i>
                </NavLink>
                {collapsedSections.collapse08 && (
                    <ul className="nav-second-level">
                        <li><NavLink to="#">Royer, Valentin vs. Olivieri, Genaro Alberto</NavLink></li>
                        <li><NavLink to="#">Giustino, Lorenzo vs. Nicod, Jakub</NavLink></li>
                        <li><NavLink to="#">Den Ouden, Guy vs. Donski, Alexander</NavLink></li>
                        <li><NavLink to="#">Sels, Jelle vs. Kuzmanov, Dimitar</NavLink></li>
                        <li><NavLink to="#">Wqf3 vs. Wqf4</NavLink></li>
                        <li><NavLink to="#">Wqf1 vs. Wqf2</NavLink></li>
                    </ul>
                )}
            </li>

            {/* ITF Women / ITF France 22A, Women Singles */}
            <li>
                <NavLink
                    onClick={() => toggleCollapse('collapse09')}
                    className="collapsed"
                    to="#"
                >
                    <span>ITF Women / ITF France 22A, Women Singles</span>
                    <i className={`bi bi-caret-down ms-auto arrow ${collapsedSections.collapse09 ? 'rotate-180' : ''}`}></i>
                </NavLink>
                {collapsedSections.collapse09 && (
                    <ul className="nav-second-level">
                        <li><NavLink to="#">Scilipoti, Sebastianna vs. Gettwart, Fabienne</NavLink></li>
                        <li><NavLink to="#">Podrez, Veronika vs. Cirotte, Astrid</NavLink></li>
                    </ul>
                )}
            </li>

            {/* Virtual Tennis In-Play / Virtual Tennis In-Play */}
            <li>
                <NavLink
                    onClick={() => toggleCollapse('collapse010')}
                    className="collapsed"
                    to="#"
                >
                    <span>Virtual Tennis In-Play / Virtual Tennis In-Play</span>
                    <i className={`bi bi-caret-down ms-auto arrow ${collapsedSections.collapse010 ? 'rotate-180' : ''}`}></i>
                </NavLink>
                {collapsedSections.collapse010 && (
                    <ul className="nav-second-level">
                        <li><NavLink to="#">Fedirer vs. Raonnec</NavLink></li>
                        <li><NavLink to="#">Dimetriov vs. Andorsen</NavLink></li>
                        <li><NavLink to="#">Queray vs. Bertich</NavLink></li>
                    </ul>
                )}
            </li>

            {/* ITF Women / ITF Tunisia 48A, Women Singles*/}
            <li>
                <NavLink
                    onClick={() => toggleCollapse('collapse011')}
                    className="collapsed"
                    to="#"
                >
                    <span>ITF Women / ITF Tunisia 48A, Women Singles</span>
                    <i className={`bi bi-caret-down ms-auto arrow ${collapsedSections.collapse011 ? 'rotate-180' : ''}`}></i>
                </NavLink>
                {collapsedSections.collapse011 && (
                    <ul className="nav-second-level">
                        <li><NavLink to="#">Zamarripa, Maribella vs. Cayetano, Eryn</NavLink></li>
                        <li><NavLink to="#">Golovina, Maria vs. Plekhanova, Dasha</NavLink></li>
                        <li><NavLink to="#">Zou, Ruirui vs. Abe, Hiromi</NavLink></li>
                    </ul>
                )}
            </li>

            {/* ITF Women / ITF Portugal 13A, Women Singles */}
            <li>
                <NavLink
                    onClick={() => toggleCollapse('collapse012')}
                    className="collapsed"
                    to="#"
                >
                    <span>ITF Women / ITF Portugal 13A, Women Singles</span>
                    <i className={`bi bi-caret-down ms-auto arrow ${collapsedSections.collapse012 ? 'rotate-180' : ''}`}></i>
                </NavLink>
                {collapsedSections.collapse012 && (
                    <ul className="nav-second-level">
                        <li><NavLink to="#">McDonald, Ella vs. Vlasselaer, Clara</NavLink></li>
                        <li><NavLink to="#">Lazaro Garcia, Andrea vs. Grey, Sarah Beth</NavLink></li>
                        <li><NavLink to="#">Jorge, Matilde vs. Mansouri, Yasmine</NavLink></li>
                        <li><NavLink to="#">Sugnaux, Tess vs. Fung, Stacey</NavLink></li>
                    </ul>
                )}
            </li>

            {/* WTA Ljubljana 2024 */}
            <li>
                <NavLink
                    onClick={() => toggleCollapse('collapse012')}
                    className="collapsed"
                    to="#"
                >
                    <span>WTA Ljubljana 2024</span>
                    <i className={`bi bi-caret-down ms-auto arrow ${collapsedSections.collapse012 ? 'rotate-180' : ''}`}></i>
                </NavLink>
                {collapsedSections.collapse012 && (
                    <ul className="nav-second-level">
                        <li><NavLink to="#">Nur Brancaccio v Parrizas Diaz</NavLink></li>
                        <li><NavLink to="#">Dmitruk v J Teichmann</NavLink></li>
                        <li><NavLink to="#">F Jones v Jimenez Kasintseva</NavLink></li>
                        <li><NavLink to="#">El Seidel v O Danilovic</NavLink></li>
                    </ul>
                )}
            </li>

            {/* ITF Women / ITF France 21A, Women Singles */}
            <li>
                <NavLink
                    onClick={() => toggleCollapse('collapse013')}
                    className="collapsed"
                    to="#"
                >
                    <span>ITF Women / ITF France 21A, Women Singles</span>
                    <i className={`bi bi-caret-down ms-auto arrow ${collapsedSections.collapse013 ? 'rotate-180' : ''}`}></i>
                </NavLink>
                {collapsedSections.collapse013 && (
                    <ul className="nav-second-level">
                        <li><NavLink to="#">Leonard, Manon vs. Albie, Audrey</NavLink></li>
                    </ul>
                )}
            </li>

            {/* ITF Men / ITF Tunisia F49, Men Singles */}
            <li>
                <NavLink
                    onClick={() => toggleCollapse('collapse014')}
                    className="collapsed"
                    to="#"
                >
                    <span>ITF Men / ITF Tunisia F49, Men Singles</span>
                    <i className={`bi bi-caret-down ms-auto arrow ${collapsedSections.collapse014 ? 'rotate-180' : ''}`}></i>
                </NavLink>
                {collapsedSections.collapse014 && (
                    <ul className="nav-second-level">
                        <li><NavLink to="#">Hamza Reguig, Samir vs. Bax, Florent</NavLink></li>
                    </ul>
                )}
            </li>

            {/* Simulated Reality Women / SRL Summer Invitational Ashgabat, TKM, Women */}
            <li>
                <NavLink
                    onClick={() => toggleCollapse('collapse015')}
                    className="collapsed"
                    to="#"
                >
                    <span>Simulated Reality Women / SRL Summer Invitational Ashgabat, TKM, Women</span>
                    <i className={`bi bi-caret-down ms-auto arrow ${collapsedSections.collapse015 ? 'rotate-180' : ''}`}></i>
                </NavLink>
                {collapsedSections.collapse015 && (
                    <ul className="nav-second-level">
                        <li><NavLink to="#">Navarro, Emma (Srl) vs. Rybakina, Elena (Srl)</NavLink></li>
                    </ul>
                )}
            </li>

            {/* WTA 125k Ljubljana, Slovenia Women Doubles */}
            <li>
                <NavLink
                    onClick={() => toggleCollapse('collapse015')}
                    className="collapsed"
                    to="#"
                >
                    <span>WTA 125k Ljubljana, Slovenia Women Doubles</span>
                    <i className={`bi bi-caret-down ms-auto arrow ${collapsedSections.collapse015 ? 'rotate-180' : ''}`}></i>
                </NavLink>
                {collapsedSections.collapse015 && (
                    <ul className="nav-second-level">
                        <li><NavLink to="#">Gjorcheska L / Teichmann J vs. Kubanova K / Laboutkova A</NavLink></li>
                    </ul>
                )}
            </li>

            {/* ITF Women / ITF Tunisia 48A, Women Doubles */}
            <li>
                <NavLink
                    onClick={() => toggleCollapse('collapse016')}
                    className="collapsed"
                    to="#"
                >
                    <span>ITF Women / ITF Tunisia 48A, Women Doubles</span>
                    <i className={`bi bi-caret-down ms-auto arrow ${collapsedSections.collapse016 ? 'rotate-180' : ''}`}></i>
                </NavLink>
                {collapsedSections.collapse016 && (
                    <ul className="nav-second-level">
                        <li><NavLink to="#">Lekomtseva U / Zabolotnaia E vs. Bandurowska X / Kenzhibayeva S</NavLink></li>
                    </ul>
                )}
            </li>

            {/* Szczecin Challenger 2024 */}
            <li>
                <NavLink
                    onClick={() => toggleCollapse('collapse017')}
                    className="collapsed"
                    to="#"
                >
                    <span>Szczecin Challenger 2024</span>
                    <i className={`bi bi-caret-down ms-auto arrow ${collapsedSections.collapse017 ? 'rotate-180' : ''}`}></i>
                </NavLink>
                {collapsedSections.collapse017 && (
                    <ul className="nav-second-level">
                        <li><NavLink to="#">Campana Lee v Molleker</NavLink></li>
                        <li><NavLink to="#">Kopriva v Vatutin</NavLink></li>
                        <li><NavLink to="#">Altmaier v Pellegrino</NavLink></li>
                        <li><NavLink to="#">Ja Berrettini v Coria</NavLink></li>
                    </ul>
                )}
            </li>

            {/* ITF Men / ITF Italy F23, Men Singles */}
            <li>
                <NavLink
                    onClick={() => toggleCollapse('collapse018')}
                    className="collapsed"
                    to="#"
                >
                    <span>ITF Men / ITF Italy F23, Men Singles</span>
                    <i className={`bi bi-caret-down ms-auto arrow ${collapsedSections.collapse018 ? 'rotate-180' : ''}`}></i>
                </NavLink>
                {collapsedSections.collapse018 && (
                    <ul className="nav-second-level">
                        <li><NavLink to="#">Peliwo, Filip vs. Rottoli, Lorenzo</NavLink></li>
                        <li><NavLink to="#">Dellavedova, Matthew vs. Blanch, Dali</NavLink></li>
                        <li><NavLink to="#">Massacri, Benito vs. Pecci, Alessandro</NavLink></li>
                    </ul>
                )}
            </li>

            {/* Rennes Challenger 2024 */}
            <li>
                <NavLink
                    onClick={() => toggleCollapse('collapse019')}
                    className="collapsed"
                    to="#"
                >
                    <span>Rennes Challenger 2024</span>
                    <i className={`bi bi-caret-down ms-auto arrow ${collapsedSections.collapse019 ? 'rotate-180' : ''}`}></i>
                </NavLink>
                {collapsedSections.collapse019 && (
                    <ul className="nav-second-level">
                        <li><NavLink to="#">Mayot v Geerts</NavLink></li>
                        <li><NavLink to="#">Mannarino v Fearnley</NavLink></li>
                        <li><NavLink to="#">Pouille v Lestienne</NavLink></li>
                        <li><NavLink to="#">Ti Droguet v Halys</NavLink></li>
                    </ul>
                )}
            </li>

            {/* WTA Monastir, Tunisia Women Doubles */}
            <li>
                <NavLink
                    onClick={() => toggleCollapse('collapse020')}
                    className="collapsed"
                    to="#"
                >
                    <span>WTA Monastir, Tunisia Women Doubles</span>
                    <i className={`bi bi-caret-down ms-auto arrow ${collapsedSections.collapse020 ? 'rotate-180' : ''}`}></i>
                </NavLink>
                {collapsedSections.collapse020 && (
                    <ul className="nav-second-level">
                        <li><NavLink to="#">Blinkova A / Sherif Ahmed Abdelaziz M vs. Wagner A / Yashina E</NavLink></li>

                    </ul>
                )}
            </li>

            {/* ATP Challenger  Szczecin, Poland Men Doubles */}
            <li>
                <NavLink
                    onClick={() => toggleCollapse('collapse021')}
                    className="collapsed"
                    to="#"
                >
                    <span>ATP Challenger  Szczecin, Poland Men Doubles</span>
                    <i className={`bi bi-caret-down ms-auto arrow ${collapsedSections.collapse021 ? 'rotate-180' : ''}`}></i>
                </NavLink>
                {collapsedSections.collapse021 && (
                    <ul className="nav-second-level">
                        <li><NavLink to="#">Seggerman R / Walkow S vs. Pellegrino A / Popko D</NavLink></li>

                    </ul>
                )}
            </li>

            {/* Challenger / ATP Challenger Las Vegas, USA Men Singles */}
            <li>
                <NavLink
                    onClick={() => toggleCollapse('collapse022')}
                    className="collapsed"
                    to="#"
                >
                    <span>Challenger / ATP Challenger Las Vegas, USA Men Singles</span>
                    <i className={`bi bi-caret-down ms-auto arrow ${collapsedSections.collapse022 ? 'rotate-180' : ''}`}></i>
                </NavLink>
                {collapsedSections.collapse022 && (
                    <ul className="nav-second-level">
                        <li><NavLink to="#">Martin, Andres vs. Boyer, Tristan</NavLink></li>
                    </ul>
                )}
            </li>

            {/* Las Vegas Challenger 2024 */}
            <li>
                <NavLink
                    onClick={() => toggleCollapse('collapse023')}
                    className="collapsed"
                    to="#"
                >
                    <span>Las Vegas Challenger 2024</span>
                    <i className={`bi bi-caret-down ms-auto arrow ${collapsedSections.collapse023 ? 'rotate-180' : ''}`}></i>
                </NavLink>
                {collapsedSections.collapse023 && (
                    <ul className="nav-second-level">
                        <li><NavLink to="#">Ka Bigun v Karu Sell</NavLink></li>
                        <li><NavLink to="#">Andres Martin v Tr Boyer</NavLink></li>
                        <li><NavLink to="#">Ab Shelbayh v Kudla</NavLink></li>
                        <li><NavLink to="#">Tomic v Le Tien</NavLink></li>

                    </ul>
                )}
            </li>
        </ul>
    );
};

export default RugbyNavigation;
