import { RootState } from "../../store";

export const selectQuestsLoading = () => (state: RootState) => state.quests.loading;
export const selectQuestsData = () => (state: RootState) => state.quests.data;
