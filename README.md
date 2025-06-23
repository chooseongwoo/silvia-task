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
| `data/`       | 더미 데이터 정의                           |

### 5. 앱 빌드

- 빌드 모드: **release**
- 빌드 명령어: `eas build --profile production --platform android`
- 생성 파일: `*.apk` (릴리즈 배포용)

## 트러블슈팅

### 문제 1: 결과 화면에서도 `timeLeft` 값이 계속 줄어듦

- **현상**: 테스트 종료 후 `ResultScreen`에 진입했는데, `timeLeft`가 계속 감소함
- **원인**: `zustand` 상태는 전역이므로, `Timer` 컴포넌트가 언마운트되지 않으면 `setInterval()`이 계속 실행됨
- **해결 방법**:

  - `Timer`가 마운트된 화면(`TestScreen`) 외에서는 절대 렌더링되지 않도록 조건 분기 처리
  - `useEffect`에서 `setInterval`을 `clearInterval`로 정리하도록 구현
  - `setTimeLeft(prev => prev - 1)` 형태로 안전하게 상태 갱신

- **느낀점**:
    상태 관리를 전역으로 두면 편한 대신 컴포넌트 생명주기 관리가 매우 중요하다는 걸 느꼈습니다.
    또한 비동기 함수(setInterval)는 눈에 잘 안 띄는 버그를 만들 수 있어, useEffect의 정리(clean-up)가 얼마나 중요한지 다시 생각하게 되었습니다.
    
---

### 문제 2: 홈으로 돌아갔다가 다시 시작해도 이전 상태가 유지됨

- **현상**: 앱을 재시작하지 않았는데, 이전의 `correct`, `wrong`, `timeLeft` 상태가 그대로 남아 있음
- **원인**: `zustand`는 비휘발성 메모리 상태를 유지하며, 별도의 초기화 없이 화면만 전환하면 상태가 유지됨
- **해결 방법**:

  - `TestScreen`이 마운트될 때마다 `reset()` 함수 호출하여 상태 초기화
  - 홈으로 돌아가는 버튼(`router.replace("/")`)에서 `reset()`을 함께 호출
  
- **느낀점**:
    전역 상태를 사용하면 공유에 용이하지만, 흐름이 꼬이지 않게 하려면 세부 컨트롤이 꼭 필요하다는 걸 느꼈습니다.

## 배운점
- 상태 관리 라이브러리(zustand)를 사용할 때는 기능이 작동하는 타이밍에 상태를 명확히 초기화해줘야 예기치 않은 동작을 방지할 수 있다는 걸 배웠습니다.
- 문제와 정답 로직을 구조화해두니, 변수 수정이나 확장이 수월했습니다. (data/stroopQuestions.ts)
- EAS를 통해 클라우드 기반으로 APK를 빌드하고 배포할 수 있다는 걸 배웠습니다.