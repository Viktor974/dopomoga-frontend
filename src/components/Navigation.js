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
        <nav className="center nav-menu m-t-f m-l-10">
            <ul>
                <li><a href="/"><span>Мій профіль</span> </a> </li>

                <li><a className="text-menu" href="/"><div className="img-nav"><img src={people}/></div><span>Мої друзі</span> </a> </li>
                <li><a className="text-menu" href="/"><div className="img-nav"><img src={notification}/></div><span>Мої сповіщення </span> </a> </li>
                <li><a className="text-menu" href="/"><div className="img-nav"><img src={groups}/></div><span>Мої групи</span> </a> </li>
                <li><a className="text-menu" href="/"><div className="img-nav"><img src={news}/></div><span>Події</span> </a> </li>
                <li><a className="text-menu" href="/"><div className="img-nav"><img src={history}/></div><span>Історія</span> </a> </li>
                <li><a className="text-menu" href="/"><div className="img-nav"><img src={selected}/></div><span>Обране</span> </a> </li>

                <li><a className="text-menu" href="/"><div className="img-nav"><img src={volunteers}/></div><span>Волонтери</span> </a> </li>
                <li><a className="text-menu" href="/"><div className="img-nav"><img src={organization}/></div><span>Благодійні
                                                    організації</span> </a> </li>
                <li><a className="text-menu" href="/"><div className="img-nav"><img src={projects}/></div><span>Проєкти</span> </a> </li>
                <li><a className="text-menu" href="/"><div className="img-nav"><img src={childrendreams}/></div><span>Мріють діти</span> </a> </li>
                <li><a className="text-menu" href="/"><div className="img-nav"><img src={bank}/></div><span>Банка</span> </a> </li>
                <li><a className="text-menu" href="/"><div className="img-nav"><img src={faq}/></div><span>FAQ</span> </a> </li>
            </ul>
        </nav>
    );
}

export default Navigation;