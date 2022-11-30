import React from 'react'
import bank from './svg/bank.svg'
import history from './svg/history.svg'
import childrendreams from './svg/childrendreams.svg'
import groups from './svg/groups.svg'
import faq from './svg/faq.svg'
import news from './svg/news.svg'
import notification from './svg/notification.svg'
import organization from './svg/organization.svg'
import people from './svg/people.svg'
import projects from './svg/projects.svg'
import selected from './svg/selected.svg'
import volunteers from './svg/volunteers.svg'
import './index.css'
const Navigation = () =>{
    return (
        <nav className="center nav-menu m-t-f m-l-10 t-none con-l">
            <ul>

                <li className="t-d-none"><a href="/"><span>Мій профіль</span> </a> </li>
                <div className="line"></div>
                <div className="con-l">
                <li><a className="text-menu flex m-t-5t" href="/"><div className="img-nav m-r-5t"><img className="menu" alt="" src={people}/></div></a> </li>
                <li><a className="text-menu flex m-t-5t" href="/"><div className="img-nav m-r-5t"><img className="menu" alt="" src={notification}/></div></a> </li>
                <li><a className="text-menu flex m-t-5t" href="/"><div className="img-nav m-r-5t"><img className="menu" alt="" src={groups}/></div></a> </li>
                <li><a className="text-menu flex m-t-5t" href="/"><div className="img-nav m-r-5t"><img className="menu" alt="" src={news}/></div></a></li>
                <li><a className="text-menu flex m-t-5t" href="/"><div className="img-nav m-r-5t"><img className="menu" alt="" src={history}/></div></a> </li>
                <li><a className="text-menu flex m-t-5t" href="/"><div className="img-nav m-r-5t"><img className="menu" alt="" src={selected}/></div></a> </li>
                <div className="line"></div>
                <li><a className="text-menu flex m-t-5t" href="/"><div className="img-nav m-r-5t"><img  className="menu" alt="" src={volunteers}/></div> </a> </li>
                <li><a className="text-menu flex m-t-5t" href="/"><div className="img-nav m-r-5t"><img  className="menu-org" alt="" src={organization}/></div></a> </li>
                <li><a className="text-menu flex m-t-5t" href="/"><div className="img-nav m-r-5t"><img  className="menu" alt="" src={projects}/></div> </a> </li>
                <li><a className="text-menu flex m-t-5t" href="/"><div className="img-nav m-r-5t"><img  className="menu" alt="" src={childrendreams}/></div></a> </li>
                <li><a className="text-menu flex m-t-5t" href="/"><div className="img-nav m-r-5t"><img  className="menu" alt="" src={bank}/></div></a> </li>
                <li><a className="text-menu flex m-t-5t" href="/"><div className="img-nav m-r-5t"><img  className="menu" alt="" src={faq}/></div> </a> </li>
                </div>
                </ul>
        </nav>
    );
}

export default Navigation;