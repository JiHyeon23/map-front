//검색 후 길찾기의 밑에 나오는 저장된 리스트 함수 현재 필요 없음
import React from "react";
import "../cssdesign/find_place.css"; // 스타일링을 위한 클래스 네임 연결
import art from '../img/arrow-right-top.svg';

function Find_place_list(props) {
  const { data, navigate } = props;

  return (
    <div className="place-list-wrapper_find_place">
      {data.map((place) => {
        const { name, purpose, addr, km } = place;

        // 각 항목을 렌더링하는 부분
        return (
          <div className="place-list_find_place" key={name}> {/* 고유 값인 name을 key로 사용 */}
            <div className="place-info_find_place">
              <div className="header-group_find_place">
                <h3>{name}</h3>
                <p className="purpose_find_place">{purpose}</p>
              </div>
              <p className="address_find_place">{addr}</p>
              <p className="distance_find_place">{km}</p>
              <button className="artbox_find_place" onClick={() => navigate('/findwaybus', { state: { destination: name } })}>
                <img className="arrow-icon_find_place" alt="길찾기 아이콘" src={art} />
                <div className="text-artbox_find_place">길찾기</div>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Find_place_list;
