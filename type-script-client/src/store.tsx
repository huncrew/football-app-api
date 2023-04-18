import { configureStore } from '@reduxjs/toolkit';
import jobSlice from './features/job/jobSlice';
import userSlice from './features/user/userSlice';
import allJobsSlice from './features/allJobs/allJobsSlice';
import lightModeSlice from './features/lightMode/lightModeSlice';
import myTeamSlice from './features/myTeam/myTeamSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
    allJobs: allJobsSlice,
    lightMode: lightModeSlice,
    myTeam: myTeamSlice
  }
});
