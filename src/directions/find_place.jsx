//검색 후 길찾기 페이지 
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../cssdesign/find_place.css";

//페이지 이동
import Find_place_list from "./find_place_list";
import MapComponent from "../main/MapComponent";
import Search from "../directions/search";

//사용되는 이미지
import mapSpicy from '../img/mapspicy.png';
import mike from '../img/mike.svg';
import menu from '../img/menu.svg';
import x from '../img/x.svg';
import sangsaelist from '../img/sangsaelistyellow.svg';
import map from '../img/map.svg';

//장소 정보 list
const place_list = [
  { name: '다이소 대구 신당점', purpose: '생활용품', addr: '대구 달서구 계대동문로 25-1', km: '1.2km' },
  { name: '다이소 대구 어쩌구점', purpose: '생활용품', addr: '대구 달서구 계대정문로 25-1', km: '1.2km' }
];

export const Find_place = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [inputValue, setInputValue] = useState(""); //목적지 받음 

  const [isClicked, setIsClicked] = useState(false); // 버튼 클릭 상태

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  //목적지 input에 두기
  useEffect(() => {
    if (state?.destination && Array.isArray(state.destination)) {
      // destination 배열이 있을 경우 마지막 항목만 inputValue에 설정
      setInputValue(state.destination[state.destination.length - 1]);
    }
  }, [state?.destination]);

  return (
    <div className="screen_find_place">
      <div className="overlap-wrapper_find_place">
        <div className="overlap-11_find_place">
          <div className="view_find_place">
            <div className="map-spicy_find_place">
              <div className="text-wrapper_find_place">map spicy</div>
            </div>
            <img className="menu_find_place" alt="메뉴 아이콘" src={menu} />
            <img 
              className="img-x_find_place" 
              onClick={() => navigate('/Main_normal')} 
              alt="x" 
              src={x} 
            />
            <div className="image-wrapper_find_place">
              <img className="image_find_place" alt="mapSpicy_logo" src={mapSpicy} />
            </div>
            
            <button className="overlap-group-wrapper-111_find_place" onClick={handleClick}>
                <img 
                  className="image-two_find_place" 
                  alt={isClicked ? "map" : "sangsaelistyellow"} 
                  src={isClicked ? map : sangsaelist } />
                <div className="text-wrapper-11_find_place"> {isClicked ? "지도" : "목록"} </div>
            </button> 
            <div className="line_find_place"></div>
            <div className="overlap-group-wrapper-f_find_place">
              <div className="overlap-group-f_find_place">
                <input
                  className="search-input_find_place"
                  placeholder="장소, 주소 검색"
                  value={inputValue} // input 값 설정 - 목적지가 들어감
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <img className="image-1_find_place" alt="마이크" src={mike} />
                <div className="view-2_find_place" />
              </div>
            </div>
          </div>
        </div> 
      </div>
      {/* 지도-api / 목록 - 리스트 페이지 불러오기 이동 버튼 누르면 동작  */} 
      <div>
        {isClicked ? (
          <div className="map_find_place">
            <MapComponent className="map-component_find_place" />
          </div>
        ) : (
          <Find_place_list 
            data={place_list} 
            navigate={navigate}
          />
        )}
      </div>
    </div>
  );
};

export default Find_place;
