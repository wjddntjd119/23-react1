# **React1_201930327_정우성**
## | 4주차(23.03.23)

<br><br>

## | 3주차(23.03.16)
<img src ="https://chocolatey.org/assets/images/global-shared/logo-square.svg"></img>
> ### **Chocolatey**(윈도우 패키지 관리자)
> - 윈도우 환경에서 프로그램을 설치할 때 도움을 줌

<img src ="https://nodejs.org/static/images/logo.svg" style="background: #111111"></img>
> ### **node.js**
> - JavaScript를 서버에서도 사용할 수 있도록 만든 프로그램

## **Week03.1. React에 대해**
 ### Week03.1.1. React(리액트)란?
 ***
>  복잡한 사이트를 쉽고 빠르게 만들고, 관리<br>
(= SPA를 쉽고 빠르게 만들 수 있는 도구)

### Week03.1.2. React(리액트)의 장점
***
> 1. 빠른 업데이트와 랜더링 속도
>    - **Virtual DOM(비동기식)**
>       : **원하는 부분**만 생성, 변형,삭제할수 있도록 돕는 인터페이스

<img src="https://codingmedic.files.wordpress.com/2020/11/virtualdom.png?w=1024"></img>
> 2. 컴포넌트 기반 구조
>     - 컴포넌트 **여러개를 조합**해서 웹사이트를 개발하여 **재사용성**이 뛰어남
> 3. 재사용성
> 4. 든든한 지원군
>     - 메타에서 **오픈소스 포르젝트로 관리** 하여 계속 **발전 중**
>5. 활발한 지식 공유 & 커뮤니티
>6. 모바일 앱 개발가능
>     - 리액트 네이티브(모바일 환경 UI프레임워크)를 이용해 Cross-Platform(크로스 플랫폼)모바일 앱 개발 가능

### Week03.1.3. React(리액트)의 단점
***
> 1. 방대한 학습량
>     - 하지만 자바스크립트 공부한 경우 빠르게 학슴 가능
> 2. 높은 상태관리 복잡도
>     - state, life cycle등의 개념이 있지만 어렵지 않음

### Week03.1.4. React(리액트)의 개발환경 설정
***
1. my-app 이름의 개발 폴더 생성
>npx create-react-app my-app

<br><br>

## | 2주차(23.03.09)
  ## **Week02.1. Git(깃)에 대해**

### Week02.1.1. Git 관련
***
>1. 깃계정을 생성후 23-React1 폴더 생성.
>2. 23-React1 폴더를 깃 계정과 연동 후 README.md 를 작성
>3.  gitignore은 깃허브와 구글 검색을 통해 쉽게 생성가능

## **Week02.2. Javascript에 대해**
### Week02.2.1. Javascript(자바스크립트)란?
***

> 웹사이트가 살아 움직이도록 생명을 불어넣는 역할

### Week02.2.2. Javascript(자바스크립트)의 자료형
***
>  - var: 중복선언 O, 재할당 O
>  - let: 중복선언 X, 재할당 O
>  - const: 중복선언 X, 재할당 X
```javascript
//예시
  a = 1
  a = a++ //a:1
  a = ++a //a:2

  let a = 1
  let b= "1"
  a == b  //ture
  a === b //false
```
