// 경고 페이지
import React from "react";
import image from "../img/warning.png";
import "../cssdesign/warning_style.css";

export const Warning = () => {
  return (
    <div className="warning_screen">
      <div className="warning_div">
        <img className="warning_image" alt="Image" src={image} />

        <p className="warning_text-wrapper">
          이 경로는 일부 구간에서 치안이 <br />
          불안정할 수 있습니다. 주의하시기 바랍니다.
        </p>
      </div>
    </div>
  );
};

export default Warning;
