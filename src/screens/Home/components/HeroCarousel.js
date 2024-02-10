import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroCarousel() {

    const slideRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autplaySpeed: 6000,
        arrows: true,
        speed: 1100,
        fade: true,
        pauseOnHover: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      useEffect(() => {
        function sliderBgSetting() {
          const slides = slideRef.current.querySelectorAll(".slide");
          slides.forEach((slide) => {
            const imgElement = slide.querySelector(".slider-bg");
            if (imgElement) {
              const imgSrc = imgElement.getAttribute("src");
              slide.style.backgroundImage = `url(${imgSrc})`;
              slide.style.backgroundSize = "cover";
              slide.style.backgroundPosition = "center center";
            }
          });
        }
    
        sliderBgSetting();
      }, []);
    
      return (
        <section className="hero hero-slider-wrapper hero-style-2">
            <div className="her0-slider" ref={slideRef}>
                <Slider {...settings}>
                    <div className="slide">
                        <img src={require("../../../assets/images/slider/slide-2.jpg")} alt="slider-bg" className="slider-bg" />
                        <div className="container">
                            <div className="row">
                            <div className="col col-md-8 col-md-offset-2 slide-caption">
                                <h2>Leader in Business</h2>
                                <p>An unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                <div className="btns">
                                <a href="#" className="theme-btn">Our Services</a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
            
                    <div className="slide">
                        <img src={require("../../../assets/images/slider/slide-1.jpg")} alt="slider-bg" className="slider-bg"  />
                        <div className="container">
                            <div className="row">
                                <div className="col col-md-8 col-md-offset-2 slide-caption">
                                    <h2>Leader in Business</h2>
                                    <p>An unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                    <div className="btns">
                                    <a href="#" className="theme-btn">Our Services</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <div className="slide">
                    <img src={require("../../../assets/images/slider/slide-3.jpg")} alt="slider-bg" className="slider-bg"  />
                    <div className="container">
                        <div className="row">
                        <div className="col col-md-8 col-md-offset-2 slide-caption">
                            <h2>Leader in Business</h2>
                            <p>An unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                            <div className="btns">
                            <a href="#" className="theme-btn">Our Services</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
            </Slider>
            </div>
        </section>
      );
}