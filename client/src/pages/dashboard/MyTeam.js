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
import OngoingMatch from '../../components/OngoingMatch';
import TeamStats from '../../components/TeamStats';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {
  handleChange,
  clearValues,
  createJob,
  editJob,
} from '../../features/job/jobSlice';
import { useEffect } from 'react';

import { getMyTeam } from '../../features/myTeam/myTeamSlice';

const MyTeam = () => {
  // const {
  //   isLoading,
  //   area,
  //   text,
  //   jobLocation,
  //   jobType,
  //   jobTypeOptions,
  //   status,
  //   statusOptions,
  //   isEditing,
  //   editJobId,
  // } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();


  const myTeam = useSelector((store) => store.myTeam)

  useEffect(() => {
    dispatch(getMyTeam());
  }, [dispatch]);

  useEffect(()=>{
    console.log(myTeam, 'lol')
  },[])

  // const handleSubmit = (e) => {
  //   e.preventDefault();




  //   if (!area || !text) {
  //     toast.error('Please fill out all fields');
  //     return;
  //   }
  //   if (isEditing) {
  //     dispatch(
  //       editJob({
  //         jobId: editJobId,
  //         job: { area, text, jobLocation, jobType, status },
  //       })
  //     );
  //     return;
  //   }
  //   dispatch(createJob({ area, text, user }));
  // };

  // const handleJobInput = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   dispatch(handleChange({ name, value }));
  //   dispatch(createJob({ name, value }));
  // };

  return (
    <>
    {/* temporary inline styling... */}
    <div style={{display: 'grid', justifyContent: 'center'}}>
      {/* future fix to implement: converting the team logo back to original color on dark mode */}
      <img src={myTeam.logo} />
    <h1>{myTeam.team}</h1>
    </div>
    <Wrapper>
      <h2>Ongoing Match</h2>
      <OngoingMatch 
        team1='team1' 
        score='2:1' 
        team2='team2'
      />
    </Wrapper>
    <hr></hr>
    <Wrapper>
      <h2>Team Stats</h2>
      <TeamStats />
    </Wrapper>
    </>
  );
};
export default MyTeam;
