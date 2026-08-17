/**
 * 프로젝트 목록 (노션 기반)
 * - detailDescription → 위쪽 요약 블록
 * - period, features, techStack, contribution, githubUrl, deployUrl, notionUrl → 주요 정보 및 링크 정보
 */
export const FILTER_ALL = 'ALL';
export const PROJECT_TYPES = ['PERSONAL', 'TEAM'];
export const PROJECT_TECHS = ['React', 'Spring boot', 'Flutter'];

// const NOTION_PROJECT_LIST = 'https://www.notion.so/21e979b744f08028ba7bd433e058c2af?pvs=21';

export const projects = [
  {
    id: 'hello-money',
    slug: 'hello-money',
    title: 'Hello, Money',
    type: 'TEAM',
    tech: ['Flutter'],
    image: '/images/dv03.png',
    shortDescription: '지출 관리 애플리케이션',
    tags: '#Flutter #Android Studio',
    imageId: 'img-hello-money',
    period: '2024.06.09 ~ 2024.06.19',
    features: '로그인, 회원가입, 데이터 시각화, CRUD 구현',
    techStack: 'React, Styled-components, Axios, Jwt, Json',
    contribution: '100%',
    notionUrl: 'https://app.notion.com/p/moneylog-2fc979b744f080ce9ad3eac35ad946c4?v=2cd979b744f08158a5c7000caf2e97c2&source=copy_link',
    records: [
      { text: 'Axios사용법', href: 'https://velog.io/@leeboa2003/Axios-%EC%82%AC%EC%9A%A9%EB%B2%95' },
      { text: '자세한 트러블슈팅', href: 'https://velog.io/@leeboa2003/React-%EC%83%88%EB%A1%9C%EA%B3%A0%EC%B9%A8-%EC%8B%9C-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%83%81%ED%83%9C-%EC%9C%A0%EC%A7%80' },
      { text: '관련기록', href: 'https://velog.io/@leeboa2003/%EA%B0%80%EA%B3%84%EB%B6%80-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-Hello-Money' },
    ],
    detailDescription: (
      <>
        <p>
          <span className="highlight">Hello, Money</span>는 사용자를 위한 편리한 지출 관리 애플리케이션입니다.
        </p>
        <p>
          로그인 시 입력된 아이디와 비밀번호를 검증하고, <span className="highlight">로그인 API 호출 후</span> 성공하면
          accessToken을 로컬 스토리지에 저장합니다.
        </p>
        <p>
          회원가입에서는 닉네임, <span className="highlight">아이디, 비밀번호 검증 후</span> API 호출로 가입을 완료하고
          로그인 페이지로 이동합니다.
        </p>
        <p>
          메인 페이지에서는 <span className="highlight">지출 데이터 필터링</span>과 <span className="highlight">그래프 애니메이션</span>으로
          카테고리별 <span className="highlight">월별 지출 현황 시각화</span>를 제공합니다.
        </p>
        <p>
          로딩 시 <span className="highlight">스켈레톤 표시 후</span> 데이터 준비 완료 시 그래프로 출력됩니다.
        </p>
        <p>
          상세 페이지에서는 지출 항목 <span className="highlight">삭제 및 수정</span> 가능하며,
          삭제 시 사용자 확인 후 진행, 수정 시 입력 데이터 검증 후 업데이트 완료 후 홈으로 리디렉션됩니다.
        </p>
      </>
    ),
  },
  {
    id: 'slow-mode',
    slug: 'slow-mode',
    title: '저속노화 습관트래커',
    type: 'PERSONAL',
    tech: ['React', 'Spring boot'],
    image: '/images/dv02.png',
    shortDescription: 'Spring Boot + React 풀스택 습관 관리 서비스',
    tags: '#Spring boot #React #JWT #MySQL',
    githubUrl: 'https://github.com/ubzzang/slow_mode_app',
    githubUrlBackend: 'https://github.com/ubzzang/slow_mode',
    imageId: 'img-slow-mode',
    period: '2025.11.28 ~ 2025.12.12',
    contribution: '기획 100%, 디자인 100%, 퍼블리싱 100%, 개발 100%',
    teamSize: null,
    features: '회원가입/로그인(JWT), 일일 습관 체크, 월간 통계(카테고리별 달성률·점수), Habit/HabitLog/DailyScore 도메인',
    techStack: 'Spring Boot, Spring Security(JWT), Spring Data JPA, MySQL, React, JavaScript, Axios, Styled-components, React Router, Swiper, GSAP',
    backendTech: 'Spring Boot, Spring Security (JWT 기반 인증/인가), Spring Data JPA / Hibernate, MySQL, RESTful API 설계',
    frontendTech: 'React, JavaScript(ES6+), Axios, Styled-components / CSS, React Router, Swiper, GSAP, 반응형 웹',
    role: '사용자 중심 습관 관리 서비스 기획 및 전체 시스템 구조 설계, 인증/인가 기반 사용자 기능 구현, 프론트엔드부터 백엔드까지 전반적인 풀스택 개발',
    responsibilities: [
      'Spring Boot 기반 REST API 설계·구현, JWT 회원가입·로그인 및 인증/인가 처리',
      'Habit / HabitLog / DailyScore 도메인 모델링 및 비즈니스 로직 설계',
      '일일 습관 체크 및 점수 누적 로직, 월간 통계(카테고리별 달성률·점수 집계) 계산 로직',
      'React UI·상태 관리, Axios 프론트–백엔드 통신',
      'Styled-components 컴포넌트 단위 UI, Swiper·GSAP 인터랙션·애니메이션, 반응형 웹 및 UI/UX 개선',
    ],
    notionUrl: 'https://www.notion.so/2cd979b744f080bfaa7efd6fdd1396fd?v=2cd979b744f08158a5c7000caf2e97c2&source=copy_link',
    detailDescription: 'Spring Boot 기반의 백엔드와 React 프론트엔드를 직접 설계·구현한 풀스택 프로젝트로, 서비스 구조 이해와 데이터 흐름 설계에 집중했습니다.',
  },
  {
    id: 'bookkok',
    slug: 'bookkok',
    title: '책콕',
    type: 'TEAM',
    tech: ['Spring boot'],
    image: '/images/dv01.png',
    shortDescription: '중고책 거래 플랫폼 (Thymeleaf)',
    tags: '#Spring boot #Thymeleaf #Swiper #GSAP',
    githubUrl: 'https://github.com/applause000000-jpg/WebProject',
    imageId: 'img-bookkok',
    period: '2025.10.30 ~ 2025.11.12',
    teamSize: 4,
    contribution: '디자인 100%, 퍼블리싱 100%, 개발 30%',
    features: '메인·주요 화면 퍼블리싱, 장바구니·결제·알림 화면 및 로직, 알라딘 크롤링 데이터, 중고책 등록',
    techStack: 'Spring Boot, Spring Security, JPA / Hibernate, MySQL, HTML / CSS / JavaScript, Thymeleaf, Swiper, GSAP',
    backendTech: 'Spring Boot, Spring Security, JPA/Hibernate, MySQL',
    frontendTech: 'HTML, CSS, JavaScript, Thymeleaf, Swiper, GSAP',
    collaborationTech: 'Git, GitHub',
    role: '서비스 전반 UI/UX 설계 및 퍼블리싱 총괄, 장바구니·결제·알림 기능의 화면 및 로직 구현, 팀 내 프론트엔드 파트 리딩 및 공통 컴포넌트 설계',
    responsibilities: [
      'Spring Boot 프로젝트 메인·주요 화면 퍼블리싱, Thymeleaf 서버 사이드 렌더링 화면 구조',
      '공통 레이아웃(Fragment)·재사용 컴포넌트 설계·구현, HTML/CSS 구조 및 클래스 네이밍 전략',
      '반응형 레이아웃, Swiper·GSAP UI 인터랙션·애니메이션',
      '장바구니·결제·알림 연동 화면 UI 및 일부 로직 구현',
    ],
    notionUrl: 'https://www.notion.so/2cd979b744f080a3aabde8c5838cc140?v=2cd979b744f08158a5c7000caf2e97c2&source=copy_link',
    detailDescription: 'Spring Boot + Thymeleaf 기반의 중고책 거래 플랫폼 팀 프로젝트입니다. 서비스 전반 UI/UX·퍼블리싱 총괄, 장바구니·결제·알림 화면 및 로직 구현을 담당했습니다.',
  },
];