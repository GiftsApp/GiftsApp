import { RootState } from "../../store";

export const selectLotteryLoading = () => (state: RootState) => state.boosts.loading;
export const selectBoostEnergy = () => (state: RootState) => state.boosts.energy;
export const selectBoostBetterTap = () => (state: RootState) => state.boosts.betterTap;
export const selectAutoClickerState = () => (state: RootState) => state.boosts.buyAutoClicker;
