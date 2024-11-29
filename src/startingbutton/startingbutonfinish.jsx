import React from 'react';
import motionSensor from '../img/motion-sensor.svg'; // 이미지 import
import '../cssdesign/startingbuttonfinish_style.css';

const Startingbuttonfinish = () => {
    return (
        <div className="two-frame">
            <div className="two-div-wrapper_fol">
                <div className="two-div_fol">
                    {/* 배경색이 있는 div 안에 "길안내종료" 텍스트와 이미지 배치 */}
                    <div className="two-view-3_fol">
                        <img
                            className="two-motion-sensor_fol"
                            src={motionSensor}
                            alt="motion-sensor"
                        />
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
