import React, { useState } from 'react';

const Footer = () => {
  const [isFamilySiteOpen, setIsFamilySiteOpen] = useState(false);
  const [isFooterMenuOpen, setIsFooterMenuOpen] = useState(false);

  const toggleFamilySite = () => {
    setIsFamilySiteOpen(!isFamilySiteOpen);
  };

  const toggleFooterMenu = () => {
    setIsFooterMenuOpen(!isFooterMenuOpen);
  };

  return (
    <footer className="footer_wrap">
      <div className="family_site">
        <button 
          type="button" 
          className="fam_btn" 
          onClick={toggleFamilySite}
        >
          <span>Family Site</span>
        </button>
        <ul className={isFamilySiteOpen ? 'open' : ''}>
          <li><a href="#n" target="_blank">포털 시스템</a></li>
          <li><a href="#n" target="_blank">디지털 도서관</a></li>
          <li><a href="#n" target="_blank">메타버스</a></li>
        </ul>
      </div>
      
      <div className={`inner ${isFooterMenuOpen ? 'on' : ''}`}>
        <a href="#n" className="btm_logo">
          태재대학교
        </a>
        <button 
          type="button" 
          className="btn_footer_more" 
          onClick={toggleFooterMenu}
        >
          <span className="blind">menu open</span>
        </button>
        
        <div className="sitemap">
          <ul>
            <li>대학 소개</li>
            <li><a href="#n">태재 소개</a></li>
            <li><a href="#n">비전과 사명</a></li>
            <li><a href="#n">태재대학교 연혁</a></li>
            <li><a href="#n">리더십</a></li>
            <li><a href="#n">태재대학교 한 눈에 보기</a></li>
            <li><a href="#n">태재 캠퍼스 안내</a></li>
          </ul>
          
          <ul>
            <li>입학</li>
            <li><a href="#n">입학 안내</a></li>
            <li><a href="#n">외국인 학생 입학전형</a></li>
            <li><a href="#n">국내 학생 입학 전형</a></li>
            <li><a href="#n">등록과 장학</a></li>
          </ul>
          
          <ul>
            <li>교육</li>
            <li><a href="#n">학부</a></li>
            <li><a href="#n">교수진</a></li>
          </ul>
          
          <ul>
            <li>대학생활</li>
            <li><a href="#n">태재만의 차별화된 교육</a></li>
            <li><a href="#n">글로벌 현장 교육</a></li>
            <li><a href="#n">학생 생활 지원</a></li>
            <li><a href="#n">메타버스</a></li>
            <li><a href="#n">디지털 도서관</a></li>
            <li><a href="#n">태재미래교육포럼</a></li>
          </ul>
          
          <ul>
            <li>학생 활동</li>
            <li><a href="#n">학생 소개</a></li>
            <li><a href="#n">학생 성과</a></li>
            <li><a href="#n">태재 생활</a></li>
          </ul>
          
          <ul>
            <li>태재 소식</li>
            <li><a href="#n">뉴스</a></li>
            <li><a href="#n">공지사항</a></li>
            <li><a href="#n">보도자료</a></li>
            <li><a href="#n">대학 현황</a></li>
          </ul>
        </div>
        
        <ul className="user">
          <li><a href="#n">예비 신입생</a></li>
          <li><a href="#n">재학생</a></li>
          <li><a href="#n">교수진</a></li>
          <li><a href="#n">방문객</a></li>
        </ul>
      </div>
      
      <div className="foot_util">
        <ul className="inform">
          <li><a href="https://www.taejae.ac.kr/" target="_blank">태재대학교 홈페이지</a></li>
        </ul>
        
        <div className="sns_wrap">
          <a href="https://www.youtube.com/@taejaeuniversity" className="lnk_youtube" target="_blank" rel="noopener noreferrer">youtube</a>
          <a href="https://www.instagram.com/taejae_admissions/?igsh=ODl6NDQ2ODRwNThl" className="lnk_instagram" target="_blank" rel="noopener noreferrer">instagram</a>
        </div>
      </div>
      
      <div className="co_info">
        <address>
          <p>태재대학교</p>
          <span>
            서울 종로구 창덕궁5길 22-8 (우편번호 03051)
            <a href="mailto:info@taejae.ac.kr" className="mail">문의 : info@taejae.ac.kr</a><br/>
            Copyright 2025 Taejae University All Rights Reserved.
          </span>
        </address>
        
        <div className="footer_banner">
          <a href="#n" target="_blank">
            <img src="/resources/img/img_banner_nal.png" alt="국회도서관" />
          </a>
          <a href="#n" target="_blank">
            <img src="/resources/img/img_banner_halyym.png" alt="한림대학교" />
          </a>
          <a href="#n" target="_blank">
            <img src="/resources/img/img_banner_udemy.png" alt="udemy" />
          </a>
          <a href="#n" target="_blank">
            <img src="/resources/img/img_banner_hana.png" alt="하나은행" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;