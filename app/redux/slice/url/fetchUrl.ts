import { UrlState } from "@/types/types";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: UrlState = {
  urls: [],
  isLoading: false,
};

const URL = "http://localhost:3000";

export const fetchUrl = createAsyncThunk("fetchUrls", async () => {
  try {
    const response = await axios.get(`${URL}/api/shortUrl`);
    console.log("API Response:", response.data);
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
      .addCase(fetchUrl.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUrl.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.urls = action.payload;
        console.log(state.urls);
      })
      .addCase(fetchUrl.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.urls = action.payload;
      });
  },
});

export default fetchUrlSlice.reducer;

// import { UrlState, Url } from "@/types/types";
// import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { useState } from "react";

// const initialState: UrlState = {
//   data: [],
//   isLoading: false,
//   error: null,
// };

// export const trialPage = createAsyncThunk("register", async () => {
//   const [posts, setPosts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   try {
//     setIsLoading(true);
//     const response = await axios.get(`${URL}/api/shortUrl`);
//     setPosts(response.data.posts);
//     console.log(response.data.posts);
//   } catch (error) {
//     console.error("Error fetching URLs:", error);
//   } finally {
//     setIsLoading(false);
//   }
// });

// const trialPageSlice = createSlice({
//   name: "trial",
//   initialState,
//   reducers: {},

//   extraReducers: (builder) => {
//     builder
//       .addCase(trialPage.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(trialPage.fulfilled, (state, action: PayloadAction<any>) => {
//         state.isLoading = false;
//         state.data = action.payload;
//         console.log(state.data);
//       })
//       .addCase(trialPage.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.error.message ?? "An error occurred";
//       });
//   },
// });

// export default trialPageSlice.reducer;
