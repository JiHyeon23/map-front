//검색 후 장소 목록 박스 
import React from "react";
import "./find_place";
import art from '../img/arrow-right-top.svg';

function Find_place_list(props) {
  const { data, navigate } = props;

  return (
    <div className="place-list-wrapper">
      {data.map((place, index) => {
        const { name, purpose, addr, km } = place; 

        // 각 항목을 렌더링하는 부분
        return (
          <div className="place-list" key={index}>
            <div className="place-info">
              <div className="header-group">
                <h3>{name}</h3>
                <p className="purpose">{purpose}</p>
              </div>
              <p>{addr}</p>
              <p>{km}</p>
              <button className="artbox" onClick={() => navigate('/findwaybus', { state: { destination: name } })}>
              <img className="arrow-icon" alt="art" src={art} />
              <div className="text-artbox"> 길찾기 </div>
            </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Find_place_list;
