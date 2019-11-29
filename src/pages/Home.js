import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import Card from '../Component/Card'
const axios = require('axios');

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            search: '',
            person:[],
            isLogin:'1'
        }
        this.getall = this.getall.bind(this);
        this.getsearch = this.getsearch.bind(this)
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value =  target.value;
        const name = target.name;
        //this.getsearch();
        this.setState({
        [name]: value
        });
    }

    async getall() {
        try{
          axios.get('http://localhost:3000/engineer/read')
            .then(res => {
              const persons = res.data;
              console.log(persons);
              this.setState({ person: persons });
            })
          }catch(error) {
            console.log(error);
          }
    }

    async getsearch() {
        try{
          axios.get(`http://localhost:3000/myhire/search/?skill=${this.state.search}`)
            .then(res => {
              const persons = res.data;
              console.log(persons);
              this.setState({ person: persons });
            })
          }catch(error) {
            console.log(error);
          }
    }

    componentDidMount(){
        var token = localStorage.getItem('Authorization');
        axios.defaults.headers.common['Authorization'] = token;
        this.getall();
        let login = localStorage.getItem('Login');
        if(login == 0){
            this.setState({
                isLogin: '0'
            });
        }
    }

  
    render() {   
        return(
            <div>
                {(this.state.isLogin==='1')&&<Redirect push to='/'></Redirect> }
                 <nav className="navbar navbar-light bg-light">
                    <form className="form-inline">
                    <div className="input-group">
                        <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">A</span>
                        </div>
                        <input 
                            name="search" 
                            type="text" 
                            className="form-control" 
                            placeholder="Search" 
                            value={this.state.search}
                            onChange={this.handleChange}
                        />
                        <button onClick={this.getsearch} className="btn btn-primary">Search</button>
                        {
                            (this.state.isLogin === '0')&& <Link to={'/Login/'}><p style={{padding:'10px'}}>Log in</p></Link>
                        }
                        {
                            (this.state.isLogin === '0')&& <Link to={'/Signup/'}><p style={{padding:'10px'}}>Sign Up</p></Link>
                        }
                        {
                            (this.state.isLogin === '1')&& <Link to={'/Profile/'}><p style={{padding:'10px'}}>Profile</p></Link>
                        }
                        {
                            (this.state.isLogin === '1')&& <Link to={'/Edit/'}><p style={{padding:'10px'}}>Edit</p></Link>
                        }
                        {
                            (this.state.isLogin === '1')&& <Link to={'/logout/'}><p style={{padding:'10px'}}>Log out</p></Link>
                        }
                        
                    </div>
                    </form>
                </nav>
                <div className='container'>
                    <div className='row'>
                        {
                            this.state.person.map((person) => {
                                return(
                                    <div className='sm-8'>
                                        <Card
                                            name={person.name}
                                            photo={person.photo}
                                            skill={person.skill}
                                            profesion={person.profesion}
                                            project={person.project}
                                            rate={person.rate}
                                            id={person.id}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
