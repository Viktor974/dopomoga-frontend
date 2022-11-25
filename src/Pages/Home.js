import Header from '../components/HeaderMain.js'
import * as React from "react";
import Navigation from "../components/Navigation";

export const Home = () => {
    return (
        <body className="page">
        <Header/>
        <Navigation/>
        </body>
    );
}

export default Home;