import React, { useState } from 'react';
import humanFemale from '../img/human-female-normal.svg';
import humanWheelchair from '../img/human-wheelchair-normal.svg';
import humanMale from '../img/human-male-normal.svg';
import pull from '../img/pull.svg';

const OverlapGroupNormal = ({ toggleHeight }) => {
    // 상태 관리: 안전 단계와 각 버튼 상태
    const [safetyLevel, setSafetyLevel] = useState('안전 단계 최저');
    const [selectedButton, setSelectedButton] = useState(1); // 1: div-3, 2: div-5, 3: div-7

    // 버튼 클릭 시 안전 단계와 색상 업데이트
    const handleSafetyLevelChange = (level) => {
        setSelectedButton(level);

        switch (level) {
            case 1:
                setSafetyLevel('안전 단계 최저');
                break;
            case 2:
                setSafetyLevel('안전 단계 중간');
                break;
            case 3:
                setSafetyLevel('안전 단계 최고');
                break;
            default:
                setSafetyLevel('안전 단계 최저');
        }
    };

    return (
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
                        <div className="text-wrapper-9">{safetyLevel}</div>{' '}
                        <div className="overlap-group-wrapper">
                            <div className="overlap-group-2">
                                <div className="line-2"></div>{' '}
                                <div
                                    className="fill-line"
                                    style={{
                                        width:
                                            selectedButton === 3
                                                ? '97%'
                                                : selectedButton === 2
                                                ? '50%'
                                                : '0%',
                                        backgroundColor: '#FFB10C',
                                    }}
                                ></div>{' '}
                                <div className="element">
                                    <button
                                        className={`div-3 ${
                                            selectedButton >= 1
                                                ? 'selected'
                                                : ''
                                        }`}
                                        onClick={() =>
                                            handleSafetyLevelChange(1)
                                        }
                                    ></button>
                                    <button
                                        className={`div-5 ${
                                            selectedButton >= 2
                                                ? 'selected'
                                                : ''
                                        }`}
                                        onClick={() =>
                                            handleSafetyLevelChange(2)
                                        }
                                    ></button>
                                    <button
                                        className={`div-7 ${
                                            selectedButton >= 3
                                                ? 'selected'
                                                : ''
                                        }`}
                                        onClick={() =>
                                            handleSafetyLevelChange(3)
                                        }
                                    ></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-wrapper-10">사용자 맞춤 설정</div>
            <img
                className="pull"
                src={pull}
                alt="사용자 설정"
                onClick={toggleHeight}
            />
        </div>
    );
};

export default OverlapGroupNormal;
