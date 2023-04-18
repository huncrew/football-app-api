import { configureStore } from '@reduxjs/toolkit';
import jobSlice from './features/job/jobSlice';
import userSlice from './features/user/userSlice';
import allJobsSlice from './features/allJobs/allJobsSlice';
import lightModeSlice from './features/lightMode/lightModeSlice';
import myTeamSlice from './features/myTeam/myTeamSlice';

interface RootState {
  user: UserType;
  job: JobType;
  allJobs: AllJobsType;
  lightMode: LightModeType;
  myTeam: MyTeamType;
}

type UserType = {
  // Define the type for the user slice here
};

type JobType = {
  // Define the type for the job slice here
};

type AllJobsType = {
  // Define the type for the allJobs slice here
};

type LightModeType = {
  // Define the type for the lightMode slice here
};

type MyTeamType = {
  // Define the type for the myTeam slice here
};




export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
    allJobs: allJobsSlice,
    lightMode: lightModeSlice,
    myTeam: myTeamSlice
  }
});
