import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
const axios = require('axios');
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            isvalid: '0'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendLogin = this.sendLogin.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value =  target.value;
        const name = target.name;

        this.setState({
        [name]: value
        });
    }
    
    handleSubmit(event) {
        console.log('submit!');
        this.sendLogin();
        event.preventDefault();

    }

    async sendLogin() {
        try{
          const response = await axios({
            method: 'post',
            url: 'http://localhost:3000/myhire/login',
            data: {
              username: this.state.username,
              password: this.state.password
            }
          });
          axios.defaults.headers.common['Authorization'] = response.data.result.token;
          localStorage.setItem("Authorization", response.data.result.token);
          localStorage.setItem("Login", '1');
          this.setState({
            isvalid: '2'
          })
          
          
          }catch(error) {
            console.log(error);
            this.setState({
              isvalid: '1'
            })
          }
      }

    render() {   
        return(
            <div className='container mt-5'>
            <div className='row'>
                <div className='col-sm-4'></div>
                <div className='col-sm-4'>
                    <div className="card" style={{width: '480px', height: '480px'}}>
                        <div className="card-body">
                        <h5 className="card-title">Login</h5>
                        {(this.state.isvalid === '1')?<div className="alert alert-danger" role="alert">the username or password invalid</div>:null}
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Username:</label>
                                <input 
                                    name="username"
                                    type="text" 
                                    className="form-control"  
                                    placeholder="Enter Username"
                                    value={this.state.username}
                                    onChange={this.handleChange} 
                                />
                            </div>
                                <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input 
                                    name="password"
                                    type="password" 
                                    className="form-control" 
                                    placeholder="Password" 
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        <Link to={'/'}><p style={{padding:'10px'}}>Home</p></Link>
                        {(this.state.isvalid==='2')&&<Redirect push to='/'></Redirect> }
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Login
