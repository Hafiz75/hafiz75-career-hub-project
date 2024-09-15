import { Link } from "react-router-dom";
import locationImg from "../../../../assets/icons/Location.png";
import moneyImg from "../../../../assets/icons/money.png";
/* this bool(boolean comes from appliedJobs component) */
const Job = ({ job, bool }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    /* featured job container */
    <div className={`py-8 p-8 border-2 border-[#E8E8E8] rounded-lg ${bool && 'flex justify-between items-center mb-7'}`}>
      {/* featured job content */}
        <div>
        <img src={logo} className="mb-7" alt="" />
      <h3 className="text-[#474747] text-xl font-bold">{job_title}</h3>
      <p className="text-[#757575] font-medium mb-2">{company_name}</p>
      {/* container of remote and full time */}
      <div className="flex gap-2 font-bold mb-2 remote_or_onsite">
        {/* here some style come from index.css */}
        <span>{remote_or_onsite}</span>
        <span>{job_type}</span>
      </div>
      {/* container of location and salary */}
      <div className="flex gap-2 text-[#757575] font-medium mb-2">
        <span className="flex gap-1">
          <img src={locationImg} alt="" />
          {location}
        </span>
        <span className="flex gap-1">
          <img src={moneyImg} alt="" /> Salary: {salary}
        </span>
      </div>
        </div>
      <Link to={`/statistics/${id}`}>
        <button className="mt-4 px-4 py-2 rounded-[4px] bg-[linear-gradient(90deg,#7E90FE_0%,#9873FF_100%)] text-white text-lg font-bold">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default Job;
