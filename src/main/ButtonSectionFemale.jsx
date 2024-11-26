import React, { useState, useRef } from 'react';

import gong4 from '../img/gong4.png';
import store from '../img/store.png';
import oneonenine from '../img/oneonenine.png';
import police from '../img/police.png';
import cctv from '../img/cctv.png';
import siren from '../img/siren.png';

const ButtonSectionFemale = () => {
    const [activeButton, setActiveButton] = useState(null);

    const scrollContainerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        e.preventDefault();
        setIsDragging(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 1;
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleButtonClick = (buttonId) => {
        setActiveButton((prevActiveButton) =>
            prevActiveButton === buttonId ? null : buttonId
        );
    };

    return (
        <div
            className="view-normal"
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            style={{
                display: 'flex',
                overflowX: 'scroll',
                cursor: isDragging ? 'grabbing' : 'grab',
                userSelect: 'none',
            }}
        >
            <button
                className="button-wrapper-6"
                style={{
                    backgroundColor:
                        activeButton === 'cctv' ? '#FFE2A4' : '#ffffff',
                }}
                onClick={() => handleButtonClick('cctv')}
            >
                <img className="img" src={cctv} alt="CCTV 이미지" />
                <span className="text-wrapper-cctv">CCTV</span>
            </button>

            <button
                className="button-wrapper-7-girl"
                style={{
                    backgroundColor:
                        activeButton === 'siren' ? '#FFE2A4' : '#ffffff',
                }}
                onClick={() => handleButtonClick('siren')}
            >
                <img className="img-3-girl" src={siren} alt="비상벨 이미지" />
                <span className="text-wrapper-6-siren">안전 비상벨</span>
            </button>

            <div className="frame-2-girl">
                <button
                    className="button-wrapper-girl"
                    style={{
                        backgroundColor:
                            activeButton === 'gong4' ? '#FFE2A4' : '#ffffff',
                    }}
                    onClick={() => handleButtonClick('gong4')}
                >
                    <img
                        className="img-girl"
                        src={gong4}
                        alt="공사 현장 이미지"
                    />
                    <span className="text-wrapper-girl">공사 현장</span>
                </button>
            </div>
            <div className="frame-3-girl">
                <button
                    className="button-wrapper-2-girl"
                    style={{
                        backgroundColor:
                            activeButton === 'store' ? '#FFE2A4' : '#ffffff',
                    }}
                    onClick={() => handleButtonClick('store')}
                >
                    <img
                        className="image-2-girl"
                        src={store}
                        alt="편의점 이미지"
                    />
                    <span className="text-wrapper-girl">편의점</span>
                </button>
            </div>
            <div className="frame-4-girl">
                <button
                    className="button-wrapper-3-girl"
                    style={{
                        backgroundColor:
                            activeButton === 'oneonenine'
                                ? '#FFE2A4'
                                : '#ffffff',
                    }}
                    onClick={() => handleButtonClick('oneonenine')}
                >
                    <img
                        className="img-2-girl"
                        src={oneonenine}
                        alt="소방 시설 이미지"
                    />
                    <span className="text-wrapper-girl">소방 시설</span>
                </button>
            </div>
            <div className="frame-5-girl">
                <button
                    className="button-wrapper-4-girl"
                    style={{
                        backgroundColor:
                            activeButton === 'police' ? '#FFE2A4' : '#ffffff',
                    }}
                    onClick={() => handleButtonClick('police')}
                >
                    <img
                        className="img-girl"
                        src={police}
                        alt="경찰서 이미지"
                    />
                    <span className="text-wrapper-girl">경찰서</span>
                </button>
            </div>
            <button
                className="button-wrapper-5-girl"
                style={{
                    backgroundColor:
                        activeButton === 'crime' ? '#FFE2A4' : '#ffffff',
                }}
                onClick={() => handleButtonClick('crime')}
            >
                <span className="text-wrapper-4-girl">범죄 주의 구간</span>
            </button>
        </div>
    );
};

export default ButtonSectionFemale;
