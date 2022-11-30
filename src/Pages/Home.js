import Header from '../Components/HeaderMain.js'
import * as React from "react";
import Navigation from "../Components/Navigation";

export const Home = () => {
    return (
        <body className="page bg-c-grey">
        <Header/>
        <Navigation/>
        </body>
    );
}

export default Home;