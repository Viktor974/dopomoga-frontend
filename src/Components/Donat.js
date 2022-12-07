import * as React from "react";
import "./donat.css"

export default function Donat(props) {
    return (
        <div className="donat">
            <div>
                <div className="">
                    <img className="bg-img" src={ props.ProjectView } alt=""/>
                </div>
            </div>
        </div>
    )
}