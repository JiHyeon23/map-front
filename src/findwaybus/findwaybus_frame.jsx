import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 훅 import
import motionSensor from "../img/motion-sensor.svg"; // 이미지 import
import "../cssdesign/findwaybus_frame_style.css";

const Findwaybus_frame = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  // 클릭 시 Startingbutton 페이지로 이동하는 함수
  const handleNavigate = () => {
    navigate("/startingbutton"); // '/startingbutton' 경로로 이동
  };

  return (
    <div className="frame">
      <div className="div-2">
        <img className="motion-sensor" src={motionSensor} alt="motion-sensor" />
        {/* 클릭 시 handleNavigate 함수 호출 */}
        <div className="text-wrapper-2" onClick={handleNavigate}>
          따라가기
        </div>
      </div>
    </div>
  );
};

export default Findwaybus_frame;
