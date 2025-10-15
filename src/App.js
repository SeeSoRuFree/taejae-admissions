import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import MainVisual from './components/MainVisual';
import GlobalCampus from './components/GlobalCampus';
import Education from './components/Education';
import Academics from './components/Academics';
import Faculty from './components/Faculty';
import Stories from './components/Stories';
import News from './components/News';
import Footer from './components/Footer';
import AdmissionsLanding from './components/AdmissionsLanding';
import AdmissionsKorean from './components/AdmissionsKorean';
import AdmissionsGateway from './components/AdmissionsGateway';
import KoreanHomepage from './components/KoreanHomepage';
import CharacteristicPage from './components/CharacteristicPage';
import TalentDiscoveryPage from './components/TalentDiscoveryPage';
import FreshmanEvaluationPage from './components/FreshmanEvaluationPage';
import EvaluationIndexPage from './components/EvaluationIndexPage';
import DocumentEvaluationPage from './components/DocumentEvaluationPage';
import InterviewGuidePage from './components/InterviewGuidePage';
import InterviewTypesPage from './components/InterviewTypesPage';
import InterviewPreparationGuidePage from './components/InterviewPreparationGuidePage';
import ApplicationIndexPage from './components/ApplicationIndexPage';
import RecruitmentPage from './components/RecruitmentPage';
import SchedulePage from './components/SchedulePage';
import DocumentsPage from './components/DocumentsPage';
import ResourcesPage from './components/ResourcesPage';
import ApplicationFormPage from './components/ApplicationFormPage';
import CampuslifeIndexPage from './components/CampuslifeIndexPage';
import DormitoryPage from './components/DormitoryPage';
import PreparatoriumPage from './components/PreparatoriumPage';
import TuitionAidPage from './components/TuitionAidPage';
import StudentlifePage from './components/StudentlifePage';
import StudentMessagePage from './components/StudentMessagePage';
import EventsContactsPage from './components/EventsContactsPage';
import InternationalAdmissionsPage from './components/InternationalAdmissionsPage';
import NoticesListPage from './components/NoticesListPage';
import NoticeDetailPage from './components/NoticeDetailPage';

