import React from 'react'
import photo from "./svg/photo.svg"

export default function SearchPost(){
    return(

        <div>
            <div className="create-post tag2">
                <div className="jc">
                    <input className="searchPost" type="text" placeholder="Написати"/>
                </div><div>
                <img className="photo m-r" alt="" src={photo}/></div>
                <div><div className="text-nav">Додати фото/відео</div></div>
            </div>
        </div>
    )
}