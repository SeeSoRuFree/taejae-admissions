import React from 'react';

const EvaluationIndexPage = ({ onNavigate }) => {
  return (
    <div className="container sub_cont vis_type">
      {/* Main Evaluation Index Section */}
      <div className="evaluation_index_main">
        {/* Center Content */}
        <div className="center_content">
          <div className="main_text">
            <div className="sub_tit">ADMISSION EVALUATION</div>
            <h1>태재 입학 평가 안내</h1>
            <p className="main_desc">
              서류평가와 면접평가를 통한 종합적인 학생 역량 평가
            </p>
          </div>
          
          <div className="evaluation_cards">
            <div 
              className="eval_card document_card"
              onClick={() => onNavigate('korean-evaluation-document')}
            >
              <div className="card_image">
                <img src="/images/img_adm_sample01.png" alt="서류평가" />
              </div>
              <div className="card_content">
                <h3>태재 신입학 서류 평가</h3>
                <p>신입학 전형 서류평가의 평가 자료와 평가 항목을 알아봅니다.</p>
              </div>
            </div>
            
            <div 
              className="eval_card interview_card"
              onClick={() => onNavigate('korean-evaluation-interview')}
            >
              <div className="card_image">
                <img src="/images/img_main_ss01.png" alt="면접안내" />
              </div>
              <div className="card_content">
                <h3>태재 면접 안내</h3>
                <p>태재대학교 면접평가의 목적과 방법을 알아봅니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default EvaluationIndexPage;