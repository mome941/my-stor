import React, { useState, useEffect } from 'react';
import './App.css';


const Home = () => {
  const images = [
    'https://th.bing.com/th/id/OIP.jcJww-59OVYr4zX3He3xRgHaHa?w=150&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    'https://th.bing.com/th/id/OIP.5HeyDuIkbBlhe8MK_rkcBAHaFj?w=231&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    'https://th.bing.com/th/id/OIP.EHNoWQYPbu6W8k4K5zgRGgHaFf?w=243&h=181&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    'https://th.bing.com/th/id/OIP.QFcb_vfo1sM7YYjI6M2OWQHaHa?w=154&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    'https://th.bing.com/th?q=%d8%aa%d9%84%d9%81%d9%88%d9%86%d8%a7%d8%aa&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-XA&cc=EG&setlang=en&adlt=strict&t=1&mw=247',
    'https://th.bing.com/th/id/OIP.jcJww-59OVYr4zX3He3xRgHaHa?w=150&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    'https://th.bing.com/th/id/OIP.ooOLazvV8lpdqQY0YVGgLAHaE8?w=286&h=191&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    'https://th.bing.com/th/id/OIP.sueA63bmZyNOcjDi1I8i9wHaEK?w=302&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    'https://th.bing.com/th/id/OIP.ptK2tWP2c214RBl-Sb0cxQHaEL?rs=1&pid=ImgDetMain'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="home-page">
      <h1>Mobile stor</h1>
      <p>You can buy the best phones and accessories at the best prices</p>
      <div className="carousel">
        <button className="arrow left" onClick={prevSlide}>{'<'}</button>
        <div className="carousel-image">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        </div>
        <button className="arrow right" onClick={nextSlide}>{'>'}</button>
      </div>
    </div>
  );
};

export default Home;
