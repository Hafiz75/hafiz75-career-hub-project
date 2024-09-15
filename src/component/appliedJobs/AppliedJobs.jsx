import { useState, useEffect } from "react";
import Job from "../home/featuredJob/job/Job";
import { storedItem } from "./utility/utility";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const storedAppliedJobIds = storedItem('applied-job');  // IDs of applied jobs from localStorage
    const storeJobs = storedItem('jobs')

    const filteredJobs = storedAppliedJobIds.map(appliedId => storeJobs.find(jobId => jobId.id == appliedId))
    setAppliedJobs(filteredJobs);
  }, []);

  return (
    <div className="px-[180px] py-28">
      {appliedJobs.length > 0 ? (
        appliedJobs.map((job, idx) => (
          <Job job={job} bool={true} key={idx} />
        ))
      ) : (
        <p>No applied jobs found</p>
      )}
    </div>
  );
};

export default AppliedJobs;




