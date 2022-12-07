import Header from '../Components/HeaderMain.js'
import * as React from "react";
import Navigation from "../Components/Navigation";
import "./indexPages.css"

export const Friends = () => {
    return (
        <body className="bg-c-grey">
        <div className="headerHome fix">
            <Header/>
        </div>


        <div className="flex">
            <Navigation classname="fix"/>

        </div>
        </body>
    );
}

export default Friends;