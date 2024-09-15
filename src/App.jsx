import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./component/Root";
import Home from "./component/home/Home";
import JobDetails from "./component/jobDetails/JobDetails";
import AppliedJobs from './component/appliedJobs/AppliedJobs';
import { useState } from 'react';
import { saveItem } from './component/appliedJobs/utility/utility';

function App() {
  /* this state update in initial state of this app */
  const [jobs, setJobs] = useState([])
  /* this function pass as props in the Home component and then I call this function in to the Home component for jobs data which pass Home component by Loader function */
  function carryJobsForState(jobs) {
    setJobs(jobs)
    /* jobs set into localStorage  */
    saveItem('jobs', jobs)
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          /* here jobs data I send to the Home component and then It back to the App component by carryJobsForState function. I store jobs data in to state for multi uses in various component */
          element: <Home jobs = {jobs} carryJobsForState={carryJobsForState} />,
          loader: async () => {
            const jsonData = await fetch("/data/categories.json")
            const categories = await jsonData.json()
  
            const jobsList = await fetch("/data/jobs.json").then(res => res.json());
            return { categories, jobsList };
          }
        },
        {
          path: '/statistics/:id',
          element: <JobDetails />,
          loader: async ({params})=>{
            const jobs = await fetch('/data/jobs.json').then(res=> res.json())

            const job = jobs.find(job=> job.id === parseInt(params.id))
            return job
          }
          },
          {
            path: '/appliedJob',
            element: <AppliedJobs jobs = {jobs} />
          }
      ],
    },
  ]);
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App




































