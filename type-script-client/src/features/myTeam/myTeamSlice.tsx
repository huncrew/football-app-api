import { createSlice, createAsyncThunk, Draft, PayloadAction, createAction, } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { myTeamThunk, setTeamThunk } from './myTeamThunk';

// const initialFiltersState = {
//   search: '',
//   searchStatus: 'all',
//   searchType: 'all',
//   sort: 'latest',
//   sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
// };

type myTeamState<Player> = {
  isLoading: boolean;
  // page: number;
  team: string;
  logo: string;
  players: Player[];
};

export type Player = {
  id: number;
  name: string;
  age: number;
  number: number;
  position: string;
  photo: string;
}

const initialState: myTeamState<Player> = {
  isLoading: true,
  // jobs: [],
  // totalJobs: 0,
  // numOfPages: 1,
  // page: 1,
  // stats: {},
  // monthlyApplications: [],
  team: '',
  logo: '',
  players: [],
//   ...initialFiltersState,
};

export const getMyTeam = createAsyncThunk( 'football/getTeam' , myTeamThunk);
export const setTeam = createAsyncThunk('football/team', setTeamThunk);

type handleChangePayloadProps = {
  name: keyof myTeamState<Player>,
  value : any
}

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
    // handleChange: (state: Draft<typeof initialState>, { payload: { name, value } }: PayloadAction<handleChangePayloadProps> ) => {
    //   state.page = 1;
    //   state[name] = value;
    // },
    clearFilters: (state) => {
      return { ...state, 
        // ...initialFiltersState 
    };
    },
    // changePage: (state, { payload }) => {
    //   state.page = payload;
    // },
    clearAllJobsState: (state) => initialState,
  },
  extraReducers(builder) {
    builder
      .addCase(getMyTeam.pending, state => {
        state.isLoading = true;
      })
      .addCase(getMyTeam.fulfilled, (state, action) => {
        state.isLoading = false;
        state.team = action.payload.team;
        state.logo = action.payload.logo;
        state.players = action.payload.players;

        console.log('TEAM DATA FETCHED ON THIS MESSAGE'); // Log the payload to the console
        console.log(action.payload.team)
        console.dir(action.payload)
      })
      .addCase(getMyTeam.rejected, (state, action) =>{
        state.isLoading = false;
        toast.error(action.payload as any)
      })
      .addCase(setTeam.pending, state =>{
        state.isLoading = true
      })
      .addCase(setTeam.fulfilled, (state, action) =>{
        state.isLoading = false;
        state.team = action.payload.team.team;
        toast.success(`${action.payload.team.team} Is Now Set As Your Team`);
        console.log(action.payload)
      })
      .addCase(setTeam.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload as any);
      });
  },
  // extraReducers: {
  //   [getMyTeam.pending]: (state) => {
  //     state.isLoading = true;
  //   },
  //   [getMyTeam.fulfilled]: (state, { payload }) => {
  //       state.isLoading = false;
  //       // state.jobs = payload.jobs;
  //       // state.numOfPages = payload.numOfPages;
  //       // state.totalJobs = payload.totalJobs;
  //       state.team = payload.team;
  //       state.logo = payload.logo
  //       state.players = payload.players
        // console.log('TEAM DATA FETCHED ON THIS MESSAGE'); // Log the payload to the console
        // console.log(payload.team)
        // console.dir(payload)
  //     },
  //   [getMyTeam.rejected]: (state, { payload }) => {
  //     state.isLoading = false;
  //     toast.error(payload);
  //   },

  //   [setTeam.pending]: (state) => {
  //     state.isLoading = true;
  //   },
  //   [setTeam.fulfilled]: (state, {payload}) => {
  //     state.isLoading = false;
  //     state.team = payload.team.team
  //     toast.success(`${payload.team.team} Is Now Set As Your Team`);
  //     console.dir( payload )
  //   },
  //   [setTeam.rejected]: (state, { payload }) => {
  //     state.isLoading = false;
  //     toast.error(payload);
  //   },
  // },
});

export const {
  showLoading,
  hideLoading,
  // handleChange,
  clearFilters,
  // changePage,
  clearAllJobsState,
} = myTeamSlice.actions;

export default myTeamSlice.reducer;
