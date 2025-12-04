import React from "react";
import { HeadingStyle } from "./Heading-style";
const HeadingComponent = () => {
    return (
        <HeadingStyle>
            <div className="flex1">
                <div className="placementTraining">
                    <h1 className="heading">A Symbol of Excellence in Placement Training</h1>
                    <p className="sub__heading">
                        Aptitude Guru Hem was born from the aspiration to create a learning environment that inspires greatness. Our founder, driven by personal experiences and a desire to make a difference, established the company with a mission to empower students with the right skills and mindset for success.
                    </p>
                </div>
            </div>
            <div className="flex2">
            <div className="box">
                <h1 className="box1_heading">| Our Vision</h1>
                <p className="box1_para">Our vision is to empower individuals from diverse backgrounds to become accomplished professionals. At Aptitude Guru Hem, we believe that knowledge has the power to transcend boundaries.</p>
            </div> 
            <div className="rec"></div>
            <div className="box2">  
                <h1 className="box2_heading">| Our Mission</h1>
                <p className="box2_para">Our mission is to revolutionize education by providing comprehensive training in aptitude, coding, and web/mobile development. We foster a culture of inclusivity and personal growth.</p>
            </div>
            </div>
        </HeadingStyle>
    );
};
export default HeadingComponent;