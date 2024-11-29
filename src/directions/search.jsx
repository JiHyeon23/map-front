import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 임포트

import "../cssdesign/search.css";
import Directions_list from "./search_list";
import mapSpicy from '../img/mapspicy.png';
import mike from '../img/mike.svg';
import menu from '../img/menu.svg';

//검색 기록이 여기에서 list로 저장이 되는거라 지금은 필요 없는 부분 추후에 검색 기록을 만들 때 수정할 것
const initialData = [];

//목적지 저장
const destination = [];

export const Search = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(initialData);
  const [inputValue, setInputValue] = useState("");

  //입력창 최대 길이, 넘어가면 ...으로 표시
  const maxLength = 16;
  const displayValue = inputValue.length > maxLength ? inputValue.slice(0, maxLength) + '...' : inputValue;

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  //적은걸 search_list.jsx를 호출하여 검색기록 페이지를 불러냄 지금은 기록 부분이 보이지 않지만 없애면 안됨
  const handleAddData = () => {
    if (inputValue) {
      const newData = {
        date: `${(new Date().getMonth() + 1).toString().padStart(2, '0')}.${new Date().getDate().toString().padStart(2, '0')}`,
        location: displayValue,
        type: 0
      };

      setData([newData, ...data]);
      destination.push(displayValue);
      setInputValue("");
    }
  };

  //엔터 치면 입력
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddData();
      navigate('/find_place', { state: { destination } }); //엡터 치면 바로 find_place 페이지로 넘어감 + 목적지 저장
    }
  };

  const handleRemoveData = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  return (
    <div className="screen">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="view">
            <div className="map-spicy">
              <div className="text-wrapper">map spicy</div>
            </div>
            <img className="menu" alt="메뉴 아이콘" src={menu} />
            <div className="image-wrapper">
              <img className="image" alt="mapSpicy_logo" src={mapSpicy} />
            </div>
            <div className="overlap-group-wrapper-s">
              <div className="overlap-group-s">
                <input
                  className="search-input"
                  placeholder="장소, 주소 검색"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                />
                <img className="image-1-s" alt="마이크" src={mike} />
                <div className="view-2-s" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Directions_list 
            data={data} 
            onRemove={handleRemoveData} 
            onClick={() => navigate('/find_place')}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
