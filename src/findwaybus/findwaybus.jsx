import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import '../cssdesign/findwaybus_style.css';
//import Findwaybus_frame from '../findwaybus/findwaybus_frame';

import busYellow from '../img/busyellow.svg';
import busBlack from '../img/busblack.svg';
import runningManBlack from '../img/runningmanblack.png';
import runningManYellow from '../img/runningmanyellow.png';
import mapSpicy from '../img/mapspicy.png';
import menuIcon from '../img/menu.svg';
import xIcon from '../img/x.svg';
import arrowTop from '../img/arrow-top.png';
import arrowDown from '../img/arrow-down.png';

function FindWayBus() {
    const navigate = useNavigate();
    const location = useLocation();
    const [selected, setSelected] = useState('bus');
    const [departure, setDeparture] = useState(''); // 출발지 상태
    const [destination, setDestination] = useState('');

    useEffect(() => {
        const savedSelected = localStorage.getItem('selected');
        if (savedSelected) {
            setSelected(savedSelected);
        }

        if (location.state && location.state.destination) {
            setDestination(location.state.destination); // 목적지 설정
        }
    }, [location]);

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
        <div className="div-wrapper_bus">
            <div className="div_bus">
                <div className="stop-edge_bus">
                    <div
                        className="view_bus"
                        style={{
                            borderBottomWidth: '1px',
                            borderBottomStyle: 'solid',
                            borderColor:
                                selected === 'bus' ? '#666666' : '#d1d1d1',
                        }}
                    >
                        <div
                            className="text-wrapper_bus"
                            style={{
                                color:
                                    selected === 'bus' ? '#ffb10c' : '#000000',
                            }}
                        >
                            버스
                        </div>
                        <img
                            className="vector_bus clickable_bus"
                            src={selected === 'bus' ? busYellow : busBlack}
                            alt="Bus Icon"
                            style={{ cursor: 'pointer' }}
                            onClick={handleBusClick}
                        />
                    </div>

                    <div
                        className="overlap-group-wrapper_bus"
                        onClick={handleWalkingClick}
                        style={{
                            borderBottomWidth: '1px',
                            borderBottomStyle: 'solid',
                            borderColor:
                                selected === 'walking' ? '#666666' : '#d1d1d1',
                        }}
                    >
                        <div className="overlap-group_bus">
                            <div
                                className="text-wrapper-2_bus"
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
                                className="motion-sensor_bus clickable_bus"
                                src={
                                    selected === 'walking'
                                        ? runningManYellow
                                        : runningManBlack
                                }
                                alt="Running Man Icon"
                                style={{ cursor: 'pointer' }}
                                onClick={handleWalkingClick}
                            />
                        </div>
                    </div>
                </div>

                <div className="text-wrapper-3_bus">출발지를 입력해주세요</div>
                <div className="view-2_bus">
                    <div className="map-spicy_bus">
                        <div className="text-wrapper-4_bus">MapSpicy</div>
                    </div>
                    <div className="image-wrapper_bus">
                        <img
                            className="image_bus"
                            src={mapSpicy}
                            alt="Map Image"
                        />
                    </div>
                    <img
                        className="menu_bus clickable_bus"
                        src={menuIcon}
                        alt="Menu Icon"
                        onClick={() => console.log('Menu icon clicked!')}
                    />
                </div>

                <div className="view-3_bus">
                    <div
                        className="frame-clikable_bus"
                        onClick={() => console.log('Navigate to Bus Page!')}
                    >
                        <input
                            type="text"
                            placeholder="출발지를 입력해주세요"
                            className="input-field_bus"
                        />
                    </div>

                    <div className="frame-2_bus">
                        <input
                            type="text"
                            placeholder="도착지를 입력해주세요"
                            className="input-field_bus"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                        />
                    </div>

                    <div className="frame-3_bus"></div>
                    <div className="overlap_bus">
                        <img className="group_bus" src={xIcon} alt="X Icon" />
                    </div>

                    <div className="overlap-2_bus">
                        <img
                            className="arrow-left_bus"
                            src={arrowTop}
                            alt="Arrow Up Icon"
                        />
                        <img
                            className="arrow-left-2_bus"
                            src={arrowDown}
                            alt="Arrow Down Icon"
                            onClick={swapInputValues}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FindWayBus;
