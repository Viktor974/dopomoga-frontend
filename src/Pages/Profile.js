import Header from '../Components/HeaderMain.js'
import * as React from "react";
import ProfileNavigation from "../Components/ProfileNavigation";
import Section from "../Components/Section";
import SearchPost2 from "../Components/SearchPost2";
import "./indexPages.css"

export const Profile = () => {
    return (
        <body className="bg-c-grey">
        <div className="headerHome fix">
            <Header/>
        </div>
        <div className="flex">
            <ProfileNavigation classname="fix"/>
            <div className="content">
                <Section/>
                <SearchPost2/>
            </div>
        </div>
        </body>
    );
}

export default Profile;