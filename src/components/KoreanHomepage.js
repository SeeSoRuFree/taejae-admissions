import React, { useState, useEffect } from 'react';
import { getNoticesList } from '../api/noticesApi';

const KoreanHomepage = ({ onNavigate }) => {
  const [notices, setNotices] = useState([]);

  // 공지사항 목록 가져오기 (최신 5개)
  useEffect(() => {
    const fetchNotices = async () => {
      const response = await getNoticesList(0, 5);

      if (response.success && response.data) {
        setNotices(response.data.content || []);
      } else {
        console.error('공지사항 목록을 불러오는데 실패했습니다:', response.error);
        setNotices([]);
      }
    };

    fetchNotices();
  }, []);

  // 날짜 포맷팅 함수 (ISO -> YYYY.MM.DD)
  const formatDate = (isoDateString) => {
    if (!isoDateString) return '';
    const date = new Date(isoDateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  const menuItems = [
    {
      title: "태재 입학전형 특징",
      description: "태재대학교의 차별화된 입학정책과 입학전형 특징을 확인하세요",
      link: "korean-feature-characteristic",
      image: "/images/main-1.png",
      theme: "purple"
    },
    {
      title: "태재 입학신청 안내",
      description: "태재 입학전형 안내부터 서류제출까지 전형별·단계별 입학지원 가이드입니다.",
      link: "korean-application-index",
      image: "/images/main-2.png",
      theme: "green"
    },
    {
      title: "태재 입학평가 안내", 
      description: "서류평가와 면접평가의 세부 내용과 평가 기준을 확인하세요.",
      link: "korean-evaluation-document",
      image: "/images/main-3.png",
      theme: "red"
    },
    {
      title: "신입생 대학생활",
      description: "기숙사, 예비대학, 장학금 등 태재 생활을 미리 경험해보세요.",
      link: "korean-campuslife-index",
      image: "/images/main-4.png",
      theme: "blue"
    },
    {
      title: "입학설명회 신청 & Contacts",
      description: "입학설명회 일정과 문의처를 확인하세요.",
      link: "korean-events-contacts",
      image: "/images/main-5.png",
      theme: "orange"
    }
  ];

  return (
    <div className="korean-homepage">
      {/* Hero Banner Grid Section */}
      <div className="section korean_hero_banners_section">
        <div className="inner">
          {/* 첫 번째: 전체 너비 큰 배너 */}
          <div 
            className="hero_banner hero_banner_large hero_banner_purple"
            onClick={() => onNavigate(menuItems[0].link)}
            style={{ backgroundImage: `url(${menuItems[0].image})` }}
          >
            <div className="hero_banner_overlay"></div>
            <div className="hero_banner_content">
              <h2>{menuItems[0].title}</h2>
              <p>{menuItems[0].description}</p>
            </div>
          </div>

          {/* 두 번째, 세 번째: 나란히 배치 */}
          <div className="hero_banners_row">
            <div 
              className="hero_banner hero_banner_half hero_banner_green"
              onClick={() => onNavigate(menuItems[1].link)}
              style={{ backgroundImage: `url(${menuItems[1].image})` }}
            >
              <div className="hero_banner_overlay"></div>
              <div className="hero_banner_content">
                <h3>{menuItems[1].title}</h3>
                <p>{menuItems[1].description}</p>
              </div>
            </div>
            <div 
              className="hero_banner hero_banner_half hero_banner_red"
              onClick={() => onNavigate(menuItems[2].link)}
              style={{ backgroundImage: `url(${menuItems[2].image})` }}
            >
              <div className="hero_banner_overlay"></div>
              <div className="hero_banner_content">
                <h3>{menuItems[2].title}</h3>
                <p>{menuItems[2].description}</p>
              </div>
            </div>
          </div>

          {/* 네 번째: 전체 너비 중간 배너 */}
          <div 
            className="hero_banner hero_banner_large hero_banner_blue"
            onClick={() => onNavigate(menuItems[3].link)}
            style={{ backgroundImage: `url(${menuItems[3].image})` }}
          >
            <div className="hero_banner_overlay"></div>
            <div className="hero_banner_content">
              <h2>{menuItems[3].title}</h2>
              <p>{menuItems[3].description}</p>
            </div>
          </div>

          {/* 다섯 번째: 전체 너비 배너 */}
          <div 
            className="hero_banner hero_banner_large hero_banner_orange"
            onClick={() => onNavigate(menuItems[4].link)}
            style={{ backgroundImage: `url(${menuItems[4].image})` }}
          >
            <div className="hero_banner_overlay"></div>
            <div className="hero_banner_content">
              <h2>{menuItems[4].title}</h2>
              <p>{menuItems[4].description}</p>
            </div>
          </div>

          {/* Premium Notices Section - Hero Banner Style */}
          <div className="korean_notices_premium_section">
            <div className="notices_premium_container">
              <div className="notices_premium_header">
                <h2>공지사항</h2>
                <p>태재대학교 입학 관련 주요 공지사항을 확인하세요</p>
              </div>
              
              <div className="notices_premium_grid">
                {notices.length > 0 ? (
                  notices.map((notice) => (
                    <div
                      key={notice.id}
                      className="notice_premium_card"
                      onClick={() => onNavigate(`korean-notices-detail?id=${notice.id}`)}
                    >
                      <div className="notice_card_content">
                        <div className="notice_date_badge">{formatDate(notice.createdAt)}</div>
                        <h3 className="notice_title">{notice.title}</h3>
                        <div className="notice_bottom_badges">
                          <span className="notice_category">입학안내</span>
                          {notice.fileCount > 0 && (
                            <span className="notice_file_badge">📎 {notice.fileCount}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px 0', color: '#999' }}>
                    공지사항이 없습니다.
                  </div>
                )}
              </div>
              
              <div className="notices_more_section">
                <button 
                  className="notices_more_btn"
                  onClick={() => onNavigate('korean-notices')}
                >
                  <span>더보기</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KoreanHomepage;