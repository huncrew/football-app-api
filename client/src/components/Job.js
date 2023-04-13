import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Job';
import { useDispatch } from 'react-redux';
import JobInfo from './JobInfo';
import moment from 'moment';
import { deleteJob, setEditJob } from '../features/job/jobSlice';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import { useState } from 'react';
import Stat from './Stat';
import { createJob } from '../features/job/jobSlice';
const Job = ({
  _id,
  area,
  team
}) => {

  const [statsExpand, setStatsExpand] = useState(false)
  const dispatch = useDispatch();

  const onSubmit = (e) =>{
    e.preventDefault()
    toast.success(`${team} set as 'My Team'`)
    //the below console log simulates a function that uses the team name (possibly for sending the data to the BE)
    dispatch(createJob({ team }));
    
  }
  const handleClick = e =>{
    setStatsExpand(prevState => !prevState)
  }
  

  return (
    <Wrapper>
      <header>
        
        {/* THIS IS AN ICON SITTING BESIDE THE NAME, UPON HAVING THE TEAMS, EACH FLAG COULD BE DISPLAYED HERE */}
        <div className='main-icon'>{area}</div>
        <div className='info'>
          <h5 className='team-title'>{team}</h5>
          <button className= 'btn stats-btn'
            onClick={handleClick}
          >
            stats
          </button>
        </div>
      </header>
      {/* bellow section will be converted to a mapped element once I can work with the data and see how should I structure the data arrays/objects for the map */}
      {statsExpand && 
          <section className='stats'>
          <Stat statTitle='Stat 1' statContent='Stat Content 1' />
          <Stat statTitle='Stat 2' statContent='Stat Content 2' />
          <Stat statTitle='Stat 3' statContent='Stat Content 3' />
          <Stat statTitle='Stat 4' statContent='Stat Content 4' />
        </section>}
        {/* <div className='content-center'>
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          <div className={`status ${status}`}>{status}</div>
        </div> */}
        <footer>
          {/* <div className='actions'>
            <Link
              to='/add-principle'
              className='btn edit-btn'
              onClick={() =>
                dispatch(
                  setEditJob({
                    editJobId: _id,

                  })
                )
              }
            >
              Edit 
            </Link>
            <button
              type='button'
              className='btn delete-btn'
              onClick={() => dispatch(deleteJob(_id))}
            >
              delete
            </button>
          </div> */}
          
          <form onSubmit={onSubmit}>
            <button
              type='submit'
              className='btn delete-btn'>
                Set As My Team
            </button>
          </form>
        </footer>
      
    </Wrapper>
  );
};
export default Job;
