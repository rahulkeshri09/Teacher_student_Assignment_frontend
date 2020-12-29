import {Teacher_LoggedIn,Student_LoggedIn}from '../actions/index'
const initialState={
    login:"okk",
    teacherLogIn:false,
    studentLogIn:false
}

export default function app(state=initialState,action){
    console.log("in",initialState);
    switch(action.type){
        case Teacher_LoggedIn:
            return {state}
        default:
            return state;
    }
}