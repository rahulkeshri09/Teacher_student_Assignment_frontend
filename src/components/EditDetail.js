function EditDetail(props){
    return(
        <div>
            <div style={styles.back} className="back" onClick={props.close}>
                x
            </div>
            <form className="edit-detail-container" onSubmit={props.updateUser}>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" placeholder={props.data.name} />
                </div>
                <div>
                    <label>Old Password</label>
                    <input type="password" name="password" placeholder="ex:- 55jhv"/>
                </div>
                <div>
                    <label>New Password</label>
                    <input type="password" name="newPassword" placeholder="ex:- 55jhv"/>
                </div>
                    <button type="submit">Submit</button>
            </form>
        </div>
    )
}
const styles={
    back:{
        position:"absolute",
        top:150,
        right:30,
    }
}
export default EditDetail;