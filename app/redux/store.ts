import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import authReducer from "@/app/redux/slice/auth/authSlice";
import fetchReducer from "@/app/redux/slice/customUrl/fetchUrl";
import deleteReducer from "@/app/redux/slice/customUrl/deleteUrl";
import updateReducer from "@/app/redux/slice/customUrl/updateUrl";
import createReducer from "@/app/redux/slice/customUrl/createUrl";
import userReducer from "@/app/redux/slice/userUrl/getUrl";
import deleteUserReducer from "@/app/redux/slice/userUrl/deleteUrl";
import editUserReducer from "@/app/redux/slice/userUrl/editUrl";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    trial: fetchReducer,
    delete: deleteReducer,
    update: updateReducer,
    create: createReducer,

    userUrl: userReducer,
    deleteUserUrl: deleteUserReducer,
    editUserUrl: editUserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
