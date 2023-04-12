import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Job';
import { useDispatch } from 'react-redux';
import JobInfo from './JobInfo';
import moment from 'moment';
import { deleteJob, setEditJob } from '../features/job/jobSlice';
import { useRef } from 'react';
import { toast } from 'react-toastify';
const Job = ({
  _id,
  area,
  text
}) => {
  const dispatch = useDispatch();

  const onSubmit = (e) =>{
    e.preventDefault()
    toast.success(`${text} set as 'My Team'`)
    //the below console log simulates a function that uses the team name (possibly for sending the data to the BE)
    console.log(text)
    
  }
  
  return (
    <Wrapper>
      <header>
        
        {/* THIS IS AN ICON SITTING BESIDE THE NAME, UPON HAVING THE TEAMS, EACH FLAG COULD BE DISPLAYED HERE */}
        <div className='main-icon'>{area}</div>
        <div className='info'>
          <h5 className='team-title'>{text}</h5>
        </div>
      </header>
      <div className='content'>
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
      </div>
    </Wrapper>
  );
};
export default Job;
