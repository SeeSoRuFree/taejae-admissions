import { request } from './client';

/**
 * 입학처 공지사항 목록 조회
 * GET /api/admission/public/v1/notices
 *
 * @param {number} page - 페이지 번호 (0부터 시작)
 * @param {number} size - 페이지 크기
 * @returns {Promise} API 응답
 */
export const getNoticesList = async (page = 0, size = 12) => {
  return await request({
    method: 'GET',
    url: '/admission/public/v1/notices',
    params: {
      page,
      size
    }
  });
};

/**
 * 입학처 공지사항 상세 조회
 * GET /api/admission/public/v1/notices/{id}
 *
 * @param {number} id - 공지사항 ID
 * @returns {Promise} API 응답
 */
export const getNoticeDetail = async (id) => {
  return await request({
    method: 'GET',
    url: `/admission/public/v1/notices/${id}`
  });
};
