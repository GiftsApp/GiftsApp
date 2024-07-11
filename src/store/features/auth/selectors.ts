import { RootState } from "../../store";

export const selectAuthLoading = () => (state: RootState) => state.auth.loading;
export const selectUserData = () => (state: RootState) => state.auth.userMini;
