import React from "react";
import RightSideImg from "../assets/images/resi.png";
import Vector1 from "../assets/images/Vector1.png";
// import Vector2 from "../assets/images/Vector2.png";

const RightSideContent = () => {
  return (
    <section className="right-image">
      <div className="bottom-right-image ">
        {/* <img src={Vector1} alt="" /> */}
      </div>
      <div className="image-box">
        <img
          src={RightSideImg}
          alt="Hospital Illustration"
          className="mx-auto mb-4"
        />
      </div>
    </section>
  );
};

export default RightSideContent;
