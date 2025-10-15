import React from 'react';

const DormitoryPage = ({ onNavigate }) => {
  const partnerUniversities = [
    {
      name: 'University of San Francisco',
      location: 'San Francisco, USA',
      image: '/images/usf-campus.jpg',
      description: '혁신과 사회 정의의 중심지인 샌프란시스코에서의 학습 경험'
    },
    {
      name: 'Pace University',
      location: 'New York, USA',
      image: '/images/pace-campus.jpg',
      description: '글로벌 금융의 중심 뉴욕에서의 실무 중심 교육'
    },
    {
      name: 'Beijing Campus',
      location: 'Beijing, China',
      image: '/images/beijing-campus.jpg',
      description: '아시아 경제의 중심에서 경험하는 동양 문화와 비즈니스'
    },
    {
      name: 'European Campus',
      location: 'Europe',
      image: '/images/europe-campus.jpg',
      description: '유럽의 다양한 문화와 역사 속에서의 글로벌 교육'
    }
  ];

  return (
    <div className="container">
      {/* Hero Section */}
      <div className="section wide dormitory_hero">
        <div className="visual">
          <div className="img_wrap">
            <img src="/images/dormitory-hero-bg.png" alt="태재 기숙사 생활" />
          </div>
          <div className="cont_wrap">
            <div className="inner">
              <div className="tit_section">
                <div className="sub_tit">RESIDENTIAL CAMPUS</div>
                <h2>태재 기숙사 생활</h2>
                <h3>서울에서 시작하여 세계로 확장되는 글로벌 캠퍼스 경험</h3>
              </div>
              <div className="desc">
                <p className="main_desc">
                  1학년 서울 기숙사 생활을 시작으로 Global Rotation을 통해 
                  미국, 중국, 일본, 유럽 등 세계 각국의 협력대학에서 
                  다양한 문화와 교육 환경을 경험할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seoul Campus */}
      <div className="section wide seoul_campus">
        <div className="asymmetric_layout">
          <div className="content_left">
            <div className="section_header left_aligned">
              <h3 className="section_main_title">서울 캠퍼스</h3>
              <p className="section_subtitle">도심 속 현대적 학생 레지던스</p>
            </div>
            
            <div className="campus_description">
              <p>
                태재대학교 학생들은 첫 해 동안 서울 도심에 위치한 
                <strong>학생 레지던스</strong>에서 생활합니다. 
                현대적인 시설과 편의를 갖춘 기숙사에서 새로운 동료들과 
                함께 대학 생활의 첫걸음을 시작하게 됩니다.
              </p>
              
              <div className="campus_features">
                <h4>주요 시설</h4>
                <ul>
                  <li>개별 침실과 공용 거실이 있는 스위트형 기숙사</li>
                  <li>24시간 스터디 라운지 및 공용 학습 공간</li>
                  <li>피트니스 센터 및 레크리에이션 시설</li>
                  <li>카페테리아 및 편의시설</li>
                  <li>세탁실 및 편의점</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="content_right">
            <div className="campus_image_container">
              <img src="/images/seoul-residence.jpg" alt="서울 레지던셜 캠퍼스" />
              <div className="image_caption">
                서울 레지던셜 캠퍼스 전경
              </div>
            </div>
            
            <div className="campus_stats">
              <div className="stat_item">
                <div className="stat_number">1년차</div>
                <div className="stat_label">서울 거주 기간</div>
              </div>
              <div className="stat_item">
                <div className="stat_number">2-4인</div>
                <div className="stat_label">룸메이트 구성</div>
              </div>
              <div className="stat_item">
                <div className="stat_number">24시간</div>
                <div className="stat_label">학습 지원</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Rotation */}
      <div className="section wide global_rotation">
        <div className="inner">
          <div className="section_header centered">
            <h3 className="section_main_title">Global Rotation</h3>
            <p className="section_subtitle">
              2학년부터 시작되는 해외 캠퍼스 경험으로 진정한 글로벌 인재로 성장
            </p>
          </div>
          
          <div className="rotation_description">
            <p>
              2학년부터 학생들은 미국, 중국, 일본, 유럽 등의 협력대학 기숙사에서 생활하며 학업을 이어갑니다.
              각 협력대학은 해당 도시에서 최고 수준의 캠퍼스 시설, 사회활동, 공동 교육과정을 제공하며,
              현재는 북경지역, 유럽, 러시아 지역의 대학과도 협력을 추진하고 있습니다.
            </p>
          </div>
          
          <div className="world_map_container">
            <div className="world_map">
              <img src="/images/world-map-rotation.png" alt="Global Rotation 지도" />
              <div className="map_markers">
                <div className="marker seoul">
                  <div className="marker_dot"></div>
                  <div className="marker_label">Seoul</div>
                </div>
                <div className="marker san_francisco">
                  <div className="marker_dot"></div>
                  <div className="marker_label">San Francisco</div>
                </div>
                <div className="marker new_york">
                  <div className="marker_dot"></div>
                  <div className="marker_label">New York</div>
                </div>
                <div className="marker beijing">
                  <div className="marker_dot"></div>
                  <div className="marker_label">Beijing</div>
                </div>
                <div className="marker europe">
                  <div className="marker_dot"></div>
                  <div className="marker_label">Europe</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Universities */}
      <div className="section wide partner_universities">
        <div className="inner">
          <div className="section_header">
            <h3 className="section_main_title">협력 대학 소개</h3>
            <p className="section_subtitle">
              세계 각국의 우수한 협력대학에서 제공하는 다양한 교육 경험
            </p>
          </div>
          
          <div className="universities_grid">
            {partnerUniversities.map((university, index) => (
              <div key={index} className="university_card">
                <div className="university_image">
                  <img src={university.image} alt={university.name} />
                  <div className="university_overlay">
                    <div className="overlay_content">
                      <h4>{university.name}</h4>
                      <p>{university.location}</p>
                    </div>
                  </div>
                </div>
                
                <div className="university_content">
                  <h4>{university.name}</h4>
                  <p className="university_location">{university.location}</p>
                  <p className="university_description">{university.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Living Experience */}
      <div className="section wide living_experience">
        <div className="inner">
          <div className="experience_container">
            <div className="experience_content">
              <h3>글로벌 기숙사 생활의 특별함</h3>
              <div className="experience_items">
                <div className="experience_item">
                  <div className="experience_icon">🌍</div>
                  <div className="experience_text">
                    <h4>다문화 환경</h4>
                    <p>세계 각국에서 온 학생들과 함께 생활하며 다양한 문화를 경험</p>
                  </div>
                </div>
                
                <div className="experience_item">
                  <div className="experience_icon">🎓</div>
                  <div className="experience_text">
                    <h4>현지 교육과정</h4>
                    <p>각 협력대학의 특화된 교육과정과 전문 프로그램 참여</p>
                  </div>
                </div>
                
                <div className="experience_item">
                  <div className="experience_icon">🤝</div>
                  <div className="experience_text">
                    <h4>글로벌 네트워크</h4>
                    <p>전 세계 동문 네트워크와 평생에 걸친 인맥 형성</p>
                  </div>
                </div>
                
                <div className="experience_item">
                  <div className="experience_icon">💼</div>
                  <div className="experience_text">
                    <h4>현지 인턴십</h4>
                    <p>각 지역의 글로벌 기업에서의 인턴십 및 실무 경험 기회</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default DormitoryPage;