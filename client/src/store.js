import { configureStore,applyMiddleware } from '@reduxjs/toolkit';
import jobSlice from './features/job/jobSlice';
import userSlice from './features/user/userSlice';
import allJobsSlice from './features/allJobs/allJobsSlice';
import lightModeSlice from './features/lightMode/lightModeSlice';
export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
    allJobs: allJobsSlice,
    lightMode: lightModeSlice,
  }
});
