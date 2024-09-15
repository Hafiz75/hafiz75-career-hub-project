import userImg from "../../../assets/images/user.png";
const Banner = () => {
  return (
    <>
      {/* banner */}
      <div className="flex px-[120px]">
        {/* banner details */}
        <div>
          <h1 className="text-[#1A1919] text-5xl font-extrabold leading-[60px]">
            One Step
            <br />
            Closer To Your
            <br />
            <span className="text-[#7E90FE]">Dream Job</span>
          </h1>
          <p className="text-[#757575] font-medium my-6">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="px-6 py-4 rounded-lg bg-[linear-gradient(90deg,#7E90FE_0%,#9873FF_100%)] text-white text-lg font-bold">
            Get Started
          </button>
        </div>
        {/* img container */}
        <div>
          <img src={userImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
