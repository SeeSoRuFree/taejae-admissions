import React from 'react';

const AdmissionsLanding = ({ onSelectType }) => {
  return (
    <div className="admissions-landing">
      <div className="landing-container">
        <h1 className="admissions-title">Admissions</h1>
        <p className="admissions-version">(ver. 0814)</p>
        
        <div className="admissions-intro">
          <p className="intro-text">
            Taejae University welcomes students from diverse backgrounds who are bright and driven, 
            courageous, enterprising, and passionate about bridging the gap between East and West. 
            We embrace diversity and inclusivity and expect our prospective students to be highly 
            motivated and enthusiastic about addressing the complex economic, cultural, and political 
            challenges facing humanity today.
          </p>
          
          <div className="call-to-action">
            <p className="cta-line1">Apply and Join Taejae in our pursuit of</p>
            <p className="cta-line2">creating a brighter and sustainable future!</p>
          </div>
        </div>
        
        <div className="student-type-selection">
          <button 
            className="student-type-btn korean-btn"
            onClick={() => onSelectType('korean')}
          >
            <span className="btn-text">For Korean Students</span>
            <span className="btn-subtitle">(클릭)</span>
          </button>
          
          <button 
            className="student-type-btn international-btn"
            onClick={() => onSelectType('international')}
          >
            <span className="btn-text">For International Students</span>
            <span className="btn-subtitle">(클릭)</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdmissionsLanding;