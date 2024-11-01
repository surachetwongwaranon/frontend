import React from 'react';
import '../styles/home.css'
import { Container, Row, Col } from 'react-bootstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import WorldImg from '../assets/images/world.png'
import Subtitle from '../shared/subtitle'
import SearchBar from '../shared/SearchBar'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery'

const Home = () => {
    return <>
    <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="hero__content">
                        <div className="hero__subtitle d-flex align-item-center">
                            <Subtitle subtitle={'Enjoy every step of your journey.'} />
                            <img src={WorldImg} alt=""/>
                        </div>
                        <h1>Traveling opens the door to creating <span className='hightlight'> memories</span></h1>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Tourism is an activity that is important to life and society. In addition to providing enjoyment and relaxation, 
                        tourism also helps to broaden perspectives and create new experiences for travelers. Experiencing diverse cultures, 
                        history, architecture, and beautiful nature fosters understanding and appreciation for the differences among people and places. 
                        Therefore, planning and managing tourism is essential. Let us assist you as we travel together!!
                        </p>
                    </div>
                </Col>

                <Col lg='2'>
                <div className="hero__img-box">
                     <img src={heroImg} alt="" />
                  </div>
                </Col>
                <Col lg='2'>
                <div className="hero__img-box hero__video-box mt-4">
                     <video src={heroVideo} alt="" controls/>
                  </div>
                </Col>
                <Col lg='2'>
                <div className="hero__img-box mt-5">
                     <img src={heroImg02} alt="" />
                  </div>
                </Col>

                <SearchBar/>
            </Row>
        </Container>
    </section>

    <section>
         <Container>
            <Row>
               <Col lg='12' className='mb-5'>
                  <Subtitle subtitle={'Explore'} />
                  <h2 className='featured__tour-title'>Our featured tours</h2>
               </Col>
               <FeaturedTourList/>
            </Row>
         </Container>
      </section>

      <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <Subtitle subtitle={'Gallery'} />
                    <h2 className="gallery__title">Visit our customers tour gallery</h2>
               </Col>
               <Col lg='12'>
                    <MasonryImagesGallery />
               </Col>
            </Row>
         </Container>
      </section>
    </>
};

export default Home;