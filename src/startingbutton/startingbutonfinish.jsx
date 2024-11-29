//길안내 종료 부분
import React from 'react';
import { useNavigate } from 'react-router-dom';
import motionSensor from '../img/motion-sensor.svg'; // 이미지 import
import '../cssdesign/startingbuttonfinish_style.css';

const Startingbuttonfinish = () => {
    const navigate = useNavigate();

    // 클릭 이벤트 핸들러
    const handleClick = () => {
        navigate("/Main_normal");  // "Main_normal" 페이지로 이동
    };

    return (
        <div className="two-frame">
            <div className="two-div-wrapper_fol">
                <div className="two-div_fol">
                    {/* 배경색이 있는 div 안에 "길안내종료" 텍스트와 이미지 배치 */}
                    <div className="two-view-3_fol" onClick={handleClick} style={{ cursor: "pointer" }}>
                        <div className="two-text-wrapper-2_fol">
                            길안내종료
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Startingbuttonfinish;
