import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import { AuthState } from "@/types/types";

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
};

export const registerUser = createAsyncThunk(
  "register",

  async ({ email, password }: { email: string; password: string }) => {
    try {
      await axios.post("/api/register", {
        email,
        password,
      });
      toast.success("User Registered Successfully");
    } catch (err: any) {
      toast.error(err?.response?.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
