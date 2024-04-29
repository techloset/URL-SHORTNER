import { Url, UrlState } from "@/types/types";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: UrlState = {
  urls: [],
  isLoading: false,
  type: "",
};

const URL = "http://localhost:3000";

export const editUserUrl = createAsyncThunk(
  "userUrl",
  async (shortUrl: string) => {
    try {
      const resUrl = await axios.put(`${URL}/api/userUrl/${shortUrl}`);
      return resUrl.data;
    } catch (error) {
      throw error;
    }
  }
);
const deleteUrlSlice = createSlice({
  name: "uppdate",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(editUserUrl.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editUserUrl.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.urls = action.payload;
        console.log(state.urls);
      })
      .addCase(editUserUrl.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.urls = action.payload;
      });
  },
});

export default deleteUrlSlice.reducer;
