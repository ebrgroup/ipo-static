import React from 'react';
import ComponentNavBar from '../../global-components/ComponentNavBar';
import Footer from '../../global-components/Footer';

const Projects = () => {
    return (
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
            <ComponentNavBar />
            <section className="page-title">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <h2>Projects</h2>
                            <ol className="breadcrumb">
                                <li><a href="index.html">Home</a></li>
                                <li>Projects</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
            <section className="projects-pg-projects-section section-padding">
                <h2 className="hidden">Project section</h2>
                <div className="container">
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
                                    <img src={require("../../assets/images/projects-gallery/img-1.jpg")} alt="" className="img img-responsive" />
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
                                    <img src={require("../../assets/images/projects-gallery/img-2.jpg")} alt="" className="img img-responsive" />
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
                                    <img src={require("../../assets/images/projects-gallery/img-3.jpg")} alt="" className="img img-responsive" />
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
                                    <img src={require("../../assets/images/projects-gallery/img-4.jpg")} alt="" className="img img-responsive" />
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
                                    <img src={require("../../assets/images/projects-gallery/img-5.jpg")} alt="" className="img img-responsive" />
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
                                    <img src={require("../../assets/images/projects-gallery/img-6.jpg")} alt="" className="img img-responsive" />
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
           <Footer />
        </div>
    );
}

export default Projects;