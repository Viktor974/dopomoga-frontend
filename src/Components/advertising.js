import React from 'react'
import "./advertising.css"
import img_9 from "./image/img_9.png"
import img_10 from "./image/img_10.png"
import {Link} from "react-router-dom";
export default function Advertising(){
    return(
        <>
            <div className="advertising">
                <div className="advertising-text">
                    Реклама
                </div>
                <div>
                    <Link to=""><img className="img-advertising" src={img_9} alt=""/></Link>
                    <Link to=""><img className="img-advertising" src={img_10} alt=""/></Link>
                </div>
            </div>
        </>
    )
}