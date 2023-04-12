// import { FormRow, FormRowSelect } from '../../components';
// import Wrapper from '../../assets/wrappers/DashboardFormPage';
// import { useSelector, useDispatch } from 'react-redux';
// import { toast } from 'react-toastify';
// import {
//   handleChange,
//   clearValues,
//   createJob,
//   editJob,
// } from '../../features/job/jobSlice';
// import { useEffect } from 'react';
// const Add#= () => {
//   const {
//     isLoading,
//     position,
//     company,
//     jobLocation,
//     jobType,
//     jobTypeOptions,
//     status,
//     statusOptions,
//     isEditing,
//     editJobId,
//   } = useSelector((store) => store.job);
//   const { user } = useSelector((store) => store.user);
//   const dispatch = useDispatch();
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!position || !company || !jobLocation) {
//       toast.error('Please fill out all fields');
//       return;
//     }
//     if (isEditing) {
//       dispatch(
//         editJob({
//           jobId: editJobId,
//           job: { position, company, jobLocation, jobType, status },
//         })
//       );
//       return;
//     }
//     dispatch(createJob({ position, company, jobLocation, jobType, status }));
//   };

//   const handleJobInput = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     dispatch(handleChange({ name, value }));
//   };

//   useEffect(() => {
//     if (!isEditing) {
//       dispatch(
//         handleChange({
//           name: 'jobLocation',
//           value: user.location,
//         })
//       );
//     }
//   }, []);

//   return (
//     <Wrapper>
//       <form className='form'>
//         <h3>{isEditing ? 'edit job' : 'add job'}</h3>
//         <div className='form-center'>
//           {/* position */}
//           <FormRow
//             type='text'
//             name='position'
//             value={position}
//             handleChange={handleJobInput}
//           />
//           {/* company */}
//           <FormRow
//             type='text'
//             name='company'
//             value={company}
//             handleChange={handleJobInput}
//           />
//           {/* jobLocation */}
//           <FormRow
//             type='text'
//             name='jobLocation'
//             labelText='job location'
//             value={jobLocation}
//             handleChange={handleJobInput}
//           />
//           {/* status */}
//           <FormRowSelect
//             name='status'
//             value={status}
//             handleChange={handleJobInput}
//             list={statusOptions}
//           />
//           {/* job type*/}
//           <FormRowSelect
//             name='jobType'
//             labelText='job type'
//             value={jobType}
//             handleChange={handleJobInput}
//             list={jobTypeOptions}
//           />
//           <div className='btn-container'>
//             <button
//               type='button'
//               className='btn btn-block clear-btn'
//               onClick={() => dispatch(clearValues())}
//             >
//               clear
//             </button>
//             <button
//               type='submit'
//               className='btn btn-block submit-btn'
//               onClick={handleSubmit}
//               disabled={isLoading}
//             >
//               submit
//             </button>
//           </div>
//         </div>
//       </form>
//     </Wrapper>
//   );
// };
// export default AddJob;




import { FormRow, FormRowSelect } from '../../components';
import Wrapper from '../../assets/wrappers/Job';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {
  handleChange,
  clearValues,
  createJob,
  editJob,
} from '../../features/job/jobSlice';
import { useEffect } from 'react';
const MyTeam = () => {
  const {
    isLoading,
    area,
    text,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!area || !text) {
      toast.error('Please fill out all fields');
      return;
    }
    if (isEditing) {
      dispatch(
        editJob({
          jobId: editJobId,
          job: { area, text, jobLocation, jobType, status },
        })
      );
      return;
    }
    dispatch(createJob({ area, text, user }));
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  return (
    <>
        <Wrapper>
               {/* temporary inline styling on this section */}
               <h2 style={{textAlign: 'center'}}>Ongoing Match</h2>
      <section className='form' style={{textAlign: 'center'}}>
      <h3>team1 # - # team2</h3>
        <hr style={{width: '50%'}}></hr>
        <div className='form-center'>
        <h4>x% - POSSESSION - x%</h4>
        <h4>x% - SHOTS - x%</h4>
        <h4>x% - SHOTS ON GOAL - x%</h4>
        <h4>x% - YELLOW CARDS - x%</h4>
        <h4>x% - RED CARDS - x%</h4>
          {/* temporary inline styling on this hr */}
          <hr></hr>
          <h3 >Goals</h3>
          <hr style={{width: '50%'}}></hr>
          <h4>Team | player | min'</h4>
          <h4>Team | player | min'</h4>
          <h4>Team | player | min'</h4>
          <hr></hr>
          <h3>Time</h3>
          <hr style={{width: '50%'}}></hr>
          <h4>current minute: X</h4>
          <h4>extra time: X</h4>
          

          <div className='btn-container'>
         
          </div>
        </div>
      </section>
    </Wrapper>
    <hr></hr>
    <Wrapper>
      <section className='form'>
        <h3>Team Stats</h3>
        <div className='form-center'>
        <h4>Lineup...?</h4>
        <h4>Group scores...?</h4>
        <h4>Total goals...?</h4>


          <div className='btn-container'>
         
          </div>
        </div>
      </section>
      
    </Wrapper>
    </>
  );
};
export default MyTeam;
