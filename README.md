# obab-client

O-BAB의 프론트엔드 부분을 담당하는 리포지토리입니다. 이 프로젝트는 JavaScript와 React를 기반으로 화면단을 구축하였습니다.

<br/>

## 프로젝트 소개

O-BAB은 오늘의 식사 메뉴를 추천해주고, 필요한 레시피를 검색할 수 있는 플랫폼입니다. 사용자는 날씨와 기분에 따라 식사 메뉴를 추천받고, 좋아하거나 자주 먹는 음식을 즐겨찾기에 추가할 수 있습니다. 또한, 냉장고에 남아 있는 재료를 이용한 레시피 검색, 편의점 꿀조합 레시피, 방송에서 핫한 레시피, 음식 양념 레시피 등 다양한 기능을 제공합니다.

<br/>

## 사용 기술 스택

| **분야**        | **기술 스택**                                                                                   |
|-----------------|-------------------------------------------------------------------------------------------------|
| **프론트엔드**  | JavaScript, React, Recoil, React-Query, HTML, CSS, TailwindCSS, Material UI                     |

<br/>

## 주요 기능

- OPENAI를 이용하여 날씨 및 그날 기분에 따른 식사 메뉴 추천
- 즐겨찾기 기능을 통해 자주 먹는 음식 관리
- 음식점 위치 확인 및 리뷰 확인 기능
- 냉장고에 남은 재료를 활용한 레시피 검색
- 편의점 꿀조합 레시피 보기
- 방송에서 인기 있는 레시피 보기
- 다양한 음식 양념 레시피 제공

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
│   ├── data/                  # 동적 페이지 유지를 위한 데이터셋 디렉토리
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
