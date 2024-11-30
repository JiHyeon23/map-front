//따라가기 버튼 페이지
import React from 'react';
import { useNavigate } from 'react-router-dom';
import motionSensor from '../img/motion-sensor.svg'; // 이미지 import
import '../cssdesign/findwaybus_frame_style.css';

const Findwayfol_frame = () => {
    const navigate = useNavigate();

    // 클릭 시 Startingbutton 페이지로 이동하는 함수
    const handleNavigate = () => {
        navigate('/startingbutton');
    };

    return (
        <div className="frame">
            <div className="div-wrapper_fol">
                <div className="div_fol">
                    {/* 배경색이 있는 div 안에 "따라가기" 텍스트와 이미지 배치 */}
                    <div className="view-3_fol">
                        <img
                            className="motion-sensor_fol"
                            src={motionSensor}
                            alt="motion-sensor"
                        />
                        <div
                            className="text-wrapper-2_fol"
                            onClick={handleNavigate}
                        >
                            따라가기
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Findwayfol_frame;
