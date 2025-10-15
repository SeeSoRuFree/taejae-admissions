import React from 'react';

const AdmissionNavigation = ({ currentPage, onNavigate }) => {
  // 현재 페이지 타입 감지
  const isEvaluationSection = currentPage?.startsWith('korean-evaluation');
  const isApplicationSection = currentPage?.startsWith('korean-application');
  const isCampuslifeSection = currentPage?.startsWith('korean-campuslife');
  
  // 페이지 정보 정의 - 섹션별로 분리
  const featurePages = [
    {
      id: 'korean-feature-characteristic',
      title: '입학전형특징',
      subtitle: 'HOLISTIC ADMISSION',
      description: '학생의 다양한 역량을 종합적으로 평가하는 혁신적 미래교육'
    },
    {
      id: 'korean-feature-talent',
      title: '미래인재발굴',
      subtitle: 'TALENT DISCOVERY',
      description: '태재대학교가 추구하는 인재상과 발굴 과정'
    },
    {
      id: 'korean-feature-freshman-eval',
      title: '태재 신입학 평가',
      subtitle: 'FRESHMAN EVALUATION',
      description: '정성적 종합평가를 통한 공정하고 투명한 입학전형'
    }
  ];

  const evaluationPages = [
    {
      id: 'korean-evaluation-index',
      title: '평가 안내',
      subtitle: 'EVALUATION GUIDE',
      description: '태재대학교 입학평가의 두 가지 주요 영역'
    },
    {
      id: 'korean-evaluation-document',
      title: '서류평가',
      subtitle: 'DOCUMENT EVALUATION',
      description: '신입학 전형 서류평가의 평가 자료와 평가 항목'
    },
    {
      id: 'korean-evaluation-interview',
      title: '면접안내',
      subtitle: 'INTERVIEW GUIDE',
      description: '태재대학교 면접평가의 목적과 방법'
    },
    {
      id: 'korean-evaluation-interview-types',
      title: '면접유형',
      subtitle: 'INTERVIEW TYPES',
      description: '다양한 면접 유형과 평가 방식'
    }
  ];

  const applicationPages = [
    {
      id: 'korean-application-index',
      title: '신청 안내',
      subtitle: 'APPLICATION GUIDE',
      description: '입학신청과 관련된 주요 메뉴'
    },
    {
      id: 'korean-application-recruitment',
      title: '모집안내',
      subtitle: 'RECRUITMENT',
      description: '지원 전형과 모집 요강'
    },
    {
      id: 'korean-application-form',
      title: '신청서 작성',
      subtitle: 'APPLICATION FORM',
      description: '온라인 입학신청서 작성'
    },
    {
      id: 'korean-application-schedule',
      title: '전형별 특징',
      subtitle: 'ADMISSION TYPES',
      description: '전형별 세부 특징과 일정'
    },
    {
      id: 'korean-application-documents',
      title: '제출서류',
      subtitle: 'DOCUMENTS',
      description: '서류 준비와 작성 방법'
    },
    {
      id: 'korean-application-resources',
      title: '입학자료실',
      subtitle: 'RESOURCES',
      description: '관련 문서 및 자료 다운로드'
    }
  ];

  const campuslifePages = [
    {
      id: 'korean-campuslife-index',
      title: '학교생활',
      subtitle: 'CAMPUS LIFE',
      description: '신입생 학교생활 종합 안내'
    },
    {
      id: 'korean-campuslife-dormitory',
      title: '기숙사생활',
      subtitle: 'RESIDENTIAL CAMPUS',
      description: '서울 기숙사와 Global Rotation'
    },
    {
      id: 'korean-campuslife-preparatorium',
      title: '예비대학',
      subtitle: 'PRAEPARATORIUM',
      description: '3월부터 시작되는 대학 예비과정'
    },
    {
      id: 'korean-campuslife-tuition-aid',
      title: '등록금/장학금',
      subtitle: 'TUITION & SCHOLARSHIPS',
      description: '등록금과 다양한 장학금 제도'
    },
    {
      id: 'korean-campuslife-studentlife',
      title: '학생생활',
      subtitle: 'STUDENTS LIFE',
      description: '온/오프라인 학업과 비교과 활동'
    },
    {
      id: 'korean-campuslife-student-message',
      title: '재학생 메시지',
      subtitle: 'STUDENT MESSAGE',
      description: '재학생들이 전하는 진솔한 이야기'
    }
  ];

  // 현재 섹션에 맞는 페이지 배열 선택
  const pages = isEvaluationSection ? evaluationPages : 
                isApplicationSection ? applicationPages : 
                isCampuslifeSection ? campuslifePages :
                featurePages;

  // 현재 페이지의 인덱스 찾기
  const currentIndex = pages.findIndex(page => page.id === currentPage);
  

  return (
    <div className="admission_navigation">
      <div className="inner">
        <div className="admission_simple_nav">
          <div className="nav_links">
            {pages.map((page, index) => (
              <span key={page.id}>
                {index > 0 && <span className="nav_divider">|</span>}
                <button 
                  className={`nav_link ${currentPage === page.id ? 'active' : ''}`}
                  onClick={() => onNavigate(page.id)}
                  disabled={currentPage === page.id}
                >
                  {page.title}
                </button>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionNavigation;