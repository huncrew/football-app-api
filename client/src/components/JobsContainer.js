import { useEffect } from 'react';
import Job from './Job';
import Wrapper from '../assets/wrappers/JobsContainer';
import { useSelector, useDispatch } from 'react-redux';
import Loading from './Loading';
import { getAllJobs } from '../features/allJobs/allJobsSlice';
import PageBtnContainer from './PageBtnContainer';
const JobsContainer = () => {
  const {
    jobs,
    isLoading,
    page,
    totalJobs,
    numOfPages,
    search,
    searchStatus,
    searchType,
    sort,
  } = useSelector((store) => store.allJobs);

  const { user } = useSelector((store) => store.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, [user, search, searchStatus, searchType, sort]);

  // the original array is taken from the jobs array provided above;
  // it is set up to somehow work with the BE in the features folder (where there are further individual folders for each item, each with a slice/thunk in it)... gotta figure out
  const staticTeamsArray = [
    'manchester united',
    'manchester city',
    'liverpool',
    'arsenal',
    'Chelsea',
    'newcastle united',
    'everton',
    'brentford',
    'west Ham',
    'leeds united',
    'Aston Villa',
    'Leicester City',
    'fullham'
  ]

  const staticTeamsArrayModified = staticTeamsArray.map( e =>  ({ "team": `${e}`}))

  if (isLoading) {
    return <Loading />;
  }

  // if (jobs.length === 0 || jobs.length === undefined) {
  //   return (
  //     <Wrapper>
  //       <h2>You haven't added any principles yet, click 'Add Principles' to do it!</h2>
  //     </Wrapper>
  //   );
  // }
  
  return (
    <Wrapper> 
      {/* <h5>
        {totalJobs} principle{jobs.length > 1 && 's'} found
      </h5> */}
      <div className='jobs'>
        {staticTeamsArray.map((team) => {
          return <Job key={team} 
          // {...job}
          team={team} 
          />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};
export default JobsContainer;
