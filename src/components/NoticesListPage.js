import React, { useState, useEffect } from 'react';
import { getNoticesList } from '../api/noticesApi';

const NoticesListPage = ({ onNavigate }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [notices, setNotices] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 12;

  // 공지사항 목록 가져오기
  useEffect(() => {
    const fetchNotices = async () => {
      setLoading(true);
      const response = await getNoticesList(currentPage - 1, itemsPerPage);

      if (response.success && response.data) {
        setNotices(response.data.content || []);
        setTotalPages(response.data.totalPages || 1);
      } else {
        console.error('공지사항 목록을 불러오는데 실패했습니다:', response.error);
        setNotices([]);
        setTotalPages(1);
      }
      setLoading(false);
    };

    fetchNotices();
  }, [currentPage]);

  // 현재 페이지의 공지사항
  const currentNotices = notices;

  // 날짜 포맷팅 함수 (ISO -> YYYY.MM.DD)
  const formatDate = (isoDateString) => {
    if (!isoDateString) return '';
    const date = new Date(isoDateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

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
            {loading ? (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px 0' }}>
                로딩 중...
              </div>
            ) : currentNotices.length > 0 ? (
              currentNotices.map((notice) => (
                <div
                  key={notice.id}
                  className="notice_premium_card"
                  onClick={() => handleNoticeClick(notice.id)}
                >
                  <div className="notice_card_content">
                    <div className="notice_date_badge">{formatDate(notice.createdAt)}</div>
                    <h3 className="notice_title">{notice.title}</h3>
                    <div className="notice_bottom_badges">
                      <span className="notice_category">입학안내</span>
                      {notice.fileCount > 0 && (
                        <span className="notice_file_badge">📎 {notice.fileCount}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px 0' }}>
                공지사항이 없습니다.
              </div>
            )}
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