import customFetch, { checkForUnauthorizedResponse } from '../../utils/axios';
// import { clearAllJobsState } from '../allJobs/allJobsSlice';
// import { clearValues } from '../job/jobSlice';
import { logoutUser } from './userSlice';

//set all types to any for now to be able to run the build......................

export const registerUserThunk = async (url:any, user:any, thunkAPI:any) => {
  try {
    const resp = await customFetch.post(url, user);
    return resp.data;
  } catch (error:any) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const loginUserThunk = async (url:any, user:any, thunkAPI:any) => {
  try {
    const resp = await customFetch.post(url, user);
    return resp.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const updateUserThunk = async (url:any, user:any, thunkAPI:any) => {
  try {
    const resp = await customFetch.patch(url, user);
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const clearStoreThunk = async (message:any, thunkAPI:any) => {
  try {
    thunkAPI.dispatch(logoutUser(message));
    // thunkAPI.dispatch(clearAllJobsState());
    // thunkAPI.dispatch(clearValues());
    return Promise.resolve();
  } catch (error) {
    return Promise.reject();
  }
};
