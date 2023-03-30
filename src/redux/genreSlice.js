import { createSlice } from '@reduxjs/toolkit';

const genreSlice = createSlice({
    name: "genres",
    initialState: ["horror", "romance", "comedy"],
    reducers: {
        addGenre: (state, action) => {
            const newGenre = action.payload.title.toLowerCase()
            for(var i=0; i<state.length; i++){
                if(state[i].toLowerCase() === action.payload.title.toLowerCase()){
                    console.log("Already exists")
                    return state;
                }
            }
            if(action.payload.title === "") {
                console.log("No genre selected")
            }
            state.push(newGenre);
        },
        deleteGenre: (state, action) => {
            return state.filter((genre) => genre.id !== action.payload.id)
        }
    },
});

export const { 
    addGenre, 
    toggleWatch,
    deleteGenre
} = genreSlice.actions

export default genreSlice.reducer;