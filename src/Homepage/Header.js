import './Header.css';
import Logo_red from '../Airbnb_red.png';
import Logo_white from '../Airbnb_white.png';
import { grey } from '@mui/material/colors';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { useState, useEffect, useRef } from 'react';
import { useWindowScrollPositions } from '../useWindowScrollPosition';

function Header() {
    const [headerColor, setHeaaderColor] = useState("black");
    const [logoColorWhite, setLogoColorWhite] = useState(1);
    const [inputTabSize, setInputTabSize] = useState(1);
    const [inputTabPos, setInputTabPos] = useState("static");
    const [textColor, setTextColor] = useState("white");
    const [theme, setTheme] = useState(["dark", "darkicon"]);
    const [headerHeight, setHeaderHeight] = useState(["", ""]);
    const [useBoxShadow, setUseBoxShadow] = useState(0);
    const headerCompHeight = useRef(["", ""]);

    const {scrollY} = useWindowScrollPositions();

    useEffect(() => {
        if (scrollY > 20) {
            setHeaaderColor("white");
            setLogoColorWhite(0);
            setInputTabSize(0);
            setTextColor("black");
            setTheme(["light", "lighticon"]);
            setInputTabPos("absolute");
            setHeaderHeight(headerCompHeight.current[1]);
            setUseBoxShadow(1);
        } else {
            setHeaaderColor("black");
            setLogoColorWhite(1);
            setInputTabSize(1);
            setTextColor("white");
            setTheme(["dark", "darkicon"]);
            setInputTabPos("static");
            setHeaderHeight(headerCompHeight.current[0]);
            setUseBoxShadow(0);
        }
    }, [scrollY]);

    useEffect(() => {
        let element1 = document.getElementById("home-header");
        let computedStyle1 = getComputedStyle(element1);

        let element2 = document.getElementById("home-header-input");
        let computedStyle2 = getComputedStyle(element2);
        headerCompHeight.current[0] = (element1.clientHeight - parseFloat(computedStyle1.paddingTop) - parseFloat(computedStyle1.paddingBottom)) + "px";
        headerCompHeight.current[1] = (element1.clientHeight - parseFloat(computedStyle1.paddingTop) - parseFloat(computedStyle1.paddingBottom) - element2.clientHeight - parseFloat(computedStyle2.marginTop)) + "px";

        setHeaderHeight(headerCompHeight.current[0]);
    }, []);

    const styles = { 
        transform: `scale(${inputTabSize})`,
        position: inputTabPos,
    };

    return (
        <div className = "header" id="home-header" style = {{backgroundColor: headerColor, height: headerHeight, boxShadow: useBoxShadow ? "0px 2px 10px rgba(162, 162, 162, 0.4)" : "" }}>
                <div className="header_left">
                    <img  alt="logo" src={logoColorWhite ? Logo_white : Logo_red}/>  
                </div>
                <div className="header_middle">
                    <div className="header_mode" style={{color: textColor, ...styles}}>
                        <div variant={theme[0]}>Places to stay</div>
                        <div variant={theme[0]}>Experiences</div>
                        <div variant={theme[0]}>Online Experiences</div>
                    </div>
                    <div className="header_inputinfo" id="home-header-input" style={styles}>
                        <div style = {{color: "black"}}>Input</div>
                    </div>
                </div>
                <div className="header_right">
                    <button variant={theme[0]} style={{ color: textColor, fontSize: 14}}>Become a Host</button>
                    <button variant={theme[1]} style={{padding: "12px 12px"}}>
                        <LanguageIcon sx={{ fontSize: 20, color: textColor }} style={{display: "block"}}/>
                    </button>
                    <div className="header_user_menu">
                        <DensityMediumIcon sx={{ fontSize: 16 }}/>
                        <AccountCircleIcon sx={{ color: grey[700], fontSize: 33, margin: "-7px -7px -7px 6px"}}/>
                    </div>
                </div>
            </div>
    );
}

export default Header;