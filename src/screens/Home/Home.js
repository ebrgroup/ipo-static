import React, { useEffect, useRef } from "react";
import Navbar from "../../global-components/NavBar";
import HeroCarousel from "./components/HeroCarousel";
import Footer from "../../global-components/Footer";

const Home = () => {

    return(
        <div className="page-wrapper">
        {/* <div className="preloader">
            <div className="inner">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div> */}
        <Navbar />
        <HeroCarousel />
        <section className="services-section-s2 section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
                        <div className="section-title-s4">
                            <h2>What We Do</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua ut enim</p>
                        </div>
                    </div>
                </div> 
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="service-grids">
                            <div className="grid">
                                <div className="img-overlay">
                                    <img src={require("../../assets/images/services/img-1.jpg")}  />
                                    <div className="overlay">
                                        <a href="#"><i className="fa fa-link"></i></a>
                                    </div>
                                </div>
                                <div className="details">
                                    <h3><i className="fi flaticon-coins"></i> Business Insurance</h3>
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="img-overlay">
                                    <img src={require("../../assets/images/services/img-2.jpg")}  />
                                    <div className="overlay">
                                        <a href="#"><i className="fa fa-link"></i></a>
                                    </div>
                                </div>
                                <div className="details">
                                    <h3><i className="fi flaticon-car-1"></i> Car Insurance</h3>
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="img-overlay">
                                    <img src={require("../../assets/images/services/img-3.jpg")}  />
                                    <div className="overlay">
                                        <a href="#"><i className="fa fa-link"></i></a>
                                    </div>
                                </div>
                                <div className="details">
                                    <h3><i className="fi flaticon-family"></i> Family Insurance</h3>
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col col-xs-12">
                        <div className="all-services">
                            <a href="#" className="theme-btn-s4">All Services</a>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <section className="cta-section-s2">
            <div className="container">
                <div className="row">
                    <div className="col col-md-4">
                        <div className="inner">
                            <div className="icon">
                                <i className="fi flaticon-medical-history"></i>
                            </div>
                            <h3>No Medical Exam</h3>
                            <p>Simple Application</p>
                        </div>
                    </div>
                    <div className="col col-md-4">
                        <div className="inner">
                            <div className="icon">
                                <i className="fi flaticon-clock"></i>
                            </div>
                            <h3>No Waiting Period</h3>
                            <p>Buy Direct</p>
                        </div>
                    </div>
                    <div className="col col-md-4">
                        <div className="inner">
                            <div className="icon">
                                <i className="fi flaticon-money"></i>
                            </div>
                            <h3>Life Insurance As Low</h3>
                            <p>$3.49 for Adults  <br />2.17 for Children or Grandchildren</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="about-section-s2 section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-7 col-md-6">
                        <div className="img-holder">
                            <img src={require("../../assets/images/about.jpg")} />
                        </div>
                    </div>
                    <div className="col col-lg-5 col-md-6">
                        <div className="text">
                            <span>About Us</span>
                            <h3>Get the best <span>Insurance Service</span> from us</h3>
                            <p>Nunc posuere ornare massa quis convallis. Nunc at phare tra metus, sed feugiat lorem. Sed fringilla, lacus et placerat scelerisque, ipsum urna tincidunt erat.</p>
                            <a href="#" className="theme-btn-s4">Get Quote</a>
                        </div>
                    </div>
                </div>
                <div className="row sec-row">
                    <div className="col col-lg-7 col-lg-push-5 col-md-6 col-md-push-6">
                        <div className="img-holder">
                            <img src={require("../../assets/images/who-we-are.jpg")}  />
                        </div>
                    </div>
                    <div className="col col-lg-5 col-lg-pull-7 col-md-6 col-md-pull-6">
                        <div className="text">
                            <span>Who We Are</span>
                            <h3>We are <span>Insurance Experts</span> from around the world</h3>
                            <p>Nunc posuere ornare massa quis convallis. Nunc at phare tra metus, sed feugiat lorem. Sed fringilla, lacus et placerat scelerisque, ipsum urna tincidunt erat.</p>
                            <a href="#" className="theme-btn-s4">Our Team</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="insurance-section section-padding">
            <div className="top-overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="insurance-content">

                            <div className="tablinks">
                                <ul>
                                    <li>
                                        <a href="#tab-1" data-toggle="tab">
                                            <div className="icon">
                                                <i className="fi flaticon-bus-side-view"></i>
                                            </div>
                                            <span>Car <span>Insurance</span></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#tab-2" data-toggle="tab">
                                            <div className="icon">
                                                <i className="fi flaticon-businessman"></i>
                                            </div>
                                            <span>Business <span>Insurance</span></span>
                                        </a>
                                    </li>
                                    <li className="active">
                                        <a href="#tab-3" data-toggle="tab">
                                            <div className="icon">
                                                <i className="fi flaticon-house-outline"></i>
                                            </div>
                                            <span>Home <span>Insurance</span></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#tab-4" data-toggle="tab">
                                            <div className="icon">
                                                <i className="fi flaticon-globe"></i>
                                            </div>
                                            <span>Travel <span>Insurance</span></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="tab-content">
                                <div className="tab-pane fade" id="tab-1">
                                    <div className="col col-md-8 col-md-offset-2">
                                        <div className="title">
                                            <span>Get an Instant Quote!</span>
                                            <h2>Car Insurance</h2>
                                            <p>Nunc posuere ornare massa quis convallis. Nunc at phare tra metus, sed feugiat lorem. Sed fringilla, lacus et placerat scelerisque, ipsum urna tincidunt erat.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab-2">
                                    <div className="col col-md-8 col-md-offset-2">
                                        <div className="title">
                                            <span>Get an Instant Quote!</span>
                                            <h2>Business Insurance</h2>
                                            <p>Nunc posuere ornare massa quis convallis. Nunc at phare tra metus, sed feugiat lorem. Sed fringilla, lacus et placerat scelerisque, ipsum urna tincidunt erat.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane in active row" id="tab-3">
                                    <div className="col col-md-8 col-md-offset-2">
                                        <div className="title">
                                            <span>Get an Instant Quote!</span>
                                            <h2>Home Insurance</h2>
                                            <p>Nunc posuere ornare massa quis convallis. Nunc at phare tra metus, sed feugiat lorem. Sed fringilla, lacus et placerat scelerisque, ipsum urna tincidunt erat.</p>
                                        </div>
                                    </div>
                                    <div className="content col col-lg-11 col-lg-offset-1">
                                        <div className="row">
                                            <div className="col col-md-5">
                                                <div className="img-holder">
                                                    <img src={require("../../assets/images/insurance-home.png")}  />
                                                </div>
                                            </div>

                                            <div className="col col-md-7">
                                                <div className="details">
                                                    <form>
                                                        <div>
                                                            <label htmlFor="name">Full Name</label>
                                                            <input type="text" className="form-control" id="name" />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="email">Email Address</label>
                                                            <input type="email" className="form-control" id="email" />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="p-address">Property Address</label>
                                                            <input type="text" className="form-control" id="p-address" />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="p-type">Property Type</label>
                                                            <select className="form-control" id="p-type" name="p-type">
                                                                <option> Property Type 1</option>
                                                                <option> Property Type 2</option>
                                                                <option> Property Type 3</option>
                                                            </select>
                                                        </div>
                                                        <div className="submit-btn-wrapper">
                                                            <button type="submit">Request Quote</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab-4">
                                    <div className="col col-md-8 col-md-offset-2">
                                        <div className="title">
                                            <span>Get an Instant Quote!</span>
                                            <h2>Travel Insurance</h2>
                                            <p>Nunc posuere ornare massa quis convallis. Nunc at phare tra metus, sed feugiat lorem. Sed fringilla, lacus et placerat scelerisque, ipsum urna tincidunt erat.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="projects-section-s2 section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-6 col-lg-offset-3 col-sm-8 col-sm-offset-2">
                        <div className="section-title-s3">
                            <h2>Our recent Projects</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col col-xs-12 sortable-gallery">
                        <div className="gallery-filters">
                            <ul>
                                <li><a data-filter="*" href="#" className="current">All</a></li>
                                <li><a data-filter=".business" href="#">Business</a></li>
                                <li><a data-filter=".consulting" href="#">Consulting</a></li>
                                <li><a data-filter=".insurance" href="#">Insurance</a></li>
                                <li><a data-filter=".others" href="#">Others</a></li>
                            </ul>
                        </div>

                        <div className="gallery-container">
                            <div className="grid business others">
                                <img src={require("../../assets/images/projects-gallery/img-1.jpg")}  className="img img-responsive" />
                                <div className="details">
                                    <div className="inner">
                                        <a href="#"><i className="fa fa-chevron-circle-right"></i></a>
                                        <div className="cat">
                                            <span>Trojan Horse</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid eudcation consulting">
                                <img src={require("../../assets/images/projects-gallery/img-2.jpg")}  className="img img-responsive" />
                                <div className="details">
                                    <div className="inner">
                                        <a href="#"><i className="fa fa-chevron-circle-right"></i></a>
                                        <div className="cat">
                                            <span>Trojan Horse</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid consulting eudcation business">
                                <img src={require("../../assets/images/projects-gallery/img-3.jpg")}  className="img img-responsive" />
                                <div className="details">
                                    <div className="inner">
                                        <a href="#"><i className="fa fa-chevron-circle-right"></i></a>
                                        <div className="cat">
                                            <span>Trojan Horse</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid business insurance">
                                <img src={require("../../assets/images/projects-gallery/img-4.jpg")}  className="img img-responsive" />
                                <div className="details">
                                    <div className="inner">
                                        <a href="#"><i className="fa fa-chevron-circle-right"></i></a>
                                        <div className="cat">
                                            <span>Trojan Horse</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid consulting others">
                                <img src={require("../../assets/images/projects-gallery/img-5.jpg")}  className="img img-responsive" />
                                <div className="details">
                                    <div className="inner">
                                        <a href="#"><i className="fa fa-chevron-circle-right"></i></a>
                                        <div className="cat">
                                            <span>Trojan Horse</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid insurance others business">
                                <img src={require("../../assets/images/projects-gallery/img-6.jpg")}  className="img img-responsive" />
                                <div className="details">
                                    <div className="inner">
                                        <a href="#"><i className="fa fa-chevron-circle-right"></i></a>
                                        <div className="cat">
                                            <span>Trojan Horse</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col col-xs-12">
                        <div className="all-projects">
                            <a href="#">Click here to view our <span>All Projects</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="testimonials-faq-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-md-6">
                        <div className="testimonials-grids testimonials-slider">
                            <div className="grid">
                                <div className="title">
                                    <h3>Super fast service and very helpful</h3>
                                    <span> - Adam West</span>
                                </div>
                                <div className="details">
                                    <p>Exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duisaute irure dolor in repre hender itin.</p>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="title">
                                    <h3>Super fast service and very helpful</h3>
                                    <span> - Adam West</span>
                                </div>
                                <div className="details">
                                    <p>Exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duisaute irure dolor in repre hender itin.</p>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="partners-grid partners-slider-s2">
                            <div className="grid">
                                <img src={require("../../assets/images/partners/img-1.jpg")} />
                            </div>
                            <div className="grid">
                                <img src={require("../../assets/images/partners/img-2.jpg")} />
                            </div>
                            <div className="grid">
                                <img src={require("../../assets/images/partners/img-3.jpg")} />
                            </div>
                            <div className="grid">
                                <img src={require("../../assets/images/partners/img-4.jpg")} />
                            </div>
                            <div className="grid">
                                <img src={require("../../assets/images/partners/img-1.jpg")} />
                            </div>
                            <div className="grid">
                                <img src={require("../../assets/images/partners/img-2.jpg")} />
                            </div>
                        </div>
                    </div>
                    <div className="col col-md-6">
                        <div className="faq-section">
                            <h2>Frequently Asked Questions</h2>
                            <div className="panel-group faq-accordion theme-accordion-s1" id="accordion">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true">1. Why do I need insurance?</a>
                                    </div>
                                    <div id="collapseOne" className="panel-collapse collapse in">
                                        <div className="panel-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">2. What should I insure?</a>
                                    </div>
                                    <div id="collapseTwo" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">3. What constitutes “personal insurance”?</a>
                                    </div>
                                    <div id="collapseThree" className="panel-collapse collapse">
                                        <div className="panel-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="cta-section">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <h2>We are the <span>#1 Finance company</span> in the world</h2>
                        <a href="#" className="theme-btn-s3">Start Your Project Now</a>
                    </div>
                </div>
            </div>
        </section>

        <section className="latest-blog-section-s2 section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="section-title-s3">
                            <h2>Blog &amp; Article</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="blog-grids">
                            <div className="grid">
                                <div className="entry-media">
                                    <img src={require("../../assets/images/blog/img-1.jpg")}  />
                                    <div className="overlay">
                                        <a href="#"><i className="fa fa-link"></i></a>
                                    </div>
                                </div>
                                <div className="entry-meta">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-tags"></i> Business</a></li>
                                        <li><a href="#"><i className="fa fa-user"></i> Admin</a></li>
                                        <li><a href="#"><i className="fa fa-calendar"></i> Nov 29,2018</a></li>
                                    </ul>
                                </div>
                                <div className="entry-body">
                                    <h3><a href="#">Profit by Balancing Your Inventory in as Quick as 12 Months</a></h3>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="entry-media">
                                    <img src={require("../../assets/images/blog/img-2.jpg")}  />
                                    <div className="overlay">
                                        <a href="#"><i className="fa fa-link"></i></a>
                                    </div>
                                </div>
                                <div className="entry-meta">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-tags"></i> Business</a></li>
                                        <li><a href="#"><i className="fa fa-user"></i> Admin</a></li>
                                        <li><a href="#"><i className="fa fa-calendar"></i> Nov 29,2018</a></li>
                                    </ul>
                                </div>
                                <div className="entry-body">
                                    <h3><a href="#">Closing Enterprise Analytics Talent Gap elements while</a></h3>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="entry-media">
                                    <img src={require("../../assets/images/blog/img-3.jpg")}  />
                                    <div className="overlay">
                                        <a href="#"><i className="fa fa-link"></i></a>
                                    </div>
                                </div>
                                <div className="entry-meta">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-tags"></i> Business</a></li>
                                        <li><a href="#"><i className="fa fa-user"></i> Admin</a></li>
                                        <li><a href="#"><i className="fa fa-calendar"></i> Nov 29,2018</a></li>
                                    </ul>
                                </div>
                                <div className="entry-body">
                                    <h3><a href="#">The CHRO Agenda: Enabling Digital Transformation Takes Center Stage</a></h3>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="entry-media">
                                    <img src={require("../../assets/images/blog/img-4.jpg")}  />
                                    <div className="overlay">
                                        <a href="#"><i className="fa fa-link"></i></a>
                                    </div>
                                </div>
                                <div className="entry-meta">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-tags"></i> Business</a></li>
                                        <li><a href="#"><i className="fa fa-user"></i> Admin</a></li>
                                        <li><a href="#"><i className="fa fa-calendar"></i> Nov 29,2018</a></li>
                                    </ul>
                                </div>
                                <div className="entry-body">
                                    <h3><a href="#">Integrated Close: Significantly Shorten the Cycle for Closing the Books</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col col-xs-12">
                        <div className="more-news">
                            <a href="#" className="theme-btn-s4">More News</a>
                        </div>                    
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
    );
}

export default Home;