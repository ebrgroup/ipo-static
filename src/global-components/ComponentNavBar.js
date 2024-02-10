const ComponentNavBar = () => {
    return(
        <>
            <header class="site-header header-style-1">
            <div class="topbar">
                <div class="container">
                    <div class="row">
                        <div class="col col-lg-2 col-sm-3">
                            <div class="site-logo">
                                <a href="#"><img src={require("../assets/images/logo.png")} alt /></a>
                            </div>
                        </div>
                        <div class="col col-lg-10 col-sm-9 contact-info-wrapper">
                            <div class="contact-info">
                                <div>
                                    <div class="icon">
                                        <i class="fi flaticon-phone-call"></i>
                                    </div>
                                    <p>+123 4567 889</p>
                                    <span>Give us a call</span>
                                </div>
                                <div>
                                    <div class="icon">
                                        <i class="fi flaticon-closed-envelope"></i>
                                    </div>
                                    <p>support@charter.com</p>
                                    <span>Mail us</span>
                                </div>
                                <div>
                                    <div class="icon">
                                        <i class="fi flaticon-clock-1"></i>
                                    </div>
                                    <p>Mon-Fri: 9 am-7 pm</p>
                                    <span>working hours</span>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>

            <nav class="navigation navbar navbar-default">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="open-btn">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>
                    <div id="navbar" class="navbar-collapse collapse navbar-left navigation-holder">
                        <button class="close-navbar"><i class="fa fa-close"></i></button>
                        <ul class="nav navbar-nav">
                            <li class="menu-item-has-children">
                                <a href="#">Home</a>
                                <ul class="sub-menu">
                                    <li><a href="index.html">Home style 1</a></li>
                                    <li><a href="index-2.html">Home style 2</a></li>
                                    <li><a href="index-3.html">Home style 3</a></li>
                                    <li class="menu-item-has-children">
                                        <a href="#Level3">Third level</a>
                                        <ul class="sub-menu">
                                            <li><a href="#">Level3</a></li>
                                            <li><a href="#">Level3</a></li>
                                            <li><a href="#">Level3</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="about.html">About</a></li>
                            <li class="menu-item-has-children">
                                <a href="#">Services</a>
                                <ul class="sub-menu">
                                    <li><a href="services.html">All Services</a></li>
                                    <li><a href="service-single.html">Business Deal</a></li>
                                    <li><a href="service-single-consulting.html">Finance Consulting</a></li>
                                    <li><a href="service-single-market-research.html">Market Research</a></li>
                                    <li><a href="service-single-venture.html">Venture Capitols</a></li>
                                    <li><a href="service-single-startup.html">Startup</a></li>
                                </ul>
                            </li>
                            <li><a href="projects.html">Projects</a></li>
                            <li class="menu-item-has-children">
                                <a href="#">Pages</a>
                                <ul class="sub-menu">
                                    <li><a href="career.html">Career</a></li>
                                    <li><a href="case-studies.html">Case studies</a></li>
                                    <li><a href="case-studies-single.html">Case studies single</a></li>
                                    <li><a href="faq.html">FAQ</a></li>
                                    <li><a href="partnership.html">Partnership</a></li>
                                    <li><a href="team.html">Team</a></li>
                                    <li><a href="testimonials.html">Testimonials</a></li>
                                </ul>
                            </li>
                            <li class="menu-item-has-children">
                                <a href="#">Blog</a>
                                <ul class="sub-menu">
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="blog-grid.html">Blog grid</a></li>
                                    <li><a href="blog-details.html">Blog single</a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>

                    <div class="search-social">
                        <div class="social">
                            <ul>
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                <li><a href="#"><i class="fa fa-rss"></i></a></li>
                            </ul>
                        </div>
                        <div class="header-search-area">
                            <div class="header-search-form">
                                <form class="form">
                                    <div>
                                        <input type="text" class="form-control" placeholder="Search here" />
                                    </div>
                                    <button type="submit" class="btn"><i class="fa fa-search"></i></button>
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

export default ComponentNavBar;