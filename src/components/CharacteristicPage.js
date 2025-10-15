import React from 'react';

const CharacteristicPage = ({ onNavigate }) => {

  // 철학 원칙 데이터 (사용자 제공 텍스트)
  const philosophyPrinciples = [
    {
      title: '학생의 서로 다른 잠재력',
      content: '학생들 모두 각자의 장점과 특성이 있습니다. 태재대학교는 학생 고유의 노력과 경험을 찾아서 우수성을 인정합니다. 학생의 다양한 경험 속에서 태재에서 함께 성장할 수 있는 잠재력을 찾고자 합니다.',
      number: '1'
    },
    {
      title: '성적만으로 드러나지 않는 우수성',
      content: '학생 각자의 우수성은 다양한 결과로 드러나며 때로는 성적만으로는 그 우수성이 드러나지 않을 수 있습니다. 태재대학교는 학생 각자만의 경험, 재능, 관점, 개성, 노력의 과정 등을 파악하는 정성적인 종합평가(Holistic Admission)를 입학전형 원칙으로 합니다.',
      number: '2'
    },
    {
      title: '조화와 화합을 위한 공동체 역량',
      content: '태재대학교 안에서 동료, 구성원과 소통하고 협력하여 개인적 성장을 이루고 사회에 기여할 수 있는 가능성을 기대합니다.',
      number: '3'
    }
  ];


  return (
    <div className="container sub_cont adm_wrap">
      {/* Header Section */}
      <div className="section wide header_con characteristic_header">
        <div className="visual">
          <div className="img_wrap">
            <img src="/images/main-1.png" alt="입학전형특징" />
          </div>
          <div className="cont_wrap">
            <div className="inner">
              <div className="tit_section">
                <div className="sub_tit">HOLISTIC ADMISSION</div>
                <h2>입학전형특징</h2>
              </div>
              <div className="desc">
                <p className="main_desc">
                  태재대학교는 학생의 주도적 역량을 개발하여 혁신적 미래교육을 지향하는 대학 교육목표에 따라 학생의 다양한 역량을 종합적으로 평가하는 종합평가(학생부종합전형, Holistic Admission)를 실시합니다.
                </p>
                <p className="main_desc">
                  태재대학교의 종합평가는 시험결과 위주의 입시보다 학생들이 고교생활 및 성장 과정에서 각자의 관심에 따라 다양한 경험으로 역량을 개발한 과정과 개별성을 인정할 수 있는 가장 적합한 방식입니다. 태재대학교는 종합적인 서류평가 기준을 통해 학업 및 학업외 역량을 종합적으로 평가하며 학생들 성취의 과정과 결과를 모두 평가할 수 있습니다. 또한, 학생들의 고등학교 역량 중심 교육과정을 통해 습득한 실행 역량을 직접 확인하기 위한 면접 평가도 시행하고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 평가 철학의 세부 원칙 - Taejae-fo Style Layout */}
      <div className="section">
        <div className="inner">
          <div className="step_cont philosophy_principles_step">
            <ul className="num_wrap">
              {philosophyPrinciples.map((principle, index) => (
                <li key={index}>
                  <span className="num">{principle.number}</span>
                  <div className="cont">
                    <div className="tit">
                      <strong>{principle.title}</strong>
                    </div>
                    <div className="desc">
                      <p>{principle.content}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 태재 신입생 평가 */}
      <div className="section wide adm_prcs">
        <div className="inner">
          <strong className="tit">
            <span className="korean-main-title">종합평가 방식의 입학전형</span>
            <span className="english-subtitle">Taejae Admission Policy</span>
            <span className="korean-subtitle">성적이나 수치가 아닌 성취와 동기, 결과와 과정을 동시에 고려하는 평가</span>
          </strong>
          <p className="desc">태재대학교는 입학평가 과정에서 학생의 교육 환경과 주어진 여건 안에서 나타낸 경험과 성취를 고려합니다. 성적이나 수치에 대한 양적인 평가방식이 아닌, 학생의 성취와 동기, 결과와 과정을 동시에 고려하여 평가하는 정성적인 종합평가 방식을 적용합니다. 이를 위해 학생의 학교생활기록부(또는 그에 상응하는 대체 서류)를 중심으로 제출서류의 모든 내용을 면밀히 검토하여 평가합니다.</p>
        </div>
      </div>

      {/* 평가 세부 내용 */}
      <div className="section">
        <div className="inner">
          
          {/* 단계별 평가 */}
          <div className="evaluation_section_with_image evaluation_steps_section">
            <div className="inner">
              <div className="image_text_layout">
                <div className="image_area">
                  <img src="/resources/img/img_admissions_main-lg.png" alt="단계별 평가 과정" />
                </div>
                <div className="text_section">
                  <h3>단계별 평가</h3>
                  <div className="text_area">
                    <p>태재대학교의 신입학평가는 1단계 서류평가와 2단계 면접평가로 이루어집니다. 1단계 서류평가에서는 지원자의 학교생활기록부 등 제출서류를 종합적으로 검토하여 학업 및 학업 외 학생 경험 속에서 지원자가 어떤 생각과 동기를 가지고 있었는지를 종합적으로 평가합니다. 2단계 면접은 전형별로 다른 유형의 면접을 진행하되 지원자가 태재인으로서 성장할 가능성을 면밀히 평가합니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 평가과정 */}
          <div className="evaluation_section_with_image evaluation_process_section reverse">
            <div className="inner">
              <div className="image_text_layout">
                <div className="text_section">
                  <h3>평가과정</h3>
                  <div className="text_area">
                    <p>지원자가 제출한 모든 지원서류를 각 서류평가자가 독립적으로 평가하며 단계별 평가위원회의를 거쳐서 평가가 이루어집니다. 학업 및 학업외 다양한 경험을 확인하여 태재대학교의 고유한 교육철학과 교육체계에 적합한 신입생 구성을 위한 노력을 기울입니다. 서류평가 결과에 따라 면접대상자가 결정되며, 면접을 통해 각 지원자의 학업적 역량 뿐 아니라 의사소통 및 대인관계 능력을 포함한 개인적 개별 역량을 직접 확인합니다.</p>
                  </div>
                </div>
                <div className="image_area">
                  <img src="/resources/img/img_admissions_main-sm.png" alt="평가과정" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 태재대학교 신입생 평가 원칙 */}
      <div className="section wide policy_statement">
        <div className="inner">
          <strong className="tit">
            <span className="korean-main-title">태재대학교 신입생 평가 원칙</span>
            <span className="english-subtitle">Admission Policy Statement</span>
          </strong>
          
          <div className="manifesto_content">
            <p>태재대학교는 대학 인재상과 교육목표에 따라 학생의 학업적 역량 뿐 아니라 학업외역량을 종합적으로 검토하여 평가합니다.</p>
            
            <p>태재대학교의 신입학평가 과정에서는 학생의 세부적인 경험과 정보를 찾고자 학교생활기록부 등 지원자가 제출한 모든 서류를 바탕으로 학생의 학업 및 학업외영역에서의 역량을 함께 평가합니다.</p>
            
            <p className="emphasis_statement">지원자의 전반적인 학업적 역량에 주목합니다.</p>
            
            <p>다만, 태재대학교는 단순히 성적에서 나타나는 수치에만 집중하지 않습니다. 학업적인 성공을 위해서는 시험 성적 외에도, 과제수행경험, 문제해결경험, 자기주도적 추진력, 적극성, 의지, 태도, 협업능력, 끈기 등 성적만으로 나타나지 않는 학업 특성들이 존재합니다.</p>
            
            <p>학생들이 자신의 방식으로 나타낸 학업경험 속에서 학업적 잠재력을 찾아 평가합니다. 따라서, 평가 과정에서 성적이나 영어자격시험 등에 수치상의 커트라인은 존재하지 않습니다. 태재대학교가 찾고자 하는 것은 학생들이 주어진 여건과 기회 안에서 어떤 동기를 가지고 어떤 개별적 학업적 특징을 보여왔는지입니다.</p>
            
            <p className="emphasis_statement">태재대학교는 학생 성취의 동기와 과정을 고려하여 평가합니다.</p>
            
            <p>'결과' 뿐만 아니라 학생 성취를 이루기까지의 지원자의 생각과 의지, 그리고 '노력', '태도', '과정' 등을 고려하여 학생이 주어진 문제를 대하는 태도를 평가에 반영합니다. 도전적인 자세와 창의적인 주도력 등을 함께 고려하여 태재에서 더욱 발전할 수 있는 가능성을 판단합니다.</p>
            
            <p className="emphasis_statement">그리고, 학생들의 개인적 특성도 중요한 평가 요소입니다.</p>
            
            <p>글로벌 조화를 이룰 미래 인재를 기르고자 하는 태재대학교의 목표에 따라, 학생들의 소통 공감 능력, 공동체 기여, 협업능력 등을 평가하며, 이를 위해 제출서류에서 드러나는 친구 관계, 의사소통 경험, 그리고 협업경험, 협동심을 고려합니다.</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CharacteristicPage;