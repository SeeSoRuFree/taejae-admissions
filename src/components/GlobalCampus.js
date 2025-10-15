import React, { useState, useEffect } from 'react';

const GlobalCampus = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const countries = [
    {
      name: '한국',
      semester: '1, 2학기',
      theme: '조화와 균형',
      position: { right: '194px', top: '127px' },
      className: ''
    },
    {
      name: '미국',
      semester: '3, 4학기',
      theme: '조화와 균형',
      position: { left: '370px', top: '136px' },
      className: ''
    },
    {
      name: '중국',
      semester: '5, 6학기',
      theme: '전통과 발전',
      position: { right: '244px', top: '188px' },
      className: ''
    },
    {
      name: '러시아',
      semester: '7학기',
      theme: '전통과 발전',
      position: { left: '776px', top: '14px' },
      className: 'sm'
    },
    {
      name: '일본',
      semester: '8학기',
      theme: '전통과 발전',
      position: { right: '148px', top: '156px' },
      className: ''
    }
  ];

  // Auto rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % countries.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [countries.length]);

  const handleMarkerClick = (index) => {
    setActiveIndex(index);
  };

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="section wide">
      <div className="glbun_wrap">
        <div className="header_con">
          <h3>글로벌 대학</h3>
          <p className="stt">
            태재대학교는 국내 최초 21세기형 하이브리드 캠퍼스로,<br/>
            학생들은 주요 5개 국가의 레지덴셜 캠퍼스에서 <br/>
            글로벌 로테이션과 메타버스 캠퍼스를 활용하여 학습 공동체 생활을 이어갑니다.
          </p>
        </div>
        
        {/* Desktop Version */}
        <div className="air pc">
          <div className="air_progress">
            <div className="air_progress-group">
              <div className="air_progress-start">
                <div className="air_progress-bot">시작</div>
              </div>
              <div className="air_progress-semester">
                <ol className="air_progress-list">
                  {countries.map((country, index) => (
                    <li 
                      key={index}
                      className={`air_progress-item ${index === activeIndex ? 'air_progress-item--active' : ''}`}
                      onClick={() => handleTabClick(index)}
                    >
                      <div className="air_progress-loc">
                        <strong>{country.name}</strong>
                      </div>
                      <div className="air_progress-bot">{country.semester}</div>
                    </li>
                  ))}
                </ol>
                <div className="air_progress-line">
                  <div 
                    className="air_progress-img"
                    style={{
                      transform: `translateX(${-100 + (100 / countries.length) * activeIndex}%)`
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="air_map">
            <div className="air_map-markers">
              {countries.map((country, index) => (
                <button
                  key={index}
                  type="button"
                  className={`air_map-marker ${index === activeIndex ? 'air_map-marker--active' : ''}`}
                  style={country.position}
                  onClick={() => handleMarkerClick(index)}
                >
                  <div className="air_map-marker__ico"></div>
                  <div className={`air_map-marker__detail ${country.className}`}>
                    <strong>{country.name}</strong>
                    <span>학습 테마 :<br />{country.theme}</span>
                  </div>
                </button>
              ))}
            </div>
            <div className="blt_meta"></div>
          </div>
        </div>

        {/* Mobile Version */}
        <section className="air_map_mo">
          <div className="object"></div>
          <ul className="tab_menu list">
            {countries.map((country, index) => (
              <li key={index}>
                <div className="item_head">
                  <a 
                    className="tab_control" 
                    href={`#tab-${index + 1}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleTabClick(index);
                    }}
                  >
                    {country.name}
                  </a>
                  <p>{country.semester}</p>
                </div>
                <div 
                  className={`tab_panel ${index === activeIndex ? 'active' : ''}`} 
                  id={`tab-${index + 1}`}
                >
                  <span>학습 테마 :<br/>{country.theme}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default GlobalCampus;