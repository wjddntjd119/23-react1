# **React1_201930327_정우성**

## | 12주차(23.05.18)
## :open_file_folder: **Week12.1. 합성과 상속**
### :pushpin: Week11.1.1. 합성이란?
 ***
 >`합성`: 여러개의 컴포넌트를 합쳐서 `새로운 컴포넌트`를 만드는 것

 1. **Containment**
 - 하위 컴포넌트를 포합하는 형태의 합성 방법
 - `children prop` 을 사용하여 자식 엘리먼트를 출력에 그대로 전달 하는것이 좋음
 ```js
 React.createElement(
  type,
  [props],
  [...children]
  ///children이 배열인 이유: 여러개의 하위 컴포넌트를 가질 수 있음.
 )
 ```

 ```js
 //예제1

 function WelcomeDialog(props){
  return(
    <FancyBorder color ="blue">
      <h1 className ="Dialog">
        어서오세요
      </h1>
      <p className = "Dialog-message">
        사이트 방문을 환영합니다
      </p>
    </FancyBorder>
  )
 }
 ```

 > FancyBorder 컴포넌트로 감싸진 부분에 ```<h1>, <p>``` 두개의 태그가 있음

 >이 두 태그 모두 FancyBorder 컴포넌트에 `children이라는 이름의 props로 전달`
<br>

2. **Specialization(특수화)**
- 범용적인 개념을 구별이 되게 구체화 하는 것
```js
///예시2
 function Dialog(props){
  return(
    <FancyBorder color ="blue">
      <h1 className ="Dialog">
        {props.title}
      </h1>
      <p className = "Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  )
}

function WelcomeDialog(props){
  return(
    <Dialog
      title="어서오세요"
      message="사이트 방문을 환영합니다"
    />
  )
}
```
> `범용적`으로 쓸 수 있는 컴포넌트를 만들어 놓고 이를 `특수화 `시켜서 `컴포넌트를 사용하는 합성 방식`

<br>

3. **Containment**와 **Specialization** 같이 사용
- `props.children`을 통해 하위 컴포넌트 포함(Containment)

- `별도의 props`를 선언하여 구체화 시킴(Specialization)

<br>

### :pushpin: Week11.1.2. 상속이란?
 ***
 > 다른 컴포넌트로부터 `상속 받아` 새로운 컴포넌트를 만드는것

<br>

 but..!
 ## 리액트에서는 상속보다는 **합성을 사용하는 것이 더 좋음!**

<br>

### :pushpin: Week11.1.3. 실습하기
 ***
 1. Card 컴포넌트 만들기
 - Card. jsx
 > `하위컴포넌트를 감싸서` 카드 형태로 보여줌`
 ```js
function Card(props){
  const { title, backgroundColor, children } = props;

  return(
    <div
      style={{
        margin:8,
        padding:8,
        borderRadius: 8,
        boxShadow: "0px 0px 4px grey",
        backgroundColor: backgroundColor || "white",
      }}
    >
      {title && <h1>{title}</h1>}
      {children}
    </div>
  )
}
export default Card;
 ```

 <br>

 - ProfileCard.jsx
 >Card 컴포넌트를 사용하여 children으로 간단한 소개글
 ```js
import Card from "./Card";

function ProfileCard(props){
  return(
    <Card title="신나는 코딩공부!" backgroundColor="#4ea04e">
      <p>안녕하세요, 정우성입니다.</p>
      <p>저는 리액트를 사용해서 개발하고 있습니다.</p>
    </Card>
  )
}
export default ProfileCard;
 ```
3. 실습화면
<img src="./src/img/ch13.png">

<br><br>

## :open_file_folder: **Week11.2. 컨텍스트**
### :pushpin: Week11.2.1. 합성이란?
 ***
 >

<br>



<br><br>

## | 11주차(23.05.11)
## :open_file_folder: **Week11.1. State 끌어올리기**
 ### :pushpin: Week11.1.1. Shared State
 ***
> 어떤 컴포넌트의 state에 있는 데이터를 `여러 개의 하위 컴포넌트`에서 `공통적으로 사용`하는 경우

-> 공유된 state

<br>

 ### :pushpin: Week11.1.2. state 끌어올리기
 ***
 >하위 컴포넌트의 state를 `공통된 부모 컴포넌트`로 `끌어올려서 공유`하는 방식

<br>

 ### :pushpin: Week11.1.3. 실습하기
 ***
 1. 섭씨온도와 화씨온도 표시하기
 - TemperatureInput.jsx
 - Calculator.jsx

<br>

 <br><br>

## | 10주차(23.05.04)
## :open_file_folder: **Week10.1. 리스트와 키**
 ### :pushpin: Week10.1.1. 리스트와 키란?
 ***
 `리스트`: 자바스크립트의 변수나 객체를 **하나의 변수로 묶어놓은 배열**
 <br>

`키`: 각 객체나 아이템을 구분할 수 있는 **고유한 값**

<br>

 ### :pushpin: Week10.1.2. 여러개의 컴포넌트 렌더링
 ***
 > 배열에 들어있는 엘리먼트를 `map() 함수`를 이용하여 렌더링

 ```js
