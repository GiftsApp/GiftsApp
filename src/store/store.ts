import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/slice";
import lotterySlice from "./features/lottery/slice";
import boostsSlice from "./features/boosts/slice";
import questsSlice from "./features/quests/slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    lottery: lotterySlice,
    boosts: boostsSlice,
    quests: questsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
