import React from 'react';
import NavigationCards from './NavigationCards';

const AdmissionsKorean = ({ onNavigate }) => {
  return (
    <div className="admissions-korean">
      {/* Header Section */}
      <div className="korean-header">
        <div className="header-note">(현재 페이지 형식 유지 가능) Admissions 시작페이지 예시</div>
        
        <div className="korean-intro">
          <h1 className="korean-title">Admissions</h1>
          
          <div className="intro-content">
            <div className="intro-text">
              <p>
                Taejae University welcomes students from diverse backgrounds who are bright and driven, 
                courageous, enterprising, and passionate about bridging the gap between East and West. 
                We embrace diversity and inclusivity and expect our prospective students to be highly 
                motivated and enthusiastic about addressing the complex economic, cultural, and political 
                challenges facing humanity today.
              </p>
            </div>
            
            <div className="quote-section">
              <div className="quote-icon">❝</div>
              <div className="quote-text">
                <p className="quote-line1">Apply and Join Taejae in our pursuit of</p>
                <p className="quote-line2">creating a brighter and sustainable future!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Student Type Cards */}
      <div className="student-type-cards">
        <div className="student-card international-card">
          <div className="card-overlay">
            <h3>For International Students</h3>
          </div>
        </div>
        
        <div className="student-card korean-card">
          <div className="card-overlay">
            <h3>For Korean Students</h3>
          </div>
        </div>
      </div>
      
      {/* Navigation Section */}
      <NavigationCards onNavigate={onNavigate} />
    </div>
  );
};

export default AdmissionsKorean;