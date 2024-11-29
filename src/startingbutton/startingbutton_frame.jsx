import React, { useState, useEffect } from 'react';
import '../cssdesign/startingbutton_frame_style.css';

// 이미지 import
import start from "../img/start.png";
import goal from "../img/goal.png";

// 컴포넌트 import
import Set_Time from './set_time';
import Set_Distance from './set_distance';
import Set_Calories from './set_calories';

export const Startingbutton_frame = () => {
  const [time, setTime] = useState(0); // 예상 시간
  const [distance, setDistance] = useState(0); // 이동 거리
  const [calories, setCalories] = useState(0); // 소모 칼로리
  const [startLocation, setStartLocation] = useState(""); // 출발지
  const [goalLocation, setGoalLocation] = useState(""); // 도착지
  const [spacing, setSpacing] = useState("default-spacing"); // 동적 간격 클래스

  useEffect(() => {
    const clientId = "mcd4dyhjzk";
    const clientSecret = "U9CDL557LU5KQym1qRXgSfMNaGKYDPNnlf1J2Dxm";
    const url = `https://naveropenapi.apigw.ntruss.com/map-direction/v1/driving?start=126.9780,37.5665&goal=126.9769,37.5700&option=pedestrian`;

    fetch(url, {
      headers: {
        "X-NCP-APIGW-API-KEY-ID": clientId,
        "X-NCP-APIGW-API-KEY": clientSecret
      }
    })
      .then(response => response.json())
      .then(data => {
        const route = data.route?.trafast?.[0];
        if (route) {
          const { summary } = route;
          setDistance(summary.distance);
          setTime(Math.ceil(summary.duration / 60000)); // 밀리초를 분으로 변환
          setStartLocation(route.summary.start.name || "출발지 미상");
          setGoalLocation(route.summary.goal.name || "도착지 미상");

          // 거리 기준으로 간격 클래스 설정
          if (summary.distance < 500) {
            setSpacing("close-spacing");
          } else if (summary.distance < 2000) {
            setSpacing("medium-spacing");
          } else {
            setSpacing("far-spacing");
          }
        }
      })
      .catch(error => console.error("Error:", error));
  }, []);

  return (
    <div className="screen">
      <div className={`div ${spacing}`}>
        {/* 도착지 프레임 */}
        <div className="frame-7">
          <div className="text-wrapper-1">
            <img src={goal} alt="도착 아이콘" className="goal" />
            <div className="text-1">{goalLocation || "도착지를 불러오는 중..."}</div>
          </div>
        </div>

        {/* 중간 정보 프레임 */}
        <div className="frame">
          <div className="text-wrapper-2">
            <div className="top-line">
              <Set_Time time={time} />
              <Set_Distance distance={distance} />
            </div>
            <Set_Calories calories={calories} />
          </div>
        </div>

        {/* 따라가기 버튼 */}
        <div className="frame-2">
          <div className="text-wrapper-3">따라가기</div>
        </div>

        {/* 출발지 프레임 */}
        <div className="frame-3">
          <div className="text-wrapper-5">
            <img src={start} alt="출발 아이콘" className="start" />
            <div className="text-2">{startLocation || "출발지를 불러오는 중..."}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Startingbutton_frame;
