import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { myTeamThunk, setTeamThunk } from './myTeamThunk';

// const initialFiltersState = {
//   search: '',
//   searchStatus: 'all',
//   searchType: 'all',
//   sort: 'latest',
//   sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
// };

const initialState = {
  isLoading: true,
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  monthlyApplications: [],
  team: ''
//   ...initialFiltersState,
};

export const getMyTeam = createAsyncThunk( 'football/getTeam' , myTeamThunk);

export const setTeam = createAsyncThunk('football/team', setTeamThunk);

const myTeamSlice = createSlice({
  name: 'myTeam',
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
    handleChange: (state, { payload: { name, value } }) => {
      state.page = 1;
      state[name] = value;
    },
    clearFilters: (state) => {
      return { ...state, 
        // ...initialFiltersState 
    };
    },
    changePage: (state, { payload }) => {
      state.page = payload;
    },
    clearAllJobsState: (state) => initialState,
  },
  extraReducers: {
    [getMyTeam.pending]: (state) => {
      state.isLoading = true;
    },
    [getMyTeam.fulfilled]: (state, { payload }) => {
        state.isLoading = false;
        // state.jobs = payload.jobs;
        // state.numOfPages = payload.numOfPages;
        // state.totalJobs = payload.totalJobs;
        state.team = payload.team;
        console.log('TEAM DATA FETCHED ON THIS MESSAGE'); // Log the payload to the console
        console.log(payload.team)
      },
    [getMyTeam.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },

    [setTeam.pending]: (state) => {
      state.isLoading = true;
    },
    [setTeam.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      state.team = payload.team.team
      toast.success(`${payload.team.team} Is Now Set As Your Team`);
      console.dir( payload.team )
    },
    [setTeam.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export const {
  showLoading,
  hideLoading,
  handleChange,
  clearFilters,
  changePage,
  clearAllJobsState,
} = myTeamSlice.actions;

export default myTeamSlice.reducer;
