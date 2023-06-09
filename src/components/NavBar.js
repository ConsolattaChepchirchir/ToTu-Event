import {  NavLink as Link } from "react-router-dom";

const NavBar = ()=> {
    

    return(
        
                <div className=" p-4" id="nav">
      <h1 className="text-light text-center">ToTu Event</h1>
      <div className="d-flex justify-content-center mx-5">
      <Link className="btn btn-outline-light text-black" to="/">Login</Link>
        <Link className="btn btn-outline-light text-black" to="/events">Events</Link>
        <Link className="btn btn-outline-light text-black" to="/addevents">Add Events</Link>
      </div>
    </div>
                
                
            
      
    )
}
export default NavBar;