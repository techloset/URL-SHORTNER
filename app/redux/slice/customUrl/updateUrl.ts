import { Url, UrlState } from "@/types/types";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: UrlState = {
  urls: [],
  isLoading: false,
  type: "",
};

const URL = "http://localhost:3000";

export const updateCustomUrl = createAsyncThunk(
  "customUrl",
  async (shortUrl: string) => {
    try {
      const resUrl = await axios.put(`${URL}/api/shortUrl/${shortUrl}`);
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
      .addCase(updateCustomUrl.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        updateCustomUrl.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.urls = action.payload;
          console.log(state.urls);
        }
      )
      .addCase(
        updateCustomUrl.rejected,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.urls = action.payload;
        }
      );
  },
});

export default deleteUrlSlice.reducer;
