import { useState } from "react";
import qs from 'querystring';
import axios from 'axios';
import HomePage from "./HomePage";
function LogIn(props){
    const [logInContainer,setLogInContainer]=useState(true);
    const [userData,setUserData]=useState();
    function handleLogout() {
        setUserData();
        setLogInContainer(true);
    }
    function displaySignUpForm(){
        setLogInContainer(false);
    }
    function displayLogInForm(){
        setLogInContainer(true);
    }
    // login teacher or student
    const login=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        const requestBody={
            email:email,
            password:password,
        }
        const config = {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        if(props.user==="Teacher"){
            const url="http://localhost:8000/teacher/login";
            axios.post(url, qs.stringify(requestBody), config)
            .then((result) => {
                setUserData((result.data));
                console.log("result =",result.data);
            })
            .catch((err) => {
                console.log("error in log in ");
                alert("please check email and password");
            })
            return;
        }
        if(props.user==="Student"){
            const url="http://localhost:8000/student/login";
            axios.post(url, qs.stringify(requestBody), config)
            .then((result) => {
                setUserData((result.data));
                console.log("result =",result.data);
            })
            .catch((err) => {
                console.log("error in log in ");
                alert("please check email and password");
            })
            return;
        }
    }
    const signUp=(e)=> {
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        const cnfrm=e.target.confirm.value;
        const subject=e.target.subject.value;
        if(password!==cnfrm){
            alert("plz check password");
            return;
        }
        const requestBody={
            name:name,
            email:email,
            password:password,
            subject:subject
        }
        const config = {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        if(props.user==="Teacher"){
            const url="http://localhost:8000/teacher/create";
            axios.post(url, qs.stringify(requestBody), config)
            .then((result) => {
                setLogInContainer(true);
                alert("succesfully signed up please log in");
            })
            .catch((err) => {
                console.log("error in fetch");
                alert("error in sign up plz check email id");
            })
            return;
        }
        if(props.user==="Student"){
            const url="http://localhost:8000/student/create";
            axios.post(url, qs.stringify(requestBody), config)
            .then((result) => {
                setLogInContainer(true);
                alert("succesfully signed up please log in")
            })
            .catch((err) => {
                alert("error in sign up plz check email id");
            })
            return;
        }
    }
    return(
        <div>
            {userData===undefined?<div>
                <div style={styles.back} className="back"onClick={props.backBtn}>
                    X
                </div>
                <div style={styles.container}>
                    <h2 style={styles.user}>{props.user}</h2>
                    <div className="chose-login-signup-container">
                        <div onClick={displayLogInForm}>Log In</div>
                        <div onClick={displaySignUpForm}>Sign Up</div>
                    </div>
                {
                    logInContainer?
                    <div className="form-container">
                        <form onSubmit={login}>
                            <input type="email" placeholder="Enter email" name="email" required />
                            <input type="password" placeholder="Enter password" name="password" required />
                            <button type="submit">Log In</button>
                        </form>
                    </div>
                    :
                    <div className="form-container">
                        <form onSubmit={signUp}>
                            <input type="text" placeholder="Enter Name" name="name" required />
                            <input type="email" placeholder="Enter E-mail" name="email" required />
                            <input type="text" placeholder="Enter Subject" name="subject" required />
                            <input type="password" placeholder="Enter password" name="password" required />
                            <input type="password" placeholder="Re-enter password" name="confirm" required />
                            <button type="submit">Sign Up</button>
                        </form>
                    </div>
                }
                </div>
            </div>
            :<HomePage data={userData} user={props.user} logout={handleLogout}/>}
        </div>
    )
}
const styles={
    // container of log in sign up
    container:{
        margin:"auto",
        marginTop:50,
        width:500,
        border:"1px solid gray",
        backgroundColor:"purple",
        borderRadius:"20px 0px 20px 0px",
    },
    user:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        fontFamily:"sans-serif",
        color:"chocolate"
    },
    back:{
        position:"absolute",
        top:30,
        right:350,
        borderRadius:"100%"
    }
}
export default LogIn;