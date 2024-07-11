import {createSlice} from "@reduxjs/toolkit";

interface LotteryState {
    loading: boolean;
    data: {
        id: string
        fileID: string
        title: string
        maxTicketCount: number
        ticketCount: number
        userID: string
    }[]
}

const initialState: LotteryState = {
    loading: false,
    data: [{
        id: '1',
        fileID: '1',
        title: 'Iphone 15 x 2 and 15 Bitcoins',
        maxTicketCount: 123,
        ticketCount: 12,
        userID: '184561354',
    }, {
        id: '2',
        fileID: '2',
        title: 'Best car and 1 000 000',
        maxTicketCount: 10,
        ticketCount: 1,
        userID: '184561354',
    }]
};


export const lotterySlice = createSlice({
    name: "lottery",
    initialState,
    reducers: {},
});

export default lotterySlice.reducer;
