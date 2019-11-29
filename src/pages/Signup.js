import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'
const axios = require('axios');
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            category: '0',
            isChange: '0'
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
        this.sendLogin()
        event.preventDefault();
    }

    async sendLogin() {
        try{
          const response = await axios({
            method: 'post',
            url: 'http://localhost:3000/myhire/regis',
            data: {
              username: this.state.username,
              password: this.state.password,
              category: this.state.category
            }
          });
          axios.defaults.headers.common['Authorization'] = response.data.result.token;
          localStorage.setItem("Authorization", response.data.result.token);
            console.log(response.data.result.token);
            this.setState({
                isChange: '1'
            })
          }catch(error) {
            console.log(error);
            this.setState({
                isChange: '2'
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
                {(this.state.isChange=='2')&&<div className="alert alert-danger" role="alert">the username </div>}
                    <div className="card-body">
                    <h5 className="card-title">Sign Up</h5>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Username:</label>
                            <input 
                                name='username'
                                type="text" 
                                className="form-control" 
                                placeholder="Enter Username" 
                                value={this.state.username}
                                onChange={this.handleChange} 
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input 
                                name='password'
                                type="password" 
                                className="form-control" 
                                placeholder="Password" 
                                value={this.state.password}
                                onChange={this.handleChange} 
                            />
                        </div>
                        <div className="form-group">
                            <label>Category</label>
                            <select 
                                className="form-control"
                                name='category'
                                type='text'
                                value={this.state.category}
                                onChange={this.handleChange} 
                            >
                                <option value='0'>Engineer</option>
                                <option value='1'>Company</option>
                            </select>
                        </div>
                        
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    {(this.state.isChange=='1')&&<Redirect push to='/form/1'></Redirect>}
                    </div>
                </div>
            </div>
        </div>
        </div>
        )
    }
}

export default SignUp
