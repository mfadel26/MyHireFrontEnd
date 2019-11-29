
import React from 'react'
import Profile from '../pages/Profile'
const axios = require('axios');
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
class ReadMe extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          person: {}
        }
    }

    async getall() {
        try{
          const persons = await axios.get('http://localhost:3000/myhire/by')
          console.log(persons);
          
          this.setState({ person: persons });
        }catch(error) {
            console.log(error);
          }
    }

    render(){
        return(
            <Profile
                name = {this.state.person.name}
            />
        )
    }
}

export default ReadMe;
