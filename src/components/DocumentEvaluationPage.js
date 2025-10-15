import React from 'react';

const DocumentEvaluationPage = ({ onNavigate }) => {
  return (
    <div className="container sub_cont vis_type">
      {/* Hero Section - adm_prcs style */}
      <div className="section wide adm_prcs documents_hero">
        <div className="visual">
          <div className="img_wrap">
            <img src="/images/2-1.png" alt="태재 서류평가 안내" />
          </div>
          <div className="cont_wrap">
            <div className="inner">
              <div className="tit_section">
                <div className="sub_tit">DOCUMENT EVALUATION</div>
                <h2>태재 신입학 서류 평가</h2>
                <h3>태재대학교의 입학전형 서류평가에서는 복수의 평가위원이 독립적으로 평가하며, 지원자의 제출서류를 통해 드러나는 학업역량, 자기주도적 경험, 문제해결, 공동체 기여 및 협업 능력, 리더십 등을 종합적으로 살핍니다.<br/><br/>또한 성장 가능성과 태재인재상 부합도, 지원 동기 및 태도, 도전의식, 적극성, 진취성 등을 함께 고려합니다.<br/><br/>각 평가 항목별 절대 기준은 없으며, 학생이 주어진 여건 내에서 개별적으로 나타낸 노력의 과정과 결과를 평가합니다.</h3>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* 3섹션: 3대 평가 항목 - guide_temp 연속 레이아웃 */}
      <div className="guide_temp evaluation_criteria">
        <div className="list type2">
          <div className="inner">
            <div className="left">
              <h3>평가항목 및 평가 내용</h3>
              <p className="desc">서류평가에서 중점적으로 확인하는 영역을 살펴봅니다.</p>
            </div>
            <div className="cont">
              <div className="evaluation_criteria_visual">
                <div className="criteria_item_visual academic_item">
                  <div className="criteria_image">
                    <img src="/images/3-1-1.png" alt="학업 역량" />
                  </div>
                  <div className="criteria_content">
                    <div className="criteria_header_visual">
                      <span className="criteria_number_visual">01</span>
                      <h4 className="criteria_title_visual">학업 역량</h4>
                      <p className="criteria_subtitle_visual">
                        비판적·논리적 사고역량, 창의적 문제해결역량, 과제수행능력
                      </p>
                    </div>
                    <div className="criteria_details_visual">
                      <ul className="detail_list_visual">
                        <li>학생의 적성과 교과목 특성을 고려한 교과성취도 정성평가</li>
                        <li>주어진 여건 안에서의 학업적 성취와 노력을 평가</li>
                        <li>수업 과정 속에서 드러나는 사고력, 창의적 문제해결 경험</li>
                        <li>논리적 글쓰기와 말하기 능력</li>
                        <li>대학 학업 수행에 기초가 되는 전반적 학업역량을 폭넓게 평가</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="criteria_item_visual selfdirected_item">
                  <div className="criteria_image">
                    <img src="/images/3-1-2.png" alt="자기주도 및 자기관리역량" />
                  </div>
                  <div className="criteria_content">
                    <div className="criteria_header_visual">
                      <span className="criteria_number_visual">02</span>
                      <h4 className="criteria_title_visual">자기주도 및 자기관리역량</h4>
                      <p className="criteria_subtitle_visual">
                        학업 및 학업외 자기주도적 경험, 동기와 태도, 추진력, 책임감, 도전의식, 진취성
                      </p>
                    </div>
                    <div className="criteria_details_visual">
                      <ul className="detail_list_visual">
                        <li>고교 생활 중 주도력을 발휘한 경험</li>
                        <li>관심 분야에서 학업·학업외적 동기와 의지를 드러낸 경험</li>
                        <li>열의와 끈기를 보여준 경험</li>
                        <li>동료와 협업하며 성취감을 느낀 경험</li>
                        <li>도전과 실패·성공을 통해 성장한 경험</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="criteria_item_visual community_item">
                  <div className="criteria_image">
                    <img src="/images/3-1-3.png" alt="공동체 기여 및 협업역량" />
                  </div>
                  <div className="criteria_content">
                    <div className="criteria_header_visual">
                      <span className="criteria_number_visual">03</span>
                      <h4 className="criteria_title_visual">공동체 기여 및 협업역량</h4>
                      <p className="criteria_subtitle_visual">
                        공동체역량, 리더십, 소통·공감, 태재인재상 부합도 및 성장가능성
                      </p>
                    </div>
                    <div className="criteria_details_visual">
                      <ul className="detail_list_visual">
                        <li>학교생활에서 드러난 협업 경험</li>
                        <li>생활 경험 속 공감과 소통능력</li>
                        <li>학교·지역사회를 위한 기여 경험</li>
                        <li>사회문제에 대한 관심과 스스로의 노력</li>
                        <li>개인적 여건과 경험의 다양성을 고려하여 평가</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4섹션: 태재 서류평가와 고교생활 - 새로운 이미지 중심 디자인 */}
      <div className="highschool_life_section">
        <div className="inner">
          <div className="section_header">
            <h3>태재 서류평가와 고교생활</h3>
          </div>
          
          <div className="main_image_container">
            <img src="/images/5-2.png" alt="즐거운 고교생활을 하는 학생들" className="main_student_image" />
          </div>
          
          <div className="content_text_area">
            <div className="text_block highlighted">
              <p>
                학생들의 고등학교 경험은 과거보다 다양해졌으며, 암기 위주의 학습보다는 창의력과 자기주도성을 발휘하는 활동이 중심이 되고 있습니다. 태재대학교는 이러한 변화를 반영하여, 비판적 사고·창의적 사고·자기주도적 학습·의사소통 및 협력을 중시하는 교육 목표와 맞닿아 평가합니다. 따라서 고등학생이 별도의 추가 활동이 아닌, <strong>고교 교육과정 속에서 자신의 의지와 동기를 드러낸다면 좋은 평가를 받을 수 있습니다.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 5섹션: 새로운 2칼럼 + 3칼럼 레이아웃 */}
      <div className="student_experience_section_new">
        <div className="inner">
          {/* 상단 제목 */}
          <div className="header_section_simple">
            <h3>서류평가에서 확인하는 학생의 고교 생활</h3>
          </div>
          
          {/* 하단 3칼럼: 각 역량별 리스트 */}
          <div className="content_columns">
            <div className="column_item academic">
              <h4>학업역량</h4>
              <ul className="column_question_list">
                <li>주도적으로 교과목을 선택하여 이수했는가?</li>
                <li>성적에 드러나지 않더라도 관심과 흥미 속에서 성취 경험을 보여주었는가?</li>
                <li>교과 활동에서 스스로의 생각을 반영했는가?</li>
                <li>과제를 스스로 계획하고 해결했는가?</li>
                <li>습득한 지식을 활용하여 글쓰기나 말하기로 확장했는가?</li>
              </ul>
            </div>

            <div className="column_item selfdirected">
              <h4>자기주도 및 자기관리역량</h4>
              <ul className="column_question_list">
                <li>교과/교내외 활동에서 관심과 의지로 추진한 경험이 있는가?</li>
                <li>수행평가 속 열정과 도전의지를 보여주었는가?</li>
                <li>학업활동 중 호기심과 사고를 확장했는가?</li>
                <li>과제수행에 열의와 집중력을 보여주었는가?</li>
                <li>주도력과 책임감을 발휘한 경험이 있는가?</li>
              </ul>
            </div>

            <div className="column_item community">
              <h4>공동체 기여 및 협업역량</h4>
              <ul className="column_question_list">
                <li>학교생활 속 동료·교사와의 소통 및 협력 경험이 있는가?</li>
                <li>동아리/교내외 활동에서 협업과 리더십을 보였는가?</li>
                <li>글쓰기·말하기 등 활동에서 공감·포용력이 드러났는가?</li>
                <li>교과 활동 속에서 사회·환경·미래에 대한 시야를 드러냈는가?</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default DocumentEvaluationPage;