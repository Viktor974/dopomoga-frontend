import * as React from "react";
import "./Posts.css"
import plus from "./image/img_1.png"
import settings from "./image/img.png"
import select from "./image/img_3.png"
import liked from "./image/img_2.png"
import send from "./image/img_4.png"
import { Users } from "./dummyData"
import {useState} from "react";

export default function Posts({post}) {
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)
    const PF = "assets/"

    const likeHandler = ()=>{
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }
    return (
        <>
            <div className="posts">
                <div className="postWrapper">
                    <div className="postTop">
                        <div className="postTopLeft">
                            <img className="post-avatar" src={PF+Users.filter((u)=>u.id === post.userId)[0].profilePicture} alt=""/>
                            <div className="">
                                <span className="postUserName">{Users.filter((u)=>u.id === post.userId)[0].username}</span>
                                <span className="postDate">{post.date}</span>
                            </div>
                        </div>
                        <div className="postTopRight">
                            <img className="post-icon" src={plus} alt=""/>
                            <img className="post-icon" src={settings} alt=""/>
                        </div>
                    </div>
                    <div className="postCenter">
                        <div>
                            <span className="postText">{post?.desc}</span>
                            <img className="photo-post" src={PF+post.photo} alt=""/>
                        </div>
                    </div>
                    <div className="postBottom">
                        <div className="postBottomLeft flex">
                            <div className="content-center">
                                <img className="post-icon2 f1" src={liked} onClick={likeHandler} alt=""/>
                                <span className="likeCounter left-16">подобається ({like})</span>
                            </div>
                            <div className="content-center">
                                <img className="post-icon2 f2" src={select} alt=""/>
                                <span className="likeCounter left-16">в обране ({post?.select})</span>
                            </div>
                            <div className="content-center">
                                <img className="post-icon3" src={send} alt=""/>
                                <span className="likeCounter left-16">поділитися ({post?.send})</span>
                            </div>
                        </div>
                        <div className="postLine"/>
                        <div className="postBottomRight flex">
                            <span className="text-decoration-none">Коментувати</span>
                            <span className="text-decoration-none">Коментарі ({post.comment})</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}