import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const MainVisual = () => {
  const swiperRef = useRef();

  const slides = [
    {
      title: "내일의 리더를\n양성하는 터전",
      message: "자기주도적으로 내일을 설계하는\n창의적 인재들의 요람,\n태재대학교에 오신 것을 환영합니다.",
      image: "/resources/img/img_main_pic01-lg.png",
      imageSm: "/resources/img/img_main_pic01-sm.png"
    },
    {
      title: "고등교육의 패러다임을\n바꾸는 대학",
      message: "태재대학교는 지속 가능한 고등교육기관으로\n미래 리더를 육성하는데 전념합니다.",
      image: "/resources/img/img_main_pic02-lg.png",
      imageSm: "/resources/img/img_main_pic02-sm.png"
    },
    {
      title: "The Next Answer\n주인공은 여러분입니다",
      message: "교육 혁신의 장, 태재대학교와 함께 하세요.",
      image: "/resources/img/img_main_pic03-lg.png",
      imageSm: "/resources/img/img_main_pic03-sm.png"
    },
    {
      title: "미래의 변화를 이끄는 시작",
      message: "디지털 신문명 시대를 선도하는 글로벌 리더로 성장하게 될 것입니다. 태재대학교의 문을 두드려 보세요.",
      image: "/resources/img/img_main_pic04-lg.png",
      imageSm: "/resources/img/img_main_pic04-sm.png"
    },
    {
      title: "소규모 클래스,\n혁신적 교육의 위대한 영향력",
      message: "전 세계 우수한 교수진이 진행하는 맞춤형 학습을 경험해보세요.",
      image: "/resources/img/img_main_pic05-lg.png",
      imageSm: "/resources/img/img_main_pic05-sm.png"
    }
  ];

  return (
    <div className="section wide main_visual">
      <div className="header_con">
        <Swiper
          ref={swiperRef}
          modules={[EffectFade, Autoplay, Pagination, Navigation]}
          effect="fade"
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            type: "fraction",
            renderFraction: function (currentClass, totalClass) {
              return '<span class="' + currentClass + '"></span>' +
                     ' / ' +
                     '<span class="' + totalClass + '"></span>';
            }
          }}
          navigation={{
            nextEl: '.btn_next',
          }}
          className="swiper-container"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="typo_cont">
                <div>
                  <p className="img_tx">
                    <img src="/resources/img/img_txt_main01.png" alt="" />
                  </p>
                  <h3 dangerouslySetInnerHTML={{ __html: slide.title.replace(/\n/g, '<br>') }} />
                </div>
                <div className="txt_wrap">
                  <div className="navi">
                    <div className="swiper-pagination"></div>
                    <button type="button" className="btn_next"></button>
                  </div>
                  <p className="msg" dangerouslySetInnerHTML={{ __html: slide.message.replace(/\n/g, '<br/>') }} />
                  <a href="#n" className="btn_film_play">동영상 보기</a>
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

export default MainVisual;