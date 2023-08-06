import React from "react";
// import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";

const About = () => {
    return (
        <Swiper 
            className="testimonials__container"
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            >
            <SwiperSlide>
                <hgroup className="testimonials" >
                    <h4>Test</h4>
                    <small className="client_review" style={{color:"#000"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloremque quia qui, maiores, cum fugiat eos comm sit amet consectetur adipisicing elit. Non doloremque quia qui, maiores, cum fugiat eos comm sit amet consectetur adipisicing elit. Non doloremque quia qui, maiores, cum fugiat eos comm sit amet consectetur adipisicing elit. Non doloremque quia qui, maiores, cum fugiat eos commodi placeat a ipsum ut tempora aut. Facere facilis quas fugit aliquam voluptas ea.</small>
                    <small className="client_review" style={{color:"#000"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloremque quia qui, maiores, cum fugiat eos comm sit amet consectetur adipisicing elit. Non doloremque quia qui, maiores, cum fugiat eos comm sit amet consectetur adipisicing elit. Non doloremque quia qui, maiores, cum fugiat eos comm sit amet consectetur adipisicing elit. Non doloremque quia qui, maiores, cum fugiat eos commodi placeat a ipsum ut tempora aut. Facere facilis quas fugit aliquam voluptas ea.</small>
                    <small className="client_review" style={{color:"#000"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloremque quia qui, maiores, cum fugiat eos comm sit amet consectetur adipisicing elit. Non doloremque quia qui, maiores, cum fugiat eos comm sit amet consectetur adipisicing elit. Non doloremque quia qui, maiores, cum fugiat eos comm sit amet consectetur adipisicing elit. Non doloremque quia qui, maiores, cum fugiat eos commodi placeat a ipsum ut tempora aut. Facere facilis quas fugit aliquam voluptas ea.</small>
                </hgroup>
            </SwiperSlide>
            <SwiperSlide>
                <hgroup className="testimonials" >
                    <h4>Test</h4>
                    <small className="client_review" style={{color:"#000"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloremque quia qui, maiores, cum fugiat eos comm sit amet consectetur adipisicing elit. Non doloremque quia qui, maiores, cum fugiat eos comm sit amet consectetur adipisicing elit. Non doloremque quia qui, maiores, cum fugiat eos comm sit amet consectetur adipisicing elit. Non doloremque quia qui, maiores, cum fugiat eos commodi placeat a ipsum ut tempora aut. Facere facilis quas fugit aliquam voluptas ea.</small>
                    <small className="client_review" style={{color:"#000"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloremque quia qui, maiores, cum fugiat eos comm sit amet consectetur adipisicing elit. Non doloremque quia qui, maiores, cum fugiat eos comm sit amet consectetur adipisicing elit. Non doloremque quia qui, maiores, cum fugiat eos comm sit amet consectetur adipisicing elit. Non doloremque quia qui, maiores, cum fugiat eos commodi placeat a ipsum ut tempora aut. Facere facilis quas fugit aliquam voluptas ea.</small>
                </hgroup>
            </SwiperSlide>
            <SwiperSlide>
                <hgroup className="testimonials" >
                    <h4>Test</h4>
                    <small className="client_review" style={{color:"#000"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloremque quia qui, maiores, cum fugiat eos comm sit amet consectetur adipisicing elit. Non doloremque quia qui, maiores, cum fugiat eos comm sit amet consectetur adipisicing elit. Non doloremque quia qui, maiores, cum fugiat eos comm sit amet consectetur adipisicing elit. Non doloremque quia qui, maiores, cum fugiat eos commodi placeat a ipsum ut tempora aut. Facere facilis quas fugit aliquam voluptas ea.</small>
                </hgroup>
            </SwiperSlide>
            <SwiperSlide>
                <hgroup className="testimonials" >
                    <h4>Test</h4>
                    <small className="client_review" style={{color:"#000"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloremque quia qui, maiores, cum fugiat eos comm sit amet consectetur adipisicing elit. Non doloremque quia qui, maiores, cum fugiat eos comm sit amet consectetur adipisicing elit. Non doloremque quia qui, maiores, cum fugiat eos comm sit amet consectetur adipisicing elit. Non doloremque quia qui, maiores, cum fugiat eos commodi placeat a ipsum ut tempora aut. Facere facilis quas fugit aliquam voluptas ea.</small>
                </hgroup>
            </SwiperSlide>
            <SwiperSlide>
                <hgroup className="testimonials" >
                    <h4>Test</h4>
                    <small className="client_review" style={{color:"#000"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloremque quia qui, maiores, cum fugiat eos comm sit amet consectetur adipisicing elit. Non doloremque quia qui, maiores, cum fugiat eos comm sit amet consectetur adipisicing elit. Non doloremque quia qui, maiores, cum fugiat eos comm sit amet consectetur adipisicing elit. Non doloremque quia qui, maiores, cum fugiat eos commodi placeat a ipsum ut tempora aut. Facere facilis quas fugit aliquam voluptas ea.</small>
                </hgroup>
            </SwiperSlide>
            <SwiperSlide>
                <hgroup className="testimonials" >
                    <h4>Test</h4>
                    <small className="client_review" style={{color:"#000"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloremque quia qui, maiores, cum fugiat eos comm sit amet consectetur adipisicing elit. Non doloremque quia qui, maiores, cum fugiat eos comm sit amet consectetur adipisicing elit. Non doloremque quia qui, maiores, cum fugiat eos comm sit amet consectetur adipisicing elit. Non doloremque quia qui, maiores, cum fugiat eos commodi placeat a ipsum ut tempora aut. Facere facilis quas fugit aliquam voluptas ea.</small>
                </hgroup>
            </SwiperSlide>
            <SwiperSlide>
                <hgroup className="testimonials" >
                    <h4>Test</h4>
                    <small className="client_review" style={{color:"#000"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloremque quia qui, maiores, cum fugiat eos comm sit amet consectetur adipisicing elit. Non doloremque quia qui, maiores, cum fugiat eos comm sit amet consectetur adipisicing elit. Non doloremque quia qui, maiores, cum fugiat eos comm sit amet consectetur adipisicing elit. Non doloremque quia qui, maiores, cum fugiat eos commodi placeat a ipsum ut tempora aut. Facere facilis quas fugit aliquam voluptas ea.</small>
                </hgroup>
            </SwiperSlide>
        </Swiper>
    );
};

export default About;
