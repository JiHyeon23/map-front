//일반인 버튼 누르면 나오는 페이지
import React, { useState, useRef } from 'react';

import gong4 from '../img/gong4.png';
import store from '../img/store.png';
import oneonenine from '../img/oneonenine.png';
import police from '../img/police.png';

//일반 노말 카테고리
const ButtonSectionNormal = () => {
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
            <div className="frame-2">
                <button
                    className="button-wrapper"
                    style={{
                        backgroundColor:
                            activeButton === 'gong4' ? '#FFE2A4' : '#ffffff',
                    }}
                    onClick={() => handleButtonClick('gong4')}
                >
                    <img className="img" src={gong4} alt="공사 현장 이미지" />
                    <span className="text-wrapper">공사 현장</span>
                </button>
            </div>
            <div className="frame-3">
                <button
                    className="button-wrapper-2"
                    style={{
                        backgroundColor:
                            activeButton === 'store' ? '#FFE2A4' : '#ffffff',
                    }}
                    onClick={() => handleButtonClick('store')}
                >
                    <img className="image-2" src={store} alt="편의점 이미지" />
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
                            activeButton === 'police' ? '#FFE2A4' : '#ffffff',
                    }}
                    onClick={() => handleButtonClick('police')}
                >
                    <img className="img" src={police} alt="경찰서 이미지" />
                    <span className="text-wrapper">경찰서</span>
                </button>
            </div>
            <button
                className="button-wrapper-5"
                style={{
                    backgroundColor:
                        activeButton === 'crime' ? '#FFE2A4' : '#ffffff',
                }}
                onClick={() => handleButtonClick('crime')}
            >
                <span className="text-wrapper-4">범죄 주의 구간</span>
            </button>
        </div>
    );
};

export default ButtonSectionNormal;
