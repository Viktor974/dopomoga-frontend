import Header from '../Components/HeaderMain.js'
import * as React from "react";
import Navigation from "../Components/Navigation";

export const Home = () => {
    return (
        <body className="page">
        <Header/>
        <Navigation/>
        </body>
    );
}

export default Home;