import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const News = () => {
  const swiperRef = useRef();

  const newsItems = [
    {
      id: 1,
      image: '/resources/img/img_main_news_gallery01.png',
      title: 'Taejae Univ. to take its undergraduates worldwide 11',
      description: 'The all-English Taejae University welcomed its inaugural class, admitting five international students and giving them three-year scholarships.'
    },
    {
      id: 2,
      image: '/resources/img/img_main_news_gallery01.png',
      title: 'Taejae Univ. to take its undergraduates worldwide 22',
      description: 'The all-English Taejae University welcomed its inaugural class, admitting five international students and giving them three-year scholarships.'
    },
    {
      id: 3,
      image: '/resources/img/img_main_news_gallery01.png',
      title: 'Taejae Univ. to take its undergraduates worldwide 33',
      description: 'The all-English Taejae University welcomed its inaugural class, admitting five international students and giving them three-year scholarships.'
    },
    {
      id: 4,
      image: '/resources/img/img_main_news_gallery01.png',
      title: 'Taejae Univ. to take its undergraduates worldwide 44',
      description: 'The all-English Taejae University welcomed its inaugural class, admitting five international students and giving them three-year scholarships.'
    },
    {
      id: 5,
      image: '/resources/img/img_main_news_gallery01.png',
      title: 'Taejae Univ. to take its undergraduates worldwide 55',
      description: 'The all-English Taejae University welcomed its inaugural class, admitting five international students and giving them three-year scholarships.'
    },
    {
      id: 6,
      image: '/resources/img/comm_no_img.svg',
      title: 'title 66',
      description: 'desc 66'
    },
    {
      id: 7,
      image: '/resources/img/comm_no_img.svg',
      title: 'title 77',
      description: 'desc 77'
    },
    {
      id: 8,
      image: '/resources/img/comm_no_img.svg',
      title: 'title 88',
      description: 'desc 88'
    },
    {
      id: 9,
      image: '/resources/img/comm_no_img.svg',
      title: 'title 99',
      description: 'desc 99'
    },
    {
      id: 10,
      image: '/resources/img/comm_no_img.svg',
      title: 'title 00',
      description: 'desc 00'
    }
  ];

  return (
    <div className="section wide">
      <div className="news_gallery">
        <div className="header_con">
          <h3>태재 소식</h3>
          <p className="stt">태재대학교의 최신 소식, 공지사항, 언론 보도 등을 빠르게 만나보세요.</p>
        </div>
        
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          centeredSlides={false}
          spaceBetween={8}
          autoplay={true}
          navigation={{
            nextEl: '.btn_next',
            prevEl: '.btn_prev',
          }}
          breakpoints={{
            768: {
              slidesPerView: 'auto',
              centeredSlides: true,
              spaceBetween: 40,
              loop: true,
            }
          }}
          className="swiper-container"
        >
          {newsItems.map((item) => (
            <SwiperSlide key={item.id} className="swiper-slide">
              <div className="img_wrap">
                <img src={item.image} alt="" />
              </div>
              <div className="title">{item.title}</div>
              <p className="desc">{item.description}</p>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div className="btn_slide">
          <button type="button" className="btn_prev">
            <span className="a11y">prev</span>
          </button>
          <button type="button" className="btn_next">
            <span className="a11y">next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;