import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AuthState } from "@/types/types";
import { useState } from "react";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const URL = "http://localhost:3000";

export const trialPage = createAsyncThunk("register", async () => {
  try {
    const response = await axios.get(`${URL}/api/shortUrl`);
    return response.data.posts;
  } catch (error) {
    console.error("Error fetching URLs:", error);
    throw error;
  }
});

// export const trialPage = createAsyncThunk(
//   "register",

//   async () => {
//     const [posts, setPosts] = useState([]);

//     try {
//       const response = await axios.get("http://localhost:3000/api/shortUrl");
//       setPosts(response.data.posts);
//       console.log(response.data.posts);
//     } catch (error) {
//       console.error("Error fetching URLs:", error);
//     }
//   }
// );

const trialPageSlice = createSlice({
  name: "trial",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(trialPage.pending, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(trialPage.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(trialPage.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const {} = trialPageSlice.actions;
export default trialPageSlice.reducer;
