import Header from '../Components/HeaderMain.js'
import * as React from "react";
import Navigation from "../Components/Navigation";
import Post from "../Components/Posts.jsx";
import "./indexPages.css"
import Donat from "../Components/Donat";
import Tags from "../Components/Tags";
import Advertising from "../Components/advertising";

import image1 from "../Components/image/img_6.png"
import image2 from "../Components/image/img_7.png"
import image3 from "../Components/image/img_8.png"
import SearchPost from "../Components/SearchPost";
import { Posts } from "../Components/dummyData";

export const Home = () => {
    return (
        <body className="bg-c-grey">
        <div className="headerHome fix">
            <Header/>
        </div>


        <div className="flex">
            <Navigation classname="fix"/>
            <div className="content">
                <div className="flex">
                    <Donat ProjectView={image1}/>
                    <Donat ProjectView={image2}/>
                    <Donat ProjectView={image3}/>
                    <Donat ProjectView={image3}/>
                </div>
                <SearchPost/>
                <div className="flexx">
                    <div>
                        <Tags/>
                        {Posts.map(p=>(
                            <Post key={p.id} post={p}/>
                        ))}
                    </div>

                    <Advertising/>
                </div>
            </div>

        </div>
        </body>
    );
}

export default Home;