import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css';
import SlickSlider from 'react-slick';

class Slider extends Component{

    render(){
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 1,
        }
        return(
            <div className="slick">
                <SlickSlider {...settings}>
                    {this.props.elements}
                </SlickSlider>
            </div>
        )
    }
}

export default Slider;
