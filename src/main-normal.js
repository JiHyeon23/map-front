import React, { useState } from 'react';
import './main-normal.css';

import gong4 from './img/gong4.png';
import store from './img/store.png';
import oneonenine from './img/oneonenine.png';
import police from './img/police.png';
import humanFemale from './img/human-female-normal.svg';
import humanWheelchair from './img/human-wheelchair-normal.svg';
import humanMale from './img/human-male-normal.svg';
import pull from './img/pull.svg';
import mapSpicy from './img/mapspicy.png';
import mike from './img/mike.svg';
import menu from './img/menu.svg';

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [top, setTop] = useState('calc(100% - 50px)');
    const [height, setHeight] = useState('50px');

    const toggleHeight = () => {
        if (isOpen) {
            setHeight('50px');
            setTop('calc(100% - 50px)');
        } else {
            setHeight('371px');
            setTop('auto');
        }
        setIsOpen(!isOpen);
    };

    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonId) => {
        setActiveButton((prevActiveButton) =>
            prevActiveButton === buttonId ? null : buttonId
        );
    };

    return (
        <div className="element">
            <div className="div">
                <div className="overlap">
                    <div className="frame">{/* 지도? */}</div>
                    <div className="view-normal">
                        <div className="frame-2">
                            <button
                                className="button-wrapper"
                                style={{
                                    backgroundColor:
                                        activeButton === 'gong4'
                                            ? '#FFE2A4'
                                            : '#ffffff',
                                }}
                                onClick={() => handleButtonClick('gong4')}
                            >
                                <img
                                    className="img"
                                    src={gong4}
                                    alt="공사 현장 이미지"
                                />
                                <span className="text-wrapper">공사 현장</span>
                            </button>
                        </div>
                        <div className="frame-3">
                            <button
                                className="button-wrapper-2"
                                style={{
                                    backgroundColor:
                                        activeButton === 'store'
                                            ? '#FFE2A4'
                                            : '#ffffff',
                                }}
                                onClick={() => handleButtonClick('store')}
                            >
                                <img
                                    className="image-2"
                                    src={store}
                                    alt="편의점 이미지"
                                />
                                <span className="text-wrapper">편의점</span>
                            </button>
                        </div>
                        <div className="frame-4">
                            <button
                                className="button-wrapper-3"
                                style={{
                                    backgroundColor:
                                        activeButton === 'oneonenine'
                                            ? '#FFE2A4'
                                            : '#ffffff',
                                }}
                                onClick={() => handleButtonClick('oneonenine')}
                            >
                                <img
                                    className="img-2"
                                    src={oneonenine}
                                    alt="소방 시설 이미지"
                                />
                                <span className="text-wrapper">소방 시설</span>
                            </button>
                        </div>
                        <div className="frame-5">
                            <button
                                className="button-wrapper-4"
                                style={{
                                    backgroundColor:
                                        activeButton === 'police'
                                            ? '#FFE2A4'
                                            : '#ffffff',
                                }}
                                onClick={() => handleButtonClick('police')}
                            >
                                <img
                                    className="img"
                                    src={police}
                                    alt="경찰서 이미지"
                                />
                                <span className="text-wrapper">경찰서</span>
                            </button>
                        </div>
                        <button
                            className="button-wrapper-5"
                            style={{
                                backgroundColor:
                                    activeButton === 'crime'
                                        ? '#FFE2A4'
                                        : '#ffffff',
                            }}
                            onClick={() => handleButtonClick('crime')}
                        >
                            <span className="text-wrapper-4">
                                범죄 주의 구간
                            </span>
                        </button>
                    </div>
                    <div
                        className="overlap-wrapper"
                        style={{
                            height: height,
                            top: top,
                            transition: 'top 0.3s ease, height 0.3s ease',
                        }}
                    >
                        <div className="overlap-group">
                            <div className="on">
                                <div className="text-wrapper-5">기능</div>
                                <div className="on-2">
                                    <div className="human-female-wrapper">
                                        <button className="img-button">
                                            <img
                                                className="img-3"
                                                src={humanFemale}
                                                alt="여성 사용자"
                                            />
                                        </button>
                                    </div>
                                    <div className="human-wheelchair-wrapper">
                                        <button className="img-button">
                                            <img
                                                className="img-3"
                                                src={humanWheelchair}
                                                alt="휠체어 사용자"
                                            />
                                        </button>
                                    </div>
                                    <div className="frame-wrapper">
                                        <div className="bottom-nav-human-wrapper">
                                            <button className="img-button">
                                                <img
                                                    className="bottom-nav-human"
                                                    src={humanMale}
                                                    alt="남성 사용자"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="view-2">
                                    <div className="text-wrapper-6">일반</div>
                                    <div className="text-wrapper-7">노약자</div>
                                    <div className="text-wrapper-8">여성</div>
                                </div>
                                <div className="overlap-2">
                                    <div className="div-2">
                                        <hr className="line-separator" />
                                        <div className="text-wrapper-9">
                                            안전 1단계
                                        </div>
                                        <div className="overlap-group-wrapper">
                                            <div className="overlap-group-2">
                                                <div className="line-2"></div>
                                                <div className="element">
                                                    <button className="div-3"></button>
                                                    <button className="div-4"></button>
                                                    <button className="div-5"></button>
                                                    <button className="div-6"></button>
                                                    <button className="div-7"></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-wrapper-10">
                                사용자 맞춤 설정
                            </div>
                            <img
                                className="pull"
                                src={pull}
                                alt="사용자 설정"
                                onClick={toggleHeight}
                            />
                        </div>
                    </div>
                </div>
                <div className="view-3">
                    <div className="map-spicy">
                        <div className="text-wrapper-11">map spicy</div>
                    </div>
                    <div className="image-wrapper">
                        <img
                            className="image-4"
                            src={mapSpicy}
                            alt="map spicy 로고"
                        />
                    </div>
                    <button className="view-4">
                        <img
                            className="image-5"
                            src={mike}
                            alt="마이크 아이콘"
                        />
                        <div className="text-wrapper-12">장소, 주소 검색</div>
                    </button>

                    <img className="menu" src={menu} alt="메뉴 아이콘" />
                </div>
            </div>
        </div>
    );
}

export default App;
