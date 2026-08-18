/**
 * 퍼블리싱 작업 목록 (Work)
 * - period, contribution, techStack, role, responsibilities, achievements → 주요 정보 및 링크 정보
 * - detailDescription → project-sub__desc-block (요약 글)
 * - relatedLinks → 프로젝트 기록 (초록 버튼)
 * - notionUrl → 주요 정보 및 링크 정보에 Notion 버튼 (필수)
 * - solutionTag, scopeTags, contributionPercent → 메인 목록 카드 태그 전용 필드
 */

const NOTION_LIST_URL =
  "https://www.notion.so/21e979b744f08028ba7bd433e058c2af?pvs=21";

export const works = [
  {
    id: "dongyeon-snt",
    slug: "dongyeon-snt",
    title: "동연에스엔티 기업 웹사이트",
    type: "개인 100%",
    image: "/images/pj08.jpg",
    shortDescription:
      "동연에스엔티 기업 사이트, React/Vite와 Spring Boot로 재구축. 메인 애니메이션부터 웹진 CRUD까지 프론트·백엔드 전담.",
    period: "2026.04 ~ 진행중",
    contribution: "프론트엔드 100%, 백엔드 100%, 디자인 100%",
    techStack: "React, Vite, Spring Boot, GSAP, Swiper, Java",
    role: "프론트엔드 개발, 백엔드 API 개발, 관리자 CRUD 설계, 웹 퍼블리싱 및 디자인",
    responsibilities: [
      "메인/서브 페이지 컴포넌트 개발 (MainVisual, BusinessArea, PromotionVd, ConstructionCase, FactoryAI, PartnerSection, Contact 등)",
      "GSAP ScrollTrigger 기반 스크롤 인터랙션 및 애니메이션 구현",
      "Swiper 캐러셀을 활용한 콘텐츠 슬라이드 UI 구현",
      "웹진(웹진/초대장) 게시판 CRUD 시스템 신규 구축 (백엔드 Java + 프론트 관리자/공개 화면)",
      "공지사항 게시판 CRUD 및 페이지네이션, 카테고리 필터링 구현",
      "Spring Boot 기반 백엔드 API 설계 및 SMTP 이메일(문의하기) 연동",
      "전체 라우팅/서브레이아웃 구조 설계 및 브레드크럼, 모바일 메뉴 네비게이션 구현",
      "Vercel 배포 환경 구성 및 빌드 이슈 해결",
    ],
    achievements: [
      "GSAP 애니메이션 라이프사이클 이슈(페이지 이동 시 트리거 파괴) 원인 규명 및 구조 개선",
      "gsap.context() + ctx.revert() 패턴과 matchMedia 반응형 분기(851px)로 안정적인 애니메이션 구조 정립",
      "기존 공지사항 패턴을 재사용하여 웹진 CRUD 기능 신속 구축, 카테고리 단순화(웹진/초대장) 및 발행일 기반 자동 라벨링 적용",
      "CSS 클래스 스코프 및 keyframes 네이밍 규칙 수립으로 페이지 간 스타일 충돌 방지",
      "Vercel 배포 시 peer dependency 충돌, 대소문자 이슈, SPA 라우팅 문제 해결",
    ],
    relatedLinks: [
      { text: "동연에스엔티", url: "https://dy-web-front-navy.vercel.app/" },
    ],
    githubUrl: [
      { label: "Frontend", url: "https://github.com/cozyoub/dy_web_front" },
      { label: "Backend", url: "https://github.com/cozyoub/dy_web_back" },
    ],
    backendGithubUrl: "https://github.com/cozyoub/dy_web_back",
    deployUrl: "https://dy-web-front-navy.vercel.app/",
    detailDescription:
      "동연에스엔티의 기업 웹사이트를 Spring Boot 백엔드와 React/Vite 프론트엔드로 처음부터 구축한 프로젝트입니다. 메인 페이지 컴포넌트부터 웹진·공지사항 CRUD, 관리자 페이지, 문의 이메일 연동까지 프론트엔드와 백엔드를 아우르며 전 과정을 담당했습니다.",
    solutionTag: ["React", "GSAP", "Spring Boot","Java","Mysql"],
    scopeTags: [
      { label: "프론트엔드", color: "pink" },
      { label: "백엔드", color: "coral" },
      { label: "관리자", color: "green" },
    ],
    contributionPercent: 100,
  },
  {
    id: "bnue-publishing",
    slug: "bnue-publishing",
    title: "부산교육대학교 통합 개편 프로젝트",
    type: "TEAM",
    image: "/images/pj07.png",
    shortDescription: "부산교육대학교 통합 웹사이트 퍼블리싱 프로젝트",
    period: "2025.01 ~ 2025.05",
    contribution: "디자인 40%, 퍼블리싱 60%",
    techStack: "HTML, JavaScript, GSAP, Swiper",
    role: "메인 페이지 및 공통 레이아웃(헤더, 서브 레이아웃) 퍼블리싱 구조 설계, 웹접근성 대응",
    responsibilities: [
      "메인 페이지 및 헤더·서브 레이아웃 등 사이트 전체의 공통 뼈대 퍼블리싱 및 구조 설계",
      "HTML/CSS 클래스 네이밍 전략 및 반응형 구조 수립 → 팀원들이 서브페이지 작업 시 참고할 수 있는 기준 마련",
      "HTML/CSS 구조 설계 및 클래스 네이밍 전략 수립",
      "반응형 웹 적용을 위한 유연한 레이아웃 구성",
      "Swiper, GSAP 등 라이브러리를 활용한 주요 인터랙션 구현",
    ],
    achievements: [
      "시안 기반의 정교한 퍼블리싱으로 디자인 의도와의 높은 일치도 구현",
      "구조화된 레이아웃 설계를 통해 추후 기능 확장 및 페이지 추가에 용이한 구조 구축",
      "다양한 디바이스 환경에서도 일관된 사용자 경험을 제공하는 반응형 UI 구현",
      "개발자와의 협업을 고려한 퍼블리싱 가이드 제공으로 커뮤니케이션 비용 감소",
      "메인·공통 레이아웃을 먼저 구축하여 팀원들이 해당 구조를 기반으로 서브페이지를 확장 개발할 수 있는 기반 마련"
    ],
    relatedLinks: [
      { text: "부산교육대학교 메인", url: "https://www.bnue.ac.kr/home/main" },
      { text: "부산교육대학교 SSO", url: "https://sso.bnue.ac.kr/home/PortalLogin" },
      { text: "부산교육대학교 입학", url: "https://enter.bnue.ac.kr/home/main" },
      { text: "부산교육대학교 교육대학원", url: "https://gs.bnue.ac.kr/home/main" },
      { text: "부산교육대학교 교육박물관", url: "https://museum.bnue.ac.kr/home/main" },
      { text: "부산교육대학교 다문화교육원", url: "https://damunhwa.bnue.ac.kr/home/main" },
      { text: "부산교육대학교 학생상담센터", url: "https://guidance.bnue.ac.kr/home/main" },
      { text: "부산교육대학교 발전기금", url: "https://fund.bnue.ac.kr/home/main" },
      { text: "부산교육대학교 생활관", url: "https://dormitory.bnue.ac.kr/home/main" },
      { text: "부산교육대학교 인권센터", url: "https://hrc.bnue.ac.kr/home/main" },
      { text: "부산교육대학교 미래교육원", url: "https://future.bnue.ac.kr/home/main" },
      { text: "부산교육대학교 KREON", url: "https://kreon.bnue.ac.kr/home/main" },
      { text: "부산교육대학교 성과공유", url: "https://achievehub.bnue.ac.kr/home/main" },
      { text: "부산교육대학교 뉴스레터", url: "https://news.bnue.ac.kr/home/main" },
      { text: "부산교육대학교 아카이브", url: "https://archives.bnue.ac.kr/home/main" },
      { text: "부산교육대학교 통합예약", url: "https://apply.bnue.ac.kr/home/main" },
    ],
    notionUrl:
      "https://www.notion.so/21e979b744f08034a81fe7636ea75ff4?source=copy_link",
    detailDescription:
      "부산교육대학교의 통합 웹사이트 구축 프로젝트로, 메인 페이지를 포함한 전체 사이트의 퍼블리싱을 담당했습니다.",
    solutionTag: ["HTML", "GSAP", "Jsp" , "웹접근성 취득"],
    scopeTags: [
      { label: "공통 레이아웃", color: "pink" },
      { label: "메인 퍼블리싱", color: "coral" },
      { label: "디자인", color: "green" },
    ],
    contributionPercent: 60,
    webmark: true,
  },
  {
    id: "gimhae-culture",
    slug: "gimhae-culture",
    title: "김해문화재단 통합 개편 프로젝트",
    type: "TEAM",
    image: "/images/pj01.jpg",
    shortDescription: "김해문화재단 산하 사이트 퍼블리싱, 웹접근성 인증",
    period: "2023.09 - 2024.04",
    contribution:
      "디자인 40%, 퍼블리싱 60%",
    techStack: "HTML, JavaScript, GSAP",
    role: "패밀리사이트 공통 레이아웃(헤더, 서브 레이아웃) 및 메인 퍼블리싱, 웹접근성 인증 대응",
    responsibilities: [
      "웹접근성 인증 기준에 맞춘 마크업 작성",
      "패밀리사이트 공통 컴포넌트 퍼블리싱",
      "기관별 디자인 시안 적용",
    ],
    achievements: [
      "웹접근성 인증 기준에 맞춘 마크업 작성",
      "패밀리사이트 전체에 적용되는 공통 레이아웃(헤더, 서브 레이아웃) 퍼블리싱 및 구조 설계",
      "기관별 디자인 시안 적용",
      "팀원들이 공통 구조를 기반으로 각 산하기관 서브페이지를 작업할 수 있도록 뼈대 구축",
    ],
    notionUrl:
      "https://www.notion.so/21e979b744f0818187f9f95d54386641?source=copy_link",
    deployUrl: "https://www.ghct.or.kr/home/main",
    relatedLinks: [
      { text: "김해문화재단", url: "https://www.ghct.or.kr/home/main" },
      { text: "문화의전당", url: "https://gasc.ghct.or.kr/home/main" },
      { text: "김해천문대", url: "https://astro.ghct.or.kr/home/main" },
      { text: "가야테마파크", url: "https://gtp.ghct.or.kr/home/main" },
      { text: "서부문화센터", url: "https://wgcc.ghct.or.kr/home/main" },
      { text: "영상미디어센터", url: "https://media.ghct.or.kr/home/main" },
      { text: "한옥체험관", url: "https://hanok.ghct.or.kr/home/main" },
      { text: "김해낙동강레일파크", url: "https://rp.ghct.or.kr/home/main" },
      {
        text: "김해문화재단 웹스타일 가이드",
        url: "https://www.notion.so/21e979b744f080aebc42fc07a25e845f?pvs=21",
      },
    ],
    detailDescription:
"김해문화재단 산하 각 사이트의 정체성과 특성을 고려하여 디자인을 기획하고 구현했습니다. 각 기관의 성격에 맞는 컬러 및 구성 요소를 활용해 통일성과 차별화를 모두 잡고자 하였으며, 퍼블리싱 또한 함께 진행하였습니다. 패밀리사이트 전반에 적용되는 공통 레이아웃과 메인 화면 구조를 먼저 설계하여, 이를 기반으로 팀원들이 각 산하기관별 서브페이지를 진행할 수 있는 기틀을 마련했습니다. 특히 김해문화재단 메인 사이트는 웹접근성 인증을 취득하여, 사용자 친화성과 접근성 측면에서도 우수한 결과를 달성하였습니다."  ,
   solutionTag: ["HTML", "GSAP", "Jsp" , "웹접근성 취득"],
    scopeTags: [
      { label: "공통 레이아웃", color: "pink" },
      { label: "메인 퍼블리싱", color: "coral" },
      { label: "디자인", color: "green" },
    ],
    contributionPercent: 70,
    webmark: true,
  },
  {
    id: "savings-bank-nft",
    slug: "savings-bank-nft",
    title: "저축은행 App (블록체인/NFT)",
    type: "TEAM",
    image: "/images/pj02.jpg",
    shortDescription:
      "저축은행 App 내 블록체인 관련 서비스 화면 설계·디자인·퍼블리싱",
    period: "2023.03 - 2023.05",
    contribution: "디자인 40% / 퍼블리싱 50%",
    techStack: "Figma, HTML, CSS",
    role: "어플리케이션 전반 퍼블리싱 구조 설계 및 디자인",
    responsibilities: [
      "어플 전체의 퍼블리싱 구조 및 공통 레이아웃 설계",
      "페이지 및 컴포넌트 단위의 코드 재사용을 고려한 구조 구성",
      "디자인 시안 기반 HTML/CSS 구현 및 반응형 대응",
      "모바일 최적화를 위한 레이아웃 및 터치 인터랙션 퍼블리싱",
      "개발자 협업을 위한 컴포넌트 단위 퍼블리싱 가이드 작성",
    ],
    achievements: [
      "유지보수와 확장성을 고려한 퍼블리싱 구조 설계로 개발 효율성 향상",
      "퍼블리싱 전 단계에서 디자이너 및 기획자와 협업하여 화면 흐름 정리",
      "공통 컴포넌트화 및 구조 정리를 통해 전체 페이지 제작 시간 단축",
      "다양한 해상도 대응을 위한 유연한 레이아웃 구성으로 사용자 경험 개선",
      "퍼블리싱 가이드를 기반으로 개발자와 원활한 연동 작업 진행",
    ],
    notionUrl:
      "https://www.notion.so/OK-App-21e979b744f0817f96dbeef93d35cf5c?source=copy_link",
    detailDescription:
      "오케이 저축은행 App 내 블록체인 관련 기반 서비스 화면을 설계, 디자인, 퍼블리싱까지 전담하였습니다. 기존 발주처의 기업 아이덴티티에 맞춰 화면 전반에 통일감을 주었고, 발주처의 니즈를 충실히 반영하기 위해 노력했습니다. 마무리 단계쯤 약 한 달간 파견 근무 형태로 진행되어 쉽지만은 않았지만, 그만큼 보람 있게 마무리한 기억에 남는 작업입니다.",
    solutionTag: ["Figma", "HTML"],
    scopeTags: [
      { label: "공통 레이아웃", color: "pink" },
      { label: "메인 퍼블리싱", color: "coral" },
      { label: "디자인", color: "green" },
    ],
    contributionPercent: 60,
  },
  {
    id: "delta-t",
    slug: "delta-t",
    title: "delta-T",
    type: "TEAM",
    image: "/images/pj03.jpg",
    shortDescription:
      "서비스 랜딩 페이지 디자인·퍼블리싱 및 관리자 대시보드 UI 퍼블리싱 참여",
    period: "2022.10 - 2023.03",
    contribution:
      "서비스 화면 디자인 50%, 퍼블리싱 70%, 관리자 대시보드 그래프 UI 퍼블리싱 40%",
    techStack: "Figma, jQuery, HTML, CSS, AOS",
    role: "서비스 화면 디자인 및 퍼블리싱, 관리자 대시보드 UI 구현 참여",
    responsibilities: [
      "서비스 랜딩 페이지 및 서브 화면 디자인 작업",
      "HTML/CSS 기반 화면 퍼블리싱 및 반응형 UI 구현",
      "Swiper.js 기반 메인 비주얼 및 콘텐츠 슬라이드 구현",
      "jQuery를 활용한 인터랙션 요소 적용",
      "관리자 대시보드 내 데이터 시각화 영역(그래프 UI) 퍼블리싱",
    ],
    achievements: [
      "디자인과 퍼블리싱을 함께 진행하여 화면 구현 과정에서 빠른 수정 및 대응 가능",
      "서비스 화면의 UI 완성도를 높이고 사용자 흐름을 고려한 화면 구성 구현",
      "관리자 화면 내 그래프 중심 데이터 영역을 실제 서비스 화면으로 구현",
    ],
    notionUrl:
      "https://www.notion.so/21e979b744f08172ae42ecbf01553d61?source=copy_link",
    relatedLinks: [{ text: "delta-T", url: "https://delta-t.ai/landing" }],
    deployUrl: "https://delta-t.ai/landing",
    detailDescription:
      "delta-T 서비스 구축 프로젝트에 참여하여 사용자 화면의 디자인과 퍼블리싱, 관리자 대시보드 내 그래프 UI 퍼블리싱을 담당했습니다. 서비스 화면은 디자인 단계부터 참여하여 화면 구성과 UI 구현을 함께 진행했으며, 관리자 화면에서는 데이터 시각화 영역을 중심으로 퍼블리싱 작업을 수행했습니다.",
    solutionTag: ["Figma", "jQuery"],
    scopeTags: [
      { label: "서비스 화면", color: "pink" },
      { label: "퍼블리싱", color: "coral" },
      { label: "관리자 UI", color: "green" },
    ],
    contributionPercent: 40,
  },
  {
    id: "busan-bank-cms",
    slug: "busan-bank-cms",
    title: "부산은행 (CMS)",
    type: "TEAM",
    image: "/images/pj09.png",
    shortDescription:
      "부산은행 금융역사관·연수원·사회공헌 등 메인 화면 퍼블리싱",
    period: "2022.01 - 2022.05",
    contribution: "디자인 30%, 퍼블리싱 70%",
    techStack: "HTML, CSS, JavaScript, GSAP",
    role: "CMS 기반 메인 화면 퍼블리싱",
    responsibilities: [
      "전체 레이아웃 및 시각 디자인 설계",
      "HTML/CSS 구조 설계 및 반응형 퍼블리싱",
      "Swiper.js 기반 메인 비주얼 및 콘텐츠 슬라이드 구현",
      "jQuery를 활용한 인터랙션 요소 적용",
      "디자인과 퍼블리싱을 일원화하여 빠른 피드백 및 효율적인 작업 진행",
    ],
    notionUrl:
      "https://www.notion.so/BNK-21e979b744f0815399defd2ffa8a986b?source=copy_link",
    relatedLinks: [
      { text: "부산은행 금융역사관", url: "https://museum.busanbank.co.kr/home/main" },
      { text: "부산은행 연수원", url: "https://hrdcenter.busanbank.co.kr/home/main" },
      { text: "부산은행 사회공헌활동", url: "https://www.happybnk.co.kr/Home/Main" },
    ],
    detailDescription:
      "CMS를 활용해 진행한 프로젝트로, 개편된 홈페이지의 모든 메인 화면 퍼블리싱을 전담하였습니다.",
    solutionTag: ["HTML", "CSS"],
    scopeTags: [
      { label: "공통 레이아웃", color: "pink" },
      { label: "메인 퍼블리싱", color: "coral" },
      { label: "디자인", color: "green" },
    ],
    contributionPercent: 60,
  },
  {
    id: "bnue-nursing",
    slug: "bnue-nursing",
    title: "부산교육대학교 간호학과 당뇨관리 앱",
    type: "TEAM",
    image: "/images/pj05.jpg",
    shortDescription: "당뇨 관리 앱·관리자 대시보드 UI/UX 디자인 및 퍼블리싱",
    period: "2021.02 - 2021.05",
    contribution: "디자인100%, 퍼블리싱 100%",
    techStack: "HTML, CSS, JavaScript, jQuery, Figma",
    role: "사용자 앱·관리자 페이지 UI/UX 디자인 및 반응형 퍼블리싱",
    responsibilities: [
      "사용자용 어플리케이션(App) UI/UX 디자인",
      "관리자 페이지(Admin) 전체 디자인 및 반응형 퍼블리싱",
      "공통 컴포넌트 및 페이지별 레이아웃 구조 설계",
      "Figma를 활용한 디자인 시스템 정리 및 개발 협업 가이드 제공",
      "HTML, CSS, JavaScript, jQuery 기반 퍼블리싱 진행",
    ],
    achievements: [
      "기획안 기반에서 요구 기능을 빠르게 구조화하고 실제 서비스 가능한 형태로 시각화",
      "다양한 사용자 시나리오를 고려한 UI 흐름 설계로 사용자 편의성 향상",
      "디자인-퍼블리싱 일원화로 개발자 커뮤니케이션 간소화 및 전반적인 프로젝트 일정 단축",
      "유지보수를 고려한 퍼블리싱 구조 및 네이밍 전략 수립",
      "관리자 페이지는 데이터 시각화 위주로 구성하여 정보 전달력 향상",
    ],
    detailDescription:
      "환자가 직접 어플리케이션을 통해 당뇨 관리 목표를 설정하고, 담당 관리자는 이를 기반으로 대시보드에서 환자 상태를 모니터링할 수 있는 시스템입니다. 부산교육대학교 간호학과 교수님 및 조교진의 요구사항에 맞춰 기획부터 디자인까지 전반적인 작업을 담당하였으며, Figma를 활용한 지속적인 피드백 과정을 통해 완성도를 높였습니다. 사용자 편의성을 최우선으로 고려하여, 어플리케이션은 직관적이고 크고 명확한 UI로 설계하였습니다.",
    solutionTag: ["Figma", "jQuery"],
    scopeTags: [
      { label: "앱", color: "yellow" },
      { label: "관리자", color: "green" },
    ],
    contributionPercent: 100,
  },
  {
    id: "hoseo-theatre",
    slug: "hoseo-theatre",
    title: "호서대학교 전체 학과 리뉴얼",
    type: "TEAM",
    image: "/images/pj04.jpg",
    shortDescription: "호서대학교 100여 개 학과 사이트 리뉴얼 프로젝트 참여",
    period: "2021.07 - 2021.09",
    contribution: "공통 템플릿 디자인 및 퍼블리싱 참여",
    techStack: "HTML, CSS, JavaScript",
    role: "학과 사이트 공통 템플릿 디자인 및 퍼블리싱",
    responsibilities: [
      "학과별 적용을 위한 공통 템플릿 UI 디자인",
      "HTML/CSS 기반 페이지 퍼블리싱",
      "공통 레이아웃 및 반복 요소 구조화",
      "반응형 화면 구성을 위한 스타일 적용",
      "Swiper 등 라이브러리를 활용한 인터랙션 구현",
    ],
    achievements: [
      "100여 개 학과 사이트에 적용 가능한 공통 구조 제작 경험",
      "반복되는 페이지 구성을 고려한 효율적인 템플릿 설계",
      "발주처 요구사항에 맞춰 디자인 시안을 수정하고 최종 화면 구현",
    ],
    notionUrl:
      "https://www.notion.so/21e979b744f081aca841dbdc2f008c28?v=21e979b744f08191b211000c634bf14f&source=copy_link",
    relatedLinks: [
      { text: "호서대학교 연극트랙", url: "https://theatre.hoseo.ac.kr/Home/Main.mbz" },
    ],
    deployUrl: "https://theatre.hoseo.ac.kr/Home/Main.mbz",
    detailDescription:
      "호서대학교 전체 학과 사이트 리뉴얼 프로젝트에 참여하여 공통 템플릿 디자인과 퍼블리싱 작업을 진행했습니다. 여러 시안 중 발주처 협의를 통해 선정된 디자인 방향을 기반으로 실제 서비스 화면을 구현했으며, 현재 적용된 연극트랙 사이트는 제가 작업한 디자인 결과물입니다.",
    solutionTag: ["HTML", "CSS"],
    scopeTags: [
      { label: "템플릿", color: "pink" },
      { label: "퍼블리싱", color: "coral" },
      { label: "디자인", color: "green" },
    ],
    contributionPercent: 60,
  },
  {
    id: "ict-polytech",
    slug: "ict-polytech",
    title: "ICT폴리텍대학",
    type: "TEAM",
    image: "/images/pj10.png",
    shortDescription: "대표·입학·산학협력단·학과 사이트 메인·서브 퍼블리싱",
    period: "2020.10 - 2021.01",
    contribution: "입학사이트 디자인, 패밀리사이트 퍼블리싱 참여",
    techStack: "HTML, CSS, JavaScript, GSAP, Swiper, AOS",
    role: "메인 페이지 디자인 및 퍼블리싱, 사이트 전체 구조 및 공통 레이아웃 설계",
    responsibilities: [
      "메인 페이지 정적 구조 및 시각 요소 퍼블리싱",
      "사이트 전체의 기본 레이아웃 및 공통 컴포넌트 퍼블리싱",
      "HTML/CSS 구조 설계 및 클래스 네이밍 전략 수립",
      "반응형 웹 적용을 위한 유연한 레이아웃 구성",
      "Swiper, AOS 등 라이브러리를 활용한 주요 인터랙션 구현",
    ],
    achievements: [
      "시안 기반의 정교한 퍼블리싱으로 디자인 정확도 및 구현 완성도 향상",
      "구조화된 레이아웃 설계로 추후 서브페이지 개발 및 유지보수 용이",
      "다양한 기기에서 일관된 화면 구현을 위한 반응형 설계 적용",
      "팀 내 개발자와의 원활한 협업을 위해 퍼블리싱 가이드 제공",
    ],
    notionUrl:
      "https://www.notion.so/ICT-21e979b744f0816a99c6e5c3256e8010?source=copy_link",
    relatedLinks: [
      { text: "ICT폴리텍대학", url: "https://ict.ac.kr/home/main" },
      { text: "ICT폴리텍대학 입시홈페이지", url: "https://ipsi.ict.ac.kr/home/main" },
      { text: "ICT폴리텍대학 산학협력단", url: "https://sh.ict.ac.kr/home/main" },
      { text: "ICT폴리텍대학 정보통신학과", url: "https://hginfo.ict.ac.kr/home/main" },
    ],
    deployUrl: "https://ict.ac.kr/home/main",
    detailDescription:
      "입사 후 처음으로 CMS를 활용해 진행한 프로젝트로, 개편된 홈페이지의 모든 메인 화면 퍼블리싱을 전담하였고, 대표 사이트와 학과 사이트의 서브 페이지까지 전체적으로 퍼블리싱 작업을 맡아 진행하였습니다. 입학 사이트와 학과 사이트의 메인 및 서브 화면 디자인에는 제 시안이 채택되었으며, 웹사이트 분석과 최신 트렌드를 반영하여 사용자 친화적인 UI를 목표로 기획·디자인하였습니다. 개편을 통해 사용자가 시각적으로 즐거움을 느끼고 긍정적인 사용자 경험(UX)을 할 수 있도록 유도하였으며, 재방문율 향상을 위한 방향으로 프로젝트를 이끌었습니다.",
    solutionTag: ["HTML", "GSAP"],
    scopeTags: [
      { label: "공통 레이아웃", color: "pink" },
      { label: "메인 퍼블리싱", color: "coral" },
      { label: "디자인", color: "green" },
    ],
    contributionPercent: 70,
  },
  {
    id: "votong",
    slug: "votong",
    title: "votong (블록체인 투표시스템)",
    type: "TEAM",
    image: "/images/pj06.jpg",
    shortDescription: "부산대 블록체인 기반 투표시스템, 커스터마이징 가능 구조",
    period: "2020.01 - 2020.10",
    contribution: "퍼블리싱 100%, 디자인 100%",
    techStack: "HTML5, CSS, Media Query, JavaScript, jQuery",
    role: "로고·UI/UX 디자인, 퍼블리싱 전담",
    notionUrl:
      "https://www.notion.so/21e979b744f0808396c6f90a7f1af337?v=21e979b744f08191b211000c634bf14f&source=copy_link",
    deployUrl: "https://cozyoub.github.io/votong",
    githubUrl: "https://github.com/cozyoub/votong",
    detailDescription:
      "서비스 구축부터 유지보수까지 지속적으로 로고디자인, UIUX디자인, 퍼블리싱을 전담하여 참여한 프로젝트입니다. 부산대학교 블록체인 기반 투표시스템을 시작으로 하여 각 학교나 단체에서 독립적으로 설치·운영할 수 있도록 커스터마이징이 가능한 구조로 기획되었습니다.",
    solutionTag: ["HTML5", "jQuery"],
    scopeTags: [{ label: "전체", color: "yellow" }],
    contributionPercent: 100,
  },
];