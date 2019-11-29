import React,{Component} from 'react'
import '../css/Card.css'

class Card extends Component{  
    render(){
        return(
                <div className="card" style={{width: '320px', height: '380px'}}>
                  <a href={`/engineer/${this.props.id}`}>
                    <img src={`http://localhost:3000/myhire/file/${this.props.photo}`} alt={this.props.name} style={{width: '100%'}} />
                    <div className="card-body">
                    <div className="text-block" >
                        <h5>
                            <b>{this.props.name}</b>
                        </h5>
                        <h7>
                            <b>{this.props.profesion}</b><br/>
                            <img src="check-circle-solid.svg" alt="check" style={{width: '5%'}}/>
                                {this.props.project} project
                            <img src="star-solid.svg" alt="star" style={{width: '5%'}}/>
                                {this.props.rate}%<br/>
                            <b>Skills:</b><br/>
                            {this.props.skill}
                        </h7>
                    </div>
                    </div>
                    </a>
                </div>
        
        )
      }
}

export default Card;