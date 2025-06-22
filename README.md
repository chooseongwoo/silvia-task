# 👋 Silvia Health 과제

## 프로젝트 실행 방법

### 1. 필수 환경 준비

- Node.js (버전 16 이상)
- npm
- [Expo CLI](https://docs.expo.dev/get-started/installation/) 설치:

```bash
npm install -g expo-cli
```

---

### 2. 프로젝트 클론 및 의존성 설치

```bash
git clone [https://github.com/chooseongwoo/silvia-task.git]
cd silvia-task
npm install
```

---

### 3. 프로젝트 실행

```bash
npm start           # Expo 개발 서버
npm run android     # 안드로이드
npm run ios         # iOS
npm run web         # 웹 브라우저
```
---

### 4. 주요 폴더 구조

| 폴더          | 설명                                       |
| ------------- | ------------------------------------------ |
| `app/`        | 화면 컴포넌트 (페이지 단위) 및 라우팅 구성 |
| `components/` | 재사용 가능한 UI 컴포넌트 모음             |
| `contexts/`   | Zustand 상태 관리 스토어 정의              |
| `constants/`  | 앱에서 공통으로 사용하는 상수 정의         |
| `assets/`     | 이미지 및 정적 파일                        |
| `data/`       | 더미 데이터 정의                       |
---

### 5. 앱 빌드
- 빌드 모드: **release**
- 빌드 명령어: `eas build --profile production --platform android`
- 생성 파일: `*.apk` (릴리즈 배포용)
