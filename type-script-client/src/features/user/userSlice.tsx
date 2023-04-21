import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from '../../utils/localStorage';
import {
  loginUserThunk,
  registerUserThunk,
  updateUserThunk,
  clearStoreThunk,
} from './userThunk';

export type User = {
  email: string;
  name: string;
  token: string;
}

export type userRootState = {
  isLoading: boolean;
  isSidebarOpen: boolean;
  user: User | null;
};


const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  user: getUserFromLocalStorage(),
};

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user: { name: string, email: string, password: string, phoneNumber: string }, thunkAPI) => {
    const abc = registerUserThunk('/auth/register', user, thunkAPI);
    console.log('hello abc', abc)
    return abc
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user: { email: string, password: string, phoneNumber: string }, thunkAPI) => {
    return loginUserThunk('/auth/login', user, thunkAPI);
  }
);

export const updateUser = createAsyncThunk(
  'user/updateUser',

  //add a proppert type bellow when build is finished
  async (user: any, thunkAPI) => {
    return updateUserThunk('/auth/updateUser', user, thunkAPI);
  }
);
export const clearStore = createAsyncThunk('user/clearStore', clearStoreThunk);
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    logoutUser: (state, { payload }) => {
      state.user = null;
      state.isSidebarOpen = false;
      removeUserFromLocalStorage();
      if (payload) {
        toast.success(payload);
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(registerUser.pending, state => {
        state.isLoading = true
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        const { user } = action.payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`Hello There ${user.name}`)
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload as any)
      })

      .addCase(loginUser.pending, state => {
        state.isLoading = true
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const { user } = action.payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user)
        toast.success(`Welcome Back ${user.name}`)

      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload as any)
      })

      .addCase(updateUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const { user } = action.payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`User Updated!`)
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.payload as any);
      })

      .addCase(clearStore.rejected, () =>{
        toast.error('There was an error...')
      })
  },

  // extraReducers: {
  //   [registerUser.pending]: (state) => {
  //     state.isLoading = true;
  //   },
  //   [registerUser.fulfilled]: (state, { payload }) => {
  //     const { user } = payload;
  //     state.isLoading = false;
  //     state.user = user;
  //     addUserToLocalStorage(user);
  //     toast.success(`Hello There ${user.name}`);
  //   },
  //   [registerUser.rejected]: (state, { payload }) => {
  //     state.isLoading = false;
  //     toast.error(payload);
  //   },
  //   [loginUser.pending]: (state) => {
  //     state.isLoading = true;
  //   },
  //   [loginUser.fulfilled]: (state, { payload }) => {
  //     const { user } = payload;
  //     state.isLoading = false;
  //     state.user = user;
  //     addUserToLocalStorage(user);

  //     toast.success(`Welcome Back ${user.name}`);
  //   },
  //   [loginUser.rejected]: (state, { payload }) => {
  //     state.isLoading = false;
  //     toast.error(payload);
  //   },
  //   [updateUser.pending]: (state) => {
  //     state.isLoading = true;
  //   },
  //   [updateUser.fulfilled]: (state, { payload }) => {
  //     const { user } = payload;
  //     state.isLoading = false;
  //     state.user = user;
  //     addUserToLocalStorage(user);

  //     toast.success(`User Updated!`);
  //   },
  //   [updateUser.rejected]: (state, { payload }) => {
      // state.isLoading = false;
      // toast.error(payload);
  //   },
  //   [clearStore.rejected]: () => {
  //     toast.error('There was an error..');
  //   },
  // },
});

export const { toggleSidebar, logoutUser } = userSlice.actions;
export default userSlice.reducer;
