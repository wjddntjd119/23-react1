import React, {useState} from "react";

function ConfirmButton(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () =>{
      setIsConfirmed((situation) => !situation)
    };

    return(
    <div>
      <button onClick={handleConfirm} disabled={isConfirmed}>
        {isConfirmed ? "확인됨" : "확인하기"}
      </button>
      <button onClick={handleConfirm} disabled={!isConfirmed}>
        {!isConfirmed ? "취소됨" : "취소하기"}
      </button>
    </div>
      
    );
}
export default ConfirmButton;