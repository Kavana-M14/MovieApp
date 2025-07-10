import { useContext } from "react";
import locationContext from "./locationcontext";
function MyContacts(){
    const{ location, updatelocation} = useContext(locationContext);
    return(
        <div>
            <h1>My Contacts</h1>
            <p>List of contacts will be displayed here</p>
            {location}
        </div>
    );
}
export default MyContacts;