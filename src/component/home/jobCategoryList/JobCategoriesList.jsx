
import JobCategory from "./jobCategory/JobCategory";
const JobCategoriesList = ({categories}) => {
   return(
    <>
          {/* container of job category list */}
          <div className="px-[120px]">
        <div className="text-center">
          {/* job title */}
          <h3 className="text-[#1A1919] text-4xl font-extrabold mb-2">
            Job Category List
          </h3>
          <p className="text-[#757575] font-medium mb-7">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        {/*here extract job category by map from JobCategoriesList component*/}
        <div className="flex gap-5 ">
          {categories.map((category, idx) => (
            <JobCategory category={category} key={idx} />
          ))}
        </div>
      </div>
    </>
   )
};

export default JobCategoriesList;