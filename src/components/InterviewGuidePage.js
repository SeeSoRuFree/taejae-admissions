import React, { useState } from 'react';

const InterviewGuidePage = ({ onNavigate }) => {
  const [activeTypeDetail, setActiveTypeDetail] = useState(null);

  const handleTypeDetailClick = (index) => {
    setActiveTypeDetail(activeTypeDetail === index ? null : index);
  };

  const interviewTypes = [
    {
      id: 'group-discussion',
      title: '온라인 그룹토론',
      target: '태재대학교 모든 입학전형 1단계 합격자',
      time: '60분',
      participants: '6명 이내 그룹으로 구성',
      color: 'purple',
      description: '제시문 기반 토론을 통해 논리적 분석 및 표현 역량, 융합적 사고 및 문제 해결 역량, 소통 및 협업 역량 등을 종합 평가',
      process: [
        '개인 PC 및 노트북을 활용하여 개별 접속',
        '제시문 분석 준비시간 15분 (영어 제시문 제공 가능)',
        '토론 언어: 한국어 또는 영어 (원서 접수 시 선택 가능)',
        '토론 영상은 다수의 평가위원이 사후 평가',
        '안정적인 녹음/발표 환경 권장',
        'PC 환경 안내는 1단계 합격자 발표 시 별도 공지'
      ]
    },
    {
      id: 'ai-assist',
      title: 'AI-Assist 개별면접',
      target: '태재미래인재전형 및 사회통합전형 1단계 합격자',
      time: '15분 내외',
      participants: '개별',
      color: 'teal',
      description: 'Self-Development Plan 기반 질문을 통해 태재 인재상 부합도, 핵심역량, 성장 가능성 종합 평가',
      process: [
        '제출 서류(학생부 등) 기반 AI-Assist 면접',
        '태재대학교 지정 면접 앱 설치 후 모바일 기기로 접속',
        '제시문 항목별 답변 영상 → 다수 평가위원 사후 평가',
        '지정된 시간·장소 무관, 개인 모바일 앱을 통해 응시 가능',
        '안정적인 발표 환경 권장 (소음 적고 타인 없는 공간)',
        '모바일 환경 안내는 1단계 합격자 발표 시 별도 안내'
      ]
    },
    {
      id: 'individual-depth',
      title: '개별심층면접',
      target: '자기혁신인재전형 및 글로벌인재전형 1단계 합격자',
      time: '30분 내외',
      participants: '개별',
      color: 'gray',
      description: '제출서류와 활동 경험 관련 질문을 통해 학업역량, 자기계발역량, 리더십, 소통 역량, 성장 가능성 등을 종합 평가',
      process: [
        '제출서류 기반 다수의 평가위원 심층 면접',
        '자기혁신성과 보고서(자기혁신인재전형) 관련 질의응답',
        '활동 보고서(글로벌인재전형) 관련 질의응답',
        '제출서류 전반에 대한 심층 질문',
        '학업역량 및 성장 가능성 종합 평가',
        '소통 역량 및 리더십 경험 확인'
      ]
    }
  ];

  return (
    <div className="container sub_cont vis_type">
      {/* 1섹션: Hero Section - SchedulePage 스타일 */}
      <div className="section wide adm_prcs documents_hero">
        <div className="visual">
          <div className="img_wrap">
            <img src="/images/2-2.png" alt="태재 면접 안내" />
          </div>
          <div className="cont_wrap">
            <div className="inner">
              <div className="tit_section">
                <div className="sub_tit">INTERVIEW GUIDE</div>
                <h2>태재 면접 안내</h2>
                <h3>태재대학교는 대학의 교육 목표를 충실히 반영하고 학업 및 학업외 영역에서 학생 개개인의 역량을 종합적으로 검토하기 위해 <strong>면접 평가 제도</strong>를 운영하고 있습니다.<br/>면접은 단순한 지식 확인을 넘어, 지원자의 사고력, 표현력, 협업능력 등을 심층적으로 평가하는 중요한 과정입니다.</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 통합 면접 평가 내러티브 */}
      <div className="interview-evaluation-journey">

        {/* 1단계: 면접 평가 목적 */}
        <div className="journey-section purpose-section">
          <div className="inner">
            <div className="section-indicator">
              <h3>면접 평가 목적</h3>
              <p className="section-intro">태재대학교는 왜 면접을 통해 학생을 평가할까요?</p>
            </div>
            
            <div className="purpose-items">
              <div className="purpose-item">
                <div className="item-icon">
                  <img src="/images/ico-100-layer01.svg" alt="교육 목표" />
                </div>
                <div className="item-content">
                  <h4>태재 교육 목표 반영</h4>
                  <p>태재대학교의 교육 목표에 부합하는 인재 선발</p>
                </div>
              </div>
              
              <div className="purpose-item">
                <div className="item-icon">
                  <img src="/images/ico-100-layer02.svg" alt="신뢰도 강화" />
                </div>
                <div className="item-content">
                  <h4>입학 전형의 신뢰도 강화</h4>
                  <p>학생부 등 지원서류의 내용에서 확인한 역량의 다면적 재검증</p>
                </div>
              </div>
              
              <div className="purpose-item">
                <div className="item-icon">
                  <img src="/images/ico-100-layer03.svg" alt="전인적 평가" />
                </div>
                <div className="item-content">
                  <h4>전인적 평가</h4>
                  <p>지식뿐 아니라 태도, 동기, 성장 가능성까지 종합적으로 판단하기 위함</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2단계: 면접 평가 방법 및 항목 */}
        <div className="journey-section competencies-section">
          <div className="inner">
            <div className="section-indicator">
              <h3>면접 평가 방법 및 항목</h3>
              <p className="section-intro">구체적으로 어떤 역량들을 어떻게 평가하는지 알아보세요.</p>
            </div>
            
            <div className="competencies-grid">
              <div className="competency-item">
                <div className="competency-icon">
                  <img src="/images/icon-100-admissions01.svg" alt="논리적 사고" />
                </div>
                <div className="competency-content">
                  <h4>논리적인 사고를 통한 판단과 의사표현 능력</h4>
                  <p>체계적이고 논리적인 사고를 통한 문제 분석과 명확한 의사표현 능력</p>
                </div>
              </div>
              
              <div className="competency-item">
                <div className="competency-icon">
                  <img src="/images/icon-100-admissions02.svg" alt="문제 해결" />
                </div>
                <div className="competency-content">
                  <h4>유연한 태도로 습득한 지식을 연계하고 주도적으로 문제를 해결하는 역량</h4>
                  <p>다양한 분야의 지식을 융합하여 창의적으로 문제를 해결하는 능력</p>
                </div>
              </div>
              
              <div className="competency-item">
                <div className="competency-icon">
                  <img src="/images/icon-100-admissions03.svg" alt="소통 협업" />
                </div>
                <div className="competency-content">
                  <h4>동료와 효과적으로 소통하며 협력하여 공동의 목표를 이뤄가는 능력</h4>
                  <p>타인과 효과적으로 소통하며 협력하여 공동의 목표를 달성하는 능력</p>
                </div>
              </div>
              
              <div className="competency-item">
                <div className="competency-icon">
                  <img src="/images/icon-100-admissions01.svg" alt="자기계발 리더십" />
                </div>
                <div className="competency-content">
                  <h4>자기 주도적인 성장 의지와 노력, 주변에 긍정적 영향을 미치는 리더십</h4>
                  <p>지속적인 자기계발 의지와 타인에게 긍정적 영향을 미치는 리더십</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3단계: 면접 평가 주안점 */}
        <div className="journey-section focus-section">
          <div className="inner">
            <div className="section-indicator">
              <h3>면접 평가 주안점</h3>
            </div>
            
            <div className="focus-content">
              <div className="focus-highlight">
                <p>면접에서는 단순히 암기한 지식의 확인보다, 지원자가 <strong>"어떤 생각과 동기를 가지고 있는가"</strong>에 중점을 둡니다.</p>
              </div>
              
              <div className="focus-description">
                <p>고등학교 생활 속에서의 성취와 활동 경험이 어떻게 학생의 자기 주도적인 사고와 태도로 이어졌는지를 평가하며, 자신의 경험, 활동, 학습 동기에 대한 지원자 자신의 생각을 논리적으로 설명하고 표현하는 능력도 평가합니다.</p>
                
                <p>태재대학교의 면접은 지식에 대한 시험장이 아니라, 고등학교 교육과정을 바탕으로 함양한 지원자의 종합적인 사고력과 표현력 등 역량을 직접 확인하여 평가하기 위한 중요한 과정입니다.</p>
              </div>

              <div className="process-integration">
                <div className="process-diagram">
                  <img src="/images/img_wto01_diagram.svg" alt="면접 평가 과정" />
                </div>
                <div className="process-flow-simple">
                  <div className="process-steps-inline">
                    <span className="step">지식</span>
                    <span className="arrow">→</span>
                    <span className="step">적용</span>
                    <span className="arrow">→</span>
                    <span className="step">사고</span>
                    <span className="arrow">→</span>
                    <span className="step">표현</span>
                    <span className="arrow">→</span>
                    <span className="step">소통</span>
                  </div>
                </div>
                <p>고등학교 교육과정에서 강조되는 핵심역량인 창의적 사고역량과 협력적 소통역량, 자기관리역량 등을 태재대학교에서 디자인한 면접 과정을 통해 직접적으로 확인하고자 합니다.</p>
                <p>고등학교 수업이나 교내 활동을 통해 배운 내용으로 <strong>[지식 → 적용 → 사고 → 표현 → 소통]</strong>의 과정으로 자신만의 언어로 설명하고, 상대방을 이해시키는 능력을 확인합니다.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 대학과 지원자의 첫 만남의 장 */}
        <div className="journey-section meeting-section-simple">
          <div className="inner">
            <h3>대학과 지원자의 첫 만남의 장</h3>
            <ul className="meeting-points-list">
              <li>단순 입시 평가가 아닌, 대학과 지원자가 처음으로 직접 마주하는 기회</li>
              <li>지원자가 태재대학교의 교수진, 교육 환경, 철학을 직접 경험하고 느낄 수 있는 장</li>
              <li>지원자에게도 태재대학교를 평가·판단하여 선택할 기회를 제공하는 시간</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 태재 면접 유형 통합 섹션 */}
      <div className="guide_temp interview_types_unified">
        <div className="list type1">
          <div className="inner">
            {/* 센터 정렬된 헤더 */}
            <div className="header_center">
              <h3>태재 면접 유형</h3>
              <p className="desc">INTERVIEW TYPES</p>
              <p className="subtitle">태재대학교는 전형별 특성을 반영하여 <strong>온라인 그룹토론</strong>, <strong>AI-Assist 개별면접</strong>, <strong>개별심층면접</strong> 등 체계적이고 혁신적인 면접 시스템을 통해 학생의 실행 역량을 다각도로 종합 평가합니다.</p>
            </div>
            <div className="cont">
              {/* 2. 면접 유형별 특징 서브섹션 */}
              
              {/* 2. 면접 유형별 특징 서브섹션 */}
              <div className="interview_subsection">
                <h4>면접 유형별 특징</h4>
                <div className="interview_types_overview">
                  <div className="types_visual">
                    <img src="/images/img_wto34_triangle.svg" alt="면접 유형 구조" />
                  </div>
                  <div className="types_description">
                    <p>면접은 전형별 특성에 따라 온라인 그룹 토론과 개인 면접 크게 두 가지 유형이며 개인면접은 전형에 따라 개별심층면접이나 온라인 AI-assist 면접이 함께 진행됩니다. 그룹 토론에서는 영어 제시문 등이 활용되며 준비 시간 이후에 온라인 상에서 6명 정도의 그룹으로 토론을 합니다. 그룹 토론의 토론 장면이나 AI-assist 면접의 답변 장면은 녹화하여 면접위원이 차후에 평가하게 됩니다.</p>
                  </div>
                </div>
              </div>
              
              {/* 3. 면접 유형별 상세 안내 서브섹션 */}
              <div className="interview_subsection">
                <h4>면접 유형별 상세 안내</h4>
                <p className="subsection_desc">각 면접 유형의 대상, 평가 내용, 진행 과정을 확인하세요</p>
                
                <div className="types_container">
                  {interviewTypes.map((type, index) => (
                    <div key={type.id} className={`type_card ${type.color}_theme ${activeTypeDetail === index ? 'expanded' : ''}`}>
                      <div className="type_header" onClick={() => handleTypeDetailClick(index)}>
                        <div className="type_badge">
                          <div className="badge_icon_container">
                            <img src={`/images/ico-100-cpog0${index + 1}.svg`} alt={type.title} className="type_icon" />
                            <span className="badge_number">{index + 1}</span>
                          </div>
                        </div>
                        <div className="type_title_section">
                          <h4>{type.title}</h4>
                          <div className="type_meta">
                            <span className="meta_item">{type.time}</span>
                            <span className="meta_divider">·</span>
                            <span className="meta_item">{type.participants}</span>
                          </div>
                        </div>
                        <div className="type_expand_icon">
                          {activeTypeDetail === index ? '−' : '+'}
                        </div>
                      </div>
                      
                      <div className="type_content">
                        <div className="content_section">
                          <h5>대상</h5>
                          <p>{type.target}</p>
                        </div>
                        
                        <div className="content_section">
                          <h5>평가 내용</h5>
                          <p>{type.description}</p>
                        </div>
                        
                        <div className="content_section">
                          <h5>평가 과정</h5>
                          <ul className="process_list">
                            {type.process.map((step, stepIndex) => (
                              <li key={stepIndex}>{step}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
};

export default InterviewGuidePage;