import React, { useEffect, useRef } from 'react';

const Education = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    // Initialize any SVG animations here if needed
    // This would be equivalent to the original JavaScript animations
  }, []);

  return (
    <div className="section wide">
      <div className="education_wrap">
        {/* Mobile Version */}
        <section>
          <div>
            <img src="/resources/img/mob/img-title@2x_ko.png" alt="" />
          </div>
          <div>
            <img src="/resources/img/mob/img-txt@2x_ko.png" alt="" />
          </div>
        </section>

        {/* Desktop Version */}
        <div className="inner pc">
          <div className="text_con ko">
            <div className="htt">차별화된 교육</div>
            <p className="stt">태재만의</p>
          </div>
          
          <svg 
            ref={svgRef}
            viewBox="0 0 1922.651 382.018" 
            className="education_line"
          >
            <g transform="translate(6142.749 -1363.515) rotate(90)">
              <path 
                id="line01" 
                className="line01" 
                d="M961.834,788.977s-7.668-8.655-24.906-28.082-28.075-33.111-28.075-33.111c-61.026-75.622-287.921-97.885-408.146-38.225-59.03,31.408-141.473,110.874-163.084,163.52-6.549,15.953,3,20.609,9,20.939,5.586.31,12.006-3.988,7-20.939-8.56-21.656-55.714-181.046-212.714-229.046" 
                transform="translate(826.468 6282.417) rotate(-90)" 
                fill="none" 
                stroke="#fff" 
                strokeLinecap="round" 
                strokeWidth="2"
              />
              <path 
                id="line02" 
                className="line02" 
                d="M-32.218-695.5c-.417.541,175.945,301-44.452,397.4-52.983,23.988-97.436,41.7-113.046,98.741-57.924,213.31,354.523,133.192,373.5,326.474,8.988,96.14-48.065,201.275-127.96,276.384" 
                transform="translate(1559.785 4917)" 
                fill="none" 
                stroke="#fff" 
                strokeLinecap="round" 
                strokeWidth="2"
              />
            </g>
          </svg>
        </div>

        <div className="ico_desc aos_wrap pc">
          <p className="icon01 aos_item" data-aos="fade-left" data-aos-duration="1000">
            태재대학교는 21세기 미래 혁신 대학으로,<br/>
            인공지능 기반의 맞춤형 개별 학습을 제공합니다.
          </p>
          <p className="icon02 aos_item" data-aos="fade-right" data-aos-duration="1000">
            태재대학교의 액티브 러닝은 사전에 촘촘하게 설계된 레슨 플랜에 따라 실생활에 적용할 수 있는 토론형 문제 해결 방식으로 운영됩니다.
          </p>
          <p className="icon03 aos_item" data-aos="fade-bottom" data-aos-duration="1000">
            최첨단 가상 수업 환경과 데이터 분석 및 평가 도구를<br/> 
            제공하는 인터렉티브 학습 플랫폼 Engageli를 활용하여 액티브 러닝을 실현합니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;