import React, { useEffect, useRef } from "react";
import Footer from "../../global-components/Footer";
import ComponentNavBar from "../../global-components/ComponentNavBar";

const About = () => {

    return (
    <div class="page-wrapper">
        {/* <div class="preloader">
            <div class="inner">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div> */}
        <ComponentNavBar />
        <section class="page-title">
            <div class="container">
                <div class="row">
                    <div class="col col-xs-12">
                        <h2>About us</h2>
                        <ol class="breadcrumb">
                            <li><a href="index.html">Home</a></li>
                            <li>About us</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>        
        
        <section class="about-details-section section-padding">
            <div class="container">
                <div class="row">
                    <div class="col col-md-6">
                        <h2>We are leading international consulting firm specializing in financial investment.</h2>
                    </div>
                    <div class="col col-md-6">
                        <div class="text">
                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed qu ia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci ve lit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                        </div>
                    </div>
                </div>


                <div class="row start-count">
                    <div class="col col-xs-12">
                        <div class="funfact-grids">
                            <div class="grid">
                                <div class="icon">
                                    <i class="fi flaticon-music"></i>
                                </div>
                                <h3>
                                    <span class="counter" data-count="450">00</span><span>+</span>
                                </h3>
                                <p>Completed Projects</p>
                            </div>
                            <div class="grid">
                                <div class="icon">
                                    <i class="fi flaticon-group"></i>
                                </div>
                                <h3>
                                    <span class="counter" data-count="600">00</span><span>+</span>
                                </h3>
                                <p>Skilled Employees</p>
                            </div>
                            <div class="grid">
                                <div class="icon">
                                    <i class="fi flaticon-like"></i>
                                </div>
                                <h3>
                                    <span class="counter" data-count="100">00</span><span>%</span>
                                </h3>
                                <p>Satisfaction</p>
                            </div>
                            <div class="grid">
                                <div class="icon">
                                    <i class="fi flaticon-trophy"></i>
                                </div>
                                <h3>
                                    <span class="counter" data-count="200">00</span><span>+</span>
                                </h3>
                                <p>Awards Win</p>
                            </div>                        
                        </div>
                    </div>
                </div>                
            </div>
        </section>
        
        <section class="about-video-progress-section">
            <div class="content">
                <div class="left-col">
                    <div class="video-holder">
                        <a href="https://www.youtube.com/embed/7e90gBu4pas?autoplay=1" class="video-btn" data-type="iframe">
                            <i class="fa fa-play"></i>
                        </a>
                    </div>
                </div>
                <div class="right-col">
                    <div class="inner">
                        <h2>Our Reputation & Intergity</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labo ris nisi ut aliquip ex ea commodo consequat.</p>
                        
                        <div class="skill-progress-bar">
                            <div class="skills">
                                <div class="skill">
                                    <h6>Finance</h6>
                                    <div class="progress">
                                        <div class="progress-bar" data-percent="85"></div>
                                    </div>
                                </div>
                                <div class="skill">
                                    <h6>Business</h6>
                                    <div class="progress">
                                        <div class="progress-bar" data-percent="98"></div>
                                    </div>
                                </div>
                                <div class="skill">
                                    <h6>Investment</h6>
                                    <div class="progress">
                                        <div class="progress-bar" data-percent="92"></div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
        
        <section class="industry-section section-padding">
            <div class="container">
                <div class="row">
                    <div class="col col-lg-6 col-lg-offset-3 col-sm-8 col-sm-offset-2">
                        <div class="section-title-s3">
                            <h2>We provide major companies with a range of finance consulting services</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col col-lg-5 col-md-6">
                        <div class="features-grids">
                            <div class="grid">
                                <div class="icon">
                                    <i class="fi flaticon-businessman"></i>
                                </div>
                                <h3>Business Strategy Planning</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            </div>
                            <div class="grid">
                                <div class="icon">
                                    <i class="fi flaticon-salary"></i>
                                </div>
                                <h3>Insurance Planning</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            </div>
                            <div class="grid">
                                <div class="icon">
                                    <i class="fi flaticon-up-arrow"></i>
                                </div>
                                <h3>Stock Market Investment</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            </div>
                        </div>
                    </div>
                    <div class="col col-lg-6 col-lg-offset-1 col-md-6">
                        <div class="img-holder">
                            <img src="assets/images/industry-pic.jpg" alt />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="contact-section">
            <div class="container">
                <div class="row">
                    <div class="col col-md-8">
                        <div class="contact-form">
                            <form method="post" class="row">
                                <div class="col col-sm-6">
                                    <label for="name">Full Name</label>
                                    <input type="text" class="form-control" id="name" name="name" />
                                </div>
                                <div class="col col-sm-6">
                                    <label for="business">Business Type</label>
                                    <select name="business" id="business" class="form-control">
                                        <option selected disabled>-Select-</option>
                                        <option>Business type 1</option>
                                        <option>Business type 2</option>
                                        <option>Business type 3</option>
                                    </select>
                                </div>
                                <div class="col col-sm-6">
                                    <label for="email">Email Address</label>
                                    <input type="email" class="form-control" id="email" name="email" />
                                </div>
                                <div class="col col-sm-6 submit-btn-wrapper">
                                    <button type="submit">Submit Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col col-md-4">
                        <div class="contact-title">
                            <h2>Request a call back</h2>
                            <p>If you want to discuss your business with our fine consultants, please schedule a meeting through this contact form</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="team-section section-padding">
            <div class="container">
                <div class="row">
                    <div class="col col-xs-12">
                        <div class="section-title-s3">
                            <h2>People Behind Our Success</h2>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col col-xs-12">
                        <div class="team-first-row team-grids">
                            <div class="grid">
                                <div class="member-pic-social">
                                    <img src="assets/images/team/img-1.jpg" alt />
                                    <div class="social">
                                        <ul>
                                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="member-info">
                                    <h3>Frazer Diamond</h3>
                                    <span>Founder & CEO</span>
                                </div>
                            </div>
                            <div class="grid">
                                <div class="member-pic-social">
                                    <img src="assets/images/team/img-2.jpg" alt />
                                    <div class="social">
                                        <ul>
                                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="member-info">
                                    <h3>Chen Lee</h3>
                                    <span>Co Founde</span>
                                </div>
                            </div>
                            <div class="grid">
                                <div class="member-pic-social">
                                    <img src="assets/images/team/img-3.jpg" alt />
                                    <div class="social">
                                        <ul>
                                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="member-info">
                                    <h3>Emma O’Brien</h3>
                                    <span>Sr. Product Engineer</span>
                                </div>
                            </div>
                        </div>

                        <div class="team-sec-row team-grids">
                            <div class="grid">
                                <div class="member-pic-social">
                                    <img src="assets/images/team/img-4.jpg" alt />
                                    <div class="social">
                                        <ul>
                                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="member-info">
                                    <h3>David Ankrum</h3>
                                    <span>Co-Founder</span>
                                </div>
                            </div>
                            <div class="grid">
                                <div class="member-pic-social">
                                    <img src="assets/images/team/img-5.jpg" alt />
                                    <div class="social">
                                        <ul>
                                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="member-info">
                                    <h3>Maria De Aragon</h3>
                                    <span>HRM</span>
                                </div>
                            </div>
                            <div class="grid">
                                <div class="member-pic-social">
                                    <img src="assets/images/team/img-6.jpg" alt />
                                    <div class="social">
                                        <ul>
                                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="member-info">
                                    <h3>Joe Hurt</h3>
                                    <span>CTO</span>
                                </div>
                            </div>
                            <div class="grid">
                                <div class="member-pic-social">
                                    <img src="assets/images/team/img-7.jpg" alt />
                                    <div class="social">
                                        <ul>
                                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                                            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="member-info">
                                    <h3>Frazer Diamond</h3>
                                    <span>Founder & CEO</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
        
        <section class="partners-section-s3 section-padding">
            <h2 class="hidden">Partners</h2>
            <div class="container">
                <div class="row">
                    <div class="col col-xs-12">
                        <div class="partners-slider-s3">
                            <div class="grid">
                                <img src="assets/images/partners/img-1.jpg" alt />
                            </div>
                            <div class="grid">
                                <img src="assets/images/partners/img-2.jpg" alt />
                            </div>
                            <div class="grid">
                                <img src="assets/images/partners/img-3.jpg" alt />
                            </div>
                            <div class="grid">
                                <img src="assets/images/partners/img-4.jpg" alt />
                            </div>
                            <div class="grid">
                                <img src="assets/images/partners/img-1.jpg" alt />
                            </div>
                            <div class="grid">
                                <img src="assets/images/partners/img-2.jpg" alt />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
    );
}

export default About;