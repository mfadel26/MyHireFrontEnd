import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
const axios = require('axios');
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
class Profile extends Component {
    
    render() {   
        return(
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-4"><img src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Bearded_Man-17-512.png" style={{width : 200, height : 200}}/></div>
                    <div className="col-lg-8">
                        <form>
                            <div className="form-group row">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                    {this.props.name}
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Date of Birth</label>
                                <div className="col-sm-10">
                                    {this.props.date_of_birth}
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Gender</label>
                                <div className="col-sm-10">
                                    {this.props.gender}
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    {this.props.email}
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Phone Number</label>
                                <div className="col-sm-10">
                                    {this.props.phone_number}
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Location</label>
                                <div className="col-sm-10">
                                    {this.props.location}
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Skill</label>
                                <div className="col-sm-10">
                                    {this.props.skill}
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">showcase</label>
                                <div className="col-sm-10">
                                    {this.props.showcase}
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">description</label>
                                <div className="col-sm-10">  
                                    {this.props.description}
                                </div>
                            </div>
                            <div className="form-group row">
                            
                        </div>
                    </form>
                    <Link to={'/'}>
                            <p style={{padding:'10px'}}>Back</p>
                    </Link>
                </div>
            </div>
            </div>
        )
    }
}

export default Profile
