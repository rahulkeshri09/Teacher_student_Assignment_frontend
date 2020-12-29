import EditDetail from './EditDetail';
import {useState} from 'react';
function Profile(props) {
    const [editContainer,setEditContainer]=useState(false);
    function openEditContainer() {
        setEditContainer(true);
    }
    function closeEditContainer() {
        setEditContainer(false);
    }
    return(
        <div className="profile-container">
            <div className="user-profile-heading">
                    <h1>{props.user}</h1>
                    <h3>Profile !!</h3>
            </div>
            {!editContainer?
            <div className="user-detail-container">
                <div>
                    <span>NAME :  <span style={{color:"gray"}}>{props.data.name}</span></span>
                    <span></span>
                </div>
                <div>
                    <span>E-MAIL :  <span style={{color:"gray"}}>{props.data.email}</span></span>
                    <span></span>
                </div>
                <div>
                    <span>SUBJECT :  <span style={{color:"gray"}}>{props.data.subject}</span></span>
                    <span></span>
                </div>
                <div className="edit-user-details-btn"onClick={openEditContainer}>
                    Edit
                </div>
            </div>
            :
                <EditDetail close={closeEditContainer} data={props.data} updateUser={props.updateUser}/>
            
            }
            <div className="logout-btn" onClick={props.logout}>Logout</div>
        </div>
    )
}
export default Profile;