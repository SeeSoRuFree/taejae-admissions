import React from 'react';

const CampuslifeIndexPage = ({ onNavigate }) => {
  const campuslifeItems = [
    {
      id: 'dormitory',
      title: '태재 기숙사 생활',
      subtitle: 'Residential Campus',
      description: '1학년 서울 기숙사부터 Global Rotation 해외 캠퍼스까지, 글로벌 환경에서의 학습과 생활 경험',
      link: 'korean-campuslife-dormitory',
      image: '/images/campuslife-dormitory.png',
      color: '#501D83',
      icon: '🏢'
    },
    {
      id: 'preparatorium',
      title: '태재 예비대학',
      subtitle: 'Praeparatorium',
      description: '3월부터 시작되는 대학 예비과정으로 학업 준비도 강화와 대학 생활 적응을 지원',
      link: 'korean-campuslife-preparatorium',
      image: '/images/4-1.png',
      color: '#00A597',
      icon: '📚'
    },
    {
      id: 'tuition',
      title: '등록금 및 장학금',
      subtitle: 'Tuition & Scholarships',
      description: '다양한 장학 제도를 통한 학업 지속과 성장 지원, 소득 구간별 맞춤형 재정 지원',
      link: 'korean-campuslife-tuition-aid',
      image: '/images/4-2.png',
      color: '#6B2C91',
      icon: '💰'
    },
    {
      id: 'studentlife',
      title: '태재 학생생활',
      subtitle: 'Students Life at Taejae',
      description: '온/오프라인 학업과 비교과 활동, 협업과 글로벌 경험을 쌓을 수 있는 다양한 기회',
      link: 'korean-campuslife-studentlife',
      image: '/images/campuslife-studentlife.png',
      color: '#4ECDC4',
      icon: '🎓'
    },
    {
      id: 'message',
      title: '재학생 메시지',
      subtitle: 'Message for Prospective Students',
      description: '태재대학교 재학생들이 예비 태재인에게 전하는 진솔한 경험담과 조언',
      link: 'korean-campuslife-student-message',
      image: '/images/4-3.png',
      color: '#FF6B6B',
      icon: '💬'
    }
  ];

  return (
    <div className="container sub_cont">
      {/* Hero Section - SchedulePage 스타일 */}
      <div className="section wide adm_prcs documents_hero">
        <div className="visual">
          <div className="img_wrap">
            <img src="/images/4.png" alt="태재대학교 캠퍼스 라이프" />
          </div>
          <div className="cont_wrap">
            <div className="inner">
              <div className="tit_section">
                <div className="sub_tit">CAMPUS LIFE</div>
                <h2>태재 신입생 대학 생활</h2>
                <h3>태재대학교에서 경험하게 될 주요 생활 요소들을 미리 만나보세요</h3>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Campus Life Cards */}
      <div className="section wide campuslife_cards">
        <div className="inner">
          <div className="section_header centered">
            <h3 className="section_main_title">캠퍼스 라이프 둘러보기</h3>
            <p className="section_subtitle">
              각 영역을 클릭하여 상세 정보를 확인하세요
            </p>
          </div>
          
          <div className="application_cards">
            <div className="card_row">
              {campuslifeItems
                .filter(item => !['dormitory', 'studentlife'].includes(item.id))
                .map((item, index) => (
                <div 
                  key={item.id} 
                  className={`app_card ${item.id}_card`}
                  onClick={() => onNavigate(item.link)}
                >
                  <div className="card_image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  
                  <div className="card_content">
                    <h3>{item.title}</h3>
                    <p className="card_subtitle">{item.subtitle}</p>
                    <p className="card_description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default CampuslifeIndexPage;