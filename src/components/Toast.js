import React, { useEffect } from 'react';
import '../styles/Toast.css';

/**
 * Toast 알림 컴포넌트
 * @param {Object} props
 * @param {string} props.message - 표시할 메시지
 * @param {string} props.type - 'success' | 'error' | 'info'
 * @param {number} props.duration - 표시 시간 (ms), 기본값 3000ms
 * @param {Function} props.onClose - Toast가 닫힐 때 호출되는 콜백
 */
const Toast = ({ message, type = 'info', duration = 3000, onClose }) => {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        if (onClose) {
          onClose();
        }
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return '✓';
      case 'error':
        return '✕';
      default:
        return 'ℹ';
    }
  };

  return (
    <div className={`toast toast-${type}`} role="alert" aria-live="polite">
      <div className="toast-icon">{getIcon()}</div>
      <div className="toast-message">{message}</div>
      {onClose && (
        <button
          className="toast-close"
          onClick={onClose}
          aria-label="닫기"
        >
          ×
        </button>
      )}
    </div>
  );
};

export default Toast;
