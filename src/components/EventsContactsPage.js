import React, { useState, useMemo } from 'react';
import '../styles/EventsContactsPage.css';
import { submitEventApplication } from '../api/eventsApi';
import Toast from './Toast';

const EventsContactsPage = ({ onNavigate }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showMapModal, setShowMapModal] = useState(false);
  const [toast, setToast] = useState(null);


  const events = [
    {
      id: 'teacher',
      title: '진로진학교사 대상 간담회',
      subtitle: 'For High School Teachers',
      description: '고등학교 진로 진학 담당 선생님을 위한 맞춤형 간담회 및 설명회',
      details: '입학전형 안내, 교육과정 소개, 학생 생활 및 글로벌 로테이션 프로그램 설명, 질의응답',
      image: '/images/5-1.png',
      theme: 'purple',
      color: '#501D83',
      borderColor: '#501D83',
      fields: ['name', 'school', 'email', 'phone', 'participants', 'preferredDates']
    },
    {
      id: 'comeAndSee',
      title: 'Come & See 프로그램',
      subtitle: 'Campus Visit Program',
      description: '캠퍼스를 직접 방문하여 체험하는 종합 프로그램',
      details: '캠퍼스 투어, 기숙사 견학, 전형 안내, Q&A까지 알찬 현장 체험',
      image: '/images/5-2.png',
      theme: 'teal',
      color: '#00A597',
      borderColor: '#00A597',
      fields: ['name', 'school', 'participantType', 'email', 'phone', 'participants', 'preferredDates']
    },
    {
      id: 'visiting',
      title: '찾아가는 태재설명회',
      subtitle: 'On-site Information Sessions',
      description: '학교, 기관, 단체를 직접 방문하는 맞춤형 설명회',
      details: '전형 안내, 교육과정, 학교생활 소개까지 참여자 맞춤형 구성',
      image: '/images/5-3.png',
      theme: 'gray',
      color: '#6B2C91',
      borderColor: '#6B2C91',
      fields: ['name', 'organization', 'email', 'phone', 'participants', 'preferredDates']
    },
    {
      id: 'online',
      title: '온라인 설명회',
      subtitle: 'Online Information Sessions',
      description: 'ZOOM을 활용한 실시간 온라인 설명회',
      details: '시간과 장소 제약 없이 전국 어디서든 참여 가능, 실시간 질의응답',
      image: '/images/5-4.png',
      theme: 'blue',
      color: '#4ECDC4',
      borderColor: '#4ECDC4',
      fields: ['name', 'organization', 'email', 'phone', 'participantType', 'participants', 'preferredDates']
    },
    {
      id: 'consultation',
      title: '1:1 입학 상담',
      subtitle: 'Individual Consultation',
      description: '개별 맞춤형 입학 상담 프로그램',
      details: '2025년 9월 1일 ~ 11월 30일, 월~목 10시~16시 운영',
      image: '/images/5-5.png',
      theme: 'red',
      color: '#FF6B6B',
      borderColor: '#FF6B6B',
      fields: ['name', 'organization', 'consultationType', 'email', 'phone', 'participantType', 'participants', 'preferredDates', 'questions']
    }
  ];

  const fieldLabels = {
    name: '신청자 이름',
    school: '소속 학교',
    organization: '소속 학교/기관명',
    participantType: '참가자 유형',
    consultationType: '상담 유형',
    email: '이메일',
    phone: '휴대전화번호',
    participants: '신청 인원',
    preferredDates: '희망 날짜 및 시간',
    questions: '사전 질문'
  };

  const handleEventSelect = (event) => {
    setSelectedEvent(event);
    setFormData({});
    setPrivacyAgreed(false);
    // 접근성: 모달이 열릴 때 포커스 이동
    setTimeout(() => {
      const modal = document.querySelector('.modal_content');
      if (modal) {
        modal.focus();
      }
    }, 100);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Form validation logic
  const isFormValid = useMemo(() => {
    if (!selectedEvent || !privacyAgreed) {
      console.log('DEBUG: Missing selectedEvent or privacyAgreed:', { selectedEvent: selectedEvent?.id, privacyAgreed });
      return false;
    }
    
    const baseRequiredFields = ['name', 'email', 'phone', 'participants'];
    
    // Event-specific required fields
    const eventRequiredFields = [];
    if (selectedEvent.id === 'teacher' || selectedEvent.id === 'comeAndSee') {
      eventRequiredFields.push('school');
    } else if (selectedEvent.id === 'visiting' || selectedEvent.id === 'online' || selectedEvent.id === 'consultation') {
      eventRequiredFields.push('organization');
    }
    if (selectedEvent.id === 'comeAndSee' || selectedEvent.id === 'online') {
      eventRequiredFields.push('participantType');
    }
    if (selectedEvent.id === 'consultation') {
      eventRequiredFields.push('consultationType');
    }
    
    const allRequiredFields = [...baseRequiredFields, ...eventRequiredFields];
    
    // Check basic required fields
    const basicFieldsValid = allRequiredFields.every(field => 
      formData[field] && formData[field].trim() !== ''
    );
    
    // Check if at least one preferred date is filled
    const hasPreferredDate = [1, 2, 3].some(num => 
      formData[`preferredDates_${num}_date`] && formData[`preferredDates_${num}_time`]
    );
    
    // Debug logging
    console.log('DEBUG: Form validation:', {
      formData,
      allRequiredFields,
      basicFieldsValid,
      hasPreferredDate,
      privacyAgreed,
      final: basicFieldsValid && hasPreferredDate
    });
    
    return basicFieldsValid && hasPreferredDate;
  }, [formData, selectedEvent, privacyAgreed]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) {
      setToast({
        message: '모든 필수 항목을 입력해 주세요.',
        type: 'error'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // API 호출
      const result = await submitEventApplication(selectedEvent.id, formData);

      setIsSubmitting(false);

      if (result.success) {
        // 성공 시
        setShowSuccess(true);
        setToast({
          message: '신청이 완료되었습니다! 빠른 시간 내에 연락드리겠습니다.',
          type: 'success',
          duration: 3000
        });

        // Auto close modal after 3 seconds
        setTimeout(() => {
          setShowSuccess(false);
          setSelectedEvent(null);
          setFormData({});
          setPrivacyAgreed(false);
        }, 3000);
      } else {
        // 실패 시 - 명확한 에러 메시지 표시
        setToast({
          message: result.error || '신청 처리 중 오류가 발생했습니다.',
          type: 'error',
          duration: 5000
        });
      }
    } catch (error) {
      setIsSubmitting(false);
      // 예상치 못한 에러 처리
      setToast({
        message: '신청 처리 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
        type: 'error',
        duration: 5000
      });
      console.error('Submission error:', error);
    }
  };

  const renderFormField = (field) => {
    const isRequired = ['name', 'email', 'phone', 'participants', 'preferredDates'].includes(field) ||
                      (field === 'school' && (selectedEvent?.id === 'teacher' || selectedEvent?.id === 'comeAndSee')) ||
                      (field === 'organization' && (selectedEvent?.id === 'visiting' || selectedEvent?.id === 'online' || selectedEvent?.id === 'consultation')) ||
                      (field === 'participantType' && (selectedEvent?.id === 'comeAndSee' || selectedEvent?.id === 'online')) ||
                      (field === 'consultationType' && selectedEvent?.id === 'consultation');

    switch (field) {
      case 'participantType':
        return (
          <div key={field} className="form_field">
            <label>{fieldLabels[field]}{isRequired && '*'}</label>
            <select 
              value={formData[field] || ''} 
              onChange={(e) => handleInputChange(field, e.target.value)}
              required={isRequired}
            >
              <option value="">선택해 주세요</option>
              <option value="student">학생</option>
              <option value="parent">학부모</option>
              <option value="teacher">교사</option>
              <option value="other">기타</option>
            </select>
          </div>
        );
      
      case 'consultationType':
        return (
          <div key={field} className="form_field">
            <label>{fieldLabels[field]}{isRequired && '*'}</label>
            <select 
              value={formData[field] || ''} 
              onChange={(e) => handleInputChange(field, e.target.value)}
              required={isRequired}
            >
              <option value="">선택해 주세요</option>
              <option value="online">온라인</option>
              <option value="offline">오프라인</option>
            </select>
          </div>
        );
      
      case 'participants':
        return (
          <div key={field} className="form_field">
            <label>{fieldLabels[field]}{isRequired && '*'}</label>
            <select 
              value={formData[field] || ''} 
              onChange={(e) => handleInputChange(field, e.target.value)}
              required={isRequired}
            >
              <option value="">선택해 주세요</option>
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}명</option>
              ))}
            </select>
          </div>
        );
      
      case 'preferredDates':
        return (
          <div key={field} className="form_field full-width">
            <label>{fieldLabels[field]}{isRequired && '*'} (최대 3개)</label>
            <div className="date_inputs">
              {[1, 2, 3].map(num => (
                <div key={num} className="datetime_input">
                  <label className="priority_label">{num}순위</label>
                  <div className="datetime_fields">
                    <input
                      type="date"
                      placeholder="날짜"
                      value={formData[`${field}_${num}_date`] || ''}
                      onChange={(e) => handleInputChange(`${field}_${num}_date`, e.target.value)}
                    />
                    <select
                      onChange={(e) => handleInputChange(`${field}_${num}_time`, e.target.value)}
                      value={formData[`${field}_${num}_time`] || ''}
                    >
                      <option value="">시간 선택</option>
                      <option value="09:00">오전 9시</option>
                      <option value="10:00">오전 10시</option>
                      <option value="11:00">오전 11시</option>
                      <option value="12:00">오후 12시</option>
                      <option value="13:00">오후 1시</option>
                      <option value="14:00">오후 2시</option>
                      <option value="15:00">오후 3시</option>
                      <option value="16:00">오후 4시</option>
                      <option value="17:00">오후 5시</option>
                      <option value="18:00">오후 6시</option>
                    </select>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'questions':
        return (
          <div key={field} className="form_field full-width">
            <label>{fieldLabels[field]} (선택)</label>
            <textarea 
              value={formData[field] || ''} 
              onChange={(e) => handleInputChange(field, e.target.value)}
              placeholder="상담 시 궁금한 내용을 미리 적어주세요"
              rows={4}
            />
          </div>
        );
      
      default:
        return (
          <div key={field} className="form_field">
            <label>{fieldLabels[field]}{isRequired && '*'}</label>
            <input 
              type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
              value={formData[field] || ''} 
              onChange={(e) => handleInputChange(field, e.target.value)}
              required={isRequired}
            />
          </div>
        );
    }
  };

  return (
    <div className="container sub_cont events-contacts-page">
      {/* Hero Section */}
      <div className="section wide events-hero">
        <div className="visual">
          <div className="cont_wrap">
            <div className="inner">
              <div className="tit_section">
                <div className="sub_tit">EVENTS & CONTACTS</div>
                <h2>입학설명회 & 상담</h2>
                <h3>태재대학교와 함께하는 여정의 시작</h3>
              </div>
              <div className="desc">
                <p className="main_desc">
                  다양한 형태의 입학 설명회와 상담 프로그램을 통해 태재대학교를 더 자세히 알아보세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="section events-programs-section">
        <div className="inner">
          <div className="tit_txt_box type3">
            <strong className="tit">입학설명회 프로그램</strong>
            <p className="txt">
              관심 있는 프로그램을 선택하여 바로 신청하세요
            </p>
          </div>
          
          <div className="step_cont">
            <ul>
              {events.map((event) => (
                <li key={event.id}>
                  <div 
                    className="cont" 
                    style={{ 
                      '--border-color': event.borderColor,
                      '--event-color': event.color 
                    }}
                  >
                    <div className="event-image">
                      <img src={event.image} alt={event.title} />
                    </div>
                    <div className="tit">
                      <strong>{event.title}</strong>
                    </div>
                    <div className="subtitle">{event.subtitle}</div>
                    <p>{event.description}</p>
                    <p className="event-details">{event.details}</p>
                    <button 
                      className="btn_drop"
                      onClick={() => handleEventSelect(event)}
                      aria-label={`${event.title} 신청하기`}
                    >
                      <span>지금 신청하기</span>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Modal Popup for Application Form */}
      {selectedEvent && (
        <div 
          className="modal_overlay" 
          onClick={() => setSelectedEvent(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div 
            className="modal_content modal_content_large" 
            onClick={(e) => e.stopPropagation()}
            tabIndex={-1}
          >
            <button 
              className="modal_close" 
              onClick={() => setSelectedEvent(null)}
              aria-label="모달 닫기"
            >×</button>
            
            <div className="modal_body">
              {showSuccess ? (
                <div className="success_message">
                  <div className="success_icon">✓</div>
                  <h3>신청이 완료되었습니다!</h3>
                  <p>빠른 시간 내에 연락드리겠습니다.</p>
                  <div className="success_note">
                    이 창은 3초 후 자동으로 닫힙니다.
                  </div>
                </div>
              ) : (
                <>
                  <div className="modal_header">
                    <h3 id="modal-title">{selectedEvent.title}</h3>
                    <p className="modal_subtitle">{selectedEvent.subtitle}</p>
                    <p className="modal_details">{selectedEvent.details}</p>
                  </div>
                  
                  <form className="application_form" onSubmit={handleSubmit}>
                <div className="form_fields">
                  {selectedEvent.fields.map(field => renderFormField(field))}
                </div>
                
                <div className="privacy_agreement">
                  <div className="agreement_header">
                    <h4>개인정보 수집 및 이용 동의</h4>
                  </div>
                  <div className="agreement_content">
                    <ul>
                      <li><strong>수집항목:</strong> 이름, 연락처, 소속, 이메일</li>
                      <li><strong>목적:</strong> 입학 상담 접수 및 안내</li>
                      <li><strong>보유기간:</strong> 상담 종료 후 1년간 보관 후 즉시 파기</li>
                      <li><strong>동의 거부 시:</strong> 신청 불가</li>
                    </ul>
                  </div>
                  <div className="agreement_checkbox">
                    <label>
                      <input 
                        type="checkbox" 
                        checked={privacyAgreed}
                        onChange={(e) => setPrivacyAgreed(e.target.checked)}
                      />
                      개인정보 수집 및 이용에 동의합니다. (필수)
                    </label>
                  </div>
                </div>
                
                <div className="form_actions">
                  <button 
                    type="button" 
                    className="btn_drop btn-cancel"
                    onClick={() => setSelectedEvent(null)}
                  >
                    <span>취소</span>
                  </button>
                  <button 
                    type="submit" 
                    className="btn_drop btn-submit"
                    disabled={isSubmitting || !isFormValid}
                    style={{ '--submit-color': selectedEvent.color }}
                  >
                    <span>{isSubmitting ? '신청 중...' : '신청 완료'}</span>
                  </button>
                </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <div className="section events-contact-section">
        <div className="inner">
          <div className="tit_txt_box type3">
            <strong className="tit">입학 문의</strong>
            <p className="txt">
              태재대학교 입학 관련 모든 궁금증을 해결해 드립니다
            </p>
          </div>
          
          <div className="board list contact-info">
            <div className="info">
              <strong className="info_tit">전화 문의</strong>
              <p className="info_txt">02-3676-5556 (평일 09:00 ~ 18:00)</p>
              <div className="info_action">
                <a href="tel:02-3676-5556" className="contact-btn">
                  전화 상담
                </a>
              </div>
            </div>
            
            <div className="info">
              <strong className="info_tit">이메일 문의</strong>
              <p className="info_txt">osra@taejae.ac.kr (24시간 접수 가능)</p>
              <div className="info_action">
                <a href="mailto:osra@taejae.ac.kr" className="contact-btn">
                  이메일 문의
                </a>
              </div>
            </div>
            
            <div className="info">
              <strong className="info_tit">방문 상담</strong>
              <p className="info_txt">서울 종로구 창덕궁5길 22-8 (사전예약필수)</p>
              <div className="info_action">
                <button 
                  className="contact-btn"
                  onClick={() => setShowMapModal(true)}
                  type="button"
                >
                  지도 보기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Selection Modal */}
      {showMapModal && (
        <div 
          className="modal_overlay" 
          onClick={() => setShowMapModal(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="map-modal-title"
        >
          <div 
            className="modal_content modal_content_small" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="modal_close" 
              onClick={() => setShowMapModal(false)}
              aria-label="모달 닫기"
            >×</button>
            
            <div className="modal_body">
              <div className="map_selection">
                <button 
                  className="map_service_btn google"
                  onClick={() => {
                    window.open('https://maps.google.com/maps?q=서울+종로구+창덕궁5길+22-8', '_blank');
                    setShowMapModal(false);
                  }}
                >
                  <span className="service_name">구글맵</span>
                  <span className="service_desc">Google Maps</span>
                </button>
                
                <button 
                  className="map_service_btn naver"
                  onClick={() => {
                    window.open('https://map.naver.com/v5/search/서울+종로구+창덕궁5길+22-8', '_blank');
                    setShowMapModal(false);
                  }}
                >
                  <span className="service_name">네이버지도</span>
                  <span className="service_desc">Naver Map</span>
                </button>
                
                <button 
                  className="map_service_btn kakao"
                  onClick={() => {
                    window.open('https://map.kakao.com/link/search/서울+종로구+창덕궁5길+22-8', '_blank');
                    setShowMapModal(false);
                  }}
                >
                  <span className="service_name">카카오맵</span>
                  <span className="service_desc">Kakao Map</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast 알림 */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          duration={toast.duration || 3000}
          onClose={() => setToast(null)}
        />
      )}

    </div>
  );
};

export default EventsContactsPage;