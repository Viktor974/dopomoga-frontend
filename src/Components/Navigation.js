import React from 'react'
import bank from './image/11.png'
import history from './image/5.png'
import childrendreams from './image/10.png'
import groups from './image/3.png'
import faq from './image/12.png'
import news from './image/4.png'
import notification from './image/2.png'
import organization from './image/8.png'
import people from './image/1.png'
import projects from './image/9.png'
import selected from './image/6.png'
import volunteers from './image/7.png'
import wantHelp from './svg/want-help.svg'
import './navigation.css'
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <div className="naav"/>
            <nav className="navigation dis-blok">
                <div className="content-nav dis-blok">
                    <div className="userphoto"/>
                    <div className="my-profile"><Link className="my-profile" to="/profile">Мій профіль</Link></div>
                    <div className="line-g"/>
                    <div className="con-l">
                        <div className="nav-men"><Link className="flex " to="/" style={{textDecoration: "none"}}>
                            <div className="text-nav"><img className="icon m-r" alt="" src={people}/>Мої друзі</div>
                        </Link></div>
                        <div className="nav-men"><Link className="flex " to="/" style={{textDecoration: "none"}}>
                            <div className="text-nav"><img className="icon m-r" alt="" src={notification}/>Мої
                                сповіщення
                            </div>
                        </Link></div>
                        <div className="nav-men"><Link className="flex" to="/" style={{textDecoration: "none"}}>
                            <div className="text-nav"><img className="icon m-r" alt="" src={groups}/>Мої групи</div>
                        </Link></div>
                        <div className="nav-men"><Link className="flex " to="/" style={{textDecoration: "none"}}>
                            <div className="text-nav"><img className="icon m-r" alt="" src={news}/>Події</div>
                        </Link></div>
                        <div className="nav-men"><Link className="flex " to="/" style={{textDecoration: "none"}}>
                            <div className="text-nav"><img className="icon m-r" alt="" src={history}/>Історія</div>
                        </Link></div>
                        <div className="nav-men"><Link className="flex " to="/" style={{textDecoration: "none"}}>
                            <div className="text-nav"><img className="icon m-r" alt="" src={selected}/>Обране</div>
                        </Link></div>
                        <div className="line-g"/>
                        <div className="nav-men"><Link className="flex " to="/" style={{textDecoration: "none"}}>
                            <div className="text-nav"><img className="icon m-r" alt="" src={volunteers}/>Волонтери</div>
                        </Link></div>
                        <div className="nav-men"><Link className="flex " to="/" style={{textDecoration: "none"}}>
                            <div className="text-nav"><img className="icon m-r" alt="" src={organization}/>Благодійні
                            </div>
                        </Link></div>
                        <div className="nav-men2"><Link className="flex " to="/" style={{textDecoration: "none"}}>
                            <div className="text-nav">організації</div>
                        </Link></div>
                        <div className="nav-men"><Link className="flex " to="/" style={{textDecoration: "none"}}>
                            <div className="text-nav"><img className="icon m-r" alt="" src={projects}/>Проекти</div>
                        </Link></div>
                        <div className="nav-men"><Link className="flex " to="/" style={{textDecoration: "none"}}>
                            <div className="text-nav"><img className="icon m-r" alt="" src={childrendreams}/>Мріють діти
                            </div>
                        </Link></div>
                        <div className="nav-men"><Link className="flex ali-c" to="/" style={{textDecoration: "none"}}>
                            <div className="text-nav"><img className="icon m-r" alt="" src={bank}/>Банка</div>
                        </Link></div>
                        <div className="nav-men"><Link className="flex ali-c" to="/" style={{textDecoration: "none"}}>
                            <div className="text-nav"><img className="icon m-r" alt="" src={faq}/>FAQ</div>
                        </Link></div>
                    </div>
                    <div>
                        <Link classname="" to=""><img className="help" src={wantHelp} alt=""/> </Link>
                    </div>
                    <div className="fot text-decoration-none">
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
    );
}

export default Navigation;