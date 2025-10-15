import React, { useState } from 'react';

const InterviewTypesPage = ({ onNavigate }) => {
  const [activeTypeDetail, setActiveTypeDetail] = useState(null);

  const handleTypeDetailClick = (index) => {
    setActiveTypeDetail(activeTypeDetail === index ? null : index);
  };

  const interviewTypes = [
    {
      id: 'group-discussion',
      title: '온라인 그룹토론',
      target: '태재대학교 모든 입학전형',
      time: '60분',
      participants: '6명 이내',
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
      target: '자기혁신인재전형 및 글로벌인재전형',
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
      {/* 1섹션: Hero Section - 기존 taejae-fo 스타일 */}
      <div className="section wide interview_types_hero">
        <div className="visual_wrap">
          <div className="img_wrap">
            <img src="/images/img-vision-diagram-lg_ko.png" alt="태재 면접 유형 안내" />
          </div>
          <div className="cont_wrap">
            <div className="inner">
              <div className="main_tit_section">
                <div className="sub_tit">INTERVIEW TYPES</div>
                <h1 className="main_tit">태재 면접 유형</h1>
                <p className="main_desc">전형별 특성에 따른 3가지 면접 방식으로 학생의 실행 역량을 종합 평가</p>
                <div className="key_point">
                  <span className="point_badge">온라인 그룹토론</span>
                  <span className="point_badge">AI-Assist 개별면접</span>
                  <span className="point_badge">개별심층면접</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2섹션: 면접 유형 개요 - guide_temp 스타일 */}
      <div className="guide_temp interview_types_overview">
        <div className="list type1">
          <div className="inner">
            <div className="left">
              <h3>면접 유형별<br/>특징 및 진행</h3>
              <p className="desc">태재대학교는 전형별 특성과 평가 목적에 따라 3가지 면접 방식을 운영합니다</p>
              <div className="overview_summary">
                <div className="summary_item">
                  <span className="summary_label">온라인 그룹토론</span>
                  <span className="summary_value">60분 · 6명 그룹</span>
                </div>
                <div className="summary_item">
                  <span className="summary_label">AI-Assist 개별면접</span>
                  <span className="summary_value">15분 · 모바일 앱</span>
                </div>
                <div className="summary_item">
                  <span className="summary_label">개별심층면접</span>
                  <span className="summary_value">30분 · 대면 심층</span>
                </div>
              </div>
            </div>
            <div className="cont">
              <div className="process_diagram">
                <div className="diagram_step">
                  <div className="step_circle">1</div>
                  <div className="step_content">
                    <h4>면접 유형 확인</h4>
                    <p>전형에 따른 면접 방식</p>
                  </div>
                </div>
                <div className="diagram_arrow">→</div>
                <div className="diagram_step">
                  <div className="step_circle">2</div>
                  <div className="step_content">
                    <h4>환경 준비</h4>
                    <p>PC/모바일 환경 설정</p>
                  </div>
                </div>
                <div className="diagram_arrow">→</div>
                <div className="diagram_step">
                  <div className="step_circle">3</div>
                  <div className="step_content">
                    <h4>면접 응시</h4>
                    <p>실시간/녹화 평가</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3섹션: 면접 유형별 상세 - guide_temp 스타일 */}
      <div className="guide_temp interview_types_detail">
        <div className="list type2">
          <div className="inner">
            <div className="left">
              <h3>면접 유형별<br/>상세 안내</h3>
              <p className="desc">각 면접 유형의 대상, 평가 내용, 진행 과정을 확인하세요</p>
              <div className="types_diagram">
                <img src="/images/diagram-curriculum.svg" alt="면접 유형 구조도" />
              </div>
            </div>
            <div className="cont">
              <div className="types_container">
                {interviewTypes.map((type, index) => (
                  <div key={type.id} className={`type_card ${type.color}_theme ${activeTypeDetail === index ? 'expanded' : ''}`}>
                    <div className="type_header" onClick={() => handleTypeDetailClick(index)}>
                      <div className="type_badge">
                        <span className={`badge_icon ${type.color}_badge`}>
                          {index + 1}
                        </span>
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

      {/* 4섹션: 면접 환경 안내 - guide_temp 스타일 */}
      <div className="guide_temp interview_environment">
        <div className="list type1">
          <div className="inner">
            <div className="left">
              <h3>면접 환경<br/>안내</h3>
              <p className="desc">안정적인 면접 환경을 위한 권장사항</p>
            </div>
            <div className="cont">
              <div className="environment_grid">
                <div className="env_category">
                  <div className="category_header purple_header">
                    <h4>온라인 그룹토론</h4>
                    <span className="category_subtitle">PC/노트북 환경</span>
                  </div>
                  <div className="category_items">
                    <div className="env_item">
                      <div className="env_icon">
                        <img src="/images/ico-100-layer01.svg" alt="PC/노트북" />
                      </div>
                      <div className="env_text">
                        <h5>PC/노트북</h5>
                        <p>웹브라우저, 웹캠, 마이크 필수</p>
                      </div>
                    </div>
                    <div className="env_item">
                      <div className="env_icon">
                        <img src="/images/ico-100-layer02.svg" alt="조용한 환경" />
                      </div>
                      <div className="env_text">
                        <h5>조용한 환경</h5>
                        <p>소음이 적고 주변에 타인이 없는 곳</p>
                      </div>
                    </div>
                    <div className="env_item">
                      <div className="env_icon">
                        <img src="/images/ico-100-layer03.svg" alt="안정적 인터넷" />
                      </div>
                      <div className="env_text">
                        <h5>안정적 인터넷</h5>
                        <p>원활한 화상회의 환경</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="env_category">
                  <div className="category_header teal_header">
                    <h4>AI-Assist 개별면접</h4>
                    <span className="category_subtitle">모바일 앱 환경</span>
                  </div>
                  <div className="category_items">
                    <div className="env_item">
                      <div className="env_icon">
                        <img src="/images/ico-100-cpog01.svg" alt="모바일 기기" />
                      </div>
                      <div className="env_text">
                        <h5>모바일 기기</h5>
                        <p>지정 면접 앱 설치 필요</p>
                      </div>
                    </div>
                    <div className="env_item">
                      <div className="env_icon">
                        <img src="/images/ico-100-cpog02.svg" alt="카메라/마이크" />
                      </div>
                      <div className="env_text">
                        <h5>카메라/마이크</h5>
                        <p>영상 녹화를 위한 기본 기능</p>
                      </div>
                    </div>
                    <div className="env_item">
                      <div className="env_icon">
                        <img src="/images/ico-100-cpog03.svg" alt="자유로운 시간" />
                      </div>
                      <div className="env_text">
                        <h5>자유로운 시간</h5>
                        <p>지정된 시간·장소 무관</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="env_category">
                  <div className="category_header gray_header">
                    <h4>개별심층면접</h4>
                    <span className="category_subtitle">대면/온라인 환경</span>
                  </div>
                  <div className="category_items">
                    <div className="env_item">
                      <div className="env_icon">
                        <img src="/images/ico-100-layer01.svg" alt="다수 평가위원" />
                      </div>
                      <div className="env_text">
                        <h5>다수 평가위원</h5>
                        <p>실시간 질의응답 진행</p>
                      </div>
                    </div>
                    <div className="env_item">
                      <div className="env_icon">
                        <img src="/images/ico-100-layer02.svg" alt="제출서류 기반" />
                      </div>
                      <div className="env_text">
                        <h5>제출서류 기반</h5>
                        <p>활동 보고서 및 성과물 준비</p>
                      </div>
                    </div>
                    <div className="env_item">
                      <div className="env_icon">
                        <img src="/images/ico-100-layer03.svg" alt="심층 대화" />
                      </div>
                      <div className="env_text">
                        <h5>심층 대화</h5>
                        <p>30분간 종합적 평가</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5섹션: 면접 준비 팁 - guide_temp 스타일 */}
      <div className="guide_temp interview_preparation_tips">
        <div className="list type2">
          <div className="inner">
            <div className="left">
              <h3>면접 준비<br/>팁</h3>
              <p className="desc">면접 유형별 효과적인 준비 방법</p>
            </div>
            <div className="cont">
              <div className="tips_grid">
                <div className="tip_card purple_theme">
                  <div className="tip_header">
                    <span className="tip_number">01</span>
                    <h4>그룹토론 준비</h4>
                  </div>
                  <div className="tip_content">
                    <ul>
                      <li>다양한 주제에 대한 자신의 의견 정리</li>
                      <li>논리적 근거와 함께 의견 제시 연습</li>
                      <li>타인의 의견 경청하고 반응하기</li>
                      <li>시간 관리 및 발언 기회 활용</li>
                      <li>영어 제시문 대비 독해 연습</li>
                    </ul>
                  </div>
                </div>

                <div className="tip_card teal_theme">
                  <div className="tip_header">
                    <span className="tip_number">02</span>
                    <h4>AI-Assist 면접 준비</h4>
                  </div>
                  <div className="tip_content">
                    <ul>
                      <li>Self-Development Plan 내용 숙지</li>
                      <li>제출 서류 내용 재검토</li>
                      <li>명확하고 간결한 답변 연습</li>
                      <li>모바일 카메라 각도 및 조명 확인</li>
                      <li>15분 내 핵심 내용 전달 연습</li>
                    </ul>
                  </div>
                </div>

                <div className="tip_card gray_theme">
                  <div className="tip_header">
                    <span className="tip_number">03</span>
                    <h4>개별심층면접 준비</h4>
                  </div>
                  <div className="tip_content">
                    <ul>
                      <li>제출한 모든 서류 내용 재검토</li>
                      <li>활동 경험의 의미와 배움 정리</li>
                      <li>구체적인 사례와 함께 답변 준비</li>
                      <li>30분간 지속되는 대화 연습</li>
                      <li>성장 과정과 미래 계획 구체화</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default InterviewTypesPage;