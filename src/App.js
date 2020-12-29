import LogIn from './components/LogIn';
import Profile from './components/Profile';
import {useState} from 'react';
function App() {
  //check log in
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const [user,setUser]=useState();
  console.log("user",user);
  const setTheUser=(user)=>(e)=>{
    setUser(user);
  }
  function backBtn() {
    setUser();
  }
  return (
    <div className="App">
      {
       isLoggedIn?
        <div>

        </div>
        :user===undefined?<div style={styles.choseUser}>
          <div style={styles.box} onClick={setTheUser("Teacher")}>
            Teacher
          </div>
          <div style={styles.box} onClick={setTheUser("Student")}>
            Student
          </div>
      </div>
      :<LogIn 
          user={user} 
          backBtn={backBtn} 
        />
      }
    </div>
  );
}
const styles={
  //for container of chosing user
  choseUser:{
    margin:"auto",
    marginTop:200,
    width:400
  },
  // user box
  box:{
    backgroundColor:"purple",
    color:"white",
    fontSize:24,
    fontFamily:"sans-serif",
    fontWeight:"bolder",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    padding:10,
    margin:20,
    cursor:"pointer"

  }
}
export default App;
