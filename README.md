# 태재대학교 입학처 웹사이트

태재대학교 입학처 공식 웹사이트입니다. 한국 학생과 국제 학생을 위한 입학 정보, 전형 안내, 캠퍼스 생활 정보 등을 제공합니다.

## 프로젝트 개요

이 프로젝트는 React를 기반으로 한 단일 페이지 애플리케이션(SPA)으로, 태재대학교의 입학 정보를 효과적으로 전달하기 위해 개발되었습니다.

### 주요 기능

- **다국어 지원**: 한국어 및 영어 지원 (한국 학생 / 국제 학생)
- **입학 전형 안내**: 입학 특징, 인재 발굴, 평가 방식 안내
- **평가 정보**: 서류 평가, 면접 안내 및 준비 가이드
- **지원 안내**: 모집 정보, 전형 일정, 제출 서류, 지원서 작성
- **캠퍼스 생활**: 기숙사, 예비대학, 장학금, 학생 생활 정보
- **공지사항**: 입학 관련 공지사항 및 이벤트 정보

## 기술 스택

- **React**: 19.1.1
- **React Router DOM**: 7.9.1 (클라이언트 사이드 라우팅)
- **Sass**: 1.93.2 (스타일링)
- **Swiper**: 12.0.2 (캐러셀/슬라이더)
- **Create React App**: 5.0.1 (프로젝트 보일러플레이트)

## 시스템 요구사항

### 권장 Node.js 버전

- **Node.js**: 18.0.0 이상 (권장: 20.x LTS)
- **npm**: 9.0.0 이상

> **참고**: React 19를 사용하기 때문에 Node.js 18 이상이 필요합니다. Node 20 LTS 버전 사용을 권장합니다.

### Node 버전 확인

```bash
node -v  # v20.17.0 (현재 개발 환경)
npm -v   # 10.8.2 (현재 개발 환경)
```

## 설치 방법

### 1. 저장소 클론

```bash
git clone <repository-url>
cd taejae-admissions
```

### 2. 의존성 설치

```bash
npm install
```

프로젝트에 필요한 모든 npm 패키지가 설치됩니다.

## 실행 방법

### 개발 서버 실행

```bash
npm start
```

- 개발 모드로 애플리케이션을 실행합니다
- 브라우저에서 [http://localhost:3000](http://localhost:3000)으로 자동 실행됩니다
- 코드 변경 시 자동으로 페이지가 새로고침됩니다
- 콘솔에서 린트 오류를 확인할 수 있습니다

### 프로덕션 빌드

```bash
npm run build
```

- `build` 폴더에 프로덕션용 최적화된 빌드를 생성합니다
- React가 프로덕션 모드로 번들링되며 최상의 성능으로 최적화됩니다
- 빌드 파일은 압축되며 파일명에 해시가 포함됩니다
- 빌드 완료 후 바로 배포 가능합니다

### 테스트 실행

```bash
npm test
```

- 인터랙티브 워치 모드로 테스트 러너를 실행합니다
- 파일 변경 시 관련 테스트가 자동으로 재실행됩니다

## 프로젝트 구조

```
taejae-admissions/
├── public/                 # 정적 파일
│   ├── images/            # 이미지 리소스
│   ├── pdf/               # PDF 문서
│   ├── resources/         # CSS, JS 등 외부 리소스
│   └── index.html         # HTML 템플릿
├── src/                   # 소스 코드
│   ├── components/        # React 컴포넌트
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── KoreanHomepage.js
│   │   ├── InternationalAdmissionsPage.js
│   │   └── ...           # 40+ 페이지 컴포넌트
│   ├── assets/           # 애셋 파일
│   ├── styles/           # 스타일 파일
│   ├── App.js            # 메인 애플리케이션 컴포넌트
│   ├── App.css           # 메인 스타일
│   └── index.js          # 진입점
├── build/                # 빌드 결과물 (빌드 후 생성)
├── package.json          # 프로젝트 의존성 및 스크립트
└── README.md            # 프로젝트 문서
```

## 주요 페이지 컴포넌트

### 한국 학생 섹션
- `KoreanHomepage`: 한국 학생 메인 페이지
- `CharacteristicPage`: 입학 전형 특징
- `TalentDiscoveryPage`: 태재 미래 인재 발굴
- `FreshmanEvaluationPage`: 신입학 평가 안내
- `DocumentEvaluationPage`: 서류 평가 안내
- `InterviewGuidePage`: 면접 안내
- `ApplicationIndexPage`: 입학 신청 안내
- `CampuslifeIndexPage`: 신입생 학교 생활

### 국제 학생 섹션
- `InternationalAdmissionsPage`: 국제 학생 메인 페이지

### 공통 컴포넌트
- `Header`: 헤더 (언어 전환, 네비게이션)
- `Footer`: 푸터
- `AdmissionsGateway`: 입학 게이트웨이 (한국/국제 선택)

## 개발 가이드

### 라우팅 구조

이 애플리케이션은 React Router를 사용하지 않고 상태 기반 라우팅을 사용합니다:

- `currentView` 상태로 페이지 전환 관리
- `window.history.pushState`로 브라우저 히스토리 동기화
- 브라우저 뒤로가기/앞으로가기 지원 (`popstate` 이벤트)

### 주요 라우트

- `/`: 입학 게이트웨이 (학생 유형 선택)
- `/korean`: 한국 학생 메인 페이지
- `/korean-*`: 한국 학생 상세 페이지
- `/international`: 국제 학생 메인 페이지

### 스타일링

- **App.css**: 메인 스타일 파일 (385KB+)
- **Sass**: SCSS 문법 지원
- **외부 CSS**: AOS, jQuery UI, Swiper, Font Awesome

## 배포

### Vercel 배포 (권장)

프로젝트에 `.vercel` 디렉토리가 있어 Vercel로 배포하도록 구성되어 있습니다:

```bash
npm run build
# Vercel CLI 또는 Vercel 대시보드를 통해 배포
```

### 일반 정적 호스팅

```bash
npm run build
```

빌드된 `build` 폴더를 정적 호스팅 서비스에 업로드하면 됩니다.

## 브라우저 지원

### 프로덕션 환경
- 시장 점유율 0.2% 이상인 브라우저
- 사용 중단되지 않은 브라우저
- Opera Mini 제외

### 개발 환경
- Chrome 최신 버전
- Firefox 최신 버전
- Safari 최신 버전

## 주의사항

### Mock 데이터 사용 금지
- 프로덕션 환경에서 mock 데이터 사용을 금지합니다
- 데이터를 받아오지 못한 경우 명확하게 인지할 수 있도록 fallback 처리해야 합니다

## 문제 해결

### 빌드 실패 시

```bash
# node_modules 삭제 후 재설치
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 포트 충돌 시

기본 포트 3000이 사용 중일 경우:
```bash
PORT=3001 npm start
```

## 라이선스

이 프로젝트는 태재대학교의 자산입니다.

## 문의

태재대학교 입학처
- 웹사이트: [태재대학교 공식 홈페이지]
- 이메일: [입학처 이메일]

---

**최종 업데이트**: 2025년 10월
