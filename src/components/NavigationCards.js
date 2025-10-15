import React from 'react';

const NavigationCards = ({ onNavigate }) => {
  const menuItems = [
    {
      id: 'features',
      title: '태재 입학전형 특징',
      description: '태재대학교만의 독특한 입학전형 방식'
    },
    {
      id: 'evaluation',
      title: '태재 입학 평가안내',
      description: '입학 평가 기준 및 절차 안내'
    },
    {
      id: 'application',
      title: '입학신청 안내',
      description: '입학 신청 방법 및 필요 서류'
    },
    {
      id: 'student-life',
      title: '신입생 학교생활',
      description: '캠퍼스 생활 및 학업 지원'
    },
    {
      id: 'info-session',
      title: '입학설명회 신청 & Contacts',
      description: '설명회 참석 신청 및 문의처'
    }
  ];

  const notices = [
    {
      title: '[공지] 2026학년도 태재대학교 입학안내',
      date: '2025. 07. 28'
    },
    {
      title: '[공지] 2025학년도 신입생 등록금 및 기숙사비 납부 안내',
      date: '2025. 07. 28'
    },
    {
      title: '2025학년도 태재대학교 신입학모집 최종합격자 발표',
      date: '2025. 02. 21'
    },
    {
      title: '2025학년도 태재대학교 신입학모집 전형 1단계 합격자 발표',
      date: '2025. 01. 23'
    },
    {
      title: '2025학년도 신입학 모집요강',
      date: '2024. 12. 16'
    }
  ];

  return (
    <div className="navigation-section">
      <div className="section-title">
        <h2>For Korean Students</h2>
      </div>
      
      <div className="navigation-container">
        <div className="main-navigation">
          <div className="nav-header">
            <span className="nav-subtitle">(Admissions 이미지 또는 영상)</span>
          </div>
          
          <div className="nav-cards-grid">
            {menuItems.map((item) => (
              <button
                key={item.id}
                className="nav-card"
                onClick={() => onNavigate(item.id)}
              >
                <h3>{item.title}</h3>
              </button>
            ))}
          </div>
        </div>
        
        <div className="notice-section">
          <div className="notice-header">
            <button className="notice-btn">
              공지사항
            </button>
            <span className="notice-link">(예시)</span>
          </div>
          
          <div className="notice-list">
            <h3>공지사항</h3>
            <p className="notice-subtitle">태재대학교 입학 관련 공지사항입니다.</p>
            
            <ul className="notice-items">
              {notices.map((notice, index) => (
                <li key={index} className="notice-item">
                  <span className="notice-title">{notice.title}</span>
                  <span className="notice-date">{notice.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationCards;