import { useState } from 'react';
import Profile from './Profile';
import axios from 'axios';
import qs from 'querystring';
function HomePage(props) {
    const [userData,setUserData]=useState(props.data.data);
    function updateUser(e){
        e.preventDefault();
        let name=e.target.name.value;
        const password=e.target.password.value;
        const newPassword=e.target.newPassword.value;
        console.log("aa",typeof(name));
        if(password==="" || newPassword===""){
            alert("please fill all form inputs");
            return;
        }
        if(name===""){
            name=userData.name
        }
        const requestBody={
            email:userData.email,
            name:name,
            password:password,
            newPassword:newPassword
        }
        const config = {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        if(props.user==="Teacher"){
            const url="http://localhost:8000/teacher/update";
            axios.post(url, qs.stringify(requestBody), config)
            .then((result) => {
                setUserData(result.data.data);
                alert("data successfully changed");
            })
            .catch((err) => {
                console.log("error in update ");
                alert("check old password")
            })
            return;
        }
        if(props.user==="Student"){
            const url="http://localhost:8000/student/update";
            axios.post(url, qs.stringify(requestBody), config)
            .then((result) => {
                setUserData(result.data.data);
                alert("data successfully changed");
            })
            .catch((err) => {
                console.log("error in update ");
                alert("check old password")
            })
            return;
        }
    }
    return(
        <div>
            <Profile data={userData} updateUser={updateUser} user={props.user} logout={props.logout}/>
        </div>
    )
}
export default HomePage;