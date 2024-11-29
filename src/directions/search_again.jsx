//검색
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 임포트
import "../cssdesign/search.css";
import Directions_list from "./search_list";
import mapSpicy from '../img/mapspicy.png';
import mike from '../img/mike.svg';
import menu from '../img/menu.svg';

//검색 기록이 여기에서 list로 저장이 되는거라 지금은 필요 없는 부분 추후에 검색 기록을 만들 때 수정할 것
const initialData = [];

//출발지 저장
const startpoint = [];

export const Search_again = () => {
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
      startpoint.push(displayValue);
      setInputValue("");
    }
  };

  //엔터 치면 입력
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddData();
      navigate('/find_place_again', { state: { startpoint } }); 
    }
  };

  const handleRemoveData = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  return (
    <div className="screen_search">
      <div className="overlap-wrapper_search">
        <div className="overlap_search">
          <div className="view_search">
            <div className="map-spicy_search">
              <div className="text-wrapper_search">map spicy</div>
            </div>
            <img className="menu_search" alt="메뉴 아이콘" src={menu} />
            <div className="image-wrapper_search">
              <img className="image_search" alt="mapSpicy_logo" src={mapSpicy} />
            </div>
            <div className="overlap-group-wrapper-s_search">
              <div className="overlap-group-s_search">
                <input
                  className="search-input_search"
                  placeholder="장소, 주소 검색"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                />
                <img className="image-1-s_search" alt="마이크" src={mike} />
                <div className="view-2-s_search" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Directions_list 
            data={data} 
            onRemove={handleRemoveData} 
            onClick={() => navigate('/find_place_again')}
          />
        </div>
      </div>
    </div>
  );
};

export default Search_again;