function App() {
  const [currentView, setCurrentView] = useState('admissions-gateway'); // Main routing state
  
  // Language detection from currentView
  const getCurrentLanguage = () => {
    if (currentView.startsWith('korean-') || currentView === 'korean-homepage') {
      return 'ko';
    } else if (currentView.startsWith('international-') || currentView === 'international-homepage') {
      return 'en';
    }
    return 'ko'; // Default to Korean
  };

  const handleLanguageToggle = (language) => {
    console.log('Language toggle to:', language);
    if (language === 'ko') {
      setCurrentView('korean-homepage');
      window.history.pushState({}, '', '/korean');
    } else if (language === 'en') {
      setCurrentView('international-homepage');
      window.history.pushState({}, '', '/international');
    }
    // Scroll to top after language change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectStudentType = (type) => {
    console.log('handleSelectStudentType called with:', type);
    if (type === 'korean') {
      setCurrentView('korean-homepage');
      // URL 동기화
      window.history.pushState({}, '', '/korean');
    } else {
      setCurrentView('international-homepage');
      // URL 동기화
      window.history.pushState({}, '', '/international');
    }
    // Scroll to top after student type selection
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (section) => {
    console.log('Navigate to:', section);
    
    // Handle query parameters for detail pages
    let routeKey = section;
    let fullUrl = section;
    
    if (section.includes('?')) {
      routeKey = section.split('?')[0];
      fullUrl = section;
    }
    
    // MD 구조에 맞춘 라우팅 로직
    const routeMapping = {
      // Main language pages
      'korean-homepage': 'korean-homepage',
      'international-homepage': 'international-homepage',
      
      // Korean section routes - MD 구조 기반
      // (#2) korean/index.md
      'korean-index': 'korean-index',
      
      // (#3-6) korean/feature/
      'korean-feature-index': 'korean-feature-index',
      'korean-feature-characteristic': 'korean-feature-characteristic',
      'korean-feature-talent': 'korean-feature-talent',
      'korean-feature-freshman-eval': 'korean-feature-freshman-eval',
      
      // (#7-10) korean/evaluation/
      'korean-evaluation-index': 'korean-evaluation-index',
      'korean-evaluation-document': 'korean-evaluation-document',
      'korean-evaluation-interview': 'korean-evaluation-interview',
      'korean-evaluation-interview-guide': 'korean-evaluation-interview-guide',
      
      // (#10-15) korean/application/
      'korean-application-index': 'korean-application-index',
      'korean-application-recruitment': 'korean-application-recruitment',
      'korean-application-form': 'korean-application-form',
      'korean-application-schedule': 'korean-application-schedule',
      'korean-application-documents': 'korean-application-documents',
      'korean-application-resources': 'korean-application-resources',
      
      // (#16-21) korean/campuslife/
      'korean-campuslife-index': 'korean-campuslife-index',
      'korean-campuslife-dormitory': 'korean-campuslife-dormitory',
      'korean-campuslife-preparatorium': 'korean-campuslife-preparatorium',
      'korean-campuslife-tuition-aid': 'korean-campuslife-tuition-aid',
      'korean-campuslife-studentlife': 'korean-campuslife-studentlife',
      'korean-campuslife-student-message': 'korean-campuslife-student-message',
      
      // (#22-23) korean/
      'korean-events-contacts': 'korean-events-contacts',
      'korean-notices': 'korean-notices',
      'korean-notices-detail': 'korean-notices-detail'
    };

    if (routeMapping[routeKey]) {
      setCurrentView(routeMapping[routeKey]);
      // URL 동기화 - handle query parameters
      window.history.pushState({}, '', `/${fullUrl}`);
      // Scroll to top after navigation
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleAdmissionsClick = () => {
    setCurrentView('admissions-gateway');
    // URL 동기화
    window.history.pushState({}, '', '/');
    // Scroll to top after navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToUniversity = () => {
    setCurrentView('university');
    // URL 동기화
    window.history.pushState({}, '', '/university');
    // Scroll to top after navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 헤더/푸터가 필요한 페이지 확인
  const shouldShowHeaderFooter = currentView !== 'admissions-gateway';

  // 페이지 로드 시 URL 기반 초기 state 설정
  useEffect(() => {
    const path = window.location.pathname;
    console.log('Initial URL path:', path);
    
    if (path === '/korean') {
      setCurrentView('korean-homepage');
    } else if (path.startsWith('/korean-')) {
      // 다른 korean 페이지들 처리
      const section = path.substring(1); // '/' 제거
      setCurrentView(section);
    } else if (path === '/international') {
      setCurrentView('international-homepage');
    } else if (path === '/university') {
      setCurrentView('university');
    } else if (path === '/') {
      setCurrentView('admissions-gateway');
    }
    // 기본값은 admissions-gateway 유지
  }, []);

  // 브라우저 뒤로가기/앞으로가기 지원
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      console.log('PopState - URL path:', path);
      
      if (path === '/korean') {
        setCurrentView('korean-homepage');
      } else if (path.startsWith('/korean-')) {
        const section = path.substring(1);
        setCurrentView(section);
      } else if (path === '/international') {
        setCurrentView('international-homepage');
      } else if (path === '/university') {
        setCurrentView('university');
      } else if (path === '/') {
        setCurrentView('admissions-gateway');
      }
      
      // Scroll to top when using browser back/forward buttons
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // currentView 상태 변화 디버깅 및 body 클래스 관리
  useEffect(() => {
    console.log('currentView changed to:', currentView);
    
    if (currentView === 'admissions-gateway') {
      document.body.classList.add('admissions-gateway');
    } else {
      document.body.classList.remove('admissions-gateway');
    }
    
    // 컴포넌트 언마운트 시 클래스 정리
    return () => {
      document.body.classList.remove('admissions-gateway');
    };
  }, [currentView]);

  return (
    <div className="wrapper ko">
      {/* 조건부 헤더 렌더링 */}
      {shouldShowHeaderFooter && (
        <Header 
          onAdmissionsClick={handleAdmissionsClick}
          onBackToUniversity={handleBackToUniversity}
          currentView={currentView}
          onNavigate={handleNavigate}
          currentLanguage={getCurrentLanguage()}
          onLanguageChange={handleLanguageToggle}
        />
      )}
      
      <div className="container full">
        {/* University Homepage */}
        {currentView === 'university' && (
          <>
            <MainVisual />
            <GlobalCampus />
            <Education />
            <Academics />
            <Faculty />
            <Stories />
            <News />
          </>
        )}
        
        {/* Admissions Gateway (no header/footer) */}
        {currentView === 'admissions-gateway' && (
          <AdmissionsGateway onSelectType={handleSelectStudentType} />
        )}
        
        {/* Korean Students Homepage */}
        {currentView === 'korean-homepage' && (
          <KoreanHomepage onNavigate={handleNavigate} />
        )}

        {/* International Students Homepage */}
        {currentView === 'international-homepage' && (
          <InternationalAdmissionsPage onNavigate={handleNavigate} />
        )}

        {/* Korean Section Pages - MD 구조 기반 */}
        {/* (#2) korean/index.md - Overview */}
        {currentView === 'korean-index' && (
          <div className="korean-overview">
            <h1>Korean Overview Page</h1>
            <p>MD #2 - korean/index.md (전체 Overview)</p>
          </div>
        )}

        {/* (#4) korean/feature/characteristic - 입학전형특징 */}
        {currentView === 'korean-feature-characteristic' && (
          <CharacteristicPage onNavigate={handleNavigate} />
        )}

        {/* (#5) korean/feature/talent - 태재 미래 인재 발굴 */}
        {currentView === 'korean-feature-talent' && (
          <TalentDiscoveryPage onNavigate={handleNavigate} />
        )}

        {/* (#6) korean/feature/freshman-eval - 태재 신입학 평가 */}
        {currentView === 'korean-feature-freshman-eval' && (
          <FreshmanEvaluationPage onNavigate={handleNavigate} />
        )}

        {/* (#3) korean/feature/index 기타 섹션 */}
        {currentView === 'korean-feature-index' && (
          <div className="korean-feature">
            <h1>입학전형 특징</h1>
            <p>MD #3 - korean/feature/index - {currentView}</p>
          </div>
        )}

        {/* (#7) korean/evaluation/index - 입학 평가 안내 */}
        {currentView === 'korean-evaluation-index' && (
          <EvaluationIndexPage onNavigate={handleNavigate} />
        )}

        {/* (#8) korean/evaluation/document - 서류평가 안내 */}
        {currentView === 'korean-evaluation-document' && (
          <DocumentEvaluationPage onNavigate={handleNavigate} />
        )}

        {/* (#9) korean/evaluation/interview - 면접안내 */}
        {currentView === 'korean-evaluation-interview' && (
          <InterviewGuidePage onNavigate={handleNavigate} />
        )}

        {/* (#10) korean/evaluation/interview-guide - 예비태재인 면접가이드 */}
        {currentView === 'korean-evaluation-interview-guide' && (
          <InterviewPreparationGuidePage onNavigate={handleNavigate} />
        )}

        {/* (#10) korean/application/index - 입학신청 안내 */}
        {currentView === 'korean-application-index' && (
          <ApplicationIndexPage onNavigate={handleNavigate} />
        )}

        {/* (#11) korean/application/recruitment - 모집안내 */}
        {currentView === 'korean-application-recruitment' && (
          <RecruitmentPage onNavigate={handleNavigate} />
        )}

        {/* (#12) korean/application/schedule - 전형별 특징 및 전형일정 */}
        {currentView === 'korean-application-schedule' && (
          <SchedulePage onNavigate={handleNavigate} />
        )}

        {/* (#13) korean/application/documents - 제출서류 */}
        {currentView === 'korean-application-documents' && (
          <DocumentsPage onNavigate={handleNavigate} />
        )}
        {/* (#14) korean/application/resources - 입학자료실 */}
        {currentView === 'korean-application-resources' && (
          <ResourcesPage onNavigate={handleNavigate} />
        )}
        {/* (#15) korean/application/form - 신청서 작성 */}
        {currentView === 'korean-application-form' && (
          <ApplicationFormPage onNavigate={handleNavigate} />
        )}

        {/* (#16) korean/campuslife/index - 신입생 학교생활 */}
        {currentView === 'korean-campuslife-index' && (
          <CampuslifeIndexPage onNavigate={handleNavigate} />
        )}

        {/* (#17) korean/campuslife/dormitory - 기숙사생활 */}
        {currentView === 'korean-campuslife-dormitory' && (
          <DormitoryPage onNavigate={handleNavigate} />
        )}

        {/* (#18) korean/campuslife/preparatorium - 예비대학 */}
        {currentView === 'korean-campuslife-preparatorium' && (
          <PreparatoriumPage onNavigate={handleNavigate} />
        )}

        {/* (#19) korean/campuslife/tuition-aid - 등록금 및 장학금 */}
        {currentView === 'korean-campuslife-tuition-aid' && (
          <TuitionAidPage onNavigate={handleNavigate} />
        )}

        {/* (#20) korean/campuslife/studentlife - 학생생활 */}
        {currentView === 'korean-campuslife-studentlife' && (
          <StudentlifePage onNavigate={handleNavigate} />
        )}

        {/* (#21) korean/campuslife/student-message - 재학생 메시지 */}
        {currentView === 'korean-campuslife-student-message' && (
          <StudentMessagePage onNavigate={handleNavigate} />
        )}

        {/* (#22) korean/events_contacts.md */}
        {currentView === 'korean-events-contacts' && (
          <EventsContactsPage onNavigate={handleNavigate} />
        )}

        {/* (#23) korean/notices.md */}
        {currentView === 'korean-notices' && (
          <NoticesListPage onNavigate={handleNavigate} />
        )}

        {/* Notice Detail Page */}
        {currentView === 'korean-notices-detail' && (
          <NoticeDetailPage onNavigate={handleNavigate} />
        )}
        
        {/* Legacy components */}
        {currentView === 'admissions-landing' && (
          <AdmissionsLanding onSelectType={handleSelectStudentType} />
        )}
        
        {currentView === 'admissions-korean' && (
          <AdmissionsKorean onNavigate={handleNavigate} />
        )}
      </div>
      
      {/* 조건부 푸터 렌더링 */}
      {shouldShowHeaderFooter && <Footer />}
    </div>
  );
}

export default App;
