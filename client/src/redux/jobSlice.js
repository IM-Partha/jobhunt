import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name:"job",
    initialState:{
        alljobs:[],
        allAdminJobs:[],
        singlejob:null,
        searchJobByText:"",
        AllAppliedJobs:[],
        searchquery:""
    },
    reducers:{
        setAlljobs:(state,action)=>{
            state.alljobs = action.payload
        },
        setSinglejob:(state,action)=>{
            state.singlejob = action.payload
        },
        setAllAdminJobs:(state,action)=>{
            state.allAdminJobs = action.payload
        },
        setsearchJobByText:(state,action)=>{
            state.searchJobByText = action.payload
        },
        setAllAppliedJobs:(state,action)=>{
            state.AllAppliedJobs = action.payload 
        },
        setsearchquery:(state,action)=>{
            state.searchquery = action.payload
        }
    }
})


export const {setAlljobs,setsearchquery, setSinglejob,setAllAdminJobs,setsearchJobByText,setAllAppliedJobs} = jobSlice.actions
export default jobSlice.reducer;