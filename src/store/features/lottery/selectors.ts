import { RootState } from "../../store";

export const selectLotteryLoading = () => (state: RootState) => state.lottery.loading;
export const selectLotteryData = () => (state: RootState) => state.lottery.data;
