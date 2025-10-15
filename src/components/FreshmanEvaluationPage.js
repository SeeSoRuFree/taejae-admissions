import React, { useState, useRef, useEffect } from 'react';

const FreshmanEvaluationPage = ({ onNavigate }) => {
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [selectedArea, setSelectedArea] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef(null);

  const handleAccordionClick = (index) => {
    setActiveAccordion(activeAccordion === index ? -1 : index);
  };

  const handleAreaClick = (index) => {
    setSelectedArea(selectedArea === index ? null : index);
  };

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.scrollWidth / 4; // 4개 카드
      const newSlide = Math.round(scrollLeft / cardWidth);
      setCurrentSlide(newSlide);
    }
  };

  // dot 클릭 핸들러
  const handleDotClick = (index) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.scrollWidth / 4;
      scrollRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
    }
  };

  // 스크롤 이벤트 리스너 등록
  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const philosophyItems = [
    {
      title: '성장 과정 중시',
      content: '단순한 성과 평가가 아닌 학생의 성장 과정을 중요하게 평가합니다. 결과뿐만 아니라 노력과 동기를 함께 종합적으로 평가하여 학생 개별의 특성과 상황을 고려합니다.'
    },
    {
      title: '결과와 과정의 균형',
      content: '성취의 결과뿐만 아니라 노력과 동기도 함께 종합적으로 평가합니다. 학생이 어떤 환경에서 어떻게 성장했는지를 중요하게 생각합니다.'
    },
    {
      title: '균형 있는 고려',
      content: '객관적 지표와 주관적 역량의 균형 있는 고려를 통해 평가합니다. 성취와 동기, 결과와 과정을 동시에 고려하는 정성적 종합평가를 실시합니다.'
    },
    {
      title: '맞춤형 평가',
      content: '학생 개별의 특성과 상황을 고려한 맞춤형 평가를 실시합니다. 모든 평가는 투명하고 공정하며 전문적인 기준에 따라 진행됩니다.'
    }
  ];

  const evaluationAreas = [
    {
      title: '학업 역량',
      subtitle: '고교 과정에서의 학습 능력과 성취 과정을 종합적으로 평가합니다.',
      details: [
        '교과목 학습과정에서 나타나는 학업 역량',
        '비판적·논리적 사고를 통한 문제 해결 능력',
        '창의적 사고와 자기주도적 학습 역량',
        '지식의 융합적 활용과 확장 능력'
      ],
      note: '학업 성취의 결과뿐만 아니라 학습 과정에서 나타나는 노력과 성장을 함께 평가합니다.',
      number: '01'
    },
    {
      title: '학업외 역량',
      subtitle: '동아리 활동, 봉사, 리더십 경험 등 다양한 활동 역량을 평가합니다.',
      details: [
        '동아리·학회 활동에서의 주도적 참여',
        '봉사활동을 통한 사회적 책임감과 실천',
        '리더십 경험과 팀워크 능력',
        '자기계발을 위한 다양한 도전과 경험'
      ],
      note: '활동의 양보다는 질적 성장과 의미 있는 경험을 중요하게 평가합니다.',
      number: '02'
    },
    {
      title: '인성과 가치관',
      subtitle: '성장 마인드와 공동체 의식을 바탕으로 한 인성 발달을 평가합니다.',
      details: [
        '성실함과 책임감을 바탕으로 한 성장',
        '공동체 구성원으로서의 협력과 배려',
        '다양성을 인정하고 포용하는 태도',
        '윤리적 가치관과 올바른 판단력'
      ],
      note: '개인의 성장과 함께 공동체 발전에 기여할 수 있는 인성을 평가합니다.',
      number: '03'
    },
    {
      title: '잠재역량',
      subtitle: '미래 성장 가능성과 열정을 통해 발전 가능성을 평가합니다.',
      details: [
        '새로운 분야에 대한 호기심과 탐구 의지',
        '어려운 상황에서도 포기하지 않는 끈기',
        '변화하는 환경에 적응하는 유연성',
        '미래 목표를 향한 구체적인 계획과 실행력'
      ],
      note: '현재의 성취보다는 미래에 대한 비전과 성장 가능성을 중시합니다.',
      number: '04'
    }
  ];

  return (
    <div className="container sub_cont adm_wrap">
      {/* Header Section */}
      <div className="section wide header_con freshman_eval_header">
        <div className="visual">
          <div className="img_wrap">
            <img src="/images/freshman-evaluation-bg.png" alt="태재 신입학 평가" />
          </div>
          <div className="cont_wrap">
            <div className="inner">
              <div className="tit_section">
                <div className="sub_tit">FRESHMAN EVALUATION</div>
                <h2>태재 신입학 평가</h2>
                <h3>성취와 동기, 결과와 과정을 동시에 고려하는<br/>정성적 종합평가 (Holistic Comprehensive Approach)</h3>
              </div>
              <div className="desc">
                <p className="main_desc">
                  태재대학교는 단순한 성과 평가를 넘어 학생의 성장 과정을 중시하는 차별화된 평가 철학을 가지고 있습니다. 
                  성취의 결과뿐만 아니라 노력과 동기를 함께 평가하여, 학생 개별의 특성과 상황을 고려한 맞춤형 평가를 실시합니다.
                </p>
                <p className="main_desc">
                  객관적 지표와 주관적 역량의 균형 있는 고려를 통해 학생의 전인적 성장과 역량을 다각도로 평가하며, 
                  모든 평가는 투명하고 공정하며 전문적인 기준에 따라 진행됩니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 평가 철학과 방법론 - Accordion + Step Content Hybrid */}
      <div className="section">
        <div className="inner">
          <div className="tit_txt_box type3">
            <strong className="tit">태재대학교만의 차별화된 평가 철학</strong>
            <p className="txt">
              단순한 성과 평가를 넘어 학생의 성장 과정을 중시하는<br/>
              정성적 종합평가 (Holistic Comprehensive Approach)
            </p>
          </div>
          
          <div className="step_cont row philosophy_accordion_hybrid">
            <ul>
              {philosophyItems.map((item, index) => (
                <li key={index} className={selectedArea === index ? 'active' : ''}>
                  <div className="cont">
                    <div className="tit" onClick={() => handleAccordionClick(index)} style={{cursor: 'pointer'}}>
                      <strong>{item.title}</strong>
                      <span className="accordion_toggle">
                        {activeAccordion === index ? '−' : '+'}
                      </span>
                    </div>
                    <div className={`desc accordion_content ${activeAccordion === index ? 'active' : ''}`}>
                      <p>
                        {item.content}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 주요 평가 영역 - Step Content with Detail Modal */}
      <div className="section">
        <div className="inner">
          <div className="tit_txt_box type3">
            <strong className="tit">주요 평가 영역</strong>
            <p className="txt">
              다각도의 역량을 종합적으로 평가하는 체계<br/>
              학생의 전인적 성장과 역량을 다각도로 평가합니다
            </p>
          </div>
          
          <div className="step_cont row evaluation_areas_grid">
            <ul>
              {evaluationAreas.map((area, index) => (
                <li key={index} className={selectedArea === index ? 'active selected' : ''}>
                  <div className="cont" onClick={() => handleAreaClick(index)} style={{cursor: 'pointer'}}>
                    <div className="area_number_square">{area.number}</div>
                    <div className="tit">
                      <strong>{area.title}</strong>
                    </div>
                    <div className="desc">
                      <p>{area.subtitle}</p>
                      <div className={`area_details ${selectedArea === index ? 'show' : ''}`}>
                        <ul className="detail_list">
                          {area.details.map((detail, idx) => (
                            <li key={idx}>{detail}</li>
                          ))}
                        </ul>
                        <div className="area_note">
                          {area.note}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 평가 원칙과 특징 - Purple Background Section */}
      <div className="section wide adm_prcs">
        <div className="inner">
          <strong className="tit">태재대학교<br/>평가 원칙과 특징</strong>
          <div className="prcs_list ko">
            <div className="inner">
              <ul ref={scrollRef}>
                <li>
                  <div className="tt"><em>투명성<br/>Transparency</em></div>
                  <p>평가 기준과 과정의 공개를 통한 신뢰성 확보로 모든 과정을 투명하게 진행합니다.</p>
                </li>
                <li>
                  <div className="tt"><em>공정성<br/>Fairness</em></div>
                  <p>모든 지원자에게 동등한 기회와 기준을 적용하여 공정한 평가를 실시합니다.</p>
                </li>
                <li>
                  <div className="tt"><em>전문성<br/>Professionalism</em></div>
                  <p>다수의 전문 평가위원에 의한 체계적이고 전문적인 평가를 진행합니다.</p>
                </li>
                <li>
                  <div className="tt"><em>종합성<br/>Comprehensiveness</em></div>
                  <p>다양한 자료와 방법을 통한 다각도 평가로 학생을 종합적으로 평가합니다.</p>
                </li>
              </ul>
            </div>
            
            {/* 모바일 스크롤 인디케이터 */}
            <div className="scroll-indicator">
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  className={`indicator-dot ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`카드 ${index + 1}로 이동`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreshmanEvaluationPage;