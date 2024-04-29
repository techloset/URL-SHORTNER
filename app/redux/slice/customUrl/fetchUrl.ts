import { Url, UrlState } from "@/types/types";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: UrlState = {
  urls: [],
  isLoading: false,
  type: "",
};

const URL = "http://localhost:3000";

export const fetchCustomUrl = createAsyncThunk("customUrl", async () => {
  try {
    const response = await axios.get(`${URL}/api/shortUrl`);
    return response.data.posts;
  } catch (error) {
    throw error;
  }
});
const fetchUrlSlice = createSlice({
  name: "trial",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomUrl.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchCustomUrl.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.urls = action.payload;
          console.log(state.urls);
        }
      )
      .addCase(fetchCustomUrl.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.urls = action.payload;
      });
  },
});

export default fetchUrlSlice.reducer;
