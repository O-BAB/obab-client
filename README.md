# obab-client

O-BAB의 프론트엔드 부분을 담당하는 리포지토리입니다. 이 프로젝트는 JavaScript와 React를 기반으로 화면단을 구축하였습니다.

<br/>

## 사용 기술 스택

| **분야**        | **기술 스택**                                                                                   |
|-----------------|-------------------------------------------------------------------------------------------------|
| **프론트엔드**  | JavaScript, React, Recoil, React-Query, HTML, CSS, TailwindCSS, Material UI                     |

<br/>

## Getting Started

1. **Front-End 서버 실행 방법 - 로컬/개발**

```bash
#repo
npm install
npm run start
```

2. **Front-End 서버 실행 방법 - 배포 버전**

```bash
#repo
npm install
npm run build
serve -s build
```

<br/>

## 프로젝트 구조

```
obab-client/
├── public/                    # 정적 파일 디렉토리
├── src/                       # 소스 코드 디렉토리
│   ├── components/            # 1페이지 당 컴포넌트 유지
│   ├── css/                   # CSS 파일 디렉토리
│   ├── interestedBoardData/                  # 동적 페이지 유지를 위한 데이터셋 디렉토리
│   ├── hooks/                 # 로직을 담는 디렉토리 (Custom Hook 디자인 패턴 적용)
│   ├── layout/                # 정적 페이지 요소를 담는 디렉토리
│   ├── pages/                 # 1페이지 전체를 이루는 페이지 컴포넌트 모음
│   ├── recoil/                # 전역 상태관리를 위한 디렉토리
│   ├── router/                # 라우터 설정을 위한 디렉토리
│   ├── services/              # API 연동을 위한 디렉토리
│   ├── util/                  # 전역적으로 함수를 사용하기 위한 디렉토리
│   ├── index.css
│   ├── index.js               # 리액트 프로젝트 시작점
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```
