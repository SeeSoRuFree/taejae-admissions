import React from 'react';

const Stories = () => {
  return (
    <div className="section wide">
      <div className="chapt_wrap">
        {/* Mobile Version */}
        <section>
          <img src="/resources/img/mob/img-story@2x_ko.png" alt="" />
          <img src="/resources/img/mob/img-success@2x_ko.png" alt="" />
        </section>

        {/* Desktop Version */}
        <ul className="pc">
          <li>
            <h3>
              태재미래<br/>
              교육포럼<br/> 
              <span className="year">
                <img src="/resources/img/img-year-2024.svg" alt="" />
              </span>
            </h3>
            <div className="inbox bg_purple">
              교육계의 다보스 포럼을 지향하는<br/>
              태재미래교육포럼을 지금 만나보세요.
            </div>
            <div className="inbox_info">
              <div>이리나 보코바</div>
              <div>제10대 유네스코 사무총장</div>
            </div>
            <img src="/resources/img/img_main_ss01.png" alt="" />
          </li>
          
          <li className="main_sc">
            <h3>학생 생활 지원</h3>
            <div className="inbox bg_green">
              태재대학교는 학생들이 지적 역량과 자기 역량, 심리 · 사회적 역량, 글로벌 시민의식을 두루 갖춘 성숙한 인간으로 성장하도록 지원합니다. 
              학생성공원은 세계적으로 유명한 교수진과 전문가로 구성되어 있으며, 차별화된 교육 과정에서 학생들을 돕기 위해 언제나 준비되어 있습니다.
            </div>
            <img src="/resources/img/img_main_ss02.png" alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Stories;