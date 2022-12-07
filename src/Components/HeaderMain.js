import * as React from "react";
import {Link} from "react-router-dom";
import "./index.css"
import logo from './logo.svg';
import language from './svg/lg-ua.svg';
import notify from './svg/notification-main.svg';
import logout from './svg/logout.svg';

const Header = () => {
    return (
        <>
            <header>
                <div className="header bg-2d ">
                    <div className="m-l-100t m-t-5t">
                        <div className=" m-a">
                            <Link to="/">
                                <img src={logo} className="logo" alt="logo"/>
                            </Link>
                        </div>
                        <div>
                            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 search flex" role="search">
                                <input type="search" className="form-control" placeholder="Пошук"
                                       aria-label="Search"/>
                                <div className="hw-c">
                                    <svg width="29" height="28" viewBox="0 0 29 28" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path className="s-path"
                                              d="M28 27L22.6358 21.5354C24.7694 19.4072 26.021 16.601 26.1546 13.6456C26.2883 10.6902 25.2949 7.78979 23.3615 5.49103C21.4282 3.19227 18.6885 1.65395 15.6588 1.16601C12.6292 0.678078 9.51882 1.27423 6.91403 2.84211C4.30923 4.40998 2.38991 6.84128 1.51781 9.67775C0.645707 12.5142 0.881074 15.5599 2.17954 18.2408C3.47801 20.9218 5.7499 23.0527 8.56699 24.2319C11.3841 25.4112 14.5518 25.5574 17.4731 24.643"
                                              stroke="#757575" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>

                            </form>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="language">
                            <img src={notify} className="img-nav m-a center" alt=""/>
                        </div>
                        <div className="language">
                            <img src={language} alt=""/>
                        </div>
                        <div className="language">
                            <img src={logout} alt=""/>
                        </div>
                    </div>
                </div>
            </header>
            <div className="likeheader"/>
        </>
    );
}

export default Header;