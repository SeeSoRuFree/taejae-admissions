import React from 'react';

const StudentlifePage = ({ onNavigate }) => {
  const studyAreas = [
    {
      title: '온라인 학습',
      description: '최첨단 LMS 시스템을 통한 디지털 학습 환경',
      features: ['실시간 온라인 강의', '녹화 강의 복습', '디지털 과제 제출', '온라인 토론 참여'],
      icon: '💻',
      color: '#501D83'
    },
    {
      title: '오프라인 학습',
      description: '소규모 클래스를 통한 집중적 학습 경험',
      features: ['16명 소규모 수업', '교수와 1:1 멘토링', '팀 프로젝트 수행', '실습 중심 수업'],
      icon: '🏫',
      color: '#00A597'
    },
    {
      title: '비교과 활동',
      description: '학업 외 다양한 활동을 통한 전인적 성장',
      features: ['학생회 및 동아리', '학술 세미나 참여', '봉사활동 프로그램', '리더십 개발 프로그램'],
      icon: '🎯',
      color: '#6B2C91'
    },
    {
      title: '글로벌 경험',
      description: 'Global Rotation을 통한 세계적 안목 개발',
      features: ['해외 캠퍼스 교환', '국제 프로젝트 참여', '다문화 환경 체험', '글로벌 네트워킹'],
      icon: '🌍',
      color: '#4ECDC4'
    }
  ];

  const activities = [
    {
      category: '학술 활동',
      items: [
        { name: '창의적 사고와 비판적 사고', description: '논리적 사고력과 창의성 개발' },
        { name: '리서치 방법론', description: '학술 연구 기초 능력 함양' },
        { name: '글로벌 이슈 세미나', description: '국제적 관점의 문제 해결 능력' },
        { name: '학술 논문 작성', description: '학술적 글쓰기 능력 개발' }
      ],
      color: '#501D83'
    },
    {
      category: '실무 경험',
      items: [
        { name: '인턴십 프로그램', description: '글로벌 기업에서의 실무 경험' },
        { name: '스타트업 프로젝트', description: '기업가 정신과 혁신적 사고' },
        { name: '현장 실습', description: '이론과 실무의 연결' },
        { name: '멘토십 프로그램', description: '산업 전문가와의 네트워킹' }
      ],
      color: '#00A597'
    },
    {
      category: '사회 참여',
      items: [
        { name: '지역 사회 봉사', description: '사회적 책임감과 리더십' },
        { name: '글로벌 봉사 활동', description: '국제적 시각의 사회 공헌' },
        { name: '환경 보호 캠페인', description: '지속 가능한 미래를 위한 실천' },
        { name: '사회적 기업 참여', description: '사회 문제 해결을 위한 비즈니스' }
      ],
      color: '#6B2C91'
    }
  ];

  const studentSupport = [
    {
      icon: '👥',
      title: '멘토링 시스템',
      description: '선배와 교수님의 1:1 맞춤형 지도를 통한 학업 및 진로 상담'
    },
    {
      icon: '🏥',
      title: '학생 상담 센터',
      description: '학업 스트레스, 적응 문제 등 다양한 고민에 대한 전문적 상담'
    },
    {
      icon: '💪',
      title: '체력관리 프로그램',
      description: '피트니스 센터, 스포츠 클럽 등을 통한 건강한 대학 생활'
    },
    {
      icon: '🎨',
      title: '문화·예술 활동',
      description: '음악, 미술, 연극 등 다양한 예술 활동을 통한 감성 개발'
    }
  ];

  return (
    <div className="container">
      {/* Hero Section */}
      <div className="section wide studentlife_hero">
        <div className="visual">
          <div className="img_wrap">
            <img src="/images/studentlife-hero-bg.png" alt="태재 학생생활" />
          </div>
          <div className="cont_wrap">
            <div className="inner">
              <div className="tit_section">
                <div className="sub_tit">STUDENTS LIFE AT TAEJAE</div>
                <h2>태재 학생생활</h2>
                <h3>온/오프라인 학업과 비교과 활동을 통한 전인적 성장</h3>
              </div>
              <div className="desc">
                <p className="main_desc">
                  협업과 글로벌 경험을 쌓을 수 있는 다양한 기회를 통해 
                  미래 사회가 요구하는 창의적이고 혁신적인 인재로 성장합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Study Areas */}
      <div className="section wide study_areas">
        <div className="inner">
          <div className="section_header centered">
            <h3 className="section_main_title">학습 환경</h3>
            <p className="section_subtitle">
              온라인과 오프라인을 넘나드는 최적의 학습 환경에서 성장하세요
            </p>
          </div>
          
          <div className="study_areas_grid">
            {studyAreas.map((area, index) => (
              <div key={index} className="study_area_card">
                <div className="area_header" style={{ backgroundColor: area.color }}>
                  <div className="area_icon">{area.icon}</div>
                  <h4>{area.title}</h4>
                </div>
                <div className="area_content">
                  <p className="area_description">{area.description}</p>
                  <div className="area_features">
                    <h5>주요 특징</h5>
                    <ul>
                      {area.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Activities Section */}
      <div className="section wide activities_section">
        <div className="inner">
          <div className="section_header">
            <h3 className="section_main_title">학생 활동 프로그램</h3>
            <p className="section_subtitle">
              다양한 영역에서의 경험을 통해 균형 잡힌 인재로 성장할 수 있는 기회들
            </p>
          </div>
          
          <div className="activities_container">
            {activities.map((category, index) => (
              <div key={index} className="activity_category">
                <div className="category_header" style={{ borderLeftColor: category.color }}>
                  <h4>{category.category}</h4>
                </div>
                <div className="category_items">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="activity_item">
                      <div className="item_content">
                        <h5>{item.name}</h5>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Student Support */}
      <div className="section wide student_support">
        <div className="inner">
          <div className="section_header centered">
            <h3 className="section_main_title">학생 지원 시스템</h3>
            <p className="section_subtitle">
              학업부터 생활까지, 모든 영역에서 학생 여러분을 지원합니다
            </p>
          </div>
          
          <div className="support_grid">
            {studentSupport.map((support, index) => (
              <div key={index} className="support_card">
                <div className="support_icon">{support.icon}</div>
                <div className="support_content">
                  <h4>{support.title}</h4>
                  <p>{support.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Daily Life */}
      <div className="section wide daily_life">
        <div className="asymmetric_layout">
          <div className="content_left">
            <div className="section_header left_aligned">
              <h3 className="section_main_title">하루 일과</h3>
              <p className="section_subtitle">태재 학생의 일반적인 하루를 소개합니다</p>
            </div>
            
            <div className="daily_schedule">
              <div className="schedule_item">
                <div className="schedule_time">09:00 - 12:00</div>
                <div className="schedule_content">
                  <h4>오전 수업</h4>
                  <p>핵심 교과목 수업 (16명 소규모 클래스)</p>
                </div>
              </div>
              
              <div className="schedule_item">
                <div className="schedule_time">12:00 - 13:00</div>
                <div className="schedule_content">
                  <h4>점심 시간</h4>
                  <p>동료들과의 식사 및 휴식</p>
                </div>
              </div>
              
              <div className="schedule_item">
                <div className="schedule_time">13:00 - 16:00</div>
                <div className="schedule_content">
                  <h4>오후 활동</h4>
                  <p>프로젝트 작업, 멘토링, 동아리 활동</p>
                </div>
              </div>
              
              <div className="schedule_item">
                <div className="schedule_time">16:00 - 18:00</div>
                <div className="schedule_content">
                  <h4>개인 학습</h4>
                  <p>과제 수행, 복습, 개인 연구</p>
                </div>
              </div>
              
              <div className="schedule_item">
                <div className="schedule_time">18:00 - 22:00</div>
                <div className="schedule_content">
                  <h4>저녁 시간</h4>
                  <p>식사, 운동, 친구들과의 시간</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="content_right">
            <div className="daily_image_container">
              <img src="/images/daily-life.jpg" alt="태재 학생 일상" />
              <div className="image_caption">
                활기찬 캠퍼스 생활의 모습
              </div>
            </div>
            
            <div className="daily_stats">
              <div className="stat_item">
                <div className="stat_number">16명</div>
                <div className="stat_label">수업당 평균 인원</div>
              </div>
              <div className="stat_item">
                <div className="stat_number">24시간</div>
                <div className="stat_label">스터디 라운지 운영</div>
              </div>
              <div className="stat_item">
                <div className="stat_number">50+</div>
                <div className="stat_label">동아리 및 활동 단체</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="section wide success_metrics">
        <div className="inner">
          <div className="metrics_container">
            <div className="metrics_content">
              <h3>태재 학생생활의 성과</h3>
              <p>
                체계적인 학습 시스템과 다양한 활동 기회를 통해 
                학생들은 학업 성취와 개인적 성장을 동시에 달성하고 있습니다.
              </p>
              
              <div className="metrics_grid">
                <div className="metric_item">
                  <div className="metric_number">95%</div>
                  <div className="metric_label">학업 만족도</div>
                  <div className="metric_desc">재학생 설문조사 기준</div>
                </div>
                
                <div className="metric_item">
                  <div className="metric_number">88%</div>
                  <div className="metric_label">비교과 활동 참여율</div>
                  <div className="metric_desc">다양한 프로그램 참여</div>
                </div>
                
                <div className="metric_item">
                  <div className="metric_number">92%</div>
                  <div className="metric_label">글로벌 프로그램 만족도</div>
                  <div className="metric_desc">해외 캠퍼스 경험 학생</div>
                </div>
                
                <div className="metric_item">
                  <div className="metric_number">100%</div>
                  <div className="metric_label">멘토링 지원</div>
                  <div className="metric_desc">모든 학생 대상</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default StudentlifePage;