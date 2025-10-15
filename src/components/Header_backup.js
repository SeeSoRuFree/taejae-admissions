import React, { useState } from 'react';

const Header = ({ onAdmissionsClick, onBackToUniversity, currentView, onNavigate }) => {
  const [isQuickLinkOpen, setIsQuickLinkOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({});

  // 디버깅: currentView 상태 확인
  console.log('Header currentView:', currentView);

  const toggleQuickLink = () => {
    setIsQuickLinkOpen(!isQuickLinkOpen);
  };

  const toggleMenu = (menuName) => {
    setOpenMenus(prev => ({
      ...prev,
      [menuName]: !prev[menuName]
    }));
  };

  return (
    <header className="header_wrap">
      {/* Quick Link */}
      <div id="quick_link" className={`user ${isQuickLinkOpen ? 'open' : ''}`}>
        <div className="link_wrap">
          <a href="#" className="btn_lay_close ui-close" onClick={() => setIsQuickLinkOpen(false)}>
            <span className="blind">close</span>
          </a>
          <div className="tit">Quick Link</div>
          
          <div className="dep_cate">
            <a href="#n">Prospective<br/>Students</a>
            <ul className="list">
              <li><a href="#n">Admissions</a></li>
              <li><a href="#n">News</a></li>
              <li><a href="#n">Support</a></li>
              <li><a href="#n">Contact</a></li>
              <li><a href="#n">Visit Taejae</a></li>
            </ul>
          </div>

          <div className="dep_cate">
            <a href="#n">Students</a>
            <ul className="list">
              <li><a href="#n">Taejae Portal</a></li>
              <li><a href="#n">Notice</a></li>
              <li><a href="#n">News</a></li>
              <li><a href="#n">Schools</a></li>
              <li><a href="#n">Student Success</a></li>
              <li><a href="#n">Metaverse</a></li>
              <li><a href="#n">Digital Library</a></li>
            </ul>
          </div>

          <div className="dep_cate">
            <a href="#n">Faculty &<br/>Staff</a>
            <ul className="list">
              <li><a href="#n">News</a></li>
              <li><a href="#n">Notice</a></li>
              <li><a href="#n">Schools</a></li>
              <li><a href="#n">Student Success</a></li>
              <li><a href="#n">Metaverse</a></li>
            </ul>
          </div>

          <div className="dep_cate">
            <a href="#n">Visitors</a>
            <ul className="list">
              <li><a href="#n">Visit Taejae</a></li>
              <li><a href="#n">Events</a></li>
              <li><a href="#n">About Taejae</a></li>
              <li><a href="#n">Taejae News</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="gnb_new">
        <nav>
          <p className="logo">
            <a href="#home" onClick={onBackToUniversity}>
              {currentView === 'university' ? 'home' : 'admissions'}
            </a>
          </p>
          
          <ul className="gnb_menu">
            <li className="depth_01 legacy-menu">
              <a href="javascript:;" onClick={() => toggleMenu('about')}>About</a>
              <ul className={`depth_02 acco_list_wrap legacy-menu ${openMenus.about ? 'open' : ''}`}>
                {currentView !== 'university' && (
                  <li><a href="#n" onClick={onBackToUniversity}>University Home</a></li>
                )}
                <li><a href="#n">About Taejae</a></li>
                <li><a href="#n">Vision & Mission</a></li>
                <li><a href="#n">History of Taejae</a></li>
                <li className="btn_dep_more">
                  <a href="#n">Leadership</a>
                  <button type="button" className="dep_tit"></button>
                  <ul className="sub_list dep_list">
                    <li><a href="#n">Founder's Message</a></li>
                    <li><a href="#n">Office of the President</a></li>
                    <li><a href="#n">Provost and Executive Vice President</a></li>
                    <li><a href="#n">Board of Trustees</a></li>
                  </ul>
                </li>
                <li className="btn_dep_more">
                  <a href="#n">Taejae at a Glance</a>
                  <button type="button" className="dep_tit"></button>
                  <ul className="sub_list dep_list">
                    <li><a href="#n">Taejae at a Glance</a></li>
                    <li><a href="#n">Charter</a></li>
                    <li><a href="#n">Organization</a></li>
                  </ul>
                </li>
                <li><a href="#n">Visit Taejae</a></li>
              </ul>
            </li>

            <li className="depth_01">
              <a href="javascript:;" onClick={() => toggleMenu('admissions')}>Admissions</a>
              <ul className={`depth_02 acco_list_wrap ${openMenus.admissions ? 'open' : ''}`}>
                {/* Korean 관련 모든 페이지용 상세 메뉴 - MD 구조에 맞춤 */}
                {currentView.startsWith('korean') ? (
                  <>
                    <li><a href="#n" onClick={() => onNavigate('korean-index')}>Overview</a></li>
                    <li className="btn_dep_more">
                      <a href="#n">입학전형 특징</a>
                      <button type="button" className="dep_tit" onClick={() => toggleMenu('korean-feature')}></button>
                      <ul className={`sub_list dep_list ${openMenus['korean-feature'] ? 'open' : ''}`}>
                        <li><a href="#n" onClick={() => onNavigate('korean-feature-index')}>입학전형 소개</a></li>
                        <li><a href="#n" onClick={() => onNavigate('korean-feature-characteristic')}>입학전형특징</a></li>
                        <li><a href="#n" onClick={() => onNavigate('korean-feature-talent')}>미래인재발굴</a></li>
                        <li><a href="#n" onClick={() => onNavigate('korean-feature-freshman-eval')}>신입생 평가</a></li>
                      </ul>
                    </li>
                    <li className="btn_dep_more">
                      <a href="#n">평가안내</a>
                      <button type="button" className="dep_tit" onClick={() => toggleMenu('korean-evaluation')}></button>
                      <ul className={`sub_list dep_list ${openMenus['korean-evaluation'] ? 'open' : ''}`}>
                        <li><a href="#n" onClick={() => onNavigate('korean-evaluation-index')}>평가안내 소개</a></li>
                        <li><a href="#n" onClick={() => onNavigate('korean-evaluation-document')}>서류평가</a></li>
                        <li><a href="#n" onClick={() => onNavigate('korean-evaluation-interview')}>면접안내</a></li>
                        <li><a href="#n" onClick={() => onNavigate('korean-evaluation-interview-types')}>면접 유형별 안내</a></li>
                      </ul>
                    </li>
                    <li className="btn_dep_more">
                      <a href="#n">입학신청</a>
                      <button type="button" className="dep_tit" onClick={() => toggleMenu('korean-application')}></button>
                      <ul className={`sub_list dep_list ${openMenus['korean-application'] ? 'open' : ''}`}>
                        <li><a href="#n" onClick={() => onNavigate('korean-application-index')}>입학신청 소개</a></li>
                        <li><a href="#n" onClick={() => onNavigate('korean-application-recruitment')}>모집안내</a></li>
                        <li><a href="#n" onClick={() => onNavigate('korean-application-form')}>입학신청서 작성</a></li>
                        <li><a href="#n" onClick={() => onNavigate('korean-application-schedule')}>전형별 특징 및 일정</a></li>
                        <li><a href="#n" onClick={() => onNavigate('korean-application-documents')}>제출서류 작성 안내</a></li>
                        <li><a href="#n" onClick={() => onNavigate('korean-application-resources')}>입학자료실</a></li>
                      </ul>
                    </li>
                    <li className="btn_dep_more">
                      <a href="#n">신입생 학교생활</a>
                      <button type="button" className="dep_tit" onClick={() => toggleMenu('korean-campuslife')}></button>
                      <ul className={`sub_list dep_list ${openMenus['korean-campuslife'] ? 'open' : ''}`}>
                        <li><a href="#n" onClick={() => onNavigate('korean-campuslife-index')}>신입생 학교생활 소개</a></li>
                        <li><a href="#n" onClick={() => onNavigate('korean-campuslife-dormitory')}>기숙사생활</a></li>
                        <li><a href="#n" onClick={() => onNavigate('korean-campuslife-preparatorium')}>예비대학</a></li>
                        <li><a href="#n" onClick={() => onNavigate('korean-campuslife-tuition-aid')}>등록금 및 장학금</a></li>
                        <li><a href="#n" onClick={() => onNavigate('korean-campuslife-studentlife')}>학생생활</a></li>
                        <li><a href="#n" onClick={() => onNavigate('korean-campuslife-student-message')}>재학생 메시지</a></li>
                      </ul>
                    </li>
                    <li><a href="#n" onClick={() => onNavigate('korean-events-contacts')}>설명회 & Contacts</a></li>
                    <li><a href="#n" onClick={() => onNavigate('korean-notices')}>공지사항</a></li>
                  </>
                ) : (
                  /* 기본 메뉴 (University Homepage 등) - 삭제 예정 */
                  <>
                    <li className="legacy-menu"><a href="#n" onClick={onAdmissionsClick}>Admissions</a></li>
                    <li className="legacy-menu"><a href="#n">For International Students</a></li>
                    <li className="legacy-menu"><a href="#n">For Korean Students</a></li>
                    <li className="legacy-menu"><a href="#n">Tuition & Scholarship</a></li>
                    <li className="legacy-menu"><a href="#n">FAQ</a></li>
                    <li className="legacy-menu"><a href="#n">Contact</a></li>
                  </>
                )}
              </ul>
            </li>

            <li className="depth_01">
              <a href="javascript:;" onClick={() => toggleMenu('academics')}>Academics</a>
              <ul className={`depth_02 acco_list_wrap ${openMenus.academics ? 'open' : ''}`}>
                <li className="btn_dep_more">
                  <a href="#n">Schools</a>
                  <button type="button" className="dep_tit"></button>
                  <ul className="sub_list dep_list">
                    <li><a href="#n">Innovation Foundations</a></li>
                    <li><a href="#n">Humanities and Social Sciences</a></li>
                    <li><a href="#n">Natural Sciences</a></li>
                    <li><a href="#n">Data Science and Artificial Intelligence</a></li>
                    <li><a href="#n">Business Innovation</a></li>
                  </ul>
                </li>
                <li><a href="#n">Faculty</a></li>
              </ul>
            </li>

            <li className="depth_01">
              <a href="javascript:;" onClick={() => toggleMenu('support')}>Support</a>
              <ul className={`depth_02 acco_list_wrap ${openMenus.support ? 'open' : ''}`}>
                <li className="btn_dep_more">
                  <a href="#n">Education at Taejae</a>
                  <button type="button" className="dep_tit"></button>
                  <ul className="sub_list dep_list">
                    <li><a href="#n">Active Learning</a></li>
                    <li><a href="#n">Innovative Learning Experience</a></li>
                    <li><a href="#n">Education Innovation Institute</a></li>
                  </ul>
                </li>
                <li className="btn_dep_more">
                  <a href="#n">Global Experience</a>
                  <button type="button" className="dep_tit"></button>
                  <ul className="sub_list dep_list">
                    <li><a href="#n">Global Engagement</a></li>
                    <li><a href="#n">Civic Project</a></li>
                    <li><a href="#n">Residential Campus Program</a></li>
                    <li><a href="#n">Global Initiative Institute</a></li>
                  </ul>
                </li>
                <li className="btn_dep_more">
                  <a href="#n">Student Success</a>
                  <button type="button" className="dep_tit"></button>
                  <ul className="sub_list dep_list">
                    <li><a href="#n">Self & Leadership Program</a></li>
                    <li><a href="#n">Wellness Program</a></li>
                    <li><a href="#n">Social Value Program</a></li>
                    <li><a href="#n">Career Development Program</a></li>
                    <li><a href="#n">Mentoring</a></li>
                  </ul>
                </li>
                <li><a href="#n">Library</a></li>
                <li><a href="#n">Metaverse</a></li>
              </ul>
            </li>

            <li className="depth_01">
              <a href="javascript:;" onClick={() => toggleMenu('news')}>태재 소식</a>
              <ul className={`depth_02 ${openMenus.news ? 'open' : ''}`}>
                <li><a href="#n">태재 소식</a></li>
                <li><a href="#n">뉴스</a></li>
                <li><a href="#n">이벤트</a></li>
                <li><a href="#n">공지사항</a></li>
              </ul>
            </li>
          </ul>

          <div className="gnb_right">
            <div className="lang_wrap">
              <button type="button" className="btn_lang">KO</button>
              <div className="lang_box">
                <ul>
                  <li><a href="#n">한국어</a></li>
                  <li><a href="#n">English</a></li>
                </ul>
              </div>
            </div>
            <button type="button" className="btn_schroll" onClick={toggleQuickLink}>
              <span className="blind">quick menu</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;