import React from 'react';

const PreparatoriumPage = ({ onNavigate }) => {
  return (
    <div className="container sub_cont">
      {/* Hero Section - SchedulePage 스타일 */}
      <div className="section wide adm_prcs documents_hero">
        <div className="visual">
          <div className="img_wrap">
            <img src="/images/main-5.png" alt="태재 예비대학" />
          </div>
          <div className="cont_wrap">
            <div className="inner">
              <div className="tit_section">
                <div className="sub_tit">PRAEPARATORIUM</div>
                <h2>태재 예비대학</h2>
                <h3>3월부터 시작되는 15주간 예비학교 프로그램으로 완벽한 준비를 마치세요</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 통합 Praeparatorium 콘텐츠 */}
      <div className="section wide praeparatorium_unified">
        <div className="inner">

          {/* Praeparatorium 초대 메시지 */}
          <div className="content_block invitation_block">
            <div className="text_content full_width">
              <h3>Praeparatorium으로 예비 신입생 여러분들을 초대합니다!</h3>
              <div className="content_text">
                <p>
                  태재대학교 입학이 확정된 예비 신입생들을 위해 특별히 마련된 Praeparatorium은 학생들의 
                  영어 및 기타 언어 능력을 강화하고, 가을 학기 시작 전 대학 생활에 필요한 준비를 돕는 것을 
                  목적으로 합니다. 이 프로그램은 학생들의 영어 실력을 향상시키는 것은 물론, 태재대학교 
                  생활과 Global Rotation에 필요한 언어들에 대한 기초를 익힐 수 있는 기회를 제공합니다.
                </p>
                <p>
                  또한, 태재대학교의 교육 철학과 비전에 대한 이해를 돕는 유익한 세션도 포함되어 있습니다. 
                  온라인 학습과 다양한 상호작용 활동을 통해 학생들은 동료들과의 유대감을 형성하고, 
                  캠퍼스 생활에 원활하게 적응하며, 향후 학업에 필요한 기초 지식을 쌓을 수 있습니다.
                </p>
                <p>
                  Praeparatorium은 태재대학교 입학이 확정된 모든 합격자들이 수강해야하는 필수 
                  프로그램은 아니지만 언어 역량을 강화하고 태재대학교의 온라인 학습 환경에 원활히 적응할 
                  수 있도록 학생들에게 권장됩니다. 본 프로그램은 일반적으로 3월부터 6월까지 진행되며, 
                  Praeparatorium 프로그램을 신청 학생들은 태재대학교 관련 세션과 영어 프로그램을 필수로 
                  이수해야 합니다. 외국어 프로그램은 선택 사항입니다.
                </p>
                <p>
                  특히 태재대학교의 모든 수업은 영어로 진행되므로, 학생들은 수업에 적극적으로 참여하기 
                  위해 충분한 영어 실력을 갖추어야 합니다. 이 프로그램을 통해 학생들은 영어 능력을 향상시키고, 
                  자신의 생각을 표현하고 타인과 의견을 교류하는 데 필요한 자신감을 기를 수 있는 기회를 얻게 됩니다. 
                  또한 글로벌 로테이션(Global Rotation)을 통한 다양한 캠퍼스 생활에 대비하고 보다 즐거운 
                  학습 경험을 위해 예비신입생들에게 Global Rotation을 위한 외국어의 기초 학습 과정을 제공합니다.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 프로그램 소개 영상 섹션 */}
      <div className="section wide video_section">
        <div className="inner">
          <div className="tit_txt_box type3">
            <strong className="tit">프로그램 소개 영상</strong>
            <p className="txt">태재 예비대학 프로그램에 대해 더 자세히 알아보세요</p>
          </div>
          
          <div className="video_container">
            <div className="video_wrapper">
              <iframe
                src="https://www.youtube.com/embed/inmWq6IE5cU"
                title="태재 예비대학 프로그램 소개"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PreparatoriumPage;