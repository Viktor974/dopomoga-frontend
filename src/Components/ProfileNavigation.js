import React from 'react'
import "./profileNavigation.css"
import {Link} from "react-router-dom";
import photo from './image/img_11.png'
import location from './svg/location.svg'
import "./profileNavigation.css"

export default function ProfileNavigation() {

    return (
        <>
            <div className="naavp"/>
            <nav className="profile dis-blok">
                <div className="content-nav dis-blok">
                    <div className="userphotoMain"><img src={photo} alt=""/></div>
                    <div className="my-profile">
                        <div className="name">Антон Бойко</div>
                        <div className="role">Волонтер</div>
                        <div className="local">
                            <div className="text-nav"><img className="icon city" alt="" src={location}/>Київ, Україна
                            </div>
                        </div>
                    </div>
                    <div className="content-profile">
                        <button className="edit-profile">Редагувати</button>
                        <div className="flex cen-pos">
                            <div className="text-decoration-none date-created color-g">
                                Профиль створено:
                            </div>
                            <div className="text-decoration-none date-created color-b">
                                 15.12.18
                            </div>
                        </div>
                    </div>
                    <div className="biografy">Біографія</div>
                    <div className="text-profile">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit proin imperdiet dignissim consequat malesuada eu amet. Mi pharetra, dignissim neque quam nunc. Eleifend sit pellentesque eu lectus nulla volutpat mattis. Eu at cursus bibendum tincidunt sit habitasse cursus quis. Ridiculus auctor vitae nulla nibh malesuada lobortis dolor. Leo bibendum et varius sem lectus commodo nibh vitae.
                    </div>
                    <button className="edit-text t-d-n">
                        Редагувати
                    </button>


                    <div className="footermain text-decoration-none">
                        <div className="flex text-decoration-none">
                            <Link classname="t-d-n" to="/" style={{textDecoration: "none"}}>
                                <div className="t-d-n">Конфіденційність</div>
                            </Link>
                            <Link classname="t-d-n" to="/" style={{textDecoration: "none"}}>
                                <div className="t-d-n2">Правила</div>
                            </Link>
                        </div>
                        <div className="flex text-decoration-none">
                            <Link classname="t-d-n" to="/" style={{textDecoration: "none"}}>
                                <div className="t-d-n">Реклама</div>
                            </Link>
                            <Link classname="t-d-n" to="/" style={{textDecoration: "none"}}>
                                <div className="t-d-n2">Написати нам</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}