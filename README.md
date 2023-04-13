# **React1_201930327_정우성**

## | 7주차(23.04.13)
## :open_file_folder: **Week07.1. 오늘의 제목**
 ### :pushpin: Week07.1.1. 컴포넌트 추출
 ***



<br><br>

## | 6주차(23.04.06)
## :open_file_folder: **Week06.1. 컴포넌트에 대해(2)**
 ### :pushpin: Week06.1.1. 컴포넌트 추출
 ***
>1. 복잡한 컴포넌트를 `쪼개서 여러개의 컴포넌트`로 나눔.
>2. 큰 컴포넌트에서 `일부를 추출해 새로운 컴포넌트` 만듦.

실무에서는 처음부터 `1개의 컴포넌트에 하나의 기능`만 사용하도록 설계하는것이 좋음.

 <br>

 ### :pushpin: Week06.1.2. 실습하기
 ***
 1. 댓글 컴포넌트 만들기
  - Comment.jsx 생성
  - CommentList.jsx 생성
  - index.js 수정


 <br>

  ## :open_file_folder: **Week06.2. state 대해**
 ### :pushpin: Week06.2.1. state란?
 ***
 리액트 컴포넌트의 `변경가능`한 데이터


 <br>

  ### :pushpin: Week06.2.2. state의 특징
 ***
> 리액트만의 특별한 형태가 아닌 `단지 자바스크립트 객체`<br>
> **state은 직접 수정해서는 안된다.**

`setState() 함수 사용!!`
```javascript
//state를 직접 수정(잘못된 방법)
this.state = {
  name: '잘못된방법'
}

//setState 함수를 이용한 수정
this.setState({
  name: '맞는방법'
})
```

 <br>

  ### :pushpin: Week06.2.3. 생명주기란?
 ***
> `컴포넌트의 생성시점, 사용시점, 종료 시점`을 나타냄

1. 랜더링은 `props,setState,forceUpdate()`에 의해 상태가 변경되면 발생!
2. 랜더링이 끝나면 `componentDidUpdate()`함수 호출
3. 마지막으로 컴포넌트가 언마운트 되면 `compomentWillUnmount()`함수 호출

 <br>

   ### :pushpin: Week06.2.4. 실습하기
 ***
1. state와 생명주기 함수 사용하기
  - 집가서 코드 공부하기
  - Notification.jsx
  - NotificationList.jsx

 <br>


 <br><br>

## | 5주차(23.03.30)
## :open_file_folder: **Week05.1. 엘리먼트에 대해**
 ### :pushpin: Week05.1.1. 엘리먼트란?
 ***
> 엘리먼트는 리액트 앱의 가장 작은 빌딩 블록들<br>
(Elements are the smallest building blocks of React apps.)

`화면에 나타나는 내용`을 기술하는 자바스크립트 객체

 <br>

### :pushpin: Week05.1.2. 엘리먼트의 생김새
***
- 리액트 엘리먼트는 `자바스크립트 객체`의 형태로 존재

 <br>

 ### :pushpin: Week05.1.3. 엘리먼트의 특징
***
> 엘리먼트 생성 후에는 자식이나 속성을 바꿀수 없음

`불변성`을 가지고 있음

 <br>

### :pushpin: Week05.1.4. 렌더링된 엘리먼트 업데이트
***
tick() 함수가 호출될 때마다 기본엘리먼트를 변경하는 것이 아닌<br>
`새로운 엘리먼트를 생성해서 바꿔치기`하는 것임.
```javascript
function tick(){
  const element = (
    <div>
      <h1>안녕, 리액트!</h1>
      <h2>현재 시간:: {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```

 <br>

 ### :pushpin: Week05.1.5. 실습하기
***
1. 4-3 랜더링된 엘리먼트 업데이트하기(시간이 1초마다 바뀜)
  - clock.html
2. 4-4 시계만들기
  - Clock.jsx 추가
  - index.js 수정

<br>

  ## :open_file_folder: **Week05.2. 컴포넌트에 대해**
 ### :pushpin: Week05.2.1. 컴포넌트 기반 구조란?
 ***
> 작은 컴포넌트들이 모여서 하나의 컴포넌트를 구성하고 컴포넌트들이 모여서 전체페이지를 구성

 <br>

 ### :pushpin: Week05.2.2. Props란?
 ***
> `컴포넌트에 전달할 다양한 정보를 담고있는 자바스크립트 객체`

 <br>

 ### :pushpin: Week05.2.3. Props의 특징
 ***
