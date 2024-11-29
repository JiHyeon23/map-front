import React, { useState, useEffect } from 'react';
import './startingbutton_frame_style.css';

// 이미지 import
import start from "../img/start.png";
import goal from "../img/goal.png";

// 컴포넌트 import
import Set_Time from './set_time';
import Set_Distance from './set_distance';
import Set_Calories from './set_calories';

export const Startingbutton_frame = () => {
  const [time, setTime] = useState(8); // 예시 값
  const [distance, setDistance] = useState(541); // 예시 값
  const [calories, setCalories] = useState(26); // 예시 값

  useEffect(() => {
    setTime(10);
    setDistance(620);
    setCalories(30);
  }, []);

  return (
    <div className="screen">
      <div className="div">
        <div className="frame-7">
          <div className="text-wrapper-1">
            <img src={goal} alt="도착 아이콘" className="goal" />
            <div className="text-1">대구 달서구 신당동 183</div>
          </div>
        </div>

        <div className="frame">
          <div className="text-wrapper-2">
            <div className="top-line">
              <set_time time={time} />
              <set_distance distance={distance} />
            </div>
            <set_calories calories={calories} />
          </div>
        </div>

        <div className="frame-2">
          <div className="text-wrapper-3">따라가기</div>
        </div>

        <div className="frame-3">
          <div className="text-wrapper-5">
            <img src={start} alt="출발 아이콘" className="start" />
            <div className="text-2">다이소 대구 신당점</div>
          </div>
        </div>

        <div className="frame-4">
          <div className="text-wrapper-4">
            엉터리생고기 두번째이야기까지 63m 이동(계대동문로)
          </div>
        </div>

        <div className="frame-5">
          <div className="text-wrapper-4">
            엉터리생고기 두번째이야기 <br />
            엉터리생고기 두번째이야기 앞에서 횡단보도 이용
          </div>
        </div>

        <div className="frame-6">
          <div className="text-wrapper-4">
            킹마트 <br />
            킹마트 앞에서 신당빌딩까지 262m 이동(서당로)
          </div>
        </div>
      </div>
    </div>
  );
};

export default Startingbutton_frame;