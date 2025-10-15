import React, { useState, useRef, useEffect } from 'react';

const StudentMessagePage = ({ onNavigate }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleEnded = () => setIsPlaying(false);
      const handlePause = () => setIsPlaying(false);
      
      video.addEventListener('ended', handleEnded);
      video.addEventListener('pause', handlePause);
      
      return () => {
        video.removeEventListener('ended', handleEnded);
        video.removeEventListener('pause', handlePause);
      };
    }
  }, []);

  const studentInterviews = [
    {
      id: 1,
      quote: "처음에는 언어 장벽 때문에 좌절하기도 했지만, 한 학기가 끝날 무렵 저 스스로도 영어 실력이 많이 늘었다고 느낍니다. 어려운 순간도 있었지만, 힘들다고 행복하지 않다고 생각한 적은 없었습니다. 오히려 경험들이 저를 더 강하게 만들고 성장에 도움을 주었습니다.",
      student: "재학생",
      color: "#501D83"
    },
    {
      id: 2,
      quote: "수업 당 학생 인원이 16명 정도이며, 교수님들의 관심이 매우 세심합니다. 교수님과의 토론을 통해 학습을 심화하고 발전시킬 수 있었습니다.",
      student: "재학생",
      color: "#00A597"
    },
    {
      id: 3,
      quote: "창의적 사고와 비판적 사고라는 수업은 예상보다 깊이 있는 배움이었습니다. 태재대학교만의 교육과정은 시대 변화에 맞추어 긍정적으로 대응하도록 만들어 줍니다.",
      student: "재학생",
      color: "#6B2C91"
    }
  ];

  const studentMessages = [
    {
      name: "김이준",
      class: "TJ23",
      message: "완성된 상태로 오려고 하지 마세요. 태재대학에서 배우고 느끼며 성장해 나가는 경험이 진짜 값집니다. 방향성과 잘 맞는다면 어떤 모습으로 성장할지 기대하셔도 좋습니다."
    },
    {
      name: "최민우",
      class: "TJ23",
      message: "입학 결정은 제 한계를 도전하고 싶었던 욕망에서 시작했습니다. 주어진 길이 아닌 제가 하고 싶은 길을 찾고 싶었고, 공동체에서 성장하고 싶었습니다."
    },
    {
      name: "Lina Jellibi",
      class: "TJ23",
      message: "태재대만의 글로벌 인게이지먼트 프로그램은 흔치 않은 기회입니다. 세계적 석학들과의 교류와 글로벌 이슈 해결 경험은 큰 자산이 됩니다. 졸업 후 진학이나 국제기구 취업 준비에도 확실한 도움이 됩니다."
    }
  ];

  return (
    <div className="container sub_cont">
      {/* Hero Section - SchedulePage 스타일 */}
      <div className="section wide adm_prcs documents_hero">
        <div className="visual">
          <div className="img_wrap">
            <img src="/images/4-3.png" alt="재학생 메시지" />
          </div>
          <div className="cont_wrap">
            <div className="inner">
              <div className="tit_section">
                <div className="sub_tit">MESSAGE FOR PROSPECTIVE STUDENTS</div>
                <h2>재학생 메시지</h2>
                <h3>태재대학교 재학생들이 예비 태재인에게 전하는 진솔한 이야기</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 통합 메시지 섹션 */}
      <div className="section wide student_message_unified">
        <div className="inner">
          
          {/* 환영 영상 */}
          <div className="welcome_video_section">
            <h3>환영 메시지 영상</h3>
            <div className="video_wrapper" style={{ textAlign: 'center', marginBottom: '60px' }}>
              <div style={{ position: 'relative', display: 'inline-block', maxWidth: '800px', width: '100%' }}>
                <video
                  ref={videoRef}
                  src="/images/student-message-1.mp4"
                  onClick={handleVideoClick}
                  muted
                  poster="/images/student-message-1.png"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                  }}
                />
                
                {/* 재생 오버레이 */}
                {!isPlaying && (
                  <div 
                    onClick={handleVideoClick}
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
              
              <div 
                style={{
                  textAlign: 'center',
                  marginTop: '16px',
                  color: '#666',
                  fontSize: '14px'
                }}
              >
                {!isPlaying ? '클릭하여 재생하세요' : '비디오 재생 중'}
              </div>
            </div>
          </div>

          {/* 인터뷰 말풍선 */}
          <div className="interview_bubbles_section">
            <h3>재학생들이 들려주는 진짜 이야기</h3>
            <div className="speech_bubbles">
              {studentInterviews.map((interview, index) => (
                <div key={interview.id} className={`speech_bubble bubble_${index + 1}`}>
                  <div className="bubble_content">
                    <div className="bubble_quote">
                      {interview.quote}
                    </div>
                    <div className="bubble_tail"></div>
                  </div>
                  <div className="student_avatar" style={{ backgroundColor: interview.color }}>
                    <span>재학생</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 개별 메시지 타임라인 */}
          <div className="message_timeline_section">
            <h3>예비 태재인에게 전하는 메시지</h3>
            <div className="timeline_messages">
              {studentMessages.map((student, index) => (
                <div key={index} className={`timeline_item ${index % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="timeline_avatar">
                    <div className="avatar_circle">
                      {student.name.charAt(student.name.length - 1)}
                    </div>
                    <div className="student_name">{student.class} {student.name}</div>
                  </div>
                  <div className="timeline_message">
                    <div className="message_bubble">
                      <div className="message_text">
                        "{student.message}"
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default StudentMessagePage;