import ComponentNavBar from "../../global-components/ComponentNavBar";
import Footer from "../../global-components/Footer";

const Services = () => {

    return(
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
                        <h2>Services</h2>
                        <ol class="breadcrumb">
                            <li><a href="index.html">Home</a></li>
                            <li>Services</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>        
        
        <section class="services-pg-section section-padding">
            <div class="container">
                <div class="row">
                    <div class="col col-xs-12">
                        <div class="service-grids">
                            <div class="grid">
                                <div class="img-overlay">
                                    <img src={require("../../assets/images/services/img-1.jpg")} alt />
                                    <div class="overlay">
                                        <a href="#"><i class="fa fa-link"></i></a>
                                    </div>
                                </div>
                                <div class="details">
                                    <h3><i class="fi flaticon-coins"></i> Business Insurance</h3>
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                </div>
                            </div>
                            <div class="grid">
                                <div class="img-overlay">
                                    <img src={require("../../assets/images/services/img-2.jpg")} alt />
                                    <div class="overlay">
                                        <a href="#"><i class="fa fa-link"></i></a>
                                    </div>
                                </div>
                                <div class="details">
                                    <h3><i class="fi flaticon-car-1"></i> Car Insurance</h3>
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                </div>
                            </div>
                            <div class="grid">
                                <div class="img-overlay">
                                    <img src={require("../../assets/images/services/img-3.jpg")} alt />
                                    <div class="overlay">
                                        <a href="#"><i class="fa fa-link"></i></a>
                                    </div>
                                </div>
                                <div class="details">
                                    <h3><i class="fi flaticon-family"></i> Family Insurance</h3>
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                </div>
                            </div>
                            <div class="grid">
                                <div class="img-overlay">
                                    <img src={require("../../assets/images/services/img-4.jpg")} alt />
                                    <div class="overlay">
                                        <a href="#"><i class="fa fa-link"></i></a>
                                    </div>
                                </div>
                                <div class="details">
                                    <h3><i class="fi flaticon-report"></i> Insurance Consulting</h3>
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                </div>
                            </div>
                            <div class="grid">
                                <div class="img-overlay">
                                    <img src={require("../../assets/images/services/img-5.jpg")} alt />
                                    <div class="overlay">
                                        <a href="#"><i class="fa fa-link"></i></a>
                                    </div>
                                </div>
                                <div class="details">
                                    <h3><i class="fi flaticon-hand-shake"></i> Business Deal</h3>
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                </div>
                            </div>
                            <div class="grid">
                                <div class="img-overlay">
                                    <img src={require("../../assets/images/services/img-6.jpg")} alt />
                                    <div class="overlay">
                                        <a href="#"><i class="fa fa-link"></i></a>
                                    </div>
                                </div>
                                <div class="details">
                                    <h3><i class="fi flaticon-graphic"></i> Financing Plan</h3>
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                </div>
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

export default Services;