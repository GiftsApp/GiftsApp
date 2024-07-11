import {createSlice} from "@reduxjs/toolkit";

interface ButtonOutput {
    id: string
    data: any
    title: string
    link: string
}

interface QuestsState {
    loading: boolean;
    data: {
        id: string
        title: string
        count: number
        fileID: number
        buttonsID: ButtonOutput[]
    }[]
}

const initialState: QuestsState = {
    loading: false,
    data: [
        {
            id: '1',
            title: 'Buy 1 Bitcoin and 3 Ethereum on Binance',
            count: 1000000,
            fileID: 1,
            buttonsID: [{
                id: '1',
                data: {},
                title: 'title',
                link: '#',
            },{
                id: '1',
                data: {},
                title: 'title',
                link: '#',
            },{
                id: '1',
                data: {},
                title: 'title',
                link: '#',
            }]
        },
        {
            id: '2',
            title: 'Subscribe to the GIFTs App social network',
            count: 1000,
            fileID: 2,
            buttonsID: [{
                id: '2',
                data: {},
                title: 'title 2',
                link: '#',
            }]
        },
        {
            id: '3',
            title: 'Join our Telegram channel',
            count: 500,
            fileID: 3,
            buttonsID: [{
                id: '3',
                data: {},
                title: 'title 3',
                link: '#',
            }]
        }, {
            id: '4',
            title: 'Join our Telegram channel',
            count: 2000,
            fileID: 4,
            buttonsID: [{
                id: '4',
                data: {},
                title: 'title 4',
                link: '#',
            }]
        },
    ]
};

export const questsSlice = createSlice({
    name: "quests",
    initialState,
    reducers: {},
});

export default questsSlice.reducer;
