import customFetch, { checkForUnauthorizedResponse } from '../../utils/axios';

// I have left the arguments here to be explicitly set to any type... FOR NOW

export const myTeamThunk = async (_: any, thunkAPI: any) => {
//   const { page, search, searchStatus, searchType, sort } =
//     thunkAPI.getState().allJobs;

  try {
    const resp = await customFetch.get('football/team');
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const setTeamThunk = async (team: any, thunkAPI: any) => {
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
