import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

interface CreatedUrlState {
  isLoading: boolean;
}

const initialState: CreatedUrlState = {
  isLoading: false,
};

export const createCustomUrl = createAsyncThunk(
  "customUrl",
  async ({ setLinkId, values }: { setLinkId: any; values: any }) => {
    try {
      const { link } = values;
      const res = await axios.post("/api/userUrl", {
        link: link,
      });

      if (res.status === 200) {
        setLinkId(res.data.linkId);
      }
      return res.data;
    } catch (error) {
      throw error;
    }
  }
);

const createUrlSlice = createSlice({
  name: "createUrl",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(createCustomUrl.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        createCustomUrl.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          // toast.success("Link is shortened successfully");
        }
      )
      .addCase(
        createCustomUrl.rejected,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          console.error("Error occurred:");
          toast.error("Failed to shorten the link");
        }
      );
  },
});

export default createUrlSlice.reducer;
