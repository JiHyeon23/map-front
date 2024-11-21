import React, { useState } from 'react';
import './main-normal.css';
import MapComponent from './MapComponent';
import ButtonSection from './main/ButtonSection';

import humanFemale from './img/human-female-normal.svg';
import humanWheelchair from './img/human-wheelchair-normal.svg';
import humanMale from './img/human-male-normal.svg';
import pull from './img/pull.svg';
import mapSpicy from './img/mapspicy.png';
import mike from './img/mike.svg';
import menu from './img/menu.svg';
import humanFemaleGril from './img/human-female-girl.svg';
import humanWheelchairGril from './img/human-wheelchair-girl.svg';
import humanMaleGirl from './img/human-male-girl.svg';

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [top, setTop] = useState('calc(100% - 50px)');
    const [height, setHeight] = useState('57px');

    const toggleHeight = () => {
        if (isOpen) {
            setHeight('57px');
            setTop('calc(100% - 50px)');
        } else {
            setHeight('371px');
            setTop('auto');
        }
        setIsOpen(!isOpen);
    };

    return (
        <div className="element">
            <div className="div">
                <div className="overlap">
                    <div className="frame">
                        <div>
                            <MapComponent />
                        </div>
                    </div>
                    <ButtonSection />
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
