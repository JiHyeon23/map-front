//검색 기록 지금은 쓰이지 않음
import React from "react";
import "../cssdesign/search.css";
import x from '../img/x.svg';
import place from '../img/place.svg';
import clock from '../img/clock.svg';

function Directions_list_again (props) {
  const { data, onRemove, onClick } = props;

  return (
    <div className="directions-list-wrapper-s">
      {data.map((item, index) => (
        <div 
          key={index} 
          className="element-2-s" 
          style={{"--index": index}}
        >
          {item.type === 0 ? (
            <>
              <img className="image-3-s" alt="place" src={place} />
              <div className="text-wrapper-2-s">{item.date}</div>
              <img 
                className="image-2-s" 
                alt="x" 
                src={x} 
                onClick={() => onRemove(index)} 
                style={{ cursor: 'pointer' }}
              />
              <div 
                className="text-wrapper-3"
                onClick={() => onClick(item.location)}
                style={{ cursor: 'pointer' }}
              >
                {item.location}
              </div>
            </>
          ) : item.type === 1 ? (
            <>
              <img className="image-4-s" alt="clock" src={clock} />
              <div className="text-wrapper-2-s">{item.date}</div>
              <img 
                className="image-3-s" 
                alt="x" 
                src={x} 
                onClick={() => onRemove(index)} 
                style={{ cursor: 'pointer' }}
              />
              <div 
                className="text-wrapper-3"
                onClick={() => onClick(item.location)}
                style={{ cursor: 'pointer' }}
              >
                {item.location}
              </div>
            </>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default Directions_list_again ;