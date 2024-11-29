//출발지 검색 버스 도보 없는 페이지
//현재 안 씁니다.
import React, { useState } from "react";
import "../cssdesign/searchlocation_style.css";

// 이미지 import
import mapspicy from "../img/mapspicy.png";
import menu from "../img/menu.svg";
import whitex from "../img/white_x.png";
import xImage from "../img/x.svg";
import arrowupdown from "../img/arrowupdown.svg";
import time from "../img/time.png";

const Searchlocation = () => {
  // 입력 상태 관리
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");

  // 출발지 입력 변화 처리
  const handleDepartureChange = (event) => {
    setDeparture(event.target.value);
  };

  // 도착지 입력 변화 처리
  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  // 출발지와 도착지 위치 교환 함수
  const swapLocations = () => {
    setDeparture(destination);
    setDestination(departure);
  };

  // 출발지 입력 비우기
  const clearDeparture = () => {
    setDeparture("");
  };

  // 도착지 입력 비우기
  const clearDestination = () => {
    setDestination("");
  };

  return (
    <div className="div-wrapper_sl">
      <div className="div_sl">
        <div className="view_sl">
          <div className="map-spicy_sl">
            <div className="text-wrapper_sl">map spicy</div>
          </div>
          <div className="image-wrapper_sl">
            <img className="image_sl" alt="Map Spicy" src={mapspicy} />
          </div>
          <img className="menu_sl" alt="Menu" src={menu} />
        </div>

        <div className="view-2_sl">
          <div className="frame_sl">
            <input
              className="input-field_sl"
              type="text"
              value={departure}
              onChange={handleDepartureChange}
              placeholder="출발지 입력"
            />
            {/* white_x 클릭 시 출발지 입력 비우기 */}
            <div className="overlap-group_sl" onClick={clearDeparture}>
              <img className="whitex_sl" alt="White X" src={whitex} />
            </div>
          </div>

          <div className="frame-2_sl">
            <div className="overlap-group_sl" onClick={clearDestination}>
              <img className="whitex_sl" alt="White X" src={whitex} />
            </div>
            <input
              className="input-field_sl"
              type="text"
              value={destination}
              onChange={handleDestinationChange}
              placeholder="도착지 입력"
            />
          </div>

          <div className="frame-3_sl"></div>

          <div className="overlap_sl">
            <img className="x_sl" alt="X" src={xImage} />
          </div>

          <div className="overlap-2_sl">
            {/* 화살표 클릭 시 위치 교환 */}
            <img
              className="arrowupdown_sl"
              alt="Arrow Up Down"
              src={arrowupdown}
              onClick={swapLocations} // 클릭 시 swapLocations 함수 호출
            />
          </div>
        </div>

        <div className="div-2_sl">
          <div className="element_sl">
            <div className="text-wrapper-4_sl">10.27</div>
            <img className="group-2_sl" alt="X" src={xImage} />
            <img className="vector-2_sl" alt="Time" src={time} />
            <div className="text-wrapper-5_sl">대구 달서구 신당동 183</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchlocation;
