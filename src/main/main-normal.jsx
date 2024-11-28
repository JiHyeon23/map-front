import React, { useState } from 'react';
import './main-normal.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate,
} from 'react-router-dom';

import MapComponent from './MapComponent';
import ButtonSectionNormal from './ButtonSectionNormal';
import ButtonSectionFemale from './ButtonSectionFemale';
import ButtonSectionNoin from './ButtonSectionNoin';
import OverlapGroup from './OverlapGroupNormal';

import mapSpicy from '../img/mapspicy.png';
import mike from '../img/mike.svg';
import menu from '../img/menu.svg';

//페이지 이동 관련 import
import Search from '../directions/search';
import FindWayBus from '../findwaybus/findwaybus';
import Find_place from '../directions/find_place';
import Find_again from '../findwaybus/find_again';

//메인 화면

function Main_normal() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [top, setTop] = useState('calc(100% - 50px)');
    const [height, setHeight] = useState('57px');

    const [selectedUser, setSelectedUser] = useState('male');

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

    const handleUserChange = (user) => {
        setSelectedUser(user);
    };

    return (
        <div className="element">
            <div className="div">
                <div className="overlap">
                    <div className="frame">
                        {/* 
                        <div style={{ width: '100%', height: '100vh' }}>
                            <MapComponent />
                        </div>*/}
                    </div>
                    {selectedUser === 'male' && <ButtonSectionNormal />}
                    {selectedUser === 'female' && <ButtonSectionFemale />}
                    {selectedUser === 'wheelchair' && <ButtonSectionNoin />}
                    <div
                        className="overlap-wrapper"
                        style={{
                            height: height,
                            top: top,
                            transition: 'top 0.3s ease, height 0.3s ease',
                        }}
                    >
                        <OverlapGroup
                            toggleHeight={toggleHeight}
                            onUserChange={handleUserChange}
                        />
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
                    <button
                        className="view-4"
                        onClick={() => navigate('/search')}
                    >
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

//페이지 이동 * 되도록 건들이지 마세요 *
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main_normal />} />
                <Route path="/search" element={<Search />} />
                <Route path="/findwaybus" element={<FindWayBus />} />
                <Route path="/find_place" element={<Find_place />} />
                <Route path="/find_again" element={<Find_again />} />
            </Routes>
        </Router>
    );
}

export default App;
