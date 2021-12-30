// this module is for the form the user logs in with
import axios from 'axios'
import React from 'react'
import {Component} from 'react'
import people from './database'
let form = document.querySelector('.sign-in-form')


const admin = {name:'admin',
                password:'admin'
}
//  let name = form.querySelector('.student'),
//      val = form.querySelector('.password')


export default class Form extends Component{
    constructor(props){
        super(props)
        this.state = {
            studentName:'',
            studentPassword:'',
            returned:''
            

        }
        this.handleSubmit= this.handleSubmit.bind(this)
        this.comfirmAdmin = this.comfirmAdmin.bind(this)
    }
    comfirmAdmin(e){
        e.preventDefault()
        let name = this.state.studentName
        let password = this.state.studentPassword
      if(name === admin.name && password ===admin.password){
          this.props.setAdminLog()
      }
    //    people.push({student,password})
       

    }
  async handleSubmit(e){
       let {setPeople} = this.props

        e.preventDefault()
       let name = this.state.studentName
       let password = this.state.studentPassword

       try{
           const log = await axios.post(`student/profile/one`)
           this.setState({...this.state,returned:log})

       }
       catch(err){
           console.log(err)
       }

    //    const newPerson = people.filter(person=> name.toLowerCase() == person.student && 
    //         password.toLowerCase() == person.password
            
    //    )
    //    if (newPerson){
    //       setPeople(newPerson)
    //    }
    //    else{
    //        setPeople('')
    //    }
        // this.setState({studentName:'',studentPassword:''})

    }

    admin(){
        this.setState({admin:!this.state.admin})
    }
    handleChange(e){
        const name = e.target.name
        const value = e.target.value
        this.setState({...this.state,[name]:value})
    }

    render(){
        const {admin} = this.state
        return( <form action = '/register' method= 'post'
        onSubmit={(admin)?(e)=>this.comfirmAdmin(e)
        :
        (e)=>this.handleSubmit(e)} className='sign-in-form'>
            <div className='form-div'>
            <label htmlFor='student'>Student:</label>
            <input 
            className = 'student'
            id='student' type='text' name='studentName' value={this.state.studentName} onChange={this.handleChange.bind(this)}/>
            </div>
            
            <div className='form-div'>
            <label htmlFor='password'>PassWord:  </label>
            <input 
            className='password'
            id='password' type='password'name='studentPassword' value={this.state.studentPassword} onChange={this.handleChange.bind(this)}/>
            </div>
           
            {(admin)?
            <button type='submit' 
            onSubmit={(e)=>this.comfirmAdmin(e)}>Admin</button>
            :<button type='submit' onSubmit={(e)=>this.handleSubmit(e)}>SignIn</button>}
            <a href="#"
            style={{background:'limegreen',
            marginLeft:'1rem',
            padding:'3px 5px'}}
            onClick={this.admin.bind(this)}>></a>
            <div className= 'errorDisplay' style={{color:'red'}}></div>
            {this.state.returned && <h1>{this.state.returned}</h1>}
        </form>)
    }
}

