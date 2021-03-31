import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import reviews from '../data/reviews'

export default class CustomCarusel extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
  };

  slides = reviews.map(review => (
    {
      key: uuidv4(),
      content: <img src={review.image} alt='review'/>,
      href: review.href
    }
  )).map((slide) => {
    return { ...slide, onClick: () => window && window.open(slide.href)};
  });

  next = () => {
    this.state && setInterval(() => {
        this.setState( prevState => ({
          goToSlide: prevState.goToSlide - 1, 
        }));
    }, 10000)
  };

  handelClickNext = () => {
    this.setState( prevState => ({
      goToSlide: prevState.goToSlide - 1, 
    }));
  }

  handelClickBack = () => {
    this.setState( prevState => ({
      goToSlide: prevState.goToSlide + 1, 
    }));
  }

  componentDidMount () {
    this.next();
  };
 
  componentWillUnmount () {
      clearInterval(this.next);
  }

  render() {
    return (
      <div 
        style={{ width: "80%", height: "100%", margin: "0 auto" }} 
        className='position-relative carousel-container'
      >
        <IconButton onClick= {this.handelClickBack} className='arrow-back'>
            <ArrowBackIcon/>
        </IconButton>
        <IconButton onClick= {this.handelClickNext} className='arrow-next'>
            <ArrowForwardRoundedIcon/>
        </IconButton>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
        />
        <div
          style={{
            margin: "0 auto",
            marginTop: "2rem",
            width: "70%",
            display: "flex",
            justifyContent: "space-around"
          }}
        ></div>
        
      </div>
    );
  }
}
