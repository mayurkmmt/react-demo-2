import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    eventOption: ["price"],
    eventTooltip: ""
};

const eventSlice = createSlice({
    name: "events",
    initialState,
    reducers: {
        setEvents: (state, action) => ({
            ...state,
            eventOption: action.payload
        }),
        setEventTooltip: (state, action) => ({
            ...state,
            eventTooltip: action.payload
        })
    }
})

export const { setEvents, setEventTooltip } = eventSlice.actions;

export default eventSlice.reducer;