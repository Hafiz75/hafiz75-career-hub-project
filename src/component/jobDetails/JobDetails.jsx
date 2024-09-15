import { useLoaderData } from "react-router-dom";
import bgImg1 from "../../assets/images/bg1.png";
import salaryIcon from "../../assets/icons/money.png";
import jobIcon from "../../assets/icons/calendar.png";
import phoneIcon from "../../assets/icons/phone.png";
import emailIcon from "../../assets/icons/email.png";
import addressIcon from "../../assets/icons/location2.png";
import { useState } from "react";
import { saveItem } from "../appliedJobs/utility/utility";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
const JobDetails = () => {
  const [ApplyNowOrApplied, setApplyNowOrApplied] = useState(false)
  const {
    id,
    job_title,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information: objOfContactInformation,
  } = useLoaderData();

      const notify = ()=> toast('You successfully added this job!')

  function handleApplied() {
    setApplyNowOrApplied(true);
saveItem('applied-job', id);
notify()
 }

  const { phone, email, address } = objOfContactInformation;
  return (
    <div className="py-28">
      {/* banner of job details */}
      <div
        className="bg-[linear-gradient(90deg,rgba(126,144,254,0.05)_0%,rgba(152,115,255,0.05)_100%)] bg-no-repeat bg-contain bg-left-bottom h-44"
        style={{ backgroundImage: `url(${bgImg1})`, paddingLeft: -0 }}
      >
        <h3 className="text-center text-[#1A1919] text-3xl font-bold">
          Job details
        </h3>
      </div>
      {/* job details and contact information container */}
      <div className="flex gap-6 pl-[120px] pt-[100px]">
        {/* job details container */}
        <div>
          {/* job description container */}
          <div>
            <p className="text-base">
              <span className="text-[#1A1919] font-bold">
                Job Description:{" "}
              </span>
              <span className="text-[#757575] font-medium">
                {job_description}
              </span>
            </p>
          </div>
          {/* job responsibility container */}
          <div>
            <p className="text-base">
              <span className="text-[#1A1919] font-bold">
                Job Responsibility:{" "}
              </span>
              <span className="text-[#757575] font-medium">
                {job_responsibility}
              </span>
            </p>
          </div>
          {/* container of educational requirements */}
          <div>
            <p className="text-base">
              <span className="text-[#1A1919] font-bold">
                Educational Requirements:{" "}
              </span>
              <br />
              <span className="text-[#757575] font-medium">
                {educational_requirements}
              </span>
            </p>
          </div>
          {/* container of experience */}
          <div>
            <p className="text-base">
              <span className="text-[#1A1919] font-bold">experiences: </span>
              <br />
              <span className="text-[#757575] font-medium">{experiences}</span>
            </p>
          </div>
        </div>
        {/* job details and contact information container */}
      <div>
      <div className="bg-[linear-gradient(90deg,rgba(126,144,254,0.10)_0%,rgba(152,115,255,0.10)_100%)] w-[500px] whitespace-nowrap p-7 rounded-lg">
          {/* salary and job title container */}
          <div>
            <h3 className="text-[#1A1919] text-xl font-bold">Job details</h3>
            <hr className="bg-[linear-gradient(90deg,#7E90FE_0%,#9873FF_100%)] h-[1px] w-full my-6" />
            {/* salary */}
            <div className="flex mb-4">
              <img src={salaryIcon} alt="" />
              <p className="text-base">
                <span className="text-[#1A1919] font-bold">Salary: </span>
                <span className="text-[#757575] font-medium">
                  {salary} (Per Month)
                </span>
              </p>
            </div>
            {/* Job title */}
            <div className="flex mb-4">
              <img src={jobIcon} alt="" />
              <p className="text-base">
                <span className="text-[#1A1919] font-bold">Job Title: </span>
                <span className="text-[#757575] font-medium">{job_title}</span>
              </p>
            </div>
          </div>
          {/* Contact Information container */}
          <div>
            <h3 className="text-[#1A1919] text-xl font-bold">
              Contact Information
            </h3>
            <hr className="bg-[linear-gradient(90deg,#7E90FE_0%,#9873FF_100%)] h-[1.5px] w-full my-6"/>

            {/* phone */}
            <div className="flex mb-4">
              <img src={phoneIcon} alt="" />
              <p className="text-base">
                <span className="text-[#1A1919] font-bold">Phone: </span>
                <span className="text-[#757575] font-medium">{phone}</span>
              </p>
            </div>

            {/* email */}
            <div className="flex mb-4">
              <img src={emailIcon} alt="" />
              <p className="text-base">
                <span className="text-[#1A1919] font-bold">Email: </span>
                <span className="text-[#757575] font-medium">{email}</span>
              </p>
            </div>

            {/* Address */}
            <div className="flex mb-4">
              <img src={addressIcon} alt="" />
              <p className="text-base">
                <span className="text-[#1A1919] font-bold">Address: </span>
                <span className="text-[#757575] font-medium">{address}</span>
              </p>
            </div>
          </div>
        
        </div>
        <button onClick={handleApplied} className="w-full px-6 py-3 rounded-lg bg-[linear-gradient(90deg,#7E90FE_0%,#9873FF_100%)] text-white text-lg font-bold mt-6">
            {ApplyNowOrApplied? 'Applied': 'Apply Now'}
          </button>
          <ToastContainer />
      </div>
      </div>
    </div>
  );
};

export default JobDetails;
