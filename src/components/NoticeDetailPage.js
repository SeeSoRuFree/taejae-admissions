import React, { useState, useEffect } from 'react';
import { getNoticeDetail } from '../api/noticesApi';

const NoticeDetailPage = ({ onNavigate, noticeId }) => {
  // URL에서 ID 파라미터 추출
  const urlParams = new URLSearchParams(window.location.search);
  const id = noticeId || urlParams.get('id') || '1';

  const [notice, setNotice] = useState(null);
  const [loading, setLoading] = useState(true);

  // 공지사항 상세 데이터 가져오기
  useEffect(() => {
    const fetchNoticeDetail = async () => {
      setLoading(true);
      const response = await getNoticeDetail(id);

      if (response.success && response.data) {
        setNotice(response.data);
      } else {
        console.error('공지사항 상세 정보를 불러오는데 실패했습니다:', response.error);
        setNotice(null);
      }
      setLoading(false);
    };

    fetchNoticeDetail();
  }, [id]);

  // 날짜 포맷팅 함수 (ISO -> YYYY.MM.DD)
  const formatDate = (isoDateString) => {
    if (!isoDateString) return '';
    const date = new Date(isoDateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  const handleBackToList = () => {
    onNavigate('korean-notices');
  };

  const handlePrevNext = (direction) => {
    const currentId = parseInt(id);
    const newId = direction === 'prev' ? currentId - 1 : currentId + 1;
    onNavigate(`korean-notices-detail?id=${newId}`);
  };

  if (loading) {
    return (
      <div className="container sub_cont notice_detail_page">
        <div className="section wide">
          <div className="inner" style={{ textAlign: 'center', padding: '100px 0' }}>
            로딩 중...
          </div>
        </div>
      </div>
    );
  }

  if (!notice) {
    return (
      <div className="container sub_cont notice_detail_page">
        <div className="section wide">
          <div className="inner" style={{ textAlign: 'center', padding: '100px 0' }}>
            <p>공지사항을 찾을 수 없습니다.</p>
            <button
              onClick={handleBackToList}
              style={{ marginTop: '20px', padding: '10px 20px' }}
            >
              목록으로 돌아가기
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container sub_cont notice_detail_page">
      <div className="section wide">
        <div className="inner">
          {/* Breadcrumb */}
          <div className="notice_breadcrumb">
            <span onClick={() => onNavigate('korean-homepage')}>홈</span>
            <span>&gt;</span>
            <span onClick={handleBackToList}>공지사항</span>
            <span>&gt;</span>
            <span>상세보기</span>
          </div>

          {/* Notice Detail Header */}
          <div className="notice_detail_header">
            <div className="notice_meta_info">
              <span className="notice_category">입학안내</span>
              <span className="notice_date">{formatDate(notice.createdAt)}</span>
            </div>
            <h1 className="notice_detail_title">{notice.title}</h1>
            <div className="notice_detail_meta">
              <span>조회수: {notice.viewCount.toLocaleString()}</span>
            </div>
          </div>

          {/* Attachments */}
          {notice.files && notice.files.length > 0 && (
            <div className="notice_attachments">
              <h4>첨부파일</h4>
              <ul>
                {notice.files.map((file) => (
                  <li key={file.id}>
                    <a href={file.path} download={file.originalName}>
                      📎 {file.originalName} ({(file.size / 1024).toFixed(2)} KB)
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Notice Content */}
          <div className="notice_detail_content">
            <div
              className="notice_content_body"
              dangerouslySetInnerHTML={{ __html: notice.content }}
            />
          </div>

          {/* Navigation Buttons */}
          <div className="notice_navigation">
            <button
              className="notice_nav_btn prev"
              onClick={() => handlePrevNext('prev')}
              disabled={parseInt(id) <= 1}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12l-4-4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              이전글
            </button>

            <button
              className="notice_list_btn"
              onClick={handleBackToList}
            >
              목록
            </button>

            <button
              className="notice_nav_btn next"
              onClick={() => handlePrevNext('next')}
            >
              다음글
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

export default NoticeDetailPage;