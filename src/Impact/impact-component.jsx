import React from "react";
import { ImpactStyle } from "./impact-style";
const ImpactComponent = () => {
    return (
        <ImpactStyle>
            <div className="heading">
                <h1>Impact at a Glance</h1>
            </div>
            <div className="parent"> 
                <div className="firstbox">
                    <span className="">Colleges</span>
                    <br />
                    <span className="">100+</span>
                </div>
                <div className="second box"></div>
            </div>
            <div className="parent2">
                <div className="thirdbox"></div>
                <div className="fouthbox"></div>
            </div>
        </ImpactStyle>
    )
};
export default ImpactComponent;