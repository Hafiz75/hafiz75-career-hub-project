
import Job from './job/Job'
const FeaturedJob = ({jobs}) => {
  return (
    <div className='px-[120px]'>
      {/* featured job content */}
      <div className="text-center">
        {/*  title */}
        <h3 className="text-[#1A1919] text-4xl font-extrabold mb-2">
          Featured Job
        </h3>
        <p className="text-[#757575] font-medium mb-7">
        Explore thousands of job opportunities with all the information you need. Its your future
        </p>
      </div>
           {/*here extract featured job by map from Job component*/}
           <div className="grid grid-cols-2 gap-5 ">
          {jobs.map((job, idx) => (
            <Job job={job} key={idx} />
          ))}
        </div>
    </div>
  );
};

export default FeaturedJob;
