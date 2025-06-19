const User=(props)=>{
    const name=props.name;
    return (
        <div className="user-card">
            <h2>Name:{name}</h2>
            <h2>Location:Shirdi</h2>
            <h2>Contact:9238432</h2>
        </div>
    );
};
export default User;