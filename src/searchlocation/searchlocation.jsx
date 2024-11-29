import React, { useState } from "react";
import "./searchlocation_style.css";

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
    <div className="div-wrapper">
      <div className="div">
        <div className="view">
          <div className="map-spicy">
            <div className="text-wrapper">map spicy</div>
          </div>
          <div className="image-wrapper">
            <img className="image" alt="Map Spicy" src={mapspicy} />
          </div>
          <img className="menu" alt="Menu" src={menu} />
        </div>

        <div className="view-2">
          <div className="frame">
            <input
              className="input-field"
              type="text"
              value={departure}
              onChange={handleDepartureChange}
              placeholder="출발지 입력"
            />
            {/* white_x 클릭 시 출발지 입력 비우기 */}
            <div className="overlap-group" onClick={clearDeparture}>
              <img className="whitex" alt="White X" src={whitex} />
            </div>
          </div>

          <div className="frame-2">
            <div className="overlap-group" onClick={clearDestination}>
              <img className="whitex" alt="White X" src={whitex} />
            </div>
            <input
              className="input-field"
              type="text"
              value={destination}
              onChange={handleDestinationChange}
              placeholder="도착지 입력"
            />
          </div>

          <div className="frame-3"></div>

          <div className="overlap">
            <img className="x" alt="X" src={xImage} />
          </div>

          <div className="overlap-2">
            {/* 화살표 클릭 시 위치 교환 */}
            <img
              className="arrowupdown"
              alt="Arrow Up Down"
              src={arrowupdown}
              onClick={swapLocations} // 클릭 시 swapLocations 함수 호출
            />
          </div>
        </div>

        <div className="div-2">
          <div className="element">
            <div className="text-wrapper-4">10.27</div>
            <img className="group-2" alt="X" src={xImage} />
            <img className="vector-2" alt="Time" src={time} />
            <div className="text-wrapper-5">대구 달서구 신당동 183</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchlocation;
