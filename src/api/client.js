import axios from 'axios';

// API 베이스 URL - 환경변수에서 가져오거나 기본값 사용
const BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://dev.taejae.ac.kr/api';

// Axios 인스턴스 생성 (싱글톤 패턴)
const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 30000, // 30초 타임아웃
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터 (선택적)
apiClient.interceptors.request.use(
  (config) => {
    // 요청 전 처리 로직 (예: 토큰 추가)
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터 - 공통 에러 처리
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // 공통 에러 처리 로직
    let errorMessage = '요청 처리 중 오류가 발생했습니다.';

    if (error.response) {
      // 서버가 응답을 반환한 경우
      const status = error.response.status;
      const data = error.response.data;

      switch (status) {
        case 400:
          errorMessage = data.message || '잘못된 요청입니다. 입력 정보를 확인해주세요.';
          break;
        case 404:
          errorMessage = '요청한 리소스를 찾을 수 없습니다.';
          break;
        case 500:
          errorMessage = '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.';
          break;
        default:
          errorMessage = data.message || `오류가 발생했습니다. (상태: ${status})`;
      }
    } else if (error.request) {
      // 요청은 전송되었지만 응답을 받지 못한 경우
      errorMessage = '서버에 연결할 수 없습니다. 네트워크 연결을 확인해주세요.';
    }

    // 에러 객체에 사용자 친화적 메시지 추가
    error.userMessage = errorMessage;

    return Promise.reject(error);
  }
);

// 공통 API 호출 함수
export const request = async (config) => {
  try {
    const response = await apiClient(config);
    return { success: true, data: response.data };
  } catch (error) {
    console.error('API 요청 실패:', error);
    return {
      success: false,
      error: error.userMessage || '요청 처리 중 오류가 발생했습니다.'
    };
  }
};

export default apiClient;
