import React from 'react';

const TuitionAidPage = ({ onNavigate }) => {
  return (
    <div className="container sub_cont">
      {/* Hero Section - SchedulePage 스타일 */}
      <div className="section wide adm_prcs documents_hero">
        <div className="visual">
          <div className="img_wrap">
            <img src="/images/4-2.png" alt="등록금 및 장학금" />
          </div>
          <div className="cont_wrap">
            <div className="inner">
              <div className="tit_section">
                <div className="sub_tit">TUITION & SCHOLARSHIPS</div>
                <h2>등록금 및 장학금</h2>
                <h3>다양한 장학 제도를 통한 학업 지속과 성장 지원</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 새로운 내용 섹션 */}
      <div className="section">
        <div className="inner">
          {/* 메인 타이틀 */}
          <div className="tit_txt_box type3">
            <strong className="tit">국내학생 등록금 및 장학제도</strong>
            <p className="txt notice_text">
              ※ 입학 결정 후, 태재 신입생들에게 수업료 및 장학금 신청에 대한 상세한 정보를 안내드립니다.
            </p>
          </div>

          {/* 등록금 표 */}
          <div className="tuition_table_section">
            <table className="tuition_table">
              <thead>
                <tr>
                  <th colSpan="2">연간 등록금 및 기숙사비</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="category">수업료 및 등록금</td>
                  <td className="amount">
                    연간 900만원<br/>
                    <span className="sub_amount">(학기당 450만원)</span>
                  </td>
                </tr>
                <tr>
                  <td className="category">기숙사 및 글로벌 참여 비용*</td>
                  <td className="amount">
                    월100만원 내외*<br/>
                    <span className="sub_amount">*서울 기숙사 기준(글로벌 로테이션 국가 및 지역에 따라 차이가 있음.)</span>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="guide_text">
                    글로벌 로테이션 국가 및 지역에 따라 항공료 및 생활비, 기숙사비가 추가로 발생하게 되며, 이에 대한 각종 장학지원 프로그램 혜택 기회를 마련하고 있습니다.<br/><br/>
                    태재대학교는 국내학생의 등록금 외에 국내 및 글로벌 로테이션 교육에 필요한 교육비를 대학재정으로 부담하고 있으며, 학생 1인당 교육비의 대학부담율을 매우 높게 유지하고 있습니다.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 추가 설명 */}
          <div className="additional_info">
            <p className="info_paragraph">
              태재대학교는 국내외 대다수의 대학에 비해 훨씬 더 많은 재정 지원과 장학금 혜택 기회를 제공하고 있습니다.
            </p>

            <p className="info_paragraph">
              태재대학교는 학생들이 본교가 제공하는 모든 교육적 혜택을 최대한 활용할 수 있도록, 학생들의 학업에 필요한 재정적 지원을 최대한 충족할 수 있도록 다양한 장학제도를 마련하고 있습니다. 수업료, 항공비, 글로벌교육경비 등의 지원을 신청할 수 있으며 학생들이 학기 중에 필요한 개인적 경비 충당에 활용할 수 있도록 학생 Work-Study 장학제도 마련하고 있습니다.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default TuitionAidPage;