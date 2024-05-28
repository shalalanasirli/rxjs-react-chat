import {NavLink} from "react-router-dom";

function NotFound() {
    return (
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", height:"100vh", gap:"1rem"}}>
            <h2>Something went wrong</h2>
            <NavLink to={"/"}>Return home</NavLink>
        </div>
    );
}

export default NotFound;