import React, { useState } from 'react';

const ApplicationFormPage = ({ onNavigate }) => {
  // 입학신청 접수기간 설정 (실제 운영시 수정 필요)
  // 태재미래인재전형, 자기혁신인재전형, 사회통합전형: 12월
  // 글로벌인재전형: 6월
  const APPLICATION_START_DATE = new Date('2024-12-01');
  const APPLICATION_END_DATE = new Date('2024-12-31');
  
  // 현재 접수기간인지 확인하는 함수
  const isApplicationPeriod = () => {
    const now = new Date();
    return now >= APPLICATION_START_DATE && now <= APPLICATION_END_DATE;
  };
  
  // 버튼 클릭 핸들러
  const handleApplicationClick = () => {
    if (isApplicationPeriod()) {
      // 접수기간 중: 진학사 페이지로 이동
      window.open('https://enter.jinhakapply.com/', '_blank');
    }
    // 접수기간 외에는 클릭 불가 (버튼이 비활성화되어 있음)
  };

  const isActive = isApplicationPeriod();

  return (
    <div className="container sub_cont vis_type adm_wrap">
      <div className="location">
        <div className="inner">
          <a href="/" className="btn_home">HOME</a>
          <ul>
            <li>입학신청</li>
            <li>입학신청서 작성</li>
          </ul>
        </div>
      </div>
      
      {/* Simple Title Section */}
      <div className="section">
        <div className="tit_box">
          <strong className="tit">입학신청서 작성</strong>
          <p className="txt">입학신청 기간 동안만 신청서 작성이 가능합니다.</p>
        </div>
      </div>

      {/* Application Period Info - Only show when active */}
      {isActive && (
        <div className="section">
          <div className="left_line_box">
            <em className="box_tit">신청 접수 기간</em>
            <p>
              {APPLICATION_START_DATE.getFullYear()}년 {APPLICATION_START_DATE.getMonth() + 1}월 {APPLICATION_START_DATE.getDate()}일 
              ~ {APPLICATION_END_DATE.getFullYear()}년 {APPLICATION_END_DATE.getMonth() + 1}월 {APPLICATION_END_DATE.getDate()}일
            </p>
            <ul className="txt_check">
              <li>태재미래인재전형, 자기혁신인재전형, 사회통합전형: 12월 접수</li>
              <li>글로벌인재전형: 6월 접수</li>
            </ul>
          </div>
        </div>
      )}

      {/* Main CTA Section */}
      <div className="section">
        <div className="cta_center">
          {isActive ? (
            <button 
              type="button" 
              className="btn_drop purple type2"
              onClick={handleApplicationClick}
            >
              <span>👉 입학신청서 작성 바로가기</span>
            </button>
          ) : (
            <div className="box_type1">
              <div className="desc">
                <div className="tit">입학신청 기간이 아닙니다</div>
                
                <div className="left_line_box">
                  <em className="box_tit">신청 접수 기간</em>
                  <p>
                    {APPLICATION_START_DATE.getFullYear()}년 {APPLICATION_START_DATE.getMonth() + 1}월 {APPLICATION_START_DATE.getDate()}일 
                    ~ {APPLICATION_END_DATE.getFullYear()}년 {APPLICATION_END_DATE.getMonth() + 1}월 {APPLICATION_END_DATE.getDate()}일
                  </p>
                  <ul className="txt_check">
                    <li>태재미래인재전형, 자기혁신인재전형, 사회통합전형: 12월 접수</li>
                    <li>글로벌인재전형: 6월 접수</li>
                  </ul>
                </div>
                
                <div className="left_line_box">
                  <em className="box_tit">신청서 작성 안내</em>
                  <ul className="txt_check">
                    <li>온라인 신청서 작성 시스템을 통해 지원할 수 있습니다</li>
                    <li>신청서 작성 전 제출서류를 미리 준비하시기 바랍니다</li>
                    <li>작성 중 저장 기능을 활용하여 단계별로 완성하세요</li>
                    <li>최종 제출 전 모든 내용을 다시 한 번 확인해주세요</li>
                  </ul>
                </div>
                
                <button type="button" className="btn_drop disabled" disabled>
                  <span>입학신청서 작성 (기간 외)</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Information Section - Only show when active */}
      {isActive && (
        <div className="section">
          <div className="left_line_box">
            <em className="box_tit">신청서 작성 안내</em>
            <ul className="txt_check">
              <li>온라인 신청서 작성 시스템을 통해 지원할 수 있습니다.</li>
              <li>신청서 작성 전 제출서류를 미리 준비하시기 바랍니다.</li>
              <li>작성 중 저장 기능을 활용하여 단계별로 완성하세요.</li>
              <li>최종 제출 전 모든 내용을 다시 한 번 확인해주세요.</li>
            </ul>
          </div>
        </div>
      )}

      {/* Related Links Section */}
      <div className="section mt60">
        <div className="tit_box">
          <strong className="tit">관련 안내</strong>
          <p className="txt">입학신청과 관련된 자세한 정보를 확인하세요.</p>
        </div>
        <div className="btn_group_taejae">
          <button 
            type="button" 
            className="btn_drop"
            onClick={() => onNavigate('korean-application-documents')}
          >
            <span>제출서류 작성 안내</span>
          </button>
          <button 
            type="button" 
            className="btn_drop"
            onClick={() => onNavigate('korean-application-schedule')}
          >
            <span>전형별 특징 및 일정</span>
          </button>
          <button 
            type="button" 
            className="btn_drop"
            onClick={() => onNavigate('korean-application-recruitment')}
          >
            <span>모집안내</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationFormPage;