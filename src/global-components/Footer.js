const Footer = () => {
    return(
        <>
            <footer className="site-footer">
            <div className="upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-md-3 col-sm-6">
                            <div className="widget about-widget">
                                <div className="footer-logo"><img src={require("../assets/images/footer-logo.png")} /></div>
                                <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit, sed do eiusmod te mpor incididunt ut.mco laboris nisi ut aliquip ex ea commodo.</p>
                                <ul className="contact-info">
                                    <li><i className="fa fa-phone"></i> +1 (234) 567 890</li>
                                    <li><i className="fa fa-clock-o"></i> Working Hours: <br />Mon-Fri (9 am - 8 pm)</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col col-md-3 col-sm-6">
                            <div className="widget recent-post-widget">
                                <h3>Recent Posts</h3>
                                <ul>
                                    <li>
                                        <div className="entry-details">
                                            <h4><a href="#">MOCRA Exhibit Restores Art to Life</a></h4>
                                            <span className="date">5 hours ago</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="entry-details">
                                            <h4><a href="#">Inside the Winter Inn at College Church</a></h4>
                                            <span className="date">5 hours ago</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col col-md-3 col-sm-6">
                            <div className="widget quick-links-widget">
                                <h3>Useful Links</h3>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Service</a></li>
                                    <li><a href="#">Projects</a></li>
                                    <li><a href="#">Career</a></li>
                                    <li><a href="#">Recent News</a></li>
                                </ul>
                                <ul>
                                    <li><a href="#">Testimonials</a></li>
                                    <li><a href="#">Gallery</a></li>
                                    <li><a href="#">Case Studies</a></li>
                                    <li><a href="#">Shop</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col col-md-3 col-sm-6">
                            <div className="widget newsletter-widget">
                                <h3>Subscribe</h3>
                                <p>Get latest updates and offers. Subscribe your Email for weekly Newsletter and business tips</p>
                                <div className="newsletter-form">
                                    <form>
                                        <div>
                                            <input type="email" className="form-control" placeholder="Your email.." />
                                            <button type="submit"><i className="fa fa-envelope"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="copyright-info">
                <div className="container">
                    <p>2018 &copy; All Rights Reserved by <a href="http://themeforest.net/user/themexriver">Themexriver</a></p>
                    <ul>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Law Enforcement Guides</a></li>
                        <li><a href="#">Advertise</a></li>
                    </ul>
                </div>
            </div>
        </footer>
        </>
    );
}

export default Footer;