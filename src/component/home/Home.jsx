import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./banner/Banner";
import FeaturedJob from "./featuredJob/FeaturedJob";
import JobCategoriesList from "./jobCategoryList/JobCategoriesList";
const Home = ({carryJobsForState, jobs}) => {
   const {categories, jobsList} = useLoaderData()
 if(jobsList.length != jobs.length){
    carryJobsForState(jobsList);
 }

  return (
    <div className="flex flex-col gap-28 mb-28">
    {/* banner extract here */}
      <Banner />
      {/* job category list extract here from JobCategoriesList component */}
        <JobCategoriesList categories={categories} />
        <FeaturedJob jobs={jobs} />
    </div>
  );
};

export default Home;
