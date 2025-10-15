import React from 'react';

const ResourcesPage = ({ onNavigate }) => {
  const resources = [
    {
      id: 1,
      title: '자기혁신성과자료(양식)',
      category: '서류양식',
      description: '자기혁신인재전형 지원자를 위한 성과자료 작성 양식',
      color: '#00A597'
    },
    {
      id: 2,
      title: '활동내용보고서(양식)',
      category: '서류양식',
      description: '글로벌인재전형 지원자를 위한 활동내용보고서 양식',
      color: '#6B2C91'
    },
    {
      id: 3,
      title: '2025학년도 Self-Development Plan 항목',
      category: '서류양식',
      description: '태재미래인재전형 및 사회통합전형 Self-Development Plan 작성 항목',
      color: '#501D83'
    },
    {
      id: 4,
      title: '2025학년도 온라인그룹토론면접 제시문',
      category: '면접자료',
      description: '온라인 그룹토론면접 준비를 위한 예시 제시문',
      color: '#FF6B6B'
    },
    {
      id: 5,
      title: '2025학년도 모집요강',
      category: '모집요강',
      description: '2025학년도 태재대학교 입학전형 세부 모집요강',
      color: '#4ECDC4'
    },
    {
      id: 6,
      title: '2024학년도 모집요강',
      category: '모집요강',
      description: '2024학년도 태재대학교 입학전형 모집요강 (참고용)',
      color: '#4ECDC4'
    },
    {
      id: 7,
      title: '2023학년도 모집요강',
      category: '모집요강',
      description: '2023학년도 태재대학교 입학전형 모집요강 (참고용)',
      color: '#4ECDC4'
    }
  ];

  const handleDownload = (resourceId, title) => {
    // 실제 구현에서는 서버로부터 파일을 다운로드
    console.log(`Downloading: ${title}`);
    // 여기서 실제 다운로드 로직 구현
    alert(`${title} 다운로드가 시작됩니다.`);
  };

  return (
    <div className="container sub_cont">
      {/* Hero Section - adm_prcs style */}
      <div className="section wide adm_prcs documents_hero">
        <div className="visual">
          <div className="img_wrap">
            <img src="/images/3-1-5.png" alt="입학자료실" />
          </div>
          <div className="cont_wrap">
            <div className="inner">
              <div className="tit_section">
                <div className="sub_tit">ADMISSION RESOURCES</div>
                <h2>입학자료실</h2>
                <h3>입학 관련 다양한 자료를 다운로드하실 수 있습니다</h3>
              </div>
              <div className="desc">
                <p className="main_desc">
                  태재대학교 입학전형과 관련된 모든 서류 양식, 모집요강, 면접 자료 등을<br/>
                  한 곳에서 편리하게 다운로드하실 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Resources List */}
      <div className="section">
        <div className="inner">
          <div className="tit_txt_box type3">
            <strong className="tit">전체 자료</strong>
            <p className="txt">입학 관련 다양한 자료를 다운로드하실 수 있습니다</p>
          </div>
          
          <div className="resources-grid">
            {resources.map(resource => (
              <div key={resource.id} className="resource-card">
                <h3 className="resource-title">{resource.title}</h3>
                <p className="resource-description">{resource.description}</p>
                <div className="resource-footer">
                  <span className="category-badge" style={{ backgroundColor: resource.color }}>
                    {resource.category}
                  </span>
                  <button 
                    className="download-btn-small"
                    onClick={() => handleDownload(resource.id, resource.title)}
                  >
                    다운로드
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


    </div>
  );
};

export default ResourcesPage;