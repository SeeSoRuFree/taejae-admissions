import React from 'react';

const Faculty = () => {
  return (
    <div className="section wide">
      <div className="fct_con">
        <div className="inner pc">
          <h3>교수진</h3>
          <p className="msg">
            전 세계적인 지식 리더이자 미래 사회에 영감을 불어넣는<br/>
            태재대학교의 우수한 교수진을 만나보세요!
          </p>
        </div>
        <picture>
          <source 
            srcSet="/resources/img/img_main_faculty-lg.png" 
            media="all and (min-width: 768px)" 
          />
          <source 
            srcSet="/resources/img/img_main_faculty-sm_ko.png" 
            media="all and (max-width: 768px)" 
          />
          <img src="/resources/img/img_main_faculty-lg.png" alt="" />
        </picture>
      </div>
    </div>
  );
};

export default Faculty;