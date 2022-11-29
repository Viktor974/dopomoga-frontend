import Header from '../Components/Header.js'
import Footer from '../Components/Footer.js'
import Main from '../Components/MainPage.js'
import img1 from "../Components/svg/img.svg";
import img2 from "../Components/svg/text2.svg";
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