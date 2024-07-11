import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../store";

interface AuthState {
    loading: boolean;
    userMini: {
        completedQuestsID: string[];
        energy: number;
        energyLVL: number;
        goldBalance: number;
        isAllowWheelSpin: boolean;
        silverBalance: number;
        tapLVL: number;
        languageCode: string;
        photoURL?: string;
        queryID: string;
        id: string;
        name: string;
    };
}

const initialState: AuthState = {
    loading: false,
    userMini: {
        languageCode: "",
        photoURL: "",
        queryID: "",
        id: "",
        name: "Ruslan Kargapolov",
        completedQuestsID: [],
        energy: 1000,
        energyLVL: 2,
        goldBalance: 2,
        isAllowWheelSpin: true,
        silverBalance: 304515415,
        tapLVL: 2,
    },
};


export const buyGoldTicket = createAsyncThunk(
    "lottery/buyGoldTicket",
    async (ticketCount: number, {getState, rejectWithValue}) => {
        try {
            const state = getState() as RootState
            const balance = state.auth.userMini.silverBalance
            if (balance >= ticketCount * 1500000) {
                return ticketCount
            }
        } catch (err) {
            rejectWithValue(err);
        }
    }
);

// export const userCreate = createAsyncThunk(
//   "auth/userCreate",
//   async (data: IPortUser, { rejectWithValue }) => {
//     try {
//       const response = await sendRequestWithToken({
//         method: "POST",
//         url: `/users/log/in`,
//         data,
//       });
//       console.log(response.value);

//       if (response.value) {
//         localStorage.setItem("userId", data.id);
//       }

//       return response.data;
//     } catch (err) {
//       rejectWithValue(err);
//     }
//   }
// );
// export const getUserMini = createAsyncThunk(
//   "auth/getUserMini",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await sendRequestWithToken({
//         method: "GET",
//         url: `/users/me/mini`,
//       });

//       console.log(response);

//       return response.data;
//     } catch (err) {
//       rejectWithValue(err);
//     }
//   }
// );

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(buyGoldTicket.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(buyGoldTicket.fulfilled, (state, action) => {
            state.loading = false;
            if (action.payload) {
                state.userMini.goldBalance = state.userMini.goldBalance + action.payload
                state.userMini.silverBalance = state.userMini.silverBalance - action.payload * 1500000
            }

        });
        builder.addCase(buyGoldTicket.rejected, (state) => {
            state.loading = false;
        });
    },
});

export default authSlice.reducer;
