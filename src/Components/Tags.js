import React from "react"
import './tags.css'
import {Link} from "react-router-dom";
import more from "./image/img_5.png"

export default function Tags() {
    return (
        <>
            <div>
                <div className="tag2 tags flex">
                    <Link className="t-d-n tag1" to="">
                        <div>Все</div>
                    </Link>
                    <Link className="t-d-n tag" to="">
                        <div>Діти</div>
                    </Link>
                    <Link className="t-d-n tag" to="">
                        <div>Світ</div>
                    </Link>
                    <Link className="t-d-n tag" to="">
                        <div>Тварини</div>
                    </Link>
                    <Link className="t-d-n tag" to="">
                        <div>Природа</div>
                    </Link>
                    <Link className="t-d-n tag" to="">
                        <div>Медицина</div>
                    </Link>
                    <img className="imgMore tag" src={more} alt=""/>
                </div>
            </div>
        </>
    )
}