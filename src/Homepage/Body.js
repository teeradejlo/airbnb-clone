import './Body.css'
import { useState, useEffect, useRef } from 'react';

function Body() {
    const [bodyPaddingTop, setBodyPaddingTop] = useState("");
    const headerCompHeight = useRef("");

    useEffect(() => {
        let element1 = document.getElementById("home-header");
        let computedStyle1 = getComputedStyle(element1);

        headerCompHeight.current = (element1.clientHeight - parseFloat(computedStyle1.paddingTop) - parseFloat(computedStyle1.paddingBottom)) + "px";
        setBodyPaddingTop(headerCompHeight.current);
    }, []);

    return (
        <div className="home_body" style={{paddingTop: bodyPaddingTop}}>
            <div className="home_body_banner">
                <div className="ukr_banner">
                    <span>Help house 100,000 refugees fleeing Ukraine</span>
                    <button variant="white_border">Learn more</button>
                </div>
            </div>
            <div className="home_body_booking">
                <div className="booking_banner">
                    <span>Let your curiosity do the booking</span>
                    <button variant="white_fill" class="button_dim"><span className="text_grad_purplepink">I'm flexible</span></button>
                </div>
            </div>
            <div className="home_body_discover">
                <div style={{fontSize: "2.2em", fontWeight: 550, marginBottom: "3%"}}>Discover Airbnb Experiences</div>
                <div className="home_body_discover_card_con">
                    <div className="home_body_card" style={{backgroundImage: 'url("https://preview.redd.it/np015hzahuh21.jpg?width=640&crop=smart&auto=webp&s=5a72c32c2c47163d9f386bcaf12837feb85fced9")'}}>
                        <div>Things to do<br/>on your trip</div>
                        <button variant="white_fill" class="home_body_card_button button_dim">Experiences</button>
                    </div>
                    <div className="home_body_card" style={{backgroundImage: 'url("https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/PJM020719Q202_Luxe_WanakaNZ_LivingRoom_0264-LightOn_R1.jpg")'}}>
                        <div>Things to do<br/>from home</div>
                        <button variant="white_fill" class="home_body_card_button button_dim">Online Experiences</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;

