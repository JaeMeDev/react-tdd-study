## 1. ESLint Plugins 설치 및 설정

Eslint 란 개발자들이 특정한 규칙을 가지고 코드를 깔끔하게 짤수있게 도와주는 라이브러리로, 자바스크립트를 쓰는 가이드 라인 제시, 문법에 오류가 나면 알려주는 역할 등등을 하며. ESLint는 포맷 역할도 하지만 주요 기능을 문법 오류 잡는 것.

Prettier 란 주로 코드 형식을 맞추는데 사용한다. 작은따옴표를 사용할지 큰 따옴표를 사용할지 indent값을 2로 줄지 4로 줄지 등등 에러 찾는 것이 아닌 코드 포맷터 역할을 한다.

이미 CRA로 리액트를 설치할 때 기본 eslint가 설정되어 있다. 하지만 이 상태로는 VS Code또는 WebStorm에서 바로 에러 확인 할 수 없고 앱을 시작했을 때 터미널 상에서 볼 수 있다.

eslint 설정 파일을 생성해야 한다. package.json에 eslintConfig부분을 지우고 .eslintrc.json을 생성한다. 이렇게 하면 PROBELMS 탭에서 ESLint에서 주는 기본적인 경고를 확인할 수 있다.

### ESLint Testing Plugins 설치

Plugins란 eslint에서 기본으로 제공하지 않는 다양한 규칙을 프러그인을 통해 사용할 수 있다. 예를 들어 react에 관련된 린트설정을 위해서는 eslint-plugin-react를 사용하면 되며, react hooks에 관련된 규칙을 적용시켜주려면 eslint-plugin-react-hooks를 사용하면 된다.

```bash
npm install eslint-plugin-testing-library eslint-plugin-jest-dom
```

testing-library : render로 Dom을 그리는 부분

jest-dom : expect-matcher로 테스트

내부 설정해주어야 한다.

plugins 항목 : 플러그인 추가, 추가할때 eslint-plugin-부분 생략 가능

extends 항목 : 플러그인을 추가한 후에 규칙을 정해줘야 사용 가능하다. 그래서 extends 항목에 사용하고자 하는 규칙을 설정한다. vue, angular, react 중에 react를 위한 규칙 recommended는 추천이 되는 걸 사용. 만약 규칙을 변경하고자 할때 rule 항목 추가

## 2. Prettier 설치 및 설정

설치는 npm 설치와 익스텐션 설치 두가지 방법이 있다.