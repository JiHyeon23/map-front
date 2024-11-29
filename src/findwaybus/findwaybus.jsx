import React, { useState, useEffect } from 'react';
import './findwaybus_style.css';


import busYellow from '../img/busyellow.svg';
import busBlack from '../img/busblack.svg';
import runningManBlack from '../img/runningmanblack.png';
import runningManYellow from '../img/runningmanyellow.png';
import mapSpicy from '../img/mapspicy.png';
import menuIcon from '../img/menu.svg';
import xIcon from '../img/x.svg';
import arrowupdown from '../img/arrowupdown.svg';
import white_x from '../img/white_x.png';

function Findwaybus() {
    const [selected, setSelected] = useState('bus');
    const [departure, setDeparture] = useState(''); // 출발지 상태
    const [destination, setDestination] = useState(''); // 도착지 상태

    useEffect(() => {
        const savedSelected = localStorage.getItem('selected');
        if (savedSelected) {
            setSelected(savedSelected);
        }
    }, []);

    const handleBusClick = () => {
        if (selected !== 'bus') {
            setSelected('bus');
            localStorage.setItem('selected', 'bus');
        }
    };

    const handleWalkingClick = () => {
        if (selected !== 'walking') {
            setSelected('walking');
            localStorage.setItem('selected', 'walking');
        }
    };

    // 출발지와 도착지를 교환하는 함수
    const swapInputValues = () => {
        setDeparture((prevDeparture) => {
            setDestination(prevDeparture); // 출발지를 도착지로 설정
            return destination; // 도착지를 출발지로 설정
        });
    };

    return (
        <div className="div-wrapper">
            <div className="div">
                <div className="stop-edge">
                    <div
                        className="view"
                        onClick={handleBusClick}
                        style={{
                            borderBottomWidth: '1px',
                            borderBottomStyle: 'solid',
                            borderColor:
                                selected === 'bus' ? '#666666' : '#d1d1d1',
                        }}
                    >
                        <div
                            className="text-wrapper"
                            style={{
                                color:
                                    selected === 'bus' ? '#ffb10c' : '#000000',
                            }}
                        >
                            버스
                        </div>
                        <img
                            className="vector clickable"
                            src={selected === 'bus' ? busYellow : busBlack}
                            alt="Bus Icon"
                        />
                    </div>

                    <div
                        className="overlap-group-wrapper"
                        onClick={handleWalkingClick}
                        style={{
                            borderBottomWidth: '1px',
                            borderBottomStyle: 'solid',
                            borderColor:
                                selected === 'walking' ? '#666666' : '#d1d1d1',
                        }}
                    >
                        <div className="overlap-group">
                            <div
                                className="text-wrapper-2"
                                style={{
                                    color:
                                        selected === 'walking'
                                            ? '#ffb10c'
                                            : '#000000',
                                }}
                            >
                                도보
                            </div>
                            <img
                                className="motion-sensor clickable"
                                src={
                                    selected === 'walking'
                                        ? runningManYellow
                                        : runningManBlack
                                }
                                alt="Running Man Icon"
                            />
                        </div>
                    </div>
                </div>

                <div className="text-wrapper-3">도착지를 입력해주세요</div>
                <div className="view-2">
                    <div className="map-spicy">
                        <div className="text-wrapper-4">map spicy</div>
                    </div>
                    <div className="image-wrapper">
                        <img className="image" src={mapSpicy} alt="Map Image" />
                    </div>
                    <img
                        className="menu clickable"
                        src={menuIcon}
                        alt="Menu Icon"
                        onClick={() => console.log('Menu icon clicked!')}
                    />
                </div>

                <div className="view-3">
                    <div className="frame clickable">
                        <input
                            type="text"
                            placeholder="출발지를 입력해주세요"
                            className="input-field departure"
                            value={departure} // 출발지 상태와 바인딩
                            onChange={(e) => setDeparture(e.target.value)} // 출발지 업데이트
                        />
                        <img
                            className="input-icon"
                            src={white_x}
                            alt="Departure Icon"
                        />
                    </div>
                    <div className="frame-2">
                        <input
                            type="text"
                            placeholder="도착지를 입력해주세요"
                            className="input-field destination"
                            value={destination} // 도착지 상태와 바인딩
                            onChange={(e) => setDestination(e.target.value)} // 도착지 업데이트
                        />
                        <img
                            className="input-icon"
                            src={white_x}
                            alt="Destination Icon"
                        />
                    </div>
                    <div className="frame-3"></div>
                    <div className="overlap">
                        <img className="group" src={xIcon} alt="X Icon" />
                    </div>
                    <div className="overlap-2">
                        <img
                            className="arrowupdown"
                            src={arrowupdown}
                            alt="Arrow Updown"
                            onClick={swapInputValues} // 클릭 시 값 교환
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Findwaybus;
