import React from 'react';

const NoticeDetailPage = ({ onNavigate, noticeId }) => {
  // URL에서 ID 파라미터 추출
  const urlParams = new URLSearchParams(window.location.search);
  const id = noticeId || urlParams.get('id') || '1';

  // 샘플 공지사항 상세 데이터
  const noticeDetails = {
    '1': {
      id: 1,
      title: "2024학년도 신입학 모집요강 발표",
      date: "2024.08.15",
      category: "입학안내",
      author: "입학처",
      views: 1234,
      content: `
        <h3>2024학년도 태재대학교 신입학 모집요강을 다음과 같이 발표합니다.</h3>
        
        <h4>1. 모집 개요</h4>
        <ul>
          <li><strong>모집시기:</strong> 2024년 9월 1일 ~ 11월 30일</li>
          <li><strong>모집인원:</strong> 총 200명 (일반전형 150명, 특별전형 50명)</li>
          <li><strong>지원자격:</strong> 고등학교 졸업자 또는 졸업예정자</li>
        </ul>

        <h4>2. 전형 일정</h4>
        <table border="1" style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr>
            <th style="padding: 10px; background: #f5f5f5;">구분</th>
            <th style="padding: 10px; background: #f5f5f5;">일정</th>
            <th style="padding: 10px; background: #f5f5f5;">비고</th>
          </tr>
          <tr>
            <td style="padding: 10px;">원서접수</td>
            <td style="padding: 10px;">2024.09.01 ~ 2024.10.15</td>
            <td style="padding: 10px;">온라인 접수</td>
          </tr>
          <tr>
            <td style="padding: 10px;">서류전형</td>
            <td style="padding: 10px;">2024.10.16 ~ 2024.10.31</td>
            <td style="padding: 10px;">서류 심사</td>
          </tr>
          <tr>
            <td style="padding: 10px;">면접전형</td>
            <td style="padding: 10px;">2024.11.05 ~ 2024.11.15</td>
            <td style="padding: 10px;">개별 면접</td>
          </tr>
          <tr>
            <td style="padding: 10px;">최종발표</td>
            <td style="padding: 10px;">2024.11.30</td>
            <td style="padding: 10px;">개별 통보</td>
          </tr>
        </table>

        <h4>3. 제출 서류</h4>
        <ul>
          <li>입학지원서 (온라인 작성)</li>
          <li>고등학교 생활기록부 1부</li>
          <li>자기소개서 1부</li>
          <li>추천서 1부 (담임교사 또는 진로담당교사)</li>
          <li>기타 증빙서류 (해당자에 한함)</li>
        </ul>

        <h4>4. 전형료</h4>
        <p>- 일반전형: 50,000원<br/>
        - 특별전형: 30,000원</p>

        <h4>5. 문의사항</h4>
        <p>태재대학교 입학처<br/>
        전화: 02-123-4567<br/>
        이메일: admission@taejae.ac.kr<br/>
        방문상담: 평일 09:00 ~ 18:00</p>

        <div style="background: #f8f9fa; padding: 20px; margin: 20px 0; border-left: 4px solid #00A597;">
          <strong>⚠️ 중요 안내사항</strong><br/>
          - 모든 서류는 원본 제출을 원칙으로 합니다.<br/>
          - 허위 서류 제출 시 합격이 취소될 수 있습니다.<br/>
          - 자세한 내용은 모집요강을 반드시 확인해주시기 바랍니다.
        </div>
      `
    },
    '2': {
      id: 2,
      title: "입학설명회 개최 안내",
      date: "2024.08.10",
      category: "입학안내",
      author: "입학처",
      views: 856,
      content: `
        <h3>2024학년도 태재대학교 입학설명회를 다음과 같이 개최합니다.</h3>
        
        <h4>1. 개최 개요</h4>
        <ul>
          <li><strong>일시:</strong> 2024년 8월 25일 (일) 14:00 ~ 16:00</li>
          <li><strong>장소:</strong> 태재대학교 대강당</li>
          <li><strong>대상:</strong> 2024학년도 입학 희망자 및 학부모</li>
          <li><strong>참가비:</strong> 무료</li>
        </ul>

        <h4>2. 프로그램</h4>
        <table border="1" style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr>
            <th style="padding: 10px; background: #f5f5f5;">시간</th>
            <th style="padding: 10px; background: #f5f5f5;">내용</th>
            <th style="padding: 10px; background: #f5f5f5;">진행자</th>
          </tr>
          <tr>
            <td style="padding: 10px;">14:00 ~ 14:10</td>
            <td style="padding: 10px;">개회식 및 환영사</td>
            <td style="padding: 10px;">총장</td>
          </tr>
          <tr>
            <td style="padding: 10px;">14:10 ~ 14:40</td>
            <td style="padding: 10px;">태재대학교 소개</td>
            <td style="padding: 10px;">입학처장</td>
          </tr>
          <tr>
            <td style="padding: 10px;">14:40 ~ 15:20</td>
            <td style="padding: 10px;">입학전형 안내</td>
            <td style="padding: 10px;">입학사정관</td>
          </tr>
          <tr>
            <td style="padding: 10px;">15:20 ~ 15:50</td>
            <td style="padding: 10px;">질의응답</td>
            <td style="padding: 10px;">입학처 직원</td>
          </tr>
          <tr>
            <td style="padding: 10px;">15:50 ~ 16:00</td>
            <td style="padding: 10px;">개별 상담</td>
            <td style="padding: 10px;">-</td>
          </tr>
        </table>

        <h4>3. 신청 방법</h4>
        <p>온라인 신청: <a href="https://admission.taejae.ac.kr" target="_blank">https://admission.taejae.ac.kr</a><br/>
        신청 기간: 2024년 8월 10일 ~ 8월 23일<br/>
        선착순 300명 모집</p>

        <div style="background: #f8f9fa; padding: 20px; margin: 20px 0; border-left: 4px solid #00A597;">
          <strong>📍 찾아오시는 길</strong><br/>
          서울특별시 종로구 창덕궁5길 22-8<br/>
          지하철 3호선 안국역 2번 출구에서 도보 5분<br/>
          주차 공간이 제한되어 있으니 대중교통을 이용해주시기 바랍니다.
        </div>
      `
    }
  };

  // 기본값 설정
  const notice = noticeDetails[id] || noticeDetails['1'];

  const handleBackToList = () => {
    onNavigate('korean-notices');
  };

  const handlePrevNext = (direction) => {
    const currentId = parseInt(id);
    const newId = direction === 'prev' ? currentId - 1 : currentId + 1;
    if (noticeDetails[newId.toString()]) {
      onNavigate(`korean-notices-detail?id=${newId}`);
    }
  };

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
              <span className="notice_category">{notice.category}</span>
              <span className="notice_date">{notice.date}</span>
            </div>
            <h1 className="notice_detail_title">{notice.title}</h1>
            <div className="notice_detail_meta">
              <span>작성자: {notice.author}</span>
              <span>조회수: {notice.views.toLocaleString()}</span>
            </div>
          </div>

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
              disabled={!noticeDetails[(parseInt(id) + 1).toString()]}
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