import RightSideImg from "../assets/images/resi.png";

const RightSideContent = () => {
  return (
    <section className="right-image">
      <div className="bottom-right-image ">
      </div>
      <div className="image-box">
        <img
          src={RightSideImg}
          alt="Hospital Illustration"
          className="mx-auto mb-4 "
        />
      </div>
    </section>
  );
};

export default RightSideContent;
