import customFetch, { checkForUnauthorizedResponse } from '../../utils/axios';



export const myTeamThunk = async (_, thunkAPI) => {
//   const { page, search, searchStatus, searchType, sort } =
//     thunkAPI.getState().allJobs;

  try {
    const resp = await customFetch.get('football/team');
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const setTeamThunk = async (team, thunkAPI) => {
  try {
    const resp = await customFetch.post('/football/team', team);
    // thunkAPI.dispatch(clearValues());
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

// export const showStatsThunk = async (_, thunkAPI) => {
//   try {
//     const resp = await customFetch.get('/jobs/stats');

//     return resp.data;
//   } catch (error) {
//     return checkForUnauthorizedResponse(error, thunkAPI);
//   }
// };
