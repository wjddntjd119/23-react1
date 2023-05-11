import React, { useState } from "react";
import TemparatureInput from "./TemperatureInput";

function BoilingVerdict(props){
  if(props.celsius >=100){
    return <p> 물이 끓습니다. </p>;
  }
  return <p> 물이 끓지 않습니다. </p>
}


//화씨를 섭씨온도로 바꾸기
function toCelisius(fahrenheit){
  return ((fahrenheit -32)*5)/9;
}

//섭씨온도를 화씨온도로 바꾸기
function toFahrenheit(celsius){
  return(celsius *9)/5 +32;
}


//온도값과 변환하는 함수르 파라미터로 받아 값을 변환
function tryConvert(temperature, convert){
  const input = parseFloat(temperature);
  //숫자가 아닌 값을 입력하면 빈칸 반환
  if(Number.isNaN(input)){
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000)/ 1000;
  return rounded.toString();
}

function Calculator(props){
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c");

  const handleCelsiusChange = (temperature)=>{
    setTemperature(temperature);
    setScale("c");
  };

  const handleFahrenheitChandge = (temperature)=>{
    setTemperature(temperature);
    setScale("f");
  };
  const celsius =
    scale === "f"? tryConvert(temperature, toCelisius) : temperature;
  const fahrenheit =
    scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;


  return(
    <div>
      <TemparatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemparatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChandge}
      />
      <BoilingVerdict celsius={parseFloat(celsius)}/>
    </div>
  )
}

export default Calculator;