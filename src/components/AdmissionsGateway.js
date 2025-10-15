import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const AdmissionsGateway = ({ onSelectType }) => {
  const swiperRef = useRef();

  const slides = [
    {
      title: "Admissions",
      message: "Taejae University welcomes students from diverse backgrounds who are bright and driven, courageous, enterprising, and passionate about bridging the gap between East and West.\\n\\nWe embrace diversity and inclusivity and expect our prospective students to be highly motivated and enthusiastic about addressing the complex economic, cultural, and political challenges facing humanity today.\\n\\nApply and Join Taejae in our pursuit of creating a brighter and sustainable future!",
      image: "/images/main-1.png",
      imageSm: "/images/main-1.png"
    },
    {
      title: "Admissions",
      message: "Taejae University welcomes students from diverse backgrounds who are bright and driven, courageous, enterprising, and passionate about bridging the gap between East and West.\\n\\nWe embrace diversity and inclusivity and expect our prospective students to be highly motivated and enthusiastic about addressing the complex economic, cultural, and political challenges facing humanity today.\\n\\nApply and Join Taejae in our pursuit of creating a brighter and sustainable future!",
      image: "/images/main-2.png",
      imageSm: "/images/main-2.png"
    },
    {
      title: "Admissions",
      message: "Taejae University welcomes students from diverse backgrounds who are bright and driven, courageous, enterprising, and passionate about bridging the gap between East and West.\\n\\nWe embrace diversity and inclusivity and expect our prospective students to be highly motivated and enthusiastic about addressing the complex economic, cultural, and political challenges facing humanity today.\\n\\nApply and Join Taejae in our pursuit of creating a brighter and sustainable future!",
      image: "/images/main-3.png",
      imageSm: "/images/main-3.png"
    },
    {
      title: "Admissions",
      message: "Taejae University welcomes students from diverse backgrounds who are bright and driven, courageous, enterprising, and passionate about bridging the gap between East and West.\\n\\nWe embrace diversity and inclusivity and expect our prospective students to be highly motivated and enthusiastic about addressing the complex economic, cultural, and political challenges facing humanity today.\\n\\nApply and Join Taejae in our pursuit of creating a brighter and sustainable future!",
      image: "/images/main-4.png",
      imageSm: "/images/main-4.png"
    },
    {
      title: "Admissions",
      message: "Taejae University welcomes students from diverse backgrounds who are bright and driven, courageous, enterprising, and passionate about bridging the gap between East and West.\\n\\nWe embrace diversity and inclusivity and expect our prospective students to be highly motivated and enthusiastic about addressing the complex economic, cultural, and political challenges facing humanity today.\\n\\nApply and Join Taejae in our pursuit of creating a brighter and sustainable future!",
      image: "/images/main-5.png",
      imageSm: "/images/main-5.png"
    }
  ];

  return (
    <div className="section wide main_visual">
      <div className="header_con">
        <Swiper
          ref={swiperRef}
          modules={[EffectFade, Autoplay]}
          effect="fade"
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={false}
          navigation={false}
          className="swiper-container"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              {/* 좌측 영역 - THE NEXT ANSWER + Admissions */}
              <div className="left-section">
                <div className="typo_cont">
                  <div>
                    <p className="img_tx">
                      <img src="/resources/img/img_txt_main01.png" alt="" />
                    </p>
                    <h3 dangerouslySetInnerHTML={{ __html: slide.title }} />
                  </div>
                  <div className="txt_wrap">
                    <div className="navi">
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 우측 영역 - 메시지 텍스트 + 버튼들 */}
              <div className="right-section">
                <div className="content-area">
                  <p className="main-message" dangerouslySetInnerHTML={{ __html: slide.message.replace(/\\n/g, '<br/>') }} />
                  
                  <div className="admissions-cta-buttons">
                    <button 
                      className="btn_admissions_cta korean-btn"
                      onClick={() => onSelectType('korean')}
                    >
                      <div className="button-text">
                        <div className="english-text">For Korean Students</div>
                        <div className="korean-text">국내 학생 입학 전형</div>
                      </div>
                    </button>
                    <button 
                      className="btn_admissions_cta international-btn"
                      onClick={() => onSelectType('international')}
                    >
                      <div className="button-text">
                        <div className="english-text">For International Students</div>
                        <div className="korean-text">외국인 학생 입학 전형</div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="img_wrap">
                <picture>
                  <source srcSet={slide.image} media="all and (min-width: 768px)" />
                  <source srcSet={slide.imageSm} media="all and (max-width: 768px)" />
                  <img src={slide.image} alt="" />
                </picture>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AdmissionsGateway;