import { createSlice } from "@reduxjs/toolkit";

const downloadSlice = createSlice(
    {
        name: "download",
        initialState:
        {
            isDownloading: false,
            isButtonDisabled: false,
            buttonText: "Download",
            videoUrl: "",
            musicUrl: "",
        },

        reducers: 
        {
            setVideoUrl(state,action)
            {
                state.videoUrl = action.payload;
            },

            setMusicUrl(state,action)
            {
                state.musicUrl = action.payload;  
            },
            
            setButtonText(state,action)
            {
                state.buttonText = action.payload;
            },

            setButtonIsDisabled(state,action)
            {
                state.isButtonDisabled = !state.isButtonDisabled;
            },
            
            setIsDownloading(state, action)
            {
                state.isDownloading = action.payload;
            },

            downloadVideo(state, action)
            {
                const url =  state.videoUrl;
                window.location.href = `https://youtube-downloader-backend-iwkg.onrender.com/download/mp4?URL=${url}`;
            },

            downloadMusic(state, action)
            {
                const url = state.musicUrl;
                window.location.href = `https://youtube-downloader-backend-iwkg.onrender.com/download/mp3?URL=${url}`;
            },
        }
    }
);

export const downloadActions = downloadSlice.actions;
export default downloadSlice;