//배열: numbers

 const doubled = numbers.map((number) => number * 2);
 ```

 
<br>

 ### :pushpin: Week10.1.3. 리스트의 키에 대하여
 ***
> 리스트에서 **아이템을 구별**하기위한 `고유한 문자열`

리액트에서의 키의 값은 `같은 리스트에 있는 엘리먼트 사이`에서만 고유한 값이면 된다.

1. 숫자 값을 이용(키값이 중복 될 수 있음)
2. id값을 이용(보통적으로 많이 씀)
3. 인덱스 사용(명시적으로 넣어주지 않으면 기본적으로 사용)
 
<br>

 ### :pushpin: Week10.1.4. 실습하기
 ***
 1. 출력부 출력하기
- AttendanceBook.jsx
 
<br>

## :open_file_folder: **Week10.2. 폼**
 ### :pushpin: Week10.2.1. 폼이란?
 ***
> 사용자로부터 입력을 받기 위해 사용하는 양식

 <br>

  ### :pushpin: Week10.2.2. 제어 컴포넌트
 ***
 `사용자가 입력`한 값에 `접근하고 제어`할 수 있도록 해주는 컴포넌트
>그 값이 리액트의 통제를 받는 입력 폼 엘리먼트
 <br>

  ### :pushpin: Week10.2.3. 제어 컴포넌트의 종류
 ***
 1. input 태그

 ```js
 <input type="text" value = {value} onChange={handleChange}/>

 //입력을 받고 변화가 생길경우 handleChange 함수를 실행시켜 값을 state에 저장
 ```

2. textarea 태그

 ```js
 <textarea type="text" value = {value} onChange={handleChange}/>
 
 //input 태그와 마찬가지로 state 변화된 값을 저장
 ```

3. select 태그
 ```js
 <select type="text" value = {value} onChange={handleChange}>
  <option value="apple">사과</option>
  .
  .
  .
</select>

//value로 선택된 옵션의 값이 들어감
 ```

 5. File input 태그
 ```js
 <input type="file" />
 ```
  > 사용자가 하나 또는 여러개의 파일을 선택할수 있게 하는 태그
 
 `읽기전용 태그` 이므로, `비제어 컴포넌트`가 된다.


 <br>

  ### :pushpin: Week10.2.4. 여러개의 입력 다루기
 ***
 **`여러개의 state를 선언`**하여 각각의 입력값들을 받아주면 된다.

 <br>

  ### :pushpin: Week10.2.5. Input Null Value
 ***
 > `value prop은 넣되 자유롭게 입력`할 수 있게 만들고 싶을 경우, 값에 `undifined 또는 null`을 넣으면 된다.

 <br>

   ### :pushpin: Week10.2.6. 실습하기 
 ***
 1. 사용자 정보 입력받기
 - SignUp.jsx

 <br>

<br><br>

## | 9주차(23.04.27)
## :open_file_folder: **Week09.1. 이벤트 핸들링**
 ### :pushpin: Week09.1.1. DOM 이벤트 VS React 이벤트
 ***
1. Dom 이벤트
```js
<button onclick="activate()">
```
2. React 이벤트
```js
<button onClick={activate}>
```

> Dom에서는 **onclick 소문자**, React에서는 **onClick 대문자**<br>
이벤트호출을 DOM에서는 **문자열**로, React에서는 **함수**로 전달

  <br>

 ### :pushpin: Week09.1.2. 함수형으로 이벤트 바꾸기
 ***
 ```js
 // 방법1
 function handleClick(){
  setIsToggleOn((isToggleOn)=> !isToggleOn);
 }
//방법2
  const handleClick = () => {
  setIsToggleOn((isToggleOn)=> !isToggleOn);
 }
 ```
> `어디서든지 부르고 싶을때` **클래스형 함수**로 선언<br>
`많이 사용하지 않을 경우` **화살표 함수**로 사용

  <br>

 ### :pushpin: Week09.1.3. Arguments 전달하기
 ***
 > 함수를 정의할 때는 파라미터, 매개변수<br>
 함수를 사용할 때는 Argument, 인자 라고 부름

 ```js
 <button onClick={(event) => this.deleteItem(id, event)}>삭제하기</button>

  <button onClick={this.deleteItem.bind(this, id)}>삭제하기</button>
 ```
bind를 이용한 방법은 첫번째 인자로 id, **event가 두번째 인자로 자동으로 전달**

 <br>

  ### :pushpin: Week09.1.4. 실습하기
 ***
 1. ConfirmButton 컴포넌트 만들기
  - useState를 이용해 반응 감지
  - 버튼을 누르면 !처리
  -(응용!) 확인하기를 누르면 취소버튼이 활성화됨.

 <br>

## :open_file_folder: **Week09.2. 조건부 렌더링**
### :pushpin: Week09.2.1. 조건부 렌더링이란?
***
 >조건에 따라 어떤 컴포넌트를 렌더링 할지 결정하는 것이
 `조건부 렌더링`이다.

 <br>

 ### :pushpin: Week09.2.2. 엘리먼트 변수
***
 렌더링해야 될 컴포넌트를 변수처럼 사용하는 방법

 <br>

 ### :pushpin: Week09.2.3. 인라인 조건
***
> 필요한 곳에 조건문을 직접 넣어 사용하는 방법
 1. 인라인 If
  - if문을 직접사용하지 않고 `&&논리 연산자 사용`
```js
{unRead.length > 0 &&
  <h2>
    현재 {unRead.length}개의 읽지 않은 메세지가 있습니다.
  </h2>
}
```
<br>

2. 인라인 If - Else
 - 조건문 ? (참일경우) : (거짓일경우)
 ```js
  ...
  .
  이 사용자는 현재 <b>{props.isLoggedIn ? '로그인' : '로그인하지 않은'}</b> 상태입니다.
  .
  ...
 ```

3. 렌더링 막기
> null 을 리턴하면 된다.

 <br>

### :pushpin: Week09.2.4. 실습하기
***
1. 로그인 여부를 나타내는 툴바 만들기
- Toolbar.jsx
- LandingPage.jsx

<br>

 <br><br>

## | 7주차(23.04.13)
## :open_file_folder: **Week07.1. 훅에 대해**
 ### :pushpin: Week07.1.1. 훅(Hook)이란 무엇인가
 ***
 > `함수형 컴포넌트`에서도 `state나 생명주기 함수 기능`을 사용하게 해주기 위한 기능

 이름은 `use` 로 시작함

<br>

 ### :pushpin: Week07.1.2. **각종 훅들**
 ***
 1. useState
 ```js
 //사용방법
 const[count, setCount] = useState(0);
 .
 .
 .
 <button onClick={setCount(count+1)}/>
 ```
<br>

 2. useEffect
  - 개발자가 의도하지 않은 고트가 실행되면서 버그가 발생

  ```js
    useEffect(이펙트함수, [의존성 배열]);
    //의존성 배열: 배열 안에 하나라도 변수값이 병경되면 이펙트 함수 실행
    // 한번씩 실행시키고 싶다면 [] 빈배열 쓰기

    //예시
    useEffect(()=>{
      document.title = `총 ${count}번 클릭`

      return ()=>{
        //컴포넌트가 마운트 해제되기 전 실행
      }
    })
  ```
  <br>

  3. useMemo<br>
  연산량이 높은 작업이 매번 렌더링 될떄마다 반복되는 것을 피하기 위해 사용
  <br>

  4. useCallback
  > useMemo와 비슷하지만 값이 아닌 함수를 반환
  <br>

  5. useRef
  - 래퍼런트(특정 컴포넌트 접근할수 있는 객체)를 반환
  - 컴포넌트가 마운트 해제 전까지 유지(return 하기 전까지) 

<br>

 ### :pushpin: Week07.1.3. 훅의 규칙
 ***
1. 최상의 레벨에서만 호출해야한다.
  - 반복문 조건문에서 호출하면 안됨.
  - P.224 잘못된 코드 참고

<br>

2. 리액트 함수형 컴포넌트에서만 훅 호출

<br>

 ### :pushpin: Week07.1.4. 나만의 훅 만들기
 ***
1. UserStatus.jsx
2. UserListItem.jsx
3. 위에 두개코드에서 선언된 컴포넌트를 호출

<br>

 ### :pushpin: Week07.1.5. 실습하기
 ***
 1. 입장 퇴장을 처리하는 컴포넌트
  - Accommodate.jsx
  - useCounter.jsx
 2. `state와 생명주기 함수 이해하기`
 3. `마운트 이해하기` <br>
  ㄴ 마운트는 컴포넌트 불러오기 <br>언마운트는 컴포넌트 종료
 4. 7장 마치며 한번보기
 <br>

 5. 어떻게 프로젝트를 생성해야하는지 알려줄거임
  - 인터넷 가능
  - 오픈북
  - 15개의 문항, 빅포레스트에 업데이트

<br>


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
