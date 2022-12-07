import React from 'react'
import photo from "./svg/photo.svg"

export default function SearchPost(){
    return(

        <div>
            <div className="create-post2 tag2">
                <div className="jc">
                    <input className="searchPost2" type="text" placeholder="Написати"/>
                </div><div>
                <img className="photo2" alt="" src={photo}/></div>
            </div>
        </div>
    )
}