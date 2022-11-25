import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import Main from '../components/MainPage.js'
import img1 from "../components/svg/img.svg";
import img2 from "../components/svg/text2.svg";
import * as React from "react";

export const MainPage = () => {
    return (
            <body className="page">
            <Header/>
            <img src={img1} className="i-mp" alt=""/>
                <Main/>
            <img src={img2} className="i-mp" alt=""/>

            <Footer/>
            </body>
    );
}

export default MainPage;