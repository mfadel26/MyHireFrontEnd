import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
const axios = require('axios');
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            gender: '',
            date_of_birth:'',
            email:'',
            phone_number:'',
            location:'',
            skill:'',
            showcase:'',
            description:'',
            photo: null,
            isSubmit: '0'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendForm = this.sendForm.bind(this);
        this.editForm = this.editForm.bind(this);
    }

    fileChange = event => {
        console.log(event.target.files[0]); 
        this.setState({
            photo: event.target.files[0]
        });  
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
        [name]: value
        });
    }
    
    handleSubmit(event) {
        console.log('submit!');
        if(this.props.select == '1'){
            console.log('create!');
            this.sendForm();
        } else if(this.props.select == '2'){
            console.log('edit!');
            this.editForm()
        }
        this.setState({
            isSubmit: '1'
        })
        event.preventDefault();
    }

    async editForm() {
        try{
            let formData = new FormData();
            formData.append('name', this.state.name)
            formData.append('photo', this.state.photo, this.state.photo.name);
            
          const response = await axios({
            method: 'put',
            url: 'http://localhost:3000/myhire/edit',
            data: formData
            // data: {
            //     name: this.state.name,
            //     photo: this.state.photo,
            //     gender: this.state.gender,
            //     date_of_birth: this.state.date_of_birth,
            //     email: this.state.email,
            //     phone_number: this.state.phone_number, 
            //     location: this.state.location,
            //     skill: this.state.skill,
            //     showcase: this.state.showcase,
            //     description: this.state.description
            // }
          });
            console.log(response.data.result.token);
        }catch(error) {
            console.log(error);
        }
    }

    async sendForm() {
        try{
            let formData = new FormData();
            formData.append('name', this.state.name)
            formData.append('photo', this.state.photo, this.state.photo.name);
            
          const response = await axios({
            method: 'post',
            url: 'http://localhost:3000/myhire/form',
            data: formData
            // data: {
            //     name: this.state.name,
            //     photo: this.state.photo,
            //     gender: this.state.gender,
            //     date_of_birth: this.state.date_of_birth,
            //     email: this.state.email,
            //     phone_number: this.state.phone_number, 
            //     location: this.state.location,
            //     skill: this.state.skill,
            //     showcase: this.state.showcase,
            //     description: this.state.description
            // }
          });
            console.log(response.data.result.token);
        }catch(error) {
            console.log(error);
        }
    }

    render() {   
        return(
            <div className="container mt-5">
            <div className="row">
                <div className="col-lg-4"><img src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Bearded_Man-17-512.png" style={{width : 200, height : 200}}/></div>
                <div className="col-lg-8">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                                <input 
                                    type="text" 
                                    name="name"    
                                    className="form-control" 
                                    placeholder="ex: John" 
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Date of Birth</label>
                            <div className="col-sm-10">
                                <input 
                                    type="date" 
                                    name='date_of_birth'
                                    className="form-control"
                                    value={this.state.date_of_birth}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Gender</label>
                            <div className="col-sm-10">
                                <select 
                                    name='gender'
                                    className="form-control" 
                                    type='text'
                                    value={this.state.gender}
                                    onChange={this.handleChange}
                                >
                                    <option value='0'>Male</option>
                                    <option value='1'>Female</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input 
                                    type="email" 
                                    name='email'
                                    className="form-control" 
                                    placeholder="ex: John@yahoo.com" 
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Phone Number</label>
                            <div className="col-sm-10">
                                <input 
                                    type="text" 
                                    name='phone_number'
                                    className="form-control" 
                                    placeholder="ex: 0812XXXXX"
                                    value={this.state.phone_number}
                                    onChange={this.handleChange} 
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Location</label>
                            <div className="col-sm-10">
                                <input 
                                    name="location"
                                    type="text" 
                                    className="form-control" 
                                    placeholder="ex: Bogor" 
                                    value={this.state.location}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Skill</label>
                            <div className="col-sm-10">
                                <input 
                                    name="skill"
                                    type="text" 
                                    className="form-control" 
                                    placeholder="ex: Programming"
                                    value={this.state.skill}
                                    onChange={this.handleChange} 
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">showcase</label>
                            <div className="col-sm-10">
                                <input 
                                    name='showcase'
                                    type="text" 
                                    className="form-control" 
                                    placeholder="ex: Programmer"
                                    value={this.state.showcase}
                                    onChange={this.handleChange} 
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">description</label>
                            <div className="col-sm-10">  
                            <textarea 
                                name='description'
                                type='text'
                                class="form-control" 
                                rows="4"
                                value={this.state.description}
                                onChange={this.handleChange}
                            ></textarea>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Photo</label>
                            <div className="col-sm-10">  
                                <input 
                                    name='photo'
                                    type="file" 
                                    class="form-control-file"
                                    onChange={this.fileChange} 
                                ></input>                 
                                </div>
                        </div>

                        <div className="form-group row">
                            <div className="col-sm-10">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>

                    </form>
                    {(this.state.isSubmit==='1')&&<Redirect push to='/'></Redirect> }
                    <Link to={'/'}>
                            <p style={{padding:'10px'}}>Back</p>
                    </Link>
                </div>
            </div>
            </div>
        )
    }
}

export default Form
