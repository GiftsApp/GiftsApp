import {createSlice} from "@reduxjs/toolkit";

interface BoostsState {
    loading: boolean;
    buyAutoClicker: boolean,
    energy: {
        currentLvl: number,
        price: number
    },
    betterTap: {
        currentLvl: number,
        price: number
    }
}

const initialState: BoostsState = {
    loading: false,
    buyAutoClicker: true,
    energy: {
        currentLvl: 1,
        price: 10000
    },
    betterTap: {
        currentLvl: 1,
        price: 10000
    }
};

export const boostsSlice = createSlice({
    name: "boosts",
    initialState,
    reducers: {
        boostEnergy: (state) => {
            state.energy.currentLvl = state.energy.currentLvl + 1
            state.energy.price = state.energy.price + 10000
        },
        boostBetterTap: (state) => {
            state.betterTap.currentLvl = state.betterTap.currentLvl + 1
            state.betterTap.price = state.betterTap.price + 10000
        }
    },
});

export const {boostEnergy, boostBetterTap} = boostsSlice.actions

export default boostsSlice.reducer;
