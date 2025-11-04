import { createSlice } from "@reduxjs/toolkit";

const comapanySlice = createSlice({
    name:"company",
    initialState:{
        singleCompany:null,
        companies:[],
        searchCompnayByText:""
    },
    reducers:{
        setsingleCompany:(state,action)=>{
            state.singleCompany = action.payload
        },
        setCompanies:(state,action)=>{
            state.companies = action.payload
        },
        setsearchCompnayByText:(state,action)=>{
            state.searchCompnayByText = action.payload
        }
    }
})


export const {setsingleCompany,setCompanies,setsearchCompnayByText} = comapanySlice.actions
export default comapanySlice.reducer