import React, { useState } from 'react';

const Header = ({ onAdmissionsClick, onBackToUniversity, currentView, onNavigate, currentLanguage, onLanguageChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const handleMenuClick = (menuType) => {
    console.log('Header menu clicked:', menuType);
    
    // 영문 페이지에서 앵커 링크 처리
    if (currentLanguage === 'en' && ['application-process', 'schedule-tuition', 'why-taejae'].includes(menuType)) {
      const element = document.getElementById(menuType);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
      return;
    }
    
    // 입학지원 신청 클릭 시 모달 표시
    if (menuType === 'korean-application-form') {
      setShowApplicationModal(true);
    } else if (onNavigate) {
      // Map main menu items to their index pages
      const menuMapping = {
        'feature': 'korean-feature-characteristic',
        'application': 'korean-application-index',
        'campuslife': 'korean-campuslife-index',
        'events': 'korean-events-contacts'
      };
      
      const targetRoute = menuMapping[menuType] || menuType;
      onNavigate(targetRoute);
    }
    // Close mobile menu when clicking menu item
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setExpandedMenu(null); // Reset expanded menu when toggling
  };

  const toggleSubmenu = (menuId) => {
    setExpandedMenu(expandedMenu === menuId ? null : menuId);
  };

  const handleLogoClick = () => {
    if (currentLanguage === 'ko') {
      onNavigate && onNavigate('korean-homepage');
    } else if (currentLanguage === 'en') {
      onNavigate && onNavigate('international-homepage');
    } else {
      // Default fallback
      onBackToUniversity && onBackToUniversity();
    }
  };

  const koreanMenuItems = [
    {
      id: 'feature',
      title: '입학전형 특징',
      subItems: [
        { id: 'korean-feature-characteristic', title: '입학전형 특징' },
        { id: 'korean-feature-talent', title: '태재가 찾아가는 미래 인재 발굴' }
        // { id: 'korean-feature-freshman-eval', title: '신입생 평가' }, // 숨김 처리
      ]
    },
    {
      id: 'evaluation',
      title: '평가안내',
      subItems: [
        { id: 'korean-evaluation-document', title: '서류 평가' },
        { id: 'korean-evaluation-interview', title: '면접 평가' },
        { id: 'korean-evaluation-interview-guide', title: '예비태재인 면접가이드' }
      ]
    },
    {
      id: 'application',
      title: '입학신청',
      subItems: [
        { id: 'korean-application-recruitment', title: '모집안내' },
        { id: 'korean-application-schedule', title: '전형별 특징 및 전형일정' },
        { id: 'korean-application-documents', title: '제출서류 작성 안내' },
        { id: 'korean-application-form', title: '입학지원 신청' },
        { id: 'korean-application-resources', title: '입학자료실' }
      ]
    },
    {
      id: 'campuslife',
      title: '신입생 학교생활',
      subItems: [
        { id: 'korean-campuslife-preparatorium', title: '태재 예비대학' },
        { id: 'korean-campuslife-tuition-aid', title: '등록금 및 장학금' },
        { id: 'korean-campuslife-student-message', title: '재학생 메시지' }
      ]
    },
    {
      id: 'events',
      title: '설명회 & Contacts',
      subItems: []
    }
  ];

  const englishMenuItems = [
    {
      id: 'application-process',
      title: 'Application Process',
      subItems: []
    },
    {
      id: 'schedule-tuition',
      title: 'Schedule & Tuition',
      subItems: []
    },
    {
      id: 'why-taejae',
      title: 'Why Taejae',
      subItems: []
    }
  ];

  const menuItems = currentLanguage === 'en' ? englishMenuItems : koreanMenuItems;

  return (
    <>
      <nav className="floating-nav">
        {/* 로고 섹션 */}
        <div className="logotype-contain">
          <img 
            src="/resources/img/taejae-logo-2line.png"
            alt="Taejae University"
            className="nav-logo"
            onClick={handleLogoClick}
          />
        </div>

        {/* 링크 컨테이너 */}
        <div 
          className="links-contain"
          onMouseLeave={() => setHoveredMenu(null)}
        >
          {/* 텍스트 링크들 */}
          <div className="text-links">
            {menuItems.map((item) => (
              <div 
                key={item.id} 
                className="nav-link"
                onMouseEnter={() => item.subItems.length > 0 ? setHoveredMenu(item.id) : setHoveredMenu(null)}
              >
                <p 
                  className={hoveredMenu === item.id ? 'hovered' : ''}
                  onClick={() => handleMenuClick(item.id)}
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          {/* 전체 너비 드롭다운 영역 */}
          {hoveredMenu && (
            <div 
              className="full-width-dropdown"
            >
              <div className="dropdown-content">
                {/* 좌측: 메뉴명 */}
                <div className="dropdown-left">
                  <h3 className="dropdown-menu-title">
                    {menuItems.find(item => item.id === hoveredMenu)?.title}
                  </h3>
                </div>
                
                {/* 우측: 서브메뉴 리스트 */}
                <div className="dropdown-right">
                  {menuItems
                    .find(item => item.id === hoveredMenu)
                    ?.subItems.map((subItem) => (
                      <div 
                        key={subItem.id}
                        className="full-dropdown-item"
                        onClick={() => handleMenuClick(subItem.id)}
                      >
                        {subItem.title}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Language Toggle */}
        <div className="language-toggle">
          {currentLanguage === 'ko' ? (
            <button 
              className="lang-btn"
              onClick={() => onLanguageChange && onLanguageChange('en')}
            >
              EN
            </button>
          ) : (
            <button 
              className="lang-btn"
              onClick={() => onLanguageChange && onLanguageChange('ko')}
            >
              KO
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-trigger" onClick={toggleMobileMenu}>
          <div className={`hamburger-icon ${isMobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <>
            <div className="mobile-menu-overlay" onClick={toggleMobileMenu}></div>
            <div className="mobile-menu-dropdown">
              <div className="mobile-menu-content">
                {menuItems.map((item) => (
                  <div key={item.id} className="mobile-nav-item">
                    <div 
                      className="mobile-nav-main"
                      onClick={() => item.subItems.length === 0 ? handleMenuClick(item.id) : toggleSubmenu(item.id)}
                    >
                      <span>{item.title}</span>
                      {item.subItems.length > 0 && (
                        <span className={`mobile-expand-icon ${expandedMenu === item.id ? 'expanded' : ''}`}>▼</span>
                      )}
                    </div>
                    {item.subItems.length > 0 && (
                      <div className={`mobile-dropdown-submenu ${expandedMenu === item.id ? 'expanded' : ''}`}>
                        {item.subItems.map((subItem) => (
                          <div 
                            key={subItem.id}
                            className="mobile-dropdown-item"
                            onClick={() => handleMenuClick(subItem.id)}
                          >
                            {subItem.title}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* 내부 광택 효과 */}
        <div className="nav-inner-glow"></div>
      </nav>

      {/* Application Period Modal - nav 밖으로 이동 */}
      {showApplicationModal && (
        <div className="modal_overlay" onClick={() => setShowApplicationModal(false)}>
          <div className="modal_content" onClick={(e) => e.stopPropagation()}>
            <div className="modal_header">
              <h3>접수기간 세부 안내</h3>
            </div>
            <div className="modal_body">
              <h4>접수기간</h4>
              <p className="modal_period_info">
                <strong>2025년 12월 1일 ~ 2026년 1월 2일</strong><br/>
                (태재미래인재, 자기혁신인재, 사회통합전형)
              </p>
              <p className="modal_period_info">
                <strong>2026년 6월 1일~ 6월 19일</strong><br/>
                (글로벌인재전형)
              </p>
            </div>
            <div className="modal_footer">
              <button 
                className="modal_confirm_btn"
                onClick={() => setShowApplicationModal(false)}
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;