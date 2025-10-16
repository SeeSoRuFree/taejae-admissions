import React from 'react';

const RecruitmentPage = ({ onNavigate }) => {
  const document = {
    title: '2026학년도 입학안내',
    pdfUrl: '/pdf/태재대학교 2026학년도 입학안내(9월 수정).pdf',
    downloadUrl: '/pdf/태재대학교 2026학년도 입학안내(9월 수정).pdf'
  };

  return (
    <div className="container sub_cont">
      {/* Hero Section - adm_prcs style */}
      <div className="section wide adm_prcs documents_hero">
        <div className="visual">
          <div className="img_wrap">
            <img src="/images/3-1-1.png" alt="태재대학교 모집안내" />
          </div>
          <div className="cont_wrap">
            <div className="inner">
              <div className="tit_section">
                <div className="sub_tit">ADMISSIONS GUIDE</div>
                <h2>모집안내</h2>
                <h3>태재대학교의 입학 전형과 모집요강을 확인할 수 있습니다</h3>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* PDF Viewer Section */}
      <div className="section gray_sec">
        <div className="inner">
          <div className="box_type1">
            <div className="desc">
              <div className="tit">{document.title}</div>
              <div className="left_line_box">
                <em className="box_tit">문서 정보</em>
              </div>
              
              {/* PDF Viewer */}
              <div className="pdf_viewer_wrap">
                <div className="pdf_viewer">
                  <iframe
                    src={`${document.pdfUrl}#toolbar=1&navpanes=1&scrollbar=1&zoom=75`}
                    width="100%"
                    height="900"
                    frameBorder="0"
                    title={document.title}
                  >
                    <p>PDF를 표시할 수 없습니다. <a href={document.pdfUrl} target="_blank" rel="noopener noreferrer">여기를 클릭하여 다운로드</a>하세요.</p>
                  </iframe>
                </div>
              </div>
              
              <div className="btn_wrap">
                <button className="btn_drop">
                  <span>
                    <a 
                      href={document.downloadUrl} 
                      download
                      style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                      PDF 다운로드
                    </a>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
};

export default RecruitmentPage;