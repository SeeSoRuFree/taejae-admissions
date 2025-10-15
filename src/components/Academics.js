import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Academics = () => {
  const swiperRef = useRef();

  const schools = [
    {
      id: 1,
      image: '/resources/img/img_acdm_schools01.png',
      title: '혁신기초학부',
      titleEn: '(Innovation Foundations)',
      description: '학생이 어떤 분야를 선택하든 탁월한 능력을 발휘하는데 필요한 기본 기술과 지식을 제공합니다. 6가지 핵심역량을 바탕으로, 글로벌 리더십을 발휘하고 지적으로 다재다능한 인재를 육성하는 통합적인 교육 접근 방식을 채택합니다.',
      className: ''
    },
    {
      id: 2,
      image: '/resources/img/img_acdm_schools02.png',
      title: '인문사회학부',
      titleEn: '(Humanities and Social Sciences)',
      description: 'AI 시대에 중요한 경쟁력이 될 휴먼 스킬 계발에 중점을 둡니다. 인간과 사회에 대해 폭 넓고도 깊이 있는 통찰력을 갖춘 미래지향적 리더 양성을 목표로 합니다.',
      className: 'hss_ko'
    },
    {
      id: 3,
      image: '/resources/img/img_acdm_schools03.png',
      title: '자연과학부',
      titleEn: '(Natural Sciences)',
      description: '현대 사회의 과학기술 현상을 이해하고, 미래 사회의 다양한 분야에서 혁신을 이끄는 인재를 양성하는 것을 목표로 합니다. 기초 이론, 분석 및 시뮬레이션, 통합적 문제 해결에 이르는 다양한 과목을 제공합니다.',
      className: ''
    },
    {
      id: 4,
      image: '/resources/img/img_acdm_schools04.png',
      title: '데이터과학과 인공지능학부',
      titleEn: '(Data Science and Artificial Intelligence)',
      description: '디지털 시대에 더 나은 세상을 만드는 것을 목표로 합니다. 기술 전문 지식을 습득하는 것 뿐만 아니라 더 매력적이고 사람 중심적인 사회에 기여하는데 필요한 사용자 중심 접근법과 디자인적 사고, 인간과 기계 간의 상호작용을 이해하는 데 중점을 둡니다.',
      className: 'dsai_ko'
    },
    {
      id: 5,
      image: '/resources/img/img_acdm_schools05.png',
      title: '비즈니스 혁신학부',
      titleEn: '(Business Innovation)',
      description: '끊임없이 진화하는 비즈니스 세계의 역동성에 대비하여, 학생들이 혁신을 우선시하는 기업가적 사고방식을 키울 수 있도록 준비시킵니다. 비즈니스 세계에서 긍정적 변화를 주도하거나 영향력 있는 스타트업을 창출할 수 있는 미래 리더를 양성하는 것을 목표로 합니다.',
      className: ''
    }
  ];

  return (
    <div className="section wide">
      <div className="academics_wrap">
        <div className="header_con">
          <h3>전공 교육과정</h3>
          <p className="stt">
            1학년에 이수하는 혁신기초 교육과정은 핵심역량 기반의 교양과정 중심으로 구성되며, 2학년 1학기부터 전공기초과목을 이수한 후<br/>
            관심 분야에 따라 전공을 선택하거나 복수 전공, 부전공, 자기설계전공의 형태로 이수할 수 있습니다. 태재대학교의 5개 학부는 다음과 같습니다.
          </p>
        </div>
        
        <Swiper
          ref={swiperRef}
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={8}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 3.5,
              spaceBetween: 16,
              observer: true,
              observeParents: true,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 16,
            }
          }}
          className="swiper-container"
        >
          {schools.map((school) => (
            <SwiperSlide key={school.id} className={`swiper-slide ${school.className}`}>
              <a href="#n">
                <img src={school.image} className="thum_img" alt="" />
                <div className="inner">
                  <div className="tit">
                    {school.title}<br/>
                    <span>{school.titleEn}</span>
                  </div>
                  <p className="scon">{school.description}</p>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Academics;