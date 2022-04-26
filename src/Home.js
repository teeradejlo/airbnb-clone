import './Home.css';
import Logo_red from './Airbnb_red.png';
import Logo_white from './Airbnb_white.png';
import { grey } from '@mui/material/colors';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { useState } from 'react';

function Home() {
    const [headerColor, setHeaaderColor] = useState("transparent");
    const [logoColorWhite, setLogoColorWhite] = useState(1);

    return (
        <div className="Home">
            {/* Header */}
            <div className = "header" style = {{backgroundColor: headerColor}}>
                <div className="header_left">
                    <img  alt="logo" src={logoColorWhite ? Logo_white : Logo_red}/>  
                </div>
                <div className="header_middle">
                    <div className="header_mode">
                        <div>Places to stay</div>
                        <div>Experiences</div>
                        <div>Online Experiences</div>
                    </div>
                    <div className="header_inputinfo">

                    </div>
                </div>
                <div className="header_right">
                    <button style={{ color: "white", fontSize: 14}}>Become a Host</button>
                    <button variant="icon" style={{padding: "12px 12px"}}>
                        <LanguageIcon sx={{ fontSize: 20, color: "white" }} style={{display: "block"}}/>
                    </button>
                    <div className="header_user_menu">
                        <DensityMediumIcon sx={{ fontSize: 16 }}/>
                        <AccountCircleIcon sx={{ color: grey[700], fontSize: 33, margin: "-7px -7px -7px 6px"}}/>
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className="body_container">

            </div>
        </div>
        
    );
}

export default Home;