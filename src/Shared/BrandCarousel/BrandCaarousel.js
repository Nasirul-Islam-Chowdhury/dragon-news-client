import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../../../src/assets/brands/photo-1627843563095-f6e94676cfe0.jfif'
import Brand2 from '../../../src/assets/brands/photo-1634942537034-2531766767d1.jfif'
const BrandCaarousel = () => {
    return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Brand1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Brand2}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    );
};

export default BrandCaarousel;