1. 변경할수 없다.(읽기전용)
> 같은 Props가 들어오면 항상 같은 엘리먼트를 리턴해야됨.<br>
>속성이 다른 엘리먼트를 생성하려면 `새로운 props를 컴포넌트에 전달`하면 됨

 <br>

 ### :pushpin: Week05.2.4. Props의 사용법
 ***
 - `JSX`에서는 컴포넌트에 `키-값 쌍` 형태로 구성
 - 문자열 이외 정수,변수, 다른 컴포넌트 등이 들어갈 경우 `중괄호를 사용해 감싸줌`

```javascript
<Profile
  name="소플"
  introduction="안녕하세요"
  viewCount={1500} //정수에 중괄호 사용
/>
```
- `JSX가 아니면`, `createElement()함수의 두번째 파라미터`로 객체 입력

 <br>

  ### :pushpin: Week05.2.5. 컴포넌트 종류
 ***
1. 함수 컴포넌트
> props를 받아, 엘리먼트를 리턴<br>
```javascript
function Welcome(props){
  return <h1> 안녕! {props.name}</h1>
}
```
2. 클래스 컴포넌트
> 상속받아서 컴포넌트 생성<br>
```javascript
class Welcome extends React.Component{
  render(){
    return <h1> 안녕! {props.name}</h1>
  }
}
```
 <br>

   ### :pushpin: Week05.2.6. 컴포넌트 이름 짓기
 ***
컴포넌트 **`이름은 항상 대문자로 시작`**

<br>

   ### :pushpin: Week05.2.7. 컴포넌트 랜더링
 ***
> 컴포넌트로부터 `엘리먼트를 생성`하여 이를 `리액트 DOM에 전달`

<br>

   ### :pushpin: Week05.2.7. 컴포넌트 합성
 ***
여러개의 컴포넌트를 합쳐서 하나의 컴포넌트를 만드는 것


 <br><br>

## | 4주차(23.03.23)
## :open_file_folder: **Week04.1. JSX에 대해**
 ### :pushpin: Week04.1.1. JSX란?
 ***
 자바 스크립트 확장 문법
 >내부적으로 XML/HTML 코드를 자바스크립트로 변환해주는 역할

 <br>

 ### :pushpin: Week04.1.2. JSX의 장점
***
1. 코드가 간결해 진다.
2. 가독성을 높여 준다.
3. Injection Attack, 해킹 방법을 방어함으로써 보안에 강합니다.

 <br>

### :pushpin: Week04.1.3. JSX 표현방법
 ***
 변수 선언 후, 중괄호를 이용하여 표현 가능
```javascript
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
```
<br>
 어트리뷰트에 따옴표를 이용해 문자열 리터럴을 정의

```javascript
const element = <a href="https://www.reactjs.org" />;
```

 <br>

### :pushpin: Week04.1.4. 실습하기
 ***
 1. chapter_03 디렉토리 생성
 2. Book.jsx, Library.jsx 생성
 3. index.js 내용 수정



<br><br>

## | 3주차(23.03.16)
<img src ="https://chocolatey.org/assets/images/global-shared/logo-square.svg"></img>
> ### **Chocolatey**(윈도우 패키지 관리자)
> - 윈도우 환경에서 프로그램을 설치할 때 도움을 줌

<img src ="https://nodejs.org/static/images/logo.svg" style="background: #111111"></img>
> ### **node.js**
> - JavaScript를 서버에서도 사용할 수 있도록 만든 프로그램

## :open_file_folder:**Week03.1. React에 대해**
 ### :pushpin: Week03.1.1. React(리액트)란?
 ***
>  복잡한 사이트를 쉽고 빠르게 만들고, 관리<br>
(= SPA를 쉽고 빠르게 만들 수 있는 도구)

### :pushpin: Week03.1.2. React(리액트)의 장점
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

### :pushpin: Week03.1.3. React(리액트)의 단점
***
> 1. 방대한 학습량
>     - 하지만 자바스크립트 공부한 경우 빠르게 학슴 가능
> 2. 높은 상태관리 복잡도
>     - state, life cycle등의 개념이 있지만 어렵지 않음

### :pushpin: Week03.1.4. React(리액트)의 개발환경 설정
***
1. my-app 이름의 개발 폴더 생성
>npx create-react-app my-app

<br><br>

## | 2주차(23.03.09)
  ## :open_file_folder: **Week02.1. Git(깃)에 대해**

### :pushpin: Week02.1.1. Git 관련
***
>1. 깃계정을 생성후 23-React1 폴더 생성.
>2. 23-React1 폴더를 깃 계정과 연동 후 README.md 를 작성
>3.  gitignore은 깃허브와 구글 검색을 통해 쉽게 생성가능

## :open_file_folder: **Week02.2. Javascript에 대해**
### :pushpin: Week02.2.1. Javascript(자바스크립트)란?
***

> 웹사이트가 살아 움직이도록 생명을 불어넣는 역할

### :pushpin: Week02.2.2. Javascript(자바스크립트)의 자료형
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
