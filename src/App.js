import NavBar from "./components/NavBar";
import EventsDisplay from "./components/EventsDisplay";
import React,{useState,useEffect} from "react";
import { Routes,Route } from "react-router-dom";
import EventBookForm from "./components/Booking";
import AddEvents from "./components/AddEvent";
import Login from "./components/Login";
import Register from "./components/Register";
import './App.css';
function App() {
  const[events,setEvents]=useState([]);

useEffect(()=>{
      fetch("https://to-tu-server.onrender.com/events")
     .then((response)=>response.json())
     .then((data)=>setEvents(data))
},[])
const[currentForm,setCurrentForm]=useState("Login")
  const toogleForm =(formName) =>{
    setCurrentForm(formName);
  }
const handleRerender=(event)=>{
  setEvents([...events,event])
}
  return (
    <div className="container-fluid" >
     <NavBar/>
     
     <div className="App">
      {
        currentForm=== "Login"? <Login onFormSwitch={toogleForm}/> : <Register onFormSwitch={toogleForm}/>
      }
          </div>
     <Routes>
     <Route path="/Login"element={<Login/>}/>
     <Route path="/Register"element={<Register/>}/>
     <Route path='/events' element={<EventsDisplay events={events}/>}/>
     <Route path='/events/:eventid' element={<EventBookForm events={events}/>}/>
     <Route path='/addevents' element={<AddEvents addevent={handleRerender}/>}/>
     </Routes>
     
    </div>
  );
}

export default App;