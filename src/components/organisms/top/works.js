import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import { StaticImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const HeadingH3 = styled.h3`
  text-align: center;
  margin-bottom: 40px;
`;

const SliderImage = styled.div`
  border: 3px solid rgba(0, 0, 0, 0.7);
  margin-bottom: 2em;
  max-width: 100%;
  height: auto;
`;

const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const ButtonDetail = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  margin: 5px;
`;

const Works = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id='works'>
      <Container style={{ padding: '100px 4vw' }}>
        <HeadingH3>Works</HeadingH3>
        <Slider {...settings}>
          <div>
            <SliderImage>
              <StaticImage
                src='../../../images/default.png'
                alt='Tetris Typing screenshot'
                placeholder='blurred'
                layout='constrained'
                height={300}
              />
              <h3>Tetris Typing</h3>
            </SliderImage>
          </div>
          <div>
            <SliderImage>
              <StaticImage
                src='../../../images/gatsby-icon.png'
                alt='Console Tetris screenshot'
                placeholder='blurred'
                layout='constrained'
                height={300}
              />
              <h3>Console Tetris</h3>
            </SliderImage>
          </div>
          <div>
            <SliderImage>
              <StaticImage
                src='../../../images/muropyonngame.png'
                alt='Sigmabeat screenshot'
                placeholder='blurred'
                layout='constrained'
                height={300}
              />
              <h3>Sigmabeat</h3>
            </SliderImage>
          </div>
        </Slider>
        <ButtonWrapper>
          <ButtonDetail href='/works'>Works</ButtonDetail>
        </ButtonWrapper>
      </Container>
    </section>
  );
};

export default Works;
