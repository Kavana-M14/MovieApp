import Menubar from "./menubar";
import Addmovie from "./addmovie";
import MyHome from './home';
import MyBooking from'./booking';
import MyContact from './contact';
import MyEvent from './events'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link,Route,Routes} from 'react-router-dom';
import LocationContext from './locationcontext';
import { useState } from "react";
import Login from "./login";
//import router from "../../../server/movieserver/routes/movie.route";
function App(){
  const[location, setLocation] = useState('Bangalore');
  const updateLocation = (newLocation) => {
    setLocation(newLocation);
  };
  return( 
    <LocationContext.Provider value={{location, updateLocation}}>
  <div>
      {/* <h1>Welcome to my show</h1>
      <Menubar mytitle='Welcome to book myshow' location='Bangalore'/>
      <Addmovie title='Tickenewsite'/> */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">My Show</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/movies">Movies</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/events">Events</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/bookings">Bookings</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/contact">Contact</Link>
      </li>      
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <Link to="/login" class="btn btn-outline-sucess my-2 my-sm-0">Login</Link>
    </form>
  </div>
  </nav>
      <Routes>
            <Route path='/' element={<MyHome/>}></Route>
            <Route path='/movies' element={<Addmovie title='Tickenewsite'/>}></Route>
            <Route path='/events' element={<MyEvent/>}></Route>
            <Route path='/bookings' element={<MyBooking/>}></Route>
            <Route path='/contact' element={<MyContact/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
      </Routes>
</div>
</LocationContext.Provider>
  );
}
export default App;
