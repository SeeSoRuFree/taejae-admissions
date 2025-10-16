import React from 'react';

const InterviewPreparationGuidePage = ({ onNavigate }) => {

  return (
    <div className="container sub_cont">
      {/* Hero Section */}
      <div className="section wide adm_prcs documents_hero">
        <div className="visual">
          <div className="img_wrap">
            <img src="/images/main-4.png" alt="예비 태재인 면접 준비 가이드" />
          </div>
          <div className="cont_wrap">
            <div className="inner">
              <div className="tit_section">
                <div className="sub_tit">INTERVIEW PREPARATION GUIDE</div>
                <h2>예비 태재인 면접 준비 가이드</h2>
                <h3>태재대학교 면접을 위한 체계적인 준비 방법을 안내합니다</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1: 면접 준비 개요 */}
      <div className="section wide interview_guide_unified">
        <div className="inner">
          
          {/* 면접 준비 핵심 원칙 */}
          <div className="content_block overview_block">
            <div className="text_content">
              <div className="content_text">
                <p>
                  태재대학교면접을 위해서는 학교 교육과정 외에 별도의 준비는 필요 없습니다.
                  고교생활 수업 중 접하게 되는 다양한 주제에 대해서 자신만의 생각을 되짚어보고 말로 표현하는 기회를 많이 갖도록 해보세요.
                  수업 중 발표나 친구들과 대화에서 논리적으로 말하는 연습, 상대방을 경청하며 자신의 생각으로 소통하는 연습 등 학교생활 속에서 다양한 기회를 활용할 수 있습니다.
                  이러한 과정은 고교 교육에서 강조하는 종합적인 사고역량, 창의적 역량, 의사소통역량, 소통공감 역량 등을 함양하는 노력의 과정이기도 합니다.
                </p>
                <div className="key_points">
                  <div className="key_point">
                    <span className="point_icon">💭</span>
                    <span>자신만의 생각을 되짚어보고 말로 표현하는 기회 확대</span>
                  </div>
                  <div className="key_point">
                    <span className="point_icon">🗣️</span>
                    <span>논리적으로 말하고 상대방을 경청하며 소통하는 연습</span>
                  </div>
                  <div className="key_point">
                    <span className="point_icon">📚</span>
                    <span>고교학업과 면접 모두에 도움이 되는 통합적 사고 연습하기</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="image_content">
              <img src="/images/main-4.png" alt="면접 준비 개요" />
            </div>
          </div>

          {/* 면접 준비 안내 */}
          <div className="content_block introduction_block">
            <div className="image_content">
              <img src="/images/main-3.png" alt="면접 준비 안내" />
            </div>
            <div className="text_content">
              <h3>면접 준비 안내</h3>
              <div className="content_text">
                <p>
                  비판적 책읽기로 자기만의 생각으로 정리하고 친구와 대화하기 등의 평소 독서습관도 중요합니다. 또한 평소 고등학교에서 자신이 수행하는 과제에 대해 스스로 질문하고 의미를 이야기할 수 있고 우리 주변에서 일어나는 사회, 국제문제 등에 대해서도 자신의 생각을 정리해보는 경험 등은 고교 학업 뿿 아니라 태재대학교 면접에서도 자신감을 갖게 할 것입니다.
                </p>
                <ul className="preparation_highlights">
                  <li>비판적 독서와 친구와의 대화를 통한 사고력 향상</li>
                  <li>평소 고등학교에서 자신이 수행하는 과제에 대해 스스로 질문하기</li>
                  <li>우리 주변에서 일어나는 사회, 국제문제에 대한 자신의 생각 정리하기</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Section 2: 상세 준비 가이드 */}
      <div className="section wide detailed_guide_section">
        <div className="inner">
          <div className="tit_txt_box type3">
            <strong className="tit">[태재 5단계 면접 준비 가이드]</strong>
            <p className="txt">면접은 단순히 질문에 답하는 자리가 아니라, 자신의 생각을 논리적으로 표현하고, 소통하는 과정입니다. 학교 외에서 별도로 면접을 위한 준비할 필요가 없으며, 학교 수업과 교내 생활에서 주어지는 다양한 학업 및 학업외기회를 활용하는 평소의 학교생활이 중요합니다. 면접에 도움이 될수 있는 고교생활에 대해 알아봅니다.</p>
          </div>
          
          <div className="guide_steps_grid">
            
            {/* Step 1 */}
            <div className="guide_step_card step_1">
              <div className="step_header">
                <div className="step_number">1</div>
                <h4>수업이나 학교 활동 중 경험 쌓기</h4>
              </div>
              <div className="step_content">
                <p>평소 수업이나 학교 활동 중 다음과 같은 연습이 도움이 됩니다:</p>
                <ul className="step_list">
                  <li>다양한 주제에 대해 자신의 생각을 말해보기</li>
                  <li>논리적으로 말하는 연습</li>
                  <li>친구들과 소통하고 경청하는 태도</li>
                  <li>책을 읽고 비판적으로 정리해보기</li>
                </ul>
                <p className="step_note">이러한 습관에서 쌓인 역량은 면접에서도 자연스럽게 드러나게 됩니다.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="guide_step_card step_2">
              <div className="step_header">
                <div className="step_number">2</div>
                <h4>자신만의 생각을 표현하는 연습</h4>
              </div>
              <div className="step_content">
                <p>면접에서는 정답보다 자기만의 생각을 갖고 있는지를 더 중요하게 평가합니다. 이를 위해:</p>
                <ul className="step_list">
                  <li>수업 시간이나 모둠활동에서 적극적으로 발언해보세요</li>
                  <li>신문, 뉴스, 시사 이슈에 대해 자신의 의견을 정리해보세요</li>
                  <li>친구와 토론하거나 일상의 사건에 대해 서로 생각을 나눠보세요</li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="guide_step_card step_3">
              <div className="step_header">
                <div className="step_number">3</div>
                <h4>내 경험에 대해 스스로 질문해보기</h4>
              </div>
              <div className="step_content">
                <p>면접에서 경험할 만한 질문들을 스스로에게 던져보는 연습도 도움이 될 수 있습니다.</p>
                <div className="question_examples">
                  <p><strong>예시 질문들:</strong></p>
                  <ul className="step_list">
                    <li>내가 지금까지 가장 몰입했던 활동은?</li>
                    <li>그 경험에서 배운 점은 무엇인가?</li>
                    <li>그 과제에서 의미는 무엇인가?</li>
                    <li>자신만의 아이디어나 방식을 적용해본 경험은?</li>
                    <li>어려움을 극복하기 위해 추진했던 경험은?</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="guide_step_card step_4">
              <div className="step_header">
                <div className="step_number">4</div>
                <h4>독서와 글쓰기, 말하기</h4>
              </div>
              <div className="step_content">
                <p>면접은 말하기 시험이지만, 실제로 평가되는 깊이 있는 사고력과 표현력은 독서와 글쓰기에서 비롯됩니다.</p>
                <ul className="step_list">
                  <li>다양한 분야의 책을 읽고, 핵심 내용을 정리해보세요</li>
                  <li>책 내용을 자신의 삶과 연결해보는 연습을 하세요</li>
                  <li>독후감을 짧게라도 꾸준히 써보는 것도 추천합니다</li>
                </ul>
              </div>
            </div>

            {/* Step 5 */}
            <div className="guide_step_card step_5">
              <div className="step_header">
                <div className="step_number">5</div>
                <h4>대상 앞에서 자신의 생각 말하기</h4>
              </div>
              <div className="step_content">
                <p>마지막으로, 나의 생각을 면접위원 앞에서 말하는 연습을 한두번해보는 것은 도움이 됩니다.</p>
                <p className="practice_tip">
                  <strong>실전 연습 방법:</strong><br/>
                  친구나 선생님, 부모님 앞에서 자신이 생각한 바를 10분~15분 정도 말하는 연습을 2~3회 정도 해보는 것도 
                  면접장에서 분위기를 미리 경험할 수 있는 좋은 방법입니다.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default InterviewPreparationGuidePage;