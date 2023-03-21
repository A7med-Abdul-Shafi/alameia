import React from "react";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import avatar1 from "../imgs/logo-2030.png"

const About = () => {
    return (
        <Swiper 
            className="testimonials__container"
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            >
            <SwiperSlide>
                <section className="testimonials">
                    <h5>Review</h5>
                    <div className="client__avatar">
                    <img src={avatar1}  alt="" />
                    </div>
                    <h2>Test</h2>
                    <h5 className="client__name">rrrrrrrrr</h5>
                    <small className="client_review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloremque quia qui, maiores, cum fugiat eos commodi placeat a ipsum ut tempora aut. Facere facilis quas fugit aliquam voluptas ea.</small>
                </section>
            </SwiperSlide>
            <SwiperSlide>
                <section className="testimonials">
                    <h5>Review</h5>
                    <div className="client__avatar">
                    <img src={avatar1}  alt="" />
                    </div>
                    <h2>Test</h2>
                    <h5 className="client__name">rrrrrrrrr</h5>
                    <small className="client_review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloremque quia qui, maiores, cum fugiat eos commodi placeat a ipsum ut tempora aut. Facere facilis quas fugit aliquam voluptas ea.</small>
                </section>
            </SwiperSlide>
            <SwiperSlide>
            <section className="testimonials">
                <h5>Review</h5>
                <div className="client__avatar">
                <img src={avatar1}  alt="" />
                </div>
                <h2>Test</h2>
                <h5 className="client__name">rrrrrrrrr</h5>
                <small className="client_review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloremque quia qui, maiores, cum fugiat eos commodi placeat a ipsum ut tempora aut. Facere facilis quas fugit aliquam voluptas ea.</small>
            </section>
            </SwiperSlide>
            <SwiperSlide>
            <section className="testimonials">
                <h5>Review</h5>
                <div className="client__avatar">
                <img src={avatar1}  alt="" />
                </div>
                <h2>Test</h2>
                <h5 className="client__name">lorem</h5>
                <small className="client_review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloremque quia qui, maiores, cum fugiat eos commodi placeat a ipsum ut tempora aut. Facere facilis quas fugit aliquam voluptas ea.</small>
            </section>
            </SwiperSlide>
            <SwiperSlide>
            <section className="testimonials">
                <h5>Review</h5>
                <div className="client__avatar">
                <img src={avatar1}  alt="" />
                </div>
                <h2>Test</h2>
                <h5 className="client__name">rrrrrrrrr</h5>
                <small className="client_review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloremque quia qui, maiores, cum fugiat eos commodi placeat a ipsum ut tempora aut. Facere facilis quas fugit aliquam voluptas ea.</small>
            </section>
            </SwiperSlide>
            <SwiperSlide>
            <section className="testimonials">
                <h5>Review</h5>
                <div className="client__avatar">
                <img src={avatar1}  alt="" />
                </div>
                <h2>Test</h2>
                <h5 className="client__name">rrrrrrrrr</h5>
                <small className="client_review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloremque quia qui, maiores, cum fugiat eos commodi placeat a ipsum ut tempora aut. Facere facilis quas fugit aliquam voluptas ea.</small>
            </section>
            </SwiperSlide>
            
        </Swiper>
    );
};

export default About;
