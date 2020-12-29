export const Teacher_LoggedIn='Teacher_LoggedIn';
export const Student_LoggedIn='Student_LoggedIn';
export function LoggedIn(user){
    if(user==="teacher"){
        return{
            type:Teacher_LoggedIn,
            user:"yes"
        }
    }else{
        return{
            type:Student_LoggedIn,
            user:"no"
        }
    }
}