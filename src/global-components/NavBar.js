import React from "react";

const Navbar = () => {
    return(
        <>
        
        <header className="site-header header-style-2">
            <div className="topbar">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-2 col-sm-3">
                            <div className="site-logo">
                                <a href="#"><img src={require("../assets/images/logo-2.png")} /></a>
                            </div>
                        </div>
                        <div className="col col-lg-10 col-sm-9 contact-info-wrapper">
                            <div className="contact-info">
                                <div>
                                    <div className="icon">
                                        <i className="fi flaticon-phone-call"></i>
                                    </div>
                                    <p>+123 4567 889</p>
                                    <span>Give us a call</span>
                                </div>
                                <div>
                                    <div className="icon">
                                        <i className="fi flaticon-closed-envelope"></i>
                                    </div>
                                    <p>support@charter.com</p>
                                    <span>Mail us</span>
                                </div>
                                <div>
                                    <div className="icon">
                                        <i className="fi flaticon-clock-1"></i>
                                    </div>
                                    <p>Mon-Fri: 9 am-7 pm</p>
                                    <span>working hours</span>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>

            <nav className="navigation navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="open-btn">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse navbar-left navigation-holder">
                        <button className="close-navbar"><i className="fa fa-close"></i></button>
                        <ul className="nav navbar-nav">
                            <li className="menu-item-has-children">
                                <a href="#">Home</a>
                                <ul className="sub-menu">
                                    <li><a href="index.html">Home style 1</a></li>
                                    <li><a href="index-2.html">Home style 2</a></li>
                                    <li><a href="index-3.html">Home style 3</a></li>
                                    <li className="menu-item-has-children">
                                        <a href="#Level3">Third level</a>
                                        <ul className="sub-menu">
                                            <li><a href="#">Level3</a></li>
                                            <li><a href="#">Level3</a></li>
                                            <li><a href="#">Level3</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a>About</a></li>
                            <li className="menu-item-has-children">
                                <a href="#">Services</a>
                                <ul className="sub-menu">
                                    <li><a href="services.html">All Services</a></li>
                                    <li><a href="service-single.html">Business Deal</a></li>
                                    <li><a href="service-single-consulting.html">Finance Consulting</a></li>
                                    <li><a href="service-single-market-research.html">Market Research</a></li>
                                    <li><a href="service-single-venture.html">Venture Capitols</a></li>
                                    <li><a href="service-single-startup.html">Startup</a></li>
                                </ul>
                            </li>
                            <li><a href="projects.html">Projects</a></li>
                            <li className="menu-item-has-children">
                                <a href="#">Pages</a>
                                <ul className="sub-menu">
                                    <li><a href="career.html">Career</a></li>
                                    <li><a href="case-studies.html">Case studies</a></li>
                                    <li><a href="case-studies-single.html">Case studies single</a></li>
                                    <li><a href="faq.html">FAQ</a></li>
                                    <li><a href="partnership.html">Partnership</a></li>
                                    <li><a href="team.html">Team</a></li>
                                    <li><a href="testimonials.html">Testimonials</a></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <a href="#">Blog</a>
                                <ul className="sub-menu">
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="blog-grid.html">Blog grid</a></li>
                                    <li><a href="blog-details.html">Blog single</a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>

                    <div className="search-social">
                        <div className="header-search-area">
                            <div className="header-search-form">
                                <form className="form">
                                    <div>
                                        <input type="text" className="form-control" placeholder="Search here" />
                                    </div>
                                    <button type="submit" className="btn"><i className="fa fa-search"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        </>
    );
}

export default Navbar;