import React, { useState } from 'react';

const ApplicationIndexPage = ({ onNavigate }) => {
  const [showApplicationPeriodModal, setShowApplicationPeriodModal] = useState(false);
  
  // 입학신청 접수기간 설정 (실제 운영시 수정 필요)
  // 태재미래인재전형, 자기혁신인재전형, 사회통합전형: 12월
  // 글로벌인재전형: 6월
  const APPLICATION_START_DATE = new Date('2024-12-01');
  const APPLICATION_END_DATE = new Date('2024-12-31');
  
  // 현재 접수기간인지 확인하는 함수
  const isApplicationPeriod = () => {
    const now = new Date();
    return now >= APPLICATION_START_DATE && now <= APPLICATION_END_DATE;
  };
  
  // 카드 클릭 핸들러
  const handleCardClick = (card) => {
    if (card.id === 'form') {
      // 입학신청서 작성 카드의 경우
      if (isApplicationPeriod()) {
        // 접수기간 중: 진학사 페이지로 이동
        window.open('https://enter.jinhakapply.com/', '_blank');
      } else {
        // 접수기간 외: 팝업 표시
        setShowApplicationPeriodModal(true);
      }
    } else {
      // 다른 카드들은 기존 라우팅
      onNavigate(card.route);
    }
  };

  const applicationCards = [
    {
      id: 'recruitment',
      title: '모집안내',
      description: '지원 전형과 모집 요강을 확인할 수 있습니다. (PDF 다운로드 가능)',
      route: 'korean-application-recruitment',
      className: 'recruitment_card',
      image: '/images/3-1-1.png'
    },
    {
      id: 'form',
      title: '입학지원 신청',
      description: '입학신청 기간 동안 신청서를 온라인으로 작성하고 제출할 수 있습니다.',
      route: 'korean-application-form',
      className: 'form_card',
      image: '/images/3-1-4.png'
    },
    {
      id: 'schedule',
      title: '전형별 특징 및 전형일정',
      description: '전형별 세부 특징과 일정에 대한 상세 정보를 제공합니다.',
      route: 'korean-application-schedule',
      className: 'schedule_card',
      image: '/images/3-1-2.png'
    },
    {
      id: 'documents',
      title: '제출서류 작성 안내',
      description: '서류 준비와 작성 방법에 대한 상세 가이드라인을 확인하세요.',
      route: 'korean-application-documents',
      className: 'documents_card',
      image: '/images/3-1-3.png'
    },
    {
      id: 'resources',
      title: '입학자료실',
      description: '관련 문서 및 자료를 파일 형태로 다운로드할 수 있습니다.',
      route: 'korean-application-resources',
      className: 'resources_card',
      image: '/images/3-1-5.png'
    }
  ];

  return (
    <div className="container sub_cont vis_type">
      {/* Main Application Index Section */}
      <div className="application_index_main">
        {/* Center Content */}
        <div className="center_content">
          <div className="main_text">
            <div className="sub_tit">APPLICATION GUIDE</div>
            <h1>태재 입학신청 안내</h1>
            <p className="main_desc">
              입학전형 안내부터 서류제출까지 전형별·단계별 입학지원 방법을 확인하세요
            </p>
          </div>
          
          <div className="application_cards">
            {/* First Row: 모집안내, 전형별 특징 및 전형일정 */}
            <div className="card_row first_row">
              {[applicationCards[0], applicationCards[2]].map((card) => (
                <div 
                  key={card.id}
                  className={`app_card ${card.className}`}
                  onClick={() => handleCardClick(card)}
                >
                  <div className="card_image">
                    <img src={card.image} alt={card.title} />
                  </div>
                  <div className="card_content">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Second Row: 제출서류 작성 안내, 입학지원 신청, 입학자료실 */}
            <div className="card_row second_row">
              {[applicationCards[3], applicationCards[1], applicationCards[4]].map((card) => (
                <div 
                  key={card.id}
                  className={`app_card ${card.className}`}
                  onClick={() => handleCardClick(card)}
                >
                  <div className="card_image">
                    <img src={card.image} alt={card.title} />
                  </div>
                  <div className="card_content">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Application Period Modal */}
      {showApplicationPeriodModal && (
        <div className="modal_overlay" onClick={() => setShowApplicationPeriodModal(false)}>
          <div className="modal_content" onClick={(e) => e.stopPropagation()}>
            <div className="modal_header">
              <h3>입학신청 안내</h3>
            </div>
            <div className="modal_body">
              <p>현재는 신청기간이 아닙니다.</p>
              <p>입학신청 기간 동안만 신청서 작성이 가능합니다.</p>
              <p className="modal_period_info">
                신청기간 중에만 버튼이 활성화됩니다.<br/>
                접수기간: {APPLICATION_START_DATE.toLocaleDateString()} ~ {APPLICATION_END_DATE.toLocaleDateString()}
              </p>
            </div>
            <div className="modal_footer">
              <button 
                className="modal_confirm_btn"
                onClick={() => setShowApplicationPeriodModal(false)}
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ApplicationIndexPage;