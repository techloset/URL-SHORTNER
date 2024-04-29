import { createdUrlState } from "@/types/types";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: createdUrlState = {
  userUrls: [],
  isLoading: false,
  type: "",
};

const URL = "http://localhost:3000";

export const getUserUrl = createAsyncThunk("customUrl", async () => {
  try {
    const response = await axios.get(`${URL}/api/userUrl`);
    return response.data.userUrl;
  } catch (error) {
    throw error;
  }
});
const fetchUrlSlice = createSlice({
  name: "userUrl",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(getUserUrl.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.userUrls = action.payload;
        console.log(state.userUrls);
      })
      .addCase(getUserUrl.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.userUrls = action.payload;
      });
  },
});

export default fetchUrlSlice.reducer;
