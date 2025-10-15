import React, { useState } from 'react';

const SchedulePage = ({ onNavigate }) => {
  const [expandedAccordion, setExpandedAccordion] = useState('future'); // 첫 번째 전형을 기본으로 펼침

  const handleAccordionToggle = (typeId) => {
    setExpandedAccordion(expandedAccordion === typeId ? null : typeId);
  };

  const admissionTypes = [
    {
      id: 'future',
      title: '태재미래인재전형',
      description: '태재미래인재전형은 태재인재상에 따라 끊임없이 스스로 생각하고 변화하는 미래에 대한 호기심을 가지고 능동적으로 대처하고자 하는 의지를 가진 학생이라면 누구나 도전할 수 있는 전형입니다.',
      process: '단계별 전형으로, 1단계는 학생부를 중심으로 종합적인 서류평가를 진행합니다. 다수의 평가 위원이 지원자의 제출서류를 통해 드러나는 학업적 역량, 자기주도적 경험 (문제 해결, 공동체 기여 및 협업 능력, 리더십 등)을 통한 성장 가능성 및 태재인재상 부합도, 지원 동기 및 태도(도전의식, 적극성, 진취성 등)등에 대해 종합평가 합니다.\n\n2단계는 면접평가입니다. 1단계 합격자는 지원자 개인의 경험 및 지원 동기 등에 대한 Self-Development Plan을 정해진 시간에 온라인으로 작성하여 제출해야 합니다. 작성한 Self-Development Plan 내용에 대한 AI-assist 개별면접을 실시하고, 온라인 그룹토론 면접도 실시합니다',
      links: [
        { text: '태재 입학평가 안내', action: () => onNavigate('korean-evaluation-index') },
        { text: '제출서류 작성 안내', action: () => onNavigate('korean-application-documents') }
      ]
    },
    {
      id: 'innovation',
      title: '자기혁신인재전형',
      description: '선발하고자 하는 태재인재상은 모든 전형에서 동일합니다. 다만, 자기혁신인재전형은 각기 다양한 분야에서 도전을 통한 우수한 성과나 사회기여 경험 등을 바탕으로 추가로 평가받기를 원하는 사람이 지원할 수 있도록 마련된 전형입니다. 태재인재상에 따라 주도적이고 창의적이며 개성 있는 각자의 역량을 발휘한 학생이라면 자기혁신인재전형에 도전하시기 바랍니다.',
      process: '단계별 전형으로, 1단계는 학생부와 지원자가 제출한 자기혁신성과 입증자료를 바탕으로 종합적인 서류평가를 진행합니다. 다수의 평가 위원이 지원자의 제출서류를 통해 드러나는 학업역량, 자기주도적 경험 (문제 해결, 공동체 기여 및 협업 능력, 리더십 등)을 통한 성장 가능성 및 태재인재상부합도, 지원 동기 및 태도 (도전의식, 적극성, 진취성 등) 등에 대해 종합평가 합니다.\n\n자기혁신인재전형의 2단계에는 온라인그룹토론 면접과 더불어 개별 심층 면접을 실시합니다. 개별 심층 면접에서는 지원자가 제출한 학생부와 자기혁신성과 입증자료를 바탕으로 지원자의 학업역량 및 자기계발역량, 리더십및 소통 역량, 성장 가능성 등을 종합평가합니다.',
      links: [
        { text: '태재 입학평가 안내', action: () => onNavigate('korean-evaluation-index') },
        { text: '제출서류 작성 안내', action: () => onNavigate('korean-application-documents') }
      ]
    },
    {
      id: 'social',
      title: '사회통합전형',
      description: '사회통합전형의 전형방법은 태재미래인재전형과 동일합니다. 태재인재상도 전형별로 동일하여 주어진 여건과 기회 내에서 적성과 관심이 있는 분야에 있어서 열정과 끈기를 나타내고, 협력적 활동 경험 등 동료들과의 학교생활에서 주변을 이롭게 하려는 마음을 기울인 인재를 기다립니다. 세부 지원자격은 모집요강을 참고해주시기 바랍니다.',
      process: '단계별 전형으로, 1단계는 학생부를 중심으로 종합적인 서류평가를 진행합니다. 다수의 평가 위원이 지원자의 제출서류를 통해 드러나는 학업역량, 자기주도적 경험 (문제 해결, 공동체 기여 및 협업 능력, 리더십 등)을 통한 성장 가능성 및 태재인재상부합도, 지원 동기 및 태도 (도전의식, 적극성, 진취성 등) 등에 대해 종합평가 합니다.\n\n2단계는 면접평가입니다. 1단계 합격자는 지원자 개인의 경험 및 지원 동기 등에 대한 Self-Development Plan 을 정해진 시간에 온라인으로 작성하여 제출해야 합니다. 2단계에서는 지원자가 작성한 Self-Development Plan내용에 대한 AI-assist 개별면접을 실시하고, 온라인 그룹토론 면접도 실시합니다.',
      links: [
        { text: '태재 입학평가 안내', action: () => onNavigate('korean-evaluation-index') },
        { text: '제출서류 작성 안내', action: () => onNavigate('korean-application-documents') }
      ]
    },
    {
      id: 'global',
      title: '글로벌인재전형',
      description: '글로벌인재전형은 태재대학교의 타전형과 다르게 9월 입학 전 6월에 지원할 수 있는 전형입니다. 9월 입학 전까지 국내외 고등학교 졸업자격(또는 동등 자격)을 갖추는 사람은 누구나 지원할 수 있습니다. 선발하고자 하는 태재인재상은 모든 전형에서 동일합니다. 다양한 교육환경 속에서 관심이 있는 분야에 의미 있는 열정과 끈기를 보이고, 자신만의 의지로 도전적인 태도를 나타내왔던, 서로 다른 장점을 지닌 예비 태재인들을 환영합니다.',
      process: '단계별 전형으로, 1단계는 학생부와 지원자가 제출한 활동내용보고서를 바탕으로 종합적인 서류평가를 진행합니다. 고교 재학과정에서 성취한 국내외 학업결과 및 학업외 활동내용 등을 포함하여 활동내용보고서를 제출할 수 있습니다. 평가 기준은 모든 태재 입학전형에서 동일하며 다수의 평가 위원이 지원자의 제출서류를 통해 드러나는 학업역량, 자기주도적 경험 (문제 해결, 공동체 기여 및 협업 능력, 리더십 등)을 통한 성장 가능성 및 태재인재상부합도, 지원 동기 및 태도 (도전의식, 적극성, 진취성 등) 등에 대해 종합평가 합니다.\n\n글로벌인재전형의 2단계에는 온라인그룹토론 면접과 지원자가 제출한 학생부와 활동내용보고서 내용을 바탕으로한 개별 심층면접을 실시하여 지원자의 학업역량 및 자기계발역량, 리더십 및 소통 역량, 성장 가능성 등을 종합평가합니다.',
      links: [
        { text: '태재 입학평가 안내', action: () => onNavigate('korean-evaluation-index') },
        { text: '제출서류 작성 안내', action: () => onNavigate('korean-application-documents') }
      ]
    }
  ];


  return (
    <div className="container sub_cont schedule-page">
      {/* Hero Section - adm_prcs style */}
      <div className="section wide adm_prcs documents_hero">
        <div className="visual">
          <div className="img_wrap">
            <img src="/images/3-1-1.png" alt="태재대학교 입학전형" />
          </div>
          <div className="cont_wrap">
            <div className="inner">
              <div className="tit_section">
                <div className="sub_tit">Taejae Undergraduate Admission</div>
                <h2>태재대학교 입학전형</h2>
                <h3>태재대학교가 국내 학생을 선발하는 입학전형은 <strong>태재미래인재전형</strong>, <strong>자기혁신인재전형</strong>, <strong>글로벌인재전형</strong>, 그리고 정원 외 선발인 <strong>사회통합전형</strong>이 있습니다. 사회통합전형을 제외한 각각의 전형 간에는 중복지원이 가능합니다. 모든 전형은 태재대학교의 <strong>신입생 선발 원칙</strong>에 따라 고교생활 등 학생의 주도적인 경험을 바탕으로 학생의 종합적인 역량을 평가하며, <strong>대학수학능력시험 결과는 평가자료로 활용하지 않습니다.</strong></h3>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Admission Types Accordion */}
      <div className="section admission-accordion-section">
        <div className="inner">
          <h2 className="section-title">전형별 상세 안내</h2>
          <div className="admission-accordion">
            {admissionTypes.map((type) => (
              <div key={type.id} className={`accordion-item ${expandedAccordion === type.id ? 'expanded' : ''}`}>
                <div 
                  className="accordion-header"
                  onClick={() => handleAccordionToggle(type.id)}
                >
                  <h3 className="accordion-title">{type.title}</h3>
                  <div className="accordion-toggle">
                    <span className={`toggle-icon ${expandedAccordion === type.id ? 'rotated' : ''}`}>▼</span>
                  </div>
                </div>
                <div className={`accordion-content ${expandedAccordion === type.id ? 'expanded' : ''}`}>
                  <div className="accordion-inner">
                    <div className="accordion-description">
                      <p>{type.description}</p>
                    </div>
                    
                    <div className="accordion-process">
                      <h4>전형방법</h4>
                      <div className="process-content">
                        {type.process.split('\n\n').map((paragraph, idx) => (
                          <p key={idx}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                    
                    <div className="accordion-graphic">
                      <h4>전형 진행 과정</h4>
                      <div className="process-flow">
                        {type.id === 'future' && (
                          <>
                            <div className="process-step">지원서 접수</div>
                            <div className="process-arrow"></div>
                            <div className="process-step">서류평가</div>
                            <div className="process-arrow"></div>
                            <div className="process-step">SDP 작성</div>
                            <div className="process-arrow"></div>
                            <div className="process-step">AI면접+그룹토론</div>
                            <div className="process-arrow final-arrow"></div>
                            <div className="process-step final">합격</div>
                          </>
                        )}
                        {type.id === 'innovation' && (
                          <>
                            <div className="process-step">지원서 접수</div>
                            <div className="process-arrow"></div>
                            <div className="process-step">서류평가+성과자료</div>
                            <div className="process-arrow"></div>
                            <div className="process-step">그룹토론+심층면접</div>
                            <div className="process-arrow final-arrow"></div>
                            <div className="process-step final">합격</div>
                          </>
                        )}
                        {type.id === 'social' && (
                          <>
                            <div className="process-step">지원서 접수</div>
                            <div className="process-arrow"></div>
                            <div className="process-step">서류평가</div>
                            <div className="process-arrow"></div>
                            <div className="process-step">SDP 작성</div>
                            <div className="process-arrow"></div>
                            <div className="process-step">AI면접+그룹토론</div>
                            <div className="process-arrow final-arrow"></div>
                            <div className="process-step final">합격</div>
                          </>
                        )}
                        {type.id === 'global' && (
                          <>
                            <div className="process-step">6월 지원서 접수</div>
                            <div className="process-arrow"></div>
                            <div className="process-step">서류평가+활동보고서</div>
                            <div className="process-arrow"></div>
                            <div className="process-step">그룹토론+심층면접</div>
                            <div className="process-arrow final-arrow"></div>
                            <div className="process-step final">9월 입학</div>
                          </>
                        )}
                      </div>
                    </div>
                    
                    <div className="accordion-links">
                      {type.links.map((link, idx) => (
                        <button 
                          key={idx}
                          className="accordion-link-btn"
                          onClick={link.action}
                        >
                          {link.text}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Timeline Table Section */}
      <div className="section">
        <div className="inner">
          <div className="tit_txt_box type3">
            <strong className="tit">전형별 일정 요약</strong>
          </div>
          
          <div className="table_board_wrap">
            <div className="board info">
              <table>
                <colgroup>
                  <col style={{width: '20%'}} />
                  <col style={{width: '16%'}} />
                  <col style={{width: '16%'}} />
                  <col style={{width: '16%'}} />
                  <col style={{width: '16%'}} />
                  <col style={{width: '16%'}} />
                </colgroup>
                <thead>
                  <tr>
                    <th>전형</th>
                    <th>지원서 접수</th>
                    <th>1단계 합격자 발표</th>
                    <th>면접평가</th>
                    <th>합격자 발표</th>
                    <th>입학</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="left">태재미래인재전형</td>
                    <td>12월</td>
                    <td>1월 말</td>
                    <td>2월</td>
                    <td>2월 말</td>
                    <td>9월*</td>
                  </tr>
                  <tr>
                    <td className="left">자기혁신인재전형</td>
                    <td>12월</td>
                    <td>1월 말</td>
                    <td>2월</td>
                    <td>2월 말</td>
                    <td>9월*</td>
                  </tr>
                  <tr>
                    <td className="left">사회통합전형</td>
                    <td>12월</td>
                    <td>1월 말</td>
                    <td>2월</td>
                    <td>2월 말</td>
                    <td>9월*</td>
                  </tr>
                  <tr>
                    <td className="left">글로벌인재전형</td>
                    <td>6월</td>
                    <td>7월 초</td>
                    <td>7월</td>
                    <td>8월 초</td>
                    <td>9월</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="schedule_note">* 3월~8월 Praeparatorium (대학예비과정) 참여</p>
          </div>
        </div>
      </div>



    </div>
  );
};

export default SchedulePage;