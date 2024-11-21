import React, { useEffect, useRef } from 'react';

function MapComponent() {
    const mapContainer = useRef(null);
    const mapInstance = useRef(null);

    useEffect(() => {
        const initMap = () => {
            const { naver } = window;

            if (!naver || !naver.maps) {
                console.error('네이버 지도 API가 로드되지 않았습니다.');
                return;
            }

            const getCurrentPosition = () => {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            const { latitude, longitude, accuracy } =
                                position.coords;

                            let location;
                            if (accuracy <= 1000) {
                                location = new naver.maps.LatLng(
                                    latitude,
                                    longitude
                                );
                            } else {
                                alert(
                                    '위치 정확도가 낮아 서울 시청으로 지도를 업데이트합니다.'
                                );
                                location = new naver.maps.LatLng(
                                    37.5665,
                                    126.978
                                ); // 서울 시청 좌표
                            }

                            const mapOptions = {
                                center: location,
                                zoom: 17,
                            };

                            if (!mapInstance.current) {
                                mapInstance.current = new naver.maps.Map(
                                    mapContainer.current,
                                    mapOptions
                                );
                            } else {
                                mapInstance.current.setCenter(location);
                            }

                            new naver.maps.Marker({
                                position: location,
                                map: mapInstance.current,
                                icon: {
                                    content: `<div style="
                                        width: 15px;
                                        height: 15px;
                                        background-color: #FFB10C;
                                        border: 2px solid white;
                                        border-radius: 50%;
                                        box-shadow: 0 0 10px 10px rgba(255, 177, 12, 0.2);
                                    "></div>`,
                                    anchor: new naver.maps.Point(10, 10),
                                },
                                title: '현재 위치',
                            });
                        },
                        (error) => {
                            console.error('Geolocation error:', error);
                            alert('현재 위치를 가져올 수 없습니다.');
                        },
                        {
                            enableHighAccuracy: true, // 높은 정확도 요청
                            maximumAge: 30000, // 캐시된 위치 허용 시간
                            timeout: 27000, // 위치 탐색 제한 시간
                        }
                    );
                } else {
                    alert('Geolocation을 지원하지 않습니다.');
                }
            };

            getCurrentPosition();
        };

        if (window.naver && window.naver.maps) {
            initMap(); // 네이버 지도 API 로드된 후 지도 초기화
        } else {
            const timer = setInterval(() => {
                if (window.naver && window.naver.maps) {
                    clearInterval(timer);
                    initMap();
                }
            }, 100); // 네이버 지도 API가 로드되면 초기화
        }
    }, []);

    return (
        <div
            ref={mapContainer}
            style={{ width: '100%', height: '100%' }} // 지도 크기 설정
        ></div>
    );
}

export default MapComponent;
