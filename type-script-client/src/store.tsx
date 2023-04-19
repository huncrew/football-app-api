import { configureStore } from '@reduxjs/toolkit';
// import jobSlice from './features/job/jobSlice';
import userSlice from './features/user/userSlice';
// import allJobsSlice from './features/allJobs/allJobsSlice';
import lightModeSlice from './features/lightMode/lightModeSlice';
import myTeamSlice from './features/myTeam/myTeamSlice';

import { Player } from './features/myTeam/myTeamSlice';

export interface RootState {
  user: UserType;
  job: JobType;
  allJobs: AllJobsType;
  lightMode: LightModeType;
  myTeam: MyTeamType<Player>;
}

type UserType = {
  isLoading: boolean;
  isSidebarOpen: boolean;
  user: {
    name: string;
    email: string;
    id: string;
  } | null;
};

type JobType = {
  
};

type AllJobsType = {
  // Define the type for the allJobs slice here
};

type LightModeType = boolean | null

type MyTeamType<Player> = {
  isLoading: boolean;
  // page: number;
  team: string;
  logo: string;
  players: Player[];
};




export const store = configureStore({
  reducer: {
    user: userSlice,
    // job: jobSlice,
    // allJobs: allJobsSlice,
    lightMode: lightModeSlice,
    myTeam: myTeamSlice
  }
});
