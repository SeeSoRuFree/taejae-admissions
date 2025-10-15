import React, { useState } from 'react';

const NoticesListPage = ({ onNavigate }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // 확장된 공지사항 데이터 (30개)
  const allNotices = [
    { id: 1, title: "2024학년도 신입학 모집요강 발표", date: "2024.08.15", category: "입학안내", isImportant: true },
    { id: 2, title: "입학설명회 개최 안내", date: "2024.08.10", category: "입학안내", isImportant: true },
    { id: 3, title: "서류 접수 기간 연장 안내", date: "2024.08.05", category: "입학안내", isImportant: false },
    { id: 4, title: "2024학년도 추가 모집 안내", date: "2024.07.30", category: "입학안내", isImportant: true },
    { id: 5, title: "면접 일정 및 장소 공지", date: "2024.07.25", category: "입학안내", isImportant: false },
    { id: 6, title: "장학금 신청 안내", date: "2024.07.20", category: "장학금", isImportant: false },
    { id: 7, title: "기숙사 입사 신청 접수", date: "2024.07.15", category: "생활안내", isImportant: false },
    { id: 8, title: "신입생 오리엔테이션 일정", date: "2024.07.10", category: "생활안내", isImportant: false },
    { id: 9, title: "입학 관련 FAQ 업데이트", date: "2024.07.05", category: "입학안내", isImportant: false },
    { id: 10, title: "등록금 납부 안내", date: "2024.07.01", category: "입학안내", isImportant: false },
    { id: 11, title: "2024학년도 1학기 등록금 환불 안내", date: "2024.06.28", category: "등록금", isImportant: false },
    { id: 12, title: "해외 교환학생 프로그램 모집", date: "2024.06.25", category: "교환학생", isImportant: false },
    { id: 13, title: "여름방학 특별 프로그램 안내", date: "2024.06.20", category: "교육과정", isImportant: false },
    { id: 14, title: "도서관 이용시간 변경 안내", date: "2024.06.15", category: "생활안내", isImportant: false },
    { id: 15, title: "글로벌 현장학습 참가자 모집", date: "2024.06.10", category: "교육과정", isImportant: false },
    { id: 16, title: "2024년 하계 계절학기 수강신청", date: "2024.06.05", category: "교육과정", isImportant: false },
    { id: 17, title: "학생 건강검진 일정 안내", date: "2024.06.01", category: "생활안내", isImportant: false },
    { id: 18, title: "창업동아리 지원사업 모집", date: "2024.05.28", category: "창업지원", isImportant: false },
    { id: 19, title: "봄 축제 행사 안내", date: "2024.05.25", category: "행사안내", isImportant: false },
    { id: 20, title: "멘토링 프로그램 참가자 모집", date: "2024.05.20", category: "교육과정", isImportant: false },
    { id: 21, title: "시험기간 도서관 연장 운영", date: "2024.05.15", category: "생활안내", isImportant: false },
    { id: 22, title: "2024년 하반기 인턴십 모집", date: "2024.05.10", category: "취업지원", isImportant: false },
    { id: 23, title: "학점 이의신청 절차 안내", date: "2024.05.05", category: "학사안내", isImportant: false },
    { id: 24, title: "외국어 능력 시험 지원", date: "2024.05.01", category: "어학지원", isImportant: false },
    { id: 25, title: "2024년 1학기 성적 발표", date: "2024.04.28", category: "학사안내", isImportant: false },
    { id: 26, title: "학생회 임원 선거 공고", date: "2024.04.25", category: "학생활동", isImportant: false },
    { id: 27, title: "카운슬링 센터 운영 안내", date: "2024.04.20", category: "생활지원", isImportant: false },
    { id: 28, title: "연구 프로젝트 참여 학생 모집", date: "2024.04.15", category: "연구활동", isImportant: false },
    { id: 29, title: "캠퍼스 안전 수칙 안내", date: "2024.04.10", category: "안전안내", isImportant: false },
    { id: 30, title: "2024년 봄학기 종강 안내", date: "2024.04.05", category: "학사안내", isImportant: false }
  ];

  // 페이지네이션 계산
  const totalPages = Math.ceil(allNotices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentNotices = allNotices.slice(startIndex, startIndex + itemsPerPage);

  const handleNoticeClick = (noticeId) => {
    onNavigate(`korean-notices-detail?id=${noticeId}`);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const generatePageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="container sub_cont notices_page">
      <div className="section wide">
        <div className="inner">
          {/* Header */}
          <div className="notices_list_header">
            <h1>공지사항</h1>
            <p>태재대학교의 주요 소식과 입학 관련 공지사항을 확인하세요</p>
          </div>

          {/* Notices Grid */}
          <div className="notices_list_grid">
            {currentNotices.map((notice) => (
              <div 
                key={notice.id} 
                className={`notice_premium_card ${notice.isImportant ? 'important' : ''}`}
                onClick={() => handleNoticeClick(notice.id)}
              >
                <div className="notice_card_content">
                  <div className="notice_date_badge">{notice.date}</div>
                  <h3 className="notice_title">{notice.title}</h3>
                  <div className="notice_bottom_badges">
                    <span className="notice_category">{notice.category}</span>
                    {notice.isImportant && <span className="notice_important">중요</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="notices_pagination">
            <button 
              className="pagination_btn prev"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12l-4-4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              이전
            </button>

            <div className="pagination_numbers">
              {generatePageNumbers().map((pageNumber) => (
                <button
                  key={pageNumber}
                  className={`pagination_number ${currentPage === pageNumber ? 'active' : ''}`}
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </button>
              ))}
            </div>

            <button 
              className="pagination_btn next"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              다음
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NoticesListPage;