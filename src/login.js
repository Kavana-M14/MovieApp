import react from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
const Login=()=>{
    const navigate = useNavigate();
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const loginUser = (e) =>{
        e.preventDefault();
        const data = {
            email: email,
            password: password
        };
        fetch('http://localhost:8000/user/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => {
            if(response.ok)
                return response.json();
            else
                alert('Login failed');
        }).then(data => {
            if(data.message !== 'Success'){
                alert('Inavlid credentials');
                return;
            }
            console.log('Login successful:',data);
            localStorage.setItem('token', data.token);
            localStorage.setItem('firstname', data.data);
            //navigate to the home page or dashboard
            navigate('/');///redirect to home page
        }).catch(error => {
            console.error('Error:', error);
            alert('An error occured while logging in');
        });
        return
    }
    return(
        <div className="container">
            <h1>Login</h1>
            <hr/>
            <form>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email"  onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Enter email"></input>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="Password" onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Password"></input>
                </div>
                <button type="submit" onClick={loginUser} className="btn btn-primary">Login</button>    
            </form>
        </div>
    )
}
export default Login;