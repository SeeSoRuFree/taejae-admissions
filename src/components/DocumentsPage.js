import React from 'react';

const DocumentsPage = ({ onNavigate }) => {
  
  const handleDownload = (filename) => {
    const link = document.createElement('a');
    link.href = `/pdf/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container sub_cont">
      {/* Hero Section - adm_prcs style */}
      <div className="section wide adm_prcs documents_hero">
        <div className="visual">
          <div className="img_wrap">
            <img src="/images/3-1-2.png" alt="제출서류 안내" />
          </div>
          <div className="cont_wrap">
            <div className="inner">
              <div className="tit_section">
                <div className="sub_tit">DOCUMENT SUBMISSION</div>
                <h2>제출서류 작성 안내</h2>
                <h3>전형별로 지원자가 작성해야 할 서류 작성 방법을 안내합니다.</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Documents Process */}
      <div className="section documents-section">
        <div className="inner">
          <div className="tit_txt_box type3">
            <strong className="tit">제출서류별 작성 안내</strong>
            <p className="txt">전형별로 요구되는 제출서류의 작성 방법을 상세히 안내합니다.</p>
          </div>
        </div>
      </div>

      {/* Self Development Plan Section */}
      <div className="section guide_temp sdp_section">
        <div className="inner">
          <div className="tit_box line_purple">
            <strong className="tit">Self Development Plan</strong>
            <p className="txt">대상: 태재미래인재전형 및 사회통합전형 1단계 합격자</p>
          </div>
          
          <div className="left_line_box">
            <em className="box_tit">작성 주요 사항</em>
            <ul className="txt_check">
              <li>지원자 개인의 경험 및 지원 동기 등을 평가하기 위해 3개의 문항으로 구성되며 글자 수 제한 없음</li>
              <li>공정성 확보를 위하여 작성 당일 문항을 공개, 지원자 전체가 동시 입력</li>
              <li>태재대학교 홈페이지에서 입력</li>
              <li>지정된 시간 이후 입력 및 작성 불가</li>
            </ul>
          </div>

          <div className="left_line_box">
            <em className="box_tit">작성방법</em>
            <p>2시간 지정 시간 내에 홈페이지 사이트에서 작성함. 지정 시간에 문항이 제시되지만, 특정한 주제에 대한 답변 제시 형식이 아니며, 평소 학생이 자신의 경험이나 생활, 태도, 관심사 등에 대하여 생각해온 바에 따라 작성할 수 있는 문항이 제시됨. 면접에서 작성된 내용에 대한 질의응답을 진행하게 되므로, 학생 자신의 생각을 진솔하게 작성하는 것이 중요함</p>
          </div>

          <div className="btn_area">
            <button 
              type="button" 
              className="btn_drop purple"
              onClick={() => handleDownload('Self Development Plan (서식 예시).pdf')}
            >
              <span>Self Development Plan 서식 예시</span>
            </button>
          </div>
        </div>
      </div>

      {/* 자기혁신성과자료 Section */}
      <div className="section guide_temp innovation_section">
        <div className="inner">
          <div className="tit_box line_teal">
            <strong className="tit">자기혁신성과자료</strong>
            <p className="txt">대상: 자기혁신인재전형 지원자 (응시원서와 함께 제출)</p>
          </div>
          
          <div className="left_line_box">
            <em className="box_tit">작성 주요 사항</em>
            <ul className="txt_check">
              <li>학업 및 교내외활동, 다양한 분야에서의 사회기여경험 등 우수한 혁신성과 도출 사례를 작성함. 자기주도 학습경험 성과 및 교내외활동/ 각종 팀 및 동아리 활동/ 창업/ 아르바이트 등 다양한 분야에서 우수한 성과(사회기여 경험 포함) 도출 사례등</li>
              <li>자기 주도적인 노력의 성과로서, 교내외활동 및 동아리 등 조직에서의 역할과 경험, 한계 도전 및 극복과 문제 해결 경험, 창의적 성과 사례 등 자신의 경험을 토대로 자기혁신 사례로 제시할 만한 성과를 작성</li>
            </ul>
          </div>

          <div className="left_line_box">
            <em className="box_tit">작성 방법</em>
            <p>고등학교 재학 기간에 준하는 기간부터 원서 접수 마감일까지 활동 내용을 최대 3개 이내 사례를 작성함. 원서 작성시 원서접수 사이트에 온라인 입력하며, 면접 과정에서 해당 내용에 대한 질의응답이 진행되므로 진솔한 경험 내용을 작성함. 활동에 대한 증빙자료는 서류평가 과정에서 확인 가능한 공식자료로 제출함</p>
          </div>

          <div className="btn_area">
            <button 
              type="button" 
              className="btn_drop teal"
              onClick={() => handleDownload('자기혁신성과자료(서식예시).pdf')}
            >
              <span>자기혁신성과자료 서식 예시</span>
            </button>
          </div>
        </div>
      </div>

      {/* 활동내용보고서 Section */}
      <div className="section guide_temp activity_section">
        <div className="inner">
          <div className="tit_box line_violet">
            <strong className="tit">활동내용보고서</strong>
            <p className="txt">대상: 글로벌인재전형(응시원서와 함께 제출)</p>
          </div>
          
          <div className="left_line_box">
            <em className="box_tit">작성 주요 사항</em>
            <ul className="txt_check">
              <li>학업 및 학업 외 교내외활동 등 자신을 나타낼 수 있는 활동 내용을 요약함. 재학한 고교 교육과정 연계한 학업 및 학업외활동 경험을 포함하여 학생의 자기 주도적인 노력의 과정과 결과를 작성함</li>
              <li>자신의 경험 중 학업역량, 자기주도적 경험 (문제 해결, 공동체 기여 및 협업, 리더십 등) , 태재인재상부합도, 지원 동기 및 태도 (도전의식, 적극성, 진취성 등) 등을 나타낼 수 있는 사례를 작성</li>
              <li>작성 내용에 대한 증빙자료는 평가과정에서 확인이 가능한 자료로 제출할 수 있으며, 재학한 고교 교육과정과 연계된 국가별 표준시험결과 (IB, AP, SAT, A-LEVEL, 등)도 제출 가능</li>
            </ul>
          </div>

          <div className="btn_area">
            <button 
              type="button" 
              className="btn_drop violet"
              onClick={() => handleDownload('활동내용보고서(서식예시).pdf')}
            >
              <span>활동내용보고서 서식 예시</span>
            </button>
          </div>
        </div>
      </div>

      {/* Writing Guidelines - left_line_box style */}
      <div className="section">
        <div className="inner">
          <div className="tit_txt_box type3">
            <strong className="tit">서류 작성 시 유의사항</strong>
            <p className="txt">
              제출서류 작성 시 아래의 내용을 기억하시기 바랍니다
            </p>
          </div>
          
          <ol className="guidelines_list">
            <li className="guideline_item">
              <h4>진솔성과 개인 경험 중심</h4>
              <p>자신만의 경험과 생각을 바탕으로 진솔하게 작성해야 합니다. 면접에서 해당 내용에 대한 질의응답이 진행되므로 허위나 과장된 내용은 지양해야 합니다.</p>
            </li>
            
            <li className="guideline_item">
              <h4>구체적인 사례 중심</h4>
              <p>추상적인 설명보다는 구체적인 사례를 들어 작성하고, 자기혁신성과자료와 활동내용보고서에 작성한 내용에 대해서는 평가 과정에서 확인 가능한 증빙자료를 함께 준비해야 합니다.</p>
            </li>
            
            <li className="guideline_item">
              <h4>자기주도적 과정과 결과</h4>
              <p>단순한 활동 나열이 아닌, 자기주도적으로 기획하고 추진한 과정과 그 결과에서 얻은 배움이나 성장을 중심으로 작성해야 합니다.</p>
            </li>
          </ol>
        </div>
      </div>


    </div>
  );
};

export default DocumentsPage;