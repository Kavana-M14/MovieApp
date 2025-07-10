import { useContext } from "react";
import locationContext from "./locationcontext";
function MyHome(){
    const{location, updateLocation} = useContext(locationContext);
    return(
        <div>
            <h1>My Home</h1>
            <p>List of Homes will be displayed here</p>
            <p>Location: {location}</p>
            <select onChange={(e)=>updateLocation(e.target.value)}>
                <option value='Bangalore'>Bangalore</option>
                <option value='Mumbai'>Mumbai</option>
                <option value='New York'>New York</option>
                <option value='London'>London</option>
                <option value='Dubai'>Dubai</option>
            </select>
            <button onClick={() => updateLocation('New York')}>Change Location</button>
        </div>
    );
}
export default MyHome;