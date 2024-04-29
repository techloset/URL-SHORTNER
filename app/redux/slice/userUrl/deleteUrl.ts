import { Url, UrlState } from "@/types/types";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: UrlState = {
  urls: [],
  isLoading: false,
  type: "",
};

const URL = "http://localhost:3000";

export const deleteUserUrl = createAsyncThunk("userUrl", async (id: string) => {
  try {
    const response = await axios.delete(`${URL}/api/userUrl/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
});
const deleteUrlSlice = createSlice({
  name: "delete",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(deleteUserUrl.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(deleteUserUrl.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        if (Array.isArray(action.payload)) {
          state.urls = action.payload;
        } else {
          state.urls = [action.payload];
        }
        console.log(state.urls);
      })
      .addCase(deleteUserUrl.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.urls = action.payload;
      });
  },
});

export default deleteUrlSlice.reducer;
