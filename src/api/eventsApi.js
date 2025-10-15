import { request } from './client';

/**
 * 날짜와 시간을 ISO 8601 형식으로 변환
 * @param {string} date - 'YYYY-MM-DD' 형식의 날짜
 * @param {string} time - 'HH:mm' 형식의 시간
 * @returns {string} ISO 8601 형식의 datetime 문자열
 */
const formatDateTime = (date, time) => {
  if (!date || !time) return null;
  // 날짜와 시간을 결합하여 ISO 8601 형식으로 변환
  return new Date(`${date}T${time}:00`).toISOString();
};

/**
 * formData에서 희망 날짜/시간 3개를 추출하여 ISO 형식으로 변환
 * @param {Object} formData - 폼 데이터
 * @returns {Array} 최대 3개의 ISO datetime 문자열 배열
 */
const extractPreferredDatetimes = (formData) => {
  const datetimes = [];

  for (let i = 1; i <= 3; i++) {
    const date = formData[`preferredDates_${i}_date`];
    const time = formData[`preferredDates_${i}_time`];
    const datetime = formatDateTime(date, time);

    if (datetime) {
      datetimes.push(datetime);
    }
  }

  return datetimes;
};

/**
 * 찾아가는 태재설명회 신청
 * POST /api/admission/public/v1/outreach-sessions
 */
export const submitOutreachSession = async (formData) => {
  const [datetime1, datetime2, datetime3] = extractPreferredDatetimes(formData);

  const payload = {
    applicantName: formData.name,
    organization: formData.organization,
    email: formData.email,
    phone: formData.phone,
    participantCount: parseInt(formData.participants, 10),
    preferredDatetime1: datetime1,
    preferredDatetime2: datetime2,
    preferredDatetime3: datetime3
  };

  return await request({
    method: 'POST',
    url: '/admission/public/v1/outreach-sessions',
    data: payload
  });
};

/**
 * 교사 대상 설명회 신청
 * POST /api/admission/public/v1/college-counselors
 */
export const submitCollegeCounselorSession = async (formData) => {
  const [datetime1, datetime2, datetime3] = extractPreferredDatetimes(formData);

  const payload = {
    name: formData.name,
    school: formData.school,
    email: formData.email,
    phone: formData.phone,
    participantCount: parseInt(formData.participants, 10),
    sessionType: 'VISIT', // 기본값으로 VISIT 설정 (필요시 formData에서 받을 수 있음)
    preferredDatetime1: datetime1,
    preferredDatetime2: datetime2,
    preferredDatetime3: datetime3,
    dormitoryTourRequested: false // 기본값 false (필요시 formData에서 받을 수 있음)
  };

  return await request({
    method: 'POST',
    url: '/admission/public/v1/college-counselors',
    data: payload
  });
};

/**
 * 온라인 설명회 신청
 * POST /api/admission/public/v1/online-sessions
 */
export const submitOnlineSession = async (formData) => {
  const [datetime1, datetime2, datetime3] = extractPreferredDatetimes(formData);

  // participantType을 API 형식에 맞게 변환
  const applicantTypeMap = {
    'student': 'STUDENT',
    'parent': 'PARENT',
    'teacher': 'HIGH_SCHOOL_TEACHER',
    'other': 'ETC'
  };

  const payload = {
    applicantName: formData.name,
    organization: formData.organization,
    email: formData.email,
    contact: formData.phone,
    applicantType: applicantTypeMap[formData.participantType] || 'OTHER',
    participantCount: parseInt(formData.participants, 10),
    preferredDatetime1: datetime1,
    preferredDatetime2: datetime2,
    preferredDatetime3: datetime3
  };

  return await request({
    method: 'POST',
    url: '/admission/public/v1/online-sessions',
    data: payload
  });
};

/**
 * Come & See 프로그램 신청
 * POST /api/admission/public/v1/come-and-see
 */
export const submitComeAndSeeProgram = async (formData) => {
  const [datetime1, datetime2, datetime3] = extractPreferredDatetimes(formData);

  // participantType을 API 형식에 맞게 변환
  const participantTypeMap = {
    'student': 'STUDENT',
    'parent': 'PARENT',
    'teacher': 'HIGH_SCHOOL_TEACHER',
    'other': 'ETC'
  };

  const payload = {
    name: formData.name,
    school: formData.school,
    participantType: participantTypeMap[formData.participantType] || 'STUDENT',
    email: formData.email,
    phone: formData.phone,
    participantCount: parseInt(formData.participants, 10),
    preferredDatetime1: datetime1,
    preferredDatetime2: datetime2,
    preferredDatetime3: datetime3
  };

  return await request({
    method: 'POST',
    url: '/admission/public/v1/come-and-see',
    data: payload
  });
};

/**
 * 1:1 입학 상담 신청
 * POST /api/admission/public/v1/consultations
 */
export const submitConsultation = async (formData) => {
  const [datetime1, datetime2, datetime3] = extractPreferredDatetimes(formData);

  // consultationType을 API 형식에 맞게 변환
  const consultationTypeMap = {
    'online': 'ONLINE',
    'offline': 'OFFLINE'
  };

  // applicantType을 API 형식에 맞게 변환
  const applicantTypeMap = {
    'student': 'STUDENT',
    'parent': 'PARENT',
    'teacher': 'HIGH_SCHOOL_TEACHER',
    'other': 'ETC'
  };

  const payload = {
    applicantName: formData.name,
    organization: formData.organization,
    consultationType: consultationTypeMap[formData.consultationType] || 'INDIVIDUAL',
    email: formData.email,
    contact: formData.phone,
    applicantType: applicantTypeMap[formData.participantType] || 'STUDENT',
    participantCount: parseInt(formData.participants, 10),
    preferredDatetime1: datetime1,
    preferredDatetime2: datetime2,
    preferredDatetime3: datetime3,
    preQuestions: formData.questions || '',
    privacyAgreed: true
  };

  return await request({
    method: 'POST',
    url: '/admission/public/v1/consultations',
    data: payload
  });
};

/**
 * 이벤트 타입에 따라 적절한 API 함수 호출
 * @param {string} eventId - 이벤트 ID (teacher, comeAndSee, visiting, online, consultation)
 * @param {Object} formData - 폼 데이터
 * @returns {Promise} API 응답
 */
export const submitEventApplication = async (eventId, formData) => {
  switch (eventId) {
    case 'teacher':
      return await submitCollegeCounselorSession(formData);
    case 'comeAndSee':
      return await submitComeAndSeeProgram(formData);
    case 'visiting':
      return await submitOutreachSession(formData);
    case 'online':
      return await submitOnlineSession(formData);
    case 'consultation':
      return await submitConsultation(formData);
    default:
      return {
        success: false,
        error: '알 수 없는 이벤트 유형입니다.'
      };
  }
};
