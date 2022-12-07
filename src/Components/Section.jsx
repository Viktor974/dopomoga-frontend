import React from "react"
import './Section.css'
import {Link} from "react-router-dom";

export default function Section() {
    return (
        <>
            <div>
                <div className="section tag2 flex">
                    <Link className="t-d-n tag1" to="">
                        <div>Публікації</div>
                    </Link>
                    <Link className="t-d-n tag" to="">
                        <div>Інформація</div>
                    </Link>
                    <Link className="t-d-n tag" to="">
                        <div>Друзі (9)</div>
                    </Link>
                    <Link className="t-d-n tag" to="">
                        <div>Сповіщення</div>
                    </Link>
                </div>
            </div>
        </>
    )
}