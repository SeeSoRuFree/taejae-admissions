import React, { useState, useRef, useEffect } from 'react';

const TalentDiscoveryPage = ({ onNavigate }) => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);

  const handleVideoClick1 = () => {
    if (videoRef1.current) {
      if (videoRef1.current.paused) {
        videoRef1.current.play();
        setIsPlaying1(true);
      } else {
        videoRef1.current.pause();
        setIsPlaying1(false);
      }
    }
  };

  const handleVideoClick2 = () => {
    if (videoRef2.current) {
      if (videoRef2.current.paused) {
        videoRef2.current.play();
        setIsPlaying2(true);
      } else {
        videoRef2.current.pause();
        setIsPlaying2(false);
      }
    }
  };

  useEffect(() => {
    const video1 = videoRef1.current;
    const video2 = videoRef2.current;
    
    if (video1) {
      const handleEnded1 = () => setIsPlaying1(false);
      const handlePause1 = () => setIsPlaying1(false);
      
      video1.addEventListener('ended', handleEnded1);
      video1.addEventListener('pause', handlePause1);
      
      return () => {
        video1.removeEventListener('ended', handleEnded1);
        video1.removeEventListener('pause', handlePause1);
      };
    }

    if (video2) {
      const handleEnded2 = () => setIsPlaying2(false);
      const handlePause2 = () => setIsPlaying2(false);
      
      video2.addEventListener('ended', handleEnded2);
      video2.addEventListener('pause', handlePause2);
      
      return () => {
        video2.removeEventListener('ended', handleEnded2);
        video2.removeEventListener('pause', handlePause2);
      };
    }
  }, []);

  return (
    <div className="container sub_cont adm_wrap">
      {/* Header Section */}
      <div className="section wide header_con talent_discovery_header">
        <div className="visual">
          <div className="img_wrap">
            <img src="/images/talent-discovery-header-bg.png" alt="태재가 찾아가는 미래 인재 발굴" />
          </div>
          <div className="cont_wrap">
            <div className="inner">
              <div className="tit_section">
                <div className="sub_tit">FINDING FUTURE GLOBAL LEADERS</div>
                <h2>태재가 찾아가는 미래 인재 발굴</h2>
                <h3>조화롭고 지속 가능한 미래사회를 위한<br/>혁신적이고 자기주도적인 글로벌 인재</h3>
              </div>
              <div className="desc">
                <p className="main_desc">
                  태재대학교는 조화롭고 지속 가능한 미래사회를 위한 혁신적이고 자기주도적인 글로벌 인재를 양성하고자 합니다. 
                  입학전형에서도 <strong className="core_competencies">6가지 핵심 역량(비판적사고, 창의적 사고, 자기주도적 학습, 글로벌 지속가능성, 의사소통 및 협력, 다양성과 공감)</strong>을 바탕으로 학생의 잠재력과 성장 과정을 종합적으로 평가합니다.
                </p>
                <p className="main_desc">
                  우리는 각자의 관심 분야에 열정적으로 몰두하면서도 동료와 사회에 관심을 기울이는 인재를 전 세계 어디로든 찾아갑니다. 
                  선발된 학생들이 미래의 복잡한 과제들을 해결할 수 있는 문제 해결력을 지닌 세계 시민으로 성장할 수 있도록 지원합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* 태재가 기다리는 예비 태재인 */}
      <div className="section wide purple_sec">
        <div className="inner">
          <div className="manifesto_layout">
            <div className="content_area">
              <div className="header_content">
                <strong className="tit">태재가 기다리는 예비 태재인</strong>
              </div>
              
              <div className="manifesto_content">
                <div className="manifesto_item">
                  <div className="manifesto_number">01</div>
                  <p>태재대학교가 기대하는 미래 인재는 끊임없이 스스로 생각하고 변화하는 미래에 대한 호기심을 가지고 능동적으로 대처하고자 하는 의지를 가진 인재입니다.</p>
                </div>
                
                <div className="manifesto_item">
                  <div className="manifesto_number">02</div>
                  <p>고교 생활 중 주어진 학업 또는 학업외 기회에서 고교 교육과정에 따라 주도적이고 창의적이며 개성 넘치는 각자의 역량을 발휘한 인재를 기다립니다.</p>
                </div>
                
                <div className="manifesto_item">
                  <div className="manifesto_number">03</div>
                  <p>적성과 관심이 있는 분야에 있어서 깊이 있고 의미 있는 열정과 끈기를 보이고, 협력적 과제 수행 경험 등 동료들과의 학교생활에서 개인의 능력을 넘어 주변을 이롭게 하려는 노력을 기울인 인재를 기다립니다.</p>
                </div>
                
                <div className="manifesto_item">
                  <div className="manifesto_number">04</div>
                  <p>자신만의 의지와 끈기로 도전적으로 문제를 해결해보고자 노력해보았던, 서로 다른 장점을 지닌 예비 태재인들을 환영합니다.</p>
                </div>
              </div>
            </div>
            
            <div className="visual_area">
              <div className="floating_visuals">
                <div className="clip_wrap">
                  <div className="str_vis_1">
                    <div className="clip_inner">
                      <img className="clip_1" src="/resources/img/img_str_main01.png" alt="" />
                    </div>
                  </div>
                  <div className="str_vis_2">
                    <div className="clip_inner">
                      <img className="clip_2" src="/resources/img/img_str_main02.png" alt="" />
                    </div>
                  </div>
                  <div className="str_vis_3">
                    <div className="clip_inner">
                      <img className="clip_3" src="/resources/img/img_str_main03.png" alt="" />
                    </div>
                  </div>
                  <div className="str_vis_4">
                    <div className="clip_inner">
                      <img className="clip_4" src="/resources/img/img_str_main04.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="section">
        <div className="inner">

          {/* 자기 점검 질문 */}
          <div className="self_check_questions">
            <h3>자기 점검 질문</h3>
            <div className="question_grid">
              <div className="question_card">
                <div className="question_icon">💡</div>
                <p>좋아하는 분야에 열정을 쏟은 경험이 있나요?</p>
              </div>
              <div className="question_card">
                <div className="question_icon">❓</div>
                <p>질문하기를 좋아하나요?</p>
              </div>
              <div className="question_card">
                <div className="question_icon">🔍</div>
                <p>새로운 지식에 대한 더 알고 싶은 호기심이 생기나요?</p>
              </div>
              <div className="question_card">
                <div className="question_icon">🎯</div>
                <p>어려웠지만 도전하여 성취감을 느껴본 적이 있나요?</p>
              </div>
              <div className="question_card">
                <div className="question_icon">🚀</div>
                <p>불확실한 미래 사회를 이끌 수 있는 역량을 준비하고 싶은가요?</p>
              </div>
              <div className="question_card">
                <div className="question_icon">🎓</div>
                <p>기존 대학의 형식에서 벗어난 미래형 대학 교육에 도전하고 싶은가요?</p>
              </div>
            </div>
            <div className="welcome_message">
              <strong>여러분을 태재대학교가 환영합니다!</strong>
            </div>
          </div>
        </div>
      </div>


      {/* 재학생 입학후기 영상 */}
      <div className="section">
        <div className="inner">
          <div className="tit_txt_box type3">
            <strong className="tit">재학생 입학후기 영상</strong>
          </div>
          
          <div className="cont_box box_between">
            <div className="img">
              <div className="video_wrapper" style={{ position: 'relative', width: '100%' }}>
                <video
                  ref={videoRef1}
                  src="/images/student-message-1.mp4"
                  onClick={handleVideoClick1}
                  muted
                  poster="/images/korean-feature-talent-1.png"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                  }}
                />
                
                {/* 재생 오버레이 */}
                {!isPlaying1 && (
                  <div 
                    onClick={handleVideoClick1}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '80px',
                      height: '80px',
                      backgroundColor: 'rgba(80, 29, 131, 0.9)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 20px rgba(80, 29, 131, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'rgba(80, 29, 131, 1)';
                      e.target.style.transform = 'translate(-50%, -50%) scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'rgba(80, 29, 131, 0.9)';
                      e.target.style.transform = 'translate(-50%, -50%) scale(1)';
                    }}
                  >
                    <span style={{
                      fontSize: '28px',
                      color: 'white',
                      marginLeft: '4px'
                    }}>▶</span>
                  </div>
                )}
              </div>
            </div>
            <div className="img">
              <div className="video_wrapper" style={{ position: 'relative', width: '100%' }}>
                <video
                  ref={videoRef2}
                  src="/images/student-message-2.mp4"
                  onClick={handleVideoClick2}
                  muted
                  poster="/images/korean-feature-talent-2.png"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                  }}
                />
                
                {/* 재생 오버레이 */}
                {!isPlaying2 && (
                  <div 
                    onClick={handleVideoClick2}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '80px',
                      height: '80px',
                      backgroundColor: 'rgba(80, 29, 131, 0.9)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 20px rgba(80, 29, 131, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'rgba(80, 29, 131, 1)';
                      e.target.style.transform = 'translate(-50%, -50%) scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'rgba(80, 29, 131, 0.9)';
                      e.target.style.transform = 'translate(-50%, -50%) scale(1)';
                    }}
                  >
                    <span style={{
                      fontSize: '28px',
                      color: 'white',
                      marginLeft: '4px'
                    }}>▶</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default TalentDiscoveryPage;