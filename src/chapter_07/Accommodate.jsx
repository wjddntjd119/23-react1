import { useEffect, useState } from "react";
import useCounter from "./useCounter";

const maxValue = 10;

function Accommodate(props){
  const [isFull, setIsFull] = useState(false);
  const [count, increaseCount, decreaseCount] = useCounter(0);

  useEffect(() => {
    console.log("==============");
    console.log("useEffect 호출");
    console.log(`isFull: ${isFull}`);
  })

  useEffect(() =>{
    setIsFull(count >= maxValue);
    console.log(`정원이 초과되었습니다.  ${count}`);

  },[count]);

  return(
    <div style={{padding:16}}>
      <p>{`총 ${count}명을 수옹했습니다`}</p>
      <button onClick={increaseCount} disabled={isFull}>입장</button>
      <button onClick={decreaseCount}>퇴장</button>

      {isFull && <p style={{color: "red"}}>정원이 가득찼습니다.</p>}
    </div>
  )
}
export default Accommodate;