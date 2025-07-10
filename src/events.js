import { useState,useEffect, useContext } from 'react';
import locationContext from './locationcontext';
const MyEvents=()=>{
    const{Location,updateLocation} = useContext(locationContext);
    const [eventTypes,setEventTypes]=useState(['sports','dance','music'])
    const[eventType, setEventType]=useState('Sports');
    const[eventName, setEventName]=useState('Cricket Match');
    const[eventDesc, setEventDesc]=useState('Test');
    const handleEventTypeChange=()=>{
        setEventType('Conference');
    }
    useEffect(()=>{console.log('triggered useEffect');
    },[]);
    return(
        <div>
            <h1>My Events</h1>
            <hr/>
        <p>Location: {Location}</p>
        <div className='container'>
            <div className='row'>
            <form className='col-md-5' >
            <div className='form-group'>
                Type
                <select className='form-control' onChange={(e)=>setEventType(e.target.value)}>
                 {eventTypes.map((item,index)=>(
                     <option key={index} value={item} >
                         {item}</option>)
                        )}
                </select>
               
            </div>
            <div className='form-group'>
                Name<input  type='text' value={eventName} className='form-control' onChange={(e)=>{setEventName(e.target.value)}}></input>
            </div>
            <div className='form-group'>
                Desc<input  type='text' value={eventDesc} className='form-control' onChange={(e)=>{setEventDesc(e.target.value)}}></input>
            </div>
            <button className='btn btn-primary'>Save</button>
            </form>
            <div className='col-md-7 ' >
                        Type: {eventType} <br/>
                        Name: {eventName} <br/>
                        desc: {eventDesc} <br/>
            </div>
            </div>
        </div>
       
    </div>
    )
}

export default MyEvents;
 